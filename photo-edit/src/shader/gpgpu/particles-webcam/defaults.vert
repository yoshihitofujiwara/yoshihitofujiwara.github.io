#define DELTA (1.0 / 60.0)

uniform sampler2D u_position;
// uniform sampler2D u_velocity;
varying vec2 vUv;

uniform float u_pintsize;
// uniform float u_count;

/**
 * main
 */
void main() {
	vUv = uv;
  gl_PointSize = u_pintsize+1.1;

  vec4 position = texture2D(u_position, uv);
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
