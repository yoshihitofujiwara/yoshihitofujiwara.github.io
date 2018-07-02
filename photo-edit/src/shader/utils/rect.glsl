//--------------------------------------------------------------------------
// rect:
//--------------------------------------------------------------------------
// @method rect
// @param {vec2} center 中心座標
// @param {float|vec2} size 辺の長さ
// @return {float} 0.0（塗なし）か1.0（塗あり）
float rect(vec2 center, float size) {
	vec2 q = (center - vec2(0.5)) / (size * 0.5);
	if (abs(q.x) < 1.0 && abs(q.y) < 1.0) {
		return 1.0;
	}
	return 0.0;
}

float rect(vec2 center, vec2 size) {
	vec2 q = (center - vec2(0.5)) / (size * 0.5);
	if (abs(q.x) < 1.0 && abs(q.y) < 1.0) {
		return 1.0;
	}
	return 0.0;
}

#pragma glslify: export(rect)
