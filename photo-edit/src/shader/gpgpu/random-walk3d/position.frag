precision mediump float;

/**
 * 位置情報計算処理
 */

#define DELTA (1.0 / 60.0)


/**
 * main
 */
void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec3 selfPosition = texture2D(texturePosition, uv).xyz;
  vec3 selfVelocity = texture2D(textureVelocity, uv).xyz;

  // 加速度の追加
  selfPosition += selfVelocity * DELTA;

  // 位置情報のテクスチャの更新
  gl_FragColor = vec4(selfPosition, 1.0);
}
