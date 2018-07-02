//--------------------------------------------------------------------------
// sobel: エッジ検出
//--------------------------------------------------------------------------
vec4 sobel(vec2 uv, sampler2D texture, vec2 resolution){
	mat3 Gx = mat3(-1, -2, -1, 0, 0, 0, 1, 2, 1);
	mat3 Gy = mat3(-1, 0, 1, -2, 0, 2, -1, 0, 1);
	vec2 texel = vec2(1.0/resolution.x, 1.0/resolution.y);

	vec3 tx0y0 = texture2D(texture, uv+texel*vec2(-1, -1)).rgb;
	vec3 tx0y1 = texture2D(texture, uv+texel*vec2(-1,  0)).rgb;
	vec3 tx0y2 = texture2D(texture, uv+texel*vec2(-1,  1)).rgb;
	vec3 tx1y0 = texture2D(texture, uv+texel*vec2( 0, -1)).rgb;
	vec3 tx1y1 = texture2D(texture, uv+texel*vec2( 0,  0)).rgb;
	vec3 tx1y2 = texture2D(texture, uv+texel*vec2( 0,  1)).rgb;
	vec3 tx2y0 = texture2D(texture, uv+texel*vec2( 1, -1)).rgb;
	vec3 tx2y1 = texture2D(texture, uv+texel*vec2( 1,  0)).rgb;
	vec3 tx2y2 = texture2D(texture, uv+texel*vec2( 1,  1)).rgb;

	vec3 valueGx = Gx[0][0]*tx0y0 + Gx[1][0]*tx1y0 + Gx[2][0]*tx2y0 +	Gx[0][1]*tx0y1 + Gx[1][1]*tx1y1 + Gx[2][1]*tx2y1 + Gx[0][2]*tx0y2 + Gx[1][2]*tx1y2 + Gx[2][2]*tx2y2;

	vec3 valueGy = Gy[0][0]*tx0y0 + Gy[1][0]*tx1y0 + Gy[2][0]*tx2y0 +	Gy[0][1]*tx0y1 + Gy[1][1]*tx1y1 + Gy[2][1]*tx2y1 + Gy[0][2]*tx0y2 + Gy[1][2]*tx1y2 + Gy[2][2]*tx2y2;

	vec3 destColor = sqrt(valueGx*valueGx + valueGy*valueGy);
	return vec4(destColor, 1.0);
}
#pragma glslify: export(sobel)
