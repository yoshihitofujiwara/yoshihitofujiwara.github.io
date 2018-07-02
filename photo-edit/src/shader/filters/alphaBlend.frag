//--------------------------------------------------------------------------
// alphaBlend: アルファブレンド
//--------------------------------------------------------------------------
// 加算
vec4 addColor(vec4 baseColor, vec4 targetColor){
  return baseColor + targetColor;
}

// 減算
vec4 subColor(vec4 baseColor, vec4 targetColor){
  return baseColor - targetColor;
}

// 乗算
vec4 multColor(vec4 baseColor, vec4 targetColor){
  return baseColor * targetColor;
}

// 除算
vec4 divColor(vec4 baseColor, vec4 targetColor){
  return baseColor / targetColor;
}

// 差の絶対値
vec4 absColor(vec4 baseColor, vec4 targetColor){
  return vec4(abs(baseColor - targetColor));
}

// 比較(最小値・暗い)
vec4 compMinColor(vec4 baseColor, vec4 targetColor){
  return min(baseColor, targetColor);
}

// 比較(最大値・明るい)
vec4 compMaxColor(vec4 baseColor, vec4 targetColor){
  return max(baseColor, targetColor);
}

//焼き込み
vec4 burningColor(vec4 baseColor, vec4 targetColor){
  return baseColor / vec4((1.0 - targetColor.rgb), 1.0);
}

// スクリーン
vec4 screenColor(vec4 baseColor, vec4 targetColor){
  return vec4(1.0 - (1.0 - baseColor) * (1.0 - targetColor));
}

// オーバーレイ
vec4 overlayColor(vec4 baseColor, vec4 targetColor){
    vec3 rgb =  mix(
      1.0 - 2.0 * (1.0 - baseColor.rgb) * (1.0 - targetColor.rgb),
      2.0 * baseColor.rgb * targetColor.rgb,
      step(baseColor.rgb, vec3(0.5))
    );
    return vec4(rgb, 1.0);
}
