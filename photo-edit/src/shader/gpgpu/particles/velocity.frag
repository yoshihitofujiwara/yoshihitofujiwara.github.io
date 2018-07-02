precision mediump float;

/**
 * 移動計算用
 */
#define DELTA (1.0 / 60.0)

uniform bool mouseFlag;
uniform vec2 mouse;
uniform float velocity;
const float SPEED = 0.07;

/**
 * main
 */
void main() {
  vec2 p = gl_FragCoord.xy / resolution;  // テクスチャ座標を計算
  vec4 t = texture2D(texturePosition, p); // 前フレームの座標読み出し

  vec2 v = normalize(mouse - t.xy) * 0.2; // カーソル位置へのベクトル
  vec2 w = normalize(v + t.zw);           // ハーフベクトルで向きを補正

  // テクスチャから読みだした値（vec4）は……
  // XY が頂点の座標を、ZW で頂点の進行方向ベクトルを表している
  vec4 destColor = vec4(w * SPEED * velocity, w);

  // ドラッグされてない場合は前回の進行方向を維持する
  // if(!mouseFlag){destColor.zw = t.zw;}

  gl_FragColor = destColor;
}
