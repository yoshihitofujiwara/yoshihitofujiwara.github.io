precision mediump float;

#pragma glslify: import('../common/define.glsl')

//==========================================================================
// @params
//==========================================================================
varying vec2 vUv;

uniform sampler2D u_texture;
uniform float u_time;
uniform vec2 u_resolution;
uniform float u_distortion;
uniform float u_amount;
uniform float u_speed;
uniform float u_roll;


//==========================================================================
// @import
//==========================================================================

#pragma glslify: snoise2 = require(glsl-noise/simplex/2d) // float snoise(vec2 v)



//==========================================================================
// @main
//==========================================================================
void main() {
  vec2 uv = vUv;

	float y = uv.y + (u_time * u_speed);
	float x = snoise2(vec2(y, 0.0)) * u_distortion * 0.01;
	x += snoise2(vec2(y * u_amount, 0.0)) * u_roll;

	gl_FragColor = texture2D(u_texture, vec2(fract(uv.x + x), uv.y));

	// gl_FragColor = vec4(x,x,x,1.);

	// gl_FragColor = vec4(vec3(n*u_distortion), 1.0);
	// gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
	// gl_FragColor = texture2D(u_texture, uv);
}
