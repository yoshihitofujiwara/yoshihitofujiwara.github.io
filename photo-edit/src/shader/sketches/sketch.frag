precision mediump float;

#pragma glslify: import('../common/define.glsl')

//==========================================================================
// params
//==========================================================================
varying vec2 vUv;

uniform sampler2D texture;
// uniform float uTime;
uniform vec2 resolution;

// effect
uniform float uGrayscale;
uniform float uNega;
uniform float uSepia;
uniform float uPosterize;
uniform float uTwoTone;
uniform float uSobel;
uniform float uLaplacian;
uniform float uBlur;

// transform
uniform float uRotate;
uniform float uSplitScreen;
uniform float uKareido;
uniform float uMosaic;


//==========================================================================
// method
//==========================================================================
// filters
#pragma glslify: import('../filters/alphaBlend.frag')
#pragma glslify: import('../filters/grayscale.frag')
#pragma glslify: import('../filters/nega.frag')
#pragma glslify: import('../filters/sepia.frag')
#pragma glslify: import('../filters/posterize.frag')
#pragma glslify: import('../filters/twoTone.frag')
#pragma glslify: import('../filters/sobel.frag')
#pragma glslify: import('../filters/laplacian.frag')
#pragma glslify: import('../filters/blur.frag')
#pragma glslify: import('../filters/division.frag')
#pragma glslify: import('../filters/kareido.frag')
#pragma glslify: import('../filters/mosaic.frag')

// transfrom
#pragma glslify: import('../transform/rotate2d.glsl')


//==========================================================================
// main
//==========================================================================
void main() {
  vec2 uv = vec2(vUv);

  // カレイドスコープ
  uv = kareido(uv, uKareido, 0.0);

  // モザイク
  if(uMosaic != 0.0){
    uv = mosaic(uv, 500.0/uMosaic, resolution);
  }

	// 画面分割
	uv = division(uv, uSplitScreen);

	// 2D回転
	uv = rotate2d(uv, uRotate);

	// 基本色
  vec4 baseColor = texture2D(texture, uv);
  vec3 blendColor = texture2D(texture, uv).rgb;
  // alphaBlend
  // baseColor = addColor(baseColor, baseColor);
  // baseColor = subColor(baseColor, baseColor);
  // baseColor = multColor(baseColor, baseColor);
  // baseColor = divColor(baseColor, baseColor);
  // baseColor = absColor(baseColor, baseColor);
  // baseColor = compMinColor(baseColor, baseColor);
  // baseColor = compMaxColor(baseColor, baseColor);
  // baseColor = burningColor(baseColor, baseColor);
  // baseColor = screenColor(baseColor, baseColor);
  // baseColor = overlayColor(baseColor, baseColor);

  // blur
  vec4 blurColor = blur(uBlur, uv, texture, resolution);
  blendColor = vec3(mix(blendColor, blurColor.rgb, 1.0));

  // エッジ検出
  vec4 sobelColor = sobel(uv, texture, resolution);
  blendColor = vec3(mix(blendColor, sobelColor.rgb, uSobel));

  // エッジ検出
  vec4 laplacianColor = laplacian(uv, texture, resolution);
  blendColor = vec3(mix(blendColor, laplacianColor.rgb, uLaplacian));

  // セピア
  vec3 sepiaColor = sepia(blendColor.rgb);
  blendColor = vec3(mix(blendColor, sepiaColor.rgb, uSepia));

  // ポスタライズ
  vec3 posterizeColor = posterize(blendColor.rgb, uPosterize);
  blendColor = vec3(mix(blendColor, posterizeColor.rgb, 1.0));

  // 2階調化
  vec3 twoToneColor = twoTone(blendColor.rgb, uTwoTone);
  blendColor = vec3(mix(blendColor, twoToneColor.rgb, 1.0));

  // グレイスケール
  vec3 grayscaleColor = grayscale(blendColor.rgb);
  blendColor = vec3(mix(blendColor.rgb, grayscaleColor, uGrayscale));

  // ネガ
  vec3 negaColor = nega(blendColor.rgb);
  blendColor = vec3(mix(blendColor, negaColor.rgb, uNega));


  // vec3 color = blendColor;
  gl_FragColor = vec4(blendColor, 1.0);
}
