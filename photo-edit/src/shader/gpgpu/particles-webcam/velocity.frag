precision mediump float;

/**
 * 移動計算用
 */
#define DELTA (1.0 / 60.0)

uniform bool u_mouseFlag;
uniform vec2 u_mouse;
uniform float u_time;

uniform float velocity;
const float SPEED = 0.07;


#pragma glslify: snoise2 = require(glsl-noise/simplex/2d) // float snoise(vec2 v)


/**
 * main
 */
void main() {
  vec2 st = gl_FragCoord.xy / resolution;
  vec4 position = texture2D(texturePosition, st);

	// vec2 ratio = vec2(st.x / st.y, st.y / st.x);
	// resolution.x / resolution.y;



	float radius = 0.3;
	vec2 to = vec2(0.0);

	float posiDist = distance(u_mouse, position.zw);


	if(posiDist < radius){
		vec2 pos = (u_mouse - position.xy);

		float a = atan(pos.y, pos.x);
		float f = -radius / posiDist;

		to = vec2(cos(a) * f * 0.01, sin(a) * f * 0.01);


		if(distance(u_mouse, position.xy+to) > radius ){
			// vec2 v = position.zw + to;
			// float va = atan(v.y, v.x);
			// to = vec2(cos(va) * radius*0.5, sin(va) * radius*0.5);
			// to = vec2(cos(a) * f * 0.01, sin(a) * f * 0.01);
		}

	} else {
		to = (position.zw - position.xy) * 0.1;
	}


	// float posiDist2 = distance(u_mouse, position.xy);
	// if(posiDist2 > radius-0.00001){
	// 	to = (position.zw - position.xy) * 0.1;
	// }



	gl_FragColor = vec4(to.x, to.y, 0.0, 0.0);
}
