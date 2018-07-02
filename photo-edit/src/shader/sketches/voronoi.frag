precision mediump float;

#pragma glslify: import('../common/define.glsl')


//==========================================================================
// params
//==========================================================================
varying vec2 vUv;

uniform sampler2D texture;
uniform float time;
uniform vec2 resolution;
uniform float grid;


// #pragma glslify: snoise2 = require(glsl-noise/simplex/2d, snoise2)
#pragma glslify: cnoise2 = require(glsl-noise/classic/2d)
//==========================================================================
// main
//==========================================================================
vec2 random2( vec2 p ) {
  return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

void main() {
  vec2 st = gl_FragCoord.xy/resolution.xy;

  float mDist = 1.;  // minimun distance
  vec2 minPoint;
  vec3 color = vec3(.0);

  // Scale
	st -= vec2(0.5);
  st *= grid;
  // Tile the space
  vec2 gIndex = floor(st);
  vec2 gPosition = fract(st);

  // 周辺8コマとの距離探す
  for (int y= -1; y <= 1; y++) {
    for (int x= -1; x <= 1; x++) {
      // Neighbor place in the grid
      vec2 neighbor = vec2(float(x),float(y));

      // グリッドの隣接地のポイント
      vec2 point = random2(gIndex + neighbor);

      // アニメートしたポジションを更新
      point = 0.5 + 0.5 * sin(time + 6.2831 * point);

      // ポイントとの差分距離
      vec2 diff = neighbor + point - gPosition;

      // Distance to the point
      float dist = length(diff);

      // 最小値を更新
      if(dist < mDist){
        mDist = dist;
        minPoint = point;
      }
    }
  }

  // Draw the min distance (distance field)
  color.gb = minPoint;

  // Draw cell center
  color += 1.-step(.02, mDist);

  // gl_FragColor = texture2D(texture, minPoint);
  // gl_FragColor = texture2D(texture, vec2(vUv) );
  gl_FragColor = vec4(color,1.0);
}
