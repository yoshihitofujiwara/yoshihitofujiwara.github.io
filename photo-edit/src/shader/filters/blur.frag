//--------------------------------------------------------------------------
// FIXME: アップデート予定
// blur: ガウシアンブラー
//--------------------------------------------------------------------------
vec4 blur(float amount, vec2 uv, sampler2D texture, vec2 resolution){
  vec4 destColor = texture2D(texture, uv);

  if(0.0 < amount){
    int blurPixel = 10;
    float maxLevel = float((blurPixel - 1) / 2);
    float total = 0.0;

    for(int y = 0; y < 10; ++y){
      for( int x = 0; x < 10; ++x ) {
        if( x != 0 || y != 0 ) {
           int addX = x - (blurPixel - 1) / 2;
           int addY = y - (blurPixel - 1) / 2;
           float level = max(abs(float(addX)), abs(float(addY))) - 1.0;
            //float b = maxLevel - level;
           float b = amount * maxLevel - level;
           b = clamp(b, 0.0, 1.0);
           float surroundX= float(addX) * 3.0 / resolution.x;
           float surroundY = float(addY) * 3.0 / resolution.y;
           destColor += texture2D(texture, (uv + vec2(surroundX, surroundY))) * b;
           total += b;
        }
      }
    }
    destColor = destColor / (total + 1.0);
  }

  return destColor;
}
#pragma glslify: export(blur)
