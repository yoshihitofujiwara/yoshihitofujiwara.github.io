//--------------------------------------------------------------------------
// laplacian: エッジ検出
//--------------------------------------------------------------------------
vec4 laplacian(vec2 uv, sampler2D texture, vec2 resolution){
	vec2 texel = vec2(1.0/resolution.x, 1.0/resolution.y);
  vec3 destColor = vec3(0.0);
  destColor += texture2D(texture, uv+texel*vec2(-1, -1)).rgb * 1.0;
  destColor += texture2D(texture, uv+texel*vec2(-1,  0)).rgb * 1.0;
  destColor += texture2D(texture, uv+texel*vec2(-1,  1)).rgb * 1.0;
  destColor += texture2D(texture, uv+texel*vec2( 0, -1)).rgb * 1.0;
  destColor += texture2D(texture, uv+texel*vec2( 0,  0)).rgb * -8.0;
  destColor += texture2D(texture, uv+texel*vec2( 0,  1)).rgb * 1.0;
  destColor += texture2D(texture, uv+texel*vec2( 1, -1)).rgb * 1.0;
  destColor += texture2D(texture, uv+texel*vec2( 1,  0)).rgb * 1.0;
  destColor += texture2D(texture, uv+texel*vec2( 1,  1)).rgb * 1.0;
  destColor = max(destColor, 0.0);
  return vec4(destColor, 1.0);
}
#pragma glslify: export(laplacian)
