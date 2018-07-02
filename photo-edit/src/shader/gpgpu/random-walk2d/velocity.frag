precision mediump float;

/**
 * 1. 移動計算処理
 */
// 移動方向についていろいろ計算できるシェーダー。
// 今回はなにもしてない。
// ここでVelのx y zについて情報を上書きすると、それに応じて移動方向が変わる
#define DELTA (1.0 / 60.0)


/**
 * main
 */
void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec3 selfPosition = texture2D(texturePosition, uv).xyz;
  vec3 selfVelocity = texture2D(textureVelocity, uv).xyz;

  selfPosition += selfVelocity * DELTA;

  if(abs(selfPosition.x) > 1.0){
    selfVelocity.x *= -1.0;
  }
  if(abs(selfPosition.y) > 1.0){
    selfVelocity.y *= -1.0;
  }

  gl_FragColor = vec4(selfVelocity, 1.0 );
}
