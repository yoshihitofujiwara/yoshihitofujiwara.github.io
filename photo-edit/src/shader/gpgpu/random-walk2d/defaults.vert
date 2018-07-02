#define DELTA (1.0 / 60.0)

uniform sampler2D u_texturePosition;
uniform sampler2D u_textureVelocity;
uniform float u_pintsize;
uniform float u_count;

varying vec4 v_color;


vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}


/**
 * main
 */
void main() {
  v_color = vec4(
  	hsv2rgb(
  		vec3(abs(sin((position.x*position.y+u_count*DELTA) /2.0)), .4, .7)
  	),
  1.0);

  gl_PointSize = u_pintsize;
  vec4 posTemp = texture2D(u_texturePosition, uv);
  gl_Position = vec4(posTemp.xy, 0.0, 1.0);
}
