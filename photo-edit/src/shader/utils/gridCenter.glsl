//--------------------------------------------------------------------------
// gridCenter:
//--------------------------------------------------------------------------
// @method gridCenter グリッドのセンター座標の取得
// @param {vec2} position 座標
// @param {float|vec2} grid 分割数
// @return {vec2} 中心座標
vec2 gridCenter(vec2 position, float grid){
	return (floor(position * grid) + 0.5) / grid;
}

vec2 gridCenter(vec2 position, vec2 grid){
	return (floor(position * grid) + 0.5) / grid;
}

#pragma glslify: export(gridCenter)
