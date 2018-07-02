// FIXME: 削除予定
//--------------------------------------------------------------------------
// rotate2d: 2D回転
//--------------------------------------------------------------------------
vec2 rotate2d(vec2 posi, float angle){
  posi -= 0.5;
  posi = mat2(
  	cos(angle), -sin(angle),
  	sin(angle), cos(angle)
  ) * posi;
  posi += 0.5;
  return posi;
}
#pragma glslify: export(rotate2d)
