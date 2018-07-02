precision mediump float;

#pragma glslify: import('../common/define.glsl')


//==========================================================================
// params
//==========================================================================
varying vec2 vUv;

// uniform sampler2D texture;
uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;
uniform vec2 points[20];
uniform float threshold;


//==========================================================================
// main
//==========================================================================
void main() {
  vec2 st = gl_FragCoord.xy/resolution.xy;
  float minDistance = threshold;
  vec2 minPoint;
  vec3 color;

  for(int i = 0; i < 20; i++){
    // 現在の座標とポイントの座標距離を出す
    float dist = distance(st, points[i]/resolution);

    // 最短距離より小さいか調べる
    if(dist < minDistance){
      minDistance = dist;
      minPoint = points[i]/resolution;
    }
  }

  vec2 mousePoint = mouse;
  mousePoint.y = 1.- mousePoint.y;
  float dist2 = distance(st, mousePoint);

  if(dist2 < minDistance){
    minDistance = dist2;
    minPoint = mousePoint;
  }

  // tint acording the closest
  color.gb = minPoint;
  // point position


  // 中心座標の部分は白色に
  color += 1.-step(.005, minDistance);

  gl_FragColor = vec4(color,1.0);
}
