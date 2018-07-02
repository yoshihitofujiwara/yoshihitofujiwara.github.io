//--------------------------------------------------------------------------
// grid:
//--------------------------------------------------------------------------
// @method grid グリッド座標の取得
// @param {vec2} position 座標
// @param {float|vec2} grid 分割数
// @return {vec2} 座標
vec2 grid(vec2 position, float grid){
	return fract(position * grid);
}

vec2 grid(vec2 position, vec2 grid){
	return fract(position * grid);
}

#pragma glslify: export(grid)
