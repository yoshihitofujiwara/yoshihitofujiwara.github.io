precision mediump float;

varying vec2 vUv;
uniform sampler2D u_videoTexture;
uniform vec2 u_videoScale;

#pragma glslify: import('../../common/define.glsl')
#pragma glslify: import('../../filters/grayscale.frag')

/**
 * main
 */
void main() {
	vec2 uv = vUv;
	uv -= vec2(0.5);
	uv /= u_videoScale;
	uv += vec2(0.5);
  // gl_FragColor = texture2D(u_videoTexture, uv);


	vec4 color = texture2D(u_videoTexture, uv);
	vec3 rgb = grayscale(color.rgb);
  gl_FragColor = vec4(rgb, 1.0);
  // gl_FragColor = vec4(0.5, 0.5, 0.5, 1.);
}
