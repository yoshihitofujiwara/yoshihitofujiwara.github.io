precision mediump float;

//==========================================================================
// @params
//==========================================================================
#pragma glslify: import('../common/define.glsl')

varying vec2 vUv;

uniform vec2 resolution;
uniform float uTime;
// uniform float uUpdateSpeed;

uniform int uNoiseType;

uniform float uScaleX;
uniform float uScaleY;
uniform float uScaleZ;
uniform float uScaleW;




/*==========================================================================
	@import
==========================================================================*/
// ノイズについて
// https://thebookofshaders.com/11/?lan=jp
// Require as many or as little as you need:
// Simplex Noise
#pragma glslify: snoise2 = require(glsl-noise/simplex/2d) // float snoise(vec2 v)
#pragma glslify: snoise3 = require(glsl-noise/simplex/3d) // float snoise(vec3 v)
#pragma glslify: snoise4 = require(glsl-noise/simplex/4d) // float snoise(vec4 v)

// Classic Perlin Noise
#pragma glslify: cnoise2 = require(glsl-noise/classic/2d) // float cnoise(vec2 P)
#pragma glslify: cnoise3 = require(glsl-noise/classic/3d) // float cnoise(vec3 P)
#pragma glslify: cnoise4 = require(glsl-noise/classic/4d) // float cnoise(vec4 P)

// Perlin Noise
#pragma glslify: pnoise2 = require(glsl-noise/periodic/2d) // float pnoise(vec2 P, vec2 rep)
#pragma glslify: pnoise3 = require(glsl-noise/periodic/3d) // float pnoise(vec3 P, vec3 rep)
#pragma glslify: pnoise4 = require(glsl-noise/periodic/4d) // float pnoise(vec4 P, vec4 rep)



//==========================================================================
// @main
//==========================================================================
void main() {
  vec2 uv = vUv;
	vec2 st = gl_FragCoord.xy - resolution.xy * 0.5;
	vec4 scale = vec4(uScaleX, uScaleY, uScaleZ, uScaleW);
	float color = 0.0;

	// float pattern;
	// vec3 color;

	// vec3 _3d = (vec3((st.xy) * scale.xy, uTime * uScaleW) + 1.0) * 0.5;
	vec3 _3d = (vec3((st.xy) * scale.xy, uTime * uScaleW));
	// color =	snoise3( _3d );
	color =	cnoise3( _3d );

	// たまたまできたnoise
	// color =	pnoise3( _3d, _3d );

	gl_FragColor = vec4(vec3(color, 1.0, 1.0), 1.0);
}
