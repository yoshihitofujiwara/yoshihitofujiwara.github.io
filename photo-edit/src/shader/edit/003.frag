precision mediump float;

#pragma glslify: import('../common/define.glsl')

//==========================================================================
// @params
//==========================================================================
varying vec2 vUv;

uniform sampler2D texture;
uniform sampler2D mask;
uniform float uTime;
uniform vec2 resolution;

// effect
uniform vec4 uColor;
uniform bool uIsMask;




//==========================================================================
// @main
//==========================================================================
void main() {
	vec4 color = texture2D( texture, vUv );
	vec4 maskColor = texture2D( mask, vUv );

	// if(uIsMask){
		// if(maskColor.r == 1.0 && maskColor.g == 1.0 && maskColor.b == 1.0){
		// } else {
		// 	color = maskColor;
		// }
	// }

	if(uIsMask){
		// vec4 color2 = vec4(vec3(1.0) - color, 1.0);
		gl_FragColor = color * maskColor;
	} else {

		gl_FragColor = color ;
	}
	// gl_FragColor = maskColor;

}

