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
uniform bool uSlice;
uniform float uSlices;
uniform float uOffset;

uniform float uAngle;
// uniform bool uRandom;
uniform float uUpdateSpeed;



//==========================================================================
// @import
//==========================================================================
#pragma glslify: import('../utils/rotate2d.glsl')

vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
}

//==========================================================================
// @main
//==========================================================================
void main() {
  vec2 uv = vUv;

	vec2 px = 1.0 / resolution;
	float count = uTime * uUpdateSpeed;
	float angle = radians(uAngle);


	if(uSlice){
		float amount = 1.0;
		if(uUpdateSpeed != 0.0){
			amount = sin(count);
		}

		// X軸だけずらす
    // float dir = step(0.0, sin(uv.y * PI * uSlices)) * 2.0 - 1.0;
		// uv = vec2(vUv.x + px.x * (uOffset * amount * .5) * dir, vUv.y);

		// Y軸だけずらす
    // float dir = step(0.0, cos(uv.x * PI * uSlices)) * 2.0 - 1.0;
		// uv = vec2(vUv.x, vUv.y + px.y * (uOffset * amount * .5) * dir);

		// 回転でずらす
	  uv = rotate(uv - 0.5,  angle);
    float y = uv.y;
    // float dir = step(0.5, fract(y * uSlices * 0.5));
    float dir = step(0.5, fract(y * (uSlices - 1.0) * 0.5)) * 2.0 - 1.0;
		vec2 rotate = vec2(cos(angle), sin(angle));
		uv = vec2(
			vUv.x + (rotate.x * uOffset * amount * 0.5 * dir * px.x),
			vUv.y + (rotate.y * uOffset * amount * 0.5 * dir * px.y)
		);
		// gl_FragColor = vec4(dir);
	}

	gl_FragColor = texture2D(texture, uv);
}
