precision mediump float;

/**
 * 2. 位置情報計算処理
 */
#define DELTA (1.0 / 60.0)

uniform float u_time;


#pragma glslify: snoise2 = require(glsl-noise/simplex/2d) // float snoise(vec2 v)

/**
 * main
 */
void main() {
  vec2 st = gl_FragCoord.xy / resolution.xy;
  vec4 position = texture2D(texturePosition, st);

	// float vX = snoise2(vec2(st.x * cos(u_time), st.y)) * 0.01;
	// float vY = snoise2(vec2(st.x, st.y * sin(u_time))) * 0.01;
  // position.x = position.z + vX;
  // position.y = position.w + vY;

	// 加速度
  vec4 velocity = texture2D(textureVelocity, st);
	position.x += velocity.x;
	position.y += velocity.y;

  // 移動する方向に速度を掛け合わせた数値を現在地に加える。
  // position.xy += velocity.xy;
  // position.zw = position.xy;

  gl_FragColor = position;
}
