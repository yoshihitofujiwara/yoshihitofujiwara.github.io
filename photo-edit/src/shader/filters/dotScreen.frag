precision mediump float;

#pragma glslify: import('../common/define.glsl')

//==========================================================================
// @params
//==========================================================================
varying vec2 vUv;

uniform sampler2D texture;
uniform float uTime;
uniform vec2 resolution;

// effect
uniform bool uDotScreen;
uniform bool uColor;
uniform float angle;
uniform float scale;



//==========================================================================
// @main
//==========================================================================
float pattern() {
	float s = sin( angle ), c = cos( angle );
	vec2 tex = vUv * resolution - vec2(0.5);
	vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;
	return ( sin( point.x ) * sin( point.y ) ) * 4.0;
}


void main() {
	vec4 color = texture2D( texture, vUv );

	if(uDotScreen){
		float average = ( color.r + color.g + color.b ) / 3.0;
		vec4 dotColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );

		if(uColor){


			gl_FragColor = color * dotColor;
		} else {
			gl_FragColor = dotColor;
		}

	} else {
		gl_FragColor = color;
	}


}



// void main() {
//   vec2 uv = vUv;

// 	if(uRgbShift){
// 		vec2 px = 1.0 / resolution;
// 		float count = uTime * uUpdateSpeed;
// 		float angle = uAngle * DEG_TO_RAD;


// 		vec2 offsetR;
// 		vec2 offsetG;
// 		vec2 offsetB;


// 		// if(uRandom){
// 		// } else {

// 			if(uGap == 1){
// 				float addAngle = TWO_PI / 3.0;
// 				float angleR = angle + count - addAngle;
// 				float angleG = angle + count;
// 				float angleB = angle + count + addAngle;

// 				offsetR = (px * uAmount) * vec2( cos(angleR), sin(angleR));
// 				offsetG = (px * uAmount) * vec2( cos(angleG), sin(angleG));
// 				offsetB = (px * uAmount) * vec2( cos(angleB), sin(angleB));

// 			} else {
// 				vec2 offset = (px * uAmount) * vec2( cos(angle + count), sin(angle + count));
// 				offsetR = offset;
// 				offsetG = vec2(.0);
// 				offsetB = -offset;
// 			}

// 		// }

// 		vec2 st = gl_FragCoord.xy - resolution.xy * 0.5;

// 		// color =	snoise3( _3d );
// 		// float amount =	snoise2( st*0.01 );
// 		uv = uv + snoise3( vec3(st * 0.01, uTime) ) * 0.007;
// 		vec4 cr = texture2D(texture, uv + offsetR);
// 		vec4 cg = texture2D(texture, uv + offsetG);
// 		vec4 cb = texture2D(texture, uv + offsetB);

// 		gl_FragColor = vec4(cr.r, cg.g, cb.b, 1.0);

// 	} else {
// 		gl_FragColor = texture2D(texture, vUv);
// 	}
// }
