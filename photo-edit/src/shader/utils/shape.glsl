//--------------------------------------------------------------------------
// shape: 動作確認していない
//--------------------------------------------------------------------------
float shape(vec2 st, int n){
  // st = st*2.-1.;
  float a = atan(st.x,st.y)+PI;
  float r = TWO_PI/float(n);
  // return cos(floor(.5+a/r)*r-a)*length(st);
  return cos(floor(a/r)*r-a)*length(st);  
}
#pragma glslify: export(shape)
