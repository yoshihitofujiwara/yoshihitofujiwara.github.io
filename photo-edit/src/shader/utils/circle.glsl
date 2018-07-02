//--------------------------------------------------------------------------
// circle: 正円
//--------------------------------------------------------------------------
// @method circle
// @param {vec2} center 座標
// @param {float} radius 半径
// @return {float} 0.0（塗なし）か1.0（塗あり）
float circle(vec2 center, float radius){
	return 1.0 - step(radius, distance(vec2(0.5), center));
}

#pragma glslify: export(circle)
