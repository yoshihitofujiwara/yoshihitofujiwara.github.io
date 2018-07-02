precision mediump float;

#pragma glslify: import('../common/define.glsl')

#pragma glslify: import('../filters/sobel.frag')
#pragma glslify: import('../filters/grayscale.frag')


//==========================================================================
// params
//==========================================================================
varying vec2 vUv;

uniform sampler2D texture;
uniform sampler2D videoTexture;
uniform vec2 resolution;
uniform float time;
uniform float amount;


//==========================================================================
// main
//==========================================================================
void main() {
	vec2 uv = vUv;

	// 係数
	float effectFactor = -0.15;


	vec4 lineColor = sobel(uv, videoTexture, resolution);
	vec3 grayscaleColor = grayscale(lineColor.rgb);
	float val = grayscaleColor.r;


	vec2 distortedPosition = vec2(uv.x + amount * (val*effectFactor), uv.y);
	gl_FragColor = texture2D(texture, distortedPosition);
}
