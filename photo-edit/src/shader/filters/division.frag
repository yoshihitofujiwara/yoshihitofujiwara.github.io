//--------------------------------------------------------------------------
// division: 画面分割
//--------------------------------------------------------------------------
vec2 division(vec2 pos, float split){
  return fract(pos * split);
}
#pragma glslify: export(division)
