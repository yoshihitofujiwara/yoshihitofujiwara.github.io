precision mediump float;

/**
 * 2. 位置情報計算処理
 */
#define DELTA (1.0 / 60.0)

/**
 * main
 */
void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 selfPosition = texture2D(texturePosition, uv);
  vec4 selfVelocity = texture2D(textureVelocity, uv);

  // 移動する方向に速度を掛け合わせた数値を現在地に加える。
  selfPosition.xy += selfVelocity.xy;
  selfPosition.zw = selfVelocity.zw;

  gl_FragColor = selfPosition;
}
