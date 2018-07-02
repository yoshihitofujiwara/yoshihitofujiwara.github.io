precision mediump float;

//==========================================================================
// @params
//==========================================================================
#pragma glslify: import('../common/define.glsl')

varying vec2 vUv;

uniform vec2 resolution;
uniform float time;
uniform bool uColor;
uniform float uScale;


/*==========================================================================
	@import
==========================================================================*/

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d) // float snoise(vec3 v)


//==========================================================================
// @main
//==========================================================================
void main() {
	vec3 color1 = vec3(234.0/255.0,242.0/255.0,227.0/255.0);
	vec3 color2 = vec3(97.0/255.0,232.0/255.0,225.0/255.0);
	vec3 color3 = vec3(242.0/255.0,87.0/255.0,87.0/255.0);
	vec3 color4 = vec3(242.0/255.0,232.0/255.0,99.0/255.0);
	vec3 color5 = vec3(242.0/255.0,205.0/255.0,96.0/255.0);
	vec3 color6 = vec3(255.0/255.0,255.0/255.0,255.0/255.0);

	vec2 st = gl_FragCoord.xy / resolution.xy;
	st.xy -= 0.5;
	st.x *= resolution.x/resolution.y;

	vec3 color = vec3(0.0);
	st.xy *= uScale;
	float r = snoise3(vec3(st.x, st.y, time * 0.1));


	if(r >= -1.0 && r < -0.6){
		color = color1;
	} else if(r >= -0.6 && r < -0.2){
	 color = color2;
	} else if(r >= -0.2 && r < 0.2){
		color = color3;
	} else if(r >= 0.2 && r < 0.6){
		color = color4;
	} else {
		color = color5;
	}

	if(uColor){
		gl_FragColor = vec4(color, 1.0);

	} else {
		r = (r + 1.0) * 0.5;
		gl_FragColor = vec4(vec3(r), 1.0);
	}
}
