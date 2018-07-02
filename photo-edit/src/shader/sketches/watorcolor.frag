precision mediump float;

#pragma glslify: import('../common/define.glsl')


//==========================================================================
// params
//==========================================================================
varying vec2 vUv;

uniform sampler2D texture;
uniform vec2 resolution;
uniform sampler2D uWaterpaper;
uniform float uWaterColor;

uniform float uTime;


//==========================================================================
// snoise
//==========================================================================
#pragma glslify: snoise2d = require(glsl-noise/simplex/2d)
#pragma glslify: cnoise2d = require(glsl-noise/classic/2d)
#pragma glslify: pnoise2d = require(glsl-noise/periodic/2d)

#pragma glslify: import('../filters/sobel.frag')
#pragma glslify: import('../filters/laplacian.frag')
#pragma glslify: import('../filters/grayscale.frag')
#pragma glslify: import('../filters/nega.frag')
#pragma glslify: import('../filters/blur.frag')
#pragma glslify: import('../filters/alphaBlend.frag')


//==========================================================================
// FIXME: 後で調整
// normalMap: 水彩用法線マップ生成
//==========================================================================
float normalMap(float amount){
  float _n = 300.0;
  vec2 _uv = (0.0 * 0.2) + vUv;
  float noiseColor1 = snoise2d(vec2(_uv.x*resolution.x/_n, _uv.y*resolution.y/_n));
  float noiseColor2 = snoise2d(vec2(_uv.x*resolution.x, _uv.y*resolution.y));
  float noiseMix = mix(noiseColor1, noiseColor2, amount);
  noiseMix = smoothstep(-1.0, 1.0, noiseMix);
  return noiseMix;
  // return snoise2d(vec2(_uv.x*5.0,_uv.y*7.5));
}


float hash(vec2 p)  // replace this by something better
{
    p  = 50.0*fract( p*0.3183099 + vec2(0.71,0.113));
    return -1.0+2.0*fract( p.x*p.y*(p.x+p.y) );
}

float noise( in vec2 p )
{
    vec2 i = floor( p );
    vec2 f = fract( p );

	vec2 u = f*f*(3.0-2.0*f);

    return mix( mix( hash( i + vec2(0.0,0.0) ),
                     hash( i + vec2(1.0,0.0) ), u.x),
                mix( hash( i + vec2(0.0,1.0) ),
                     hash( i + vec2(1.0,1.0) ), u.x), u.y);
}


//==========================================================================
// main
//==========================================================================
void main() {
  vec2 uv = vUv;
  vec2 texel = 1.0 / resolution;
  vec2 st = gl_FragCoord.xy/resolution;

  vec4 originalColor = texture2D(texture, uv);
  vec4 blendColor = vec4(0.);

  // ゆらぎを足す
  // float pNoise = (cnoise2d(vec2(uv.x*12., uv.y*19.)) + 1.) / 2.;
  // vec4 nornalColor = texture2D(texture, uv+(texel*pNoise*12.));

  float pNoise1 = noise(uv);
  float pNoise2 = (cnoise2d(vec2(uv.x*12., uv.y*19.)) + 1.) / 2.;

  float pNoise = mix(pNoise1, pNoise2, 0.5);
  vec4 nornalColor = texture2D(texture, uv+(texel*pNoise));
  // gl_FragColor = nornalColor;

  // float pNoise2 = (cnoise2d(vec2(uv.x*10.*cnoise2d(vec2(uTime/5.)), uv.y*19.*cnoise2d(vec2(uTime/5.)))) + 1.) / 2.;
  // vec4 paper = texture2D(uWaterpaper, uv+(texel*pNoise2*12.));
  vec4 paper = texture2D(uWaterpaper, uv);

  // 滲み：オリジナル + ゆらぎと
  blendColor = mix(originalColor, nornalColor, pNoise);
  // gl_FragColor = blendColor;

  // ブラー
  vec4 blurColor = blur(1.0, uv, texture, resolution);
  // gl_FragColor = blurColor;

  // 滲みと+ぼかし
  blendColor = mix(blendColor, blurColor, .5);
  // gl_FragColor = blendColor;

  // エッジ検出
  vec4 outlineColor = vec4(0.);
  // outlineColor = laplacian(uv, texture, resolution);
  // outlineColor = laplacian(uv+(texel*pNoise*12.), texture, resolution);
  // outlineColor = sobel(uv, texture, resolution);
  outlineColor = sobel(uv+(texel*pNoise*12.), texture, resolution);
  outlineColor = vec4(grayscale(outlineColor.rgb), 1.0);
  outlineColor = vec4(nega(outlineColor.rgb), 1.0);
  if(outlineColor.r > 0.8){
    outlineColor = vec4(1.);
  }
  // gl_FragColor = outlineColor;

  vec4 oColor = overlayColor(blendColor * paper, outlineColor);
  // gl_FragColor = mix(blendColor * paper, oColor, .35);

  // gl_FragColor = oColor;
  outlineColor /= 5.;

  gl_FragColor = mix(originalColor, blendColor * paper + outlineColor, uWaterColor);

}
