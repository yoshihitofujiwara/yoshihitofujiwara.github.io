precision mediump float;

/**
 * 移動計算処理
 */
#define DELTA (1.0 / 60.0)

uniform float u_txSize; // テクスチャサイズ


/**
 * main
 */
void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec3 selfPosition = texture2D(texturePosition, uv).xyz;
  vec3 selfVelocity = texture2D(textureVelocity, uv).xyz;

  selfPosition += selfVelocity * DELTA;

  // 表示領域ないを超えた場合ベクトルを反転
  if(abs(selfPosition.x) > u_txSize / 2.0){
    selfVelocity.x *= -1.0;
  }
  if(abs(selfPosition.y) > u_txSize / 2.0){
    selfVelocity.y *= -1.0;
  }
  if(abs(selfPosition.z) > u_txSize / 2.0){
    selfVelocity.z *= -1.0;
  }

  // 加速度のテクスチャを更新
  gl_FragColor = vec4(selfVelocity, 1.0 );
}
