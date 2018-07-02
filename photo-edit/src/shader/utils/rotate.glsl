//--------------------------------------------------------------------------
// rotate:
//--------------------------------------------------------------------------
// @method rotate 2D回転
// @param {float} angle 回転角（ラジアン）
// @return {mat2}
mat2 rotate(float angle) {
	float s = sin(angle);
	float c = cos(angle);
	return mat2(c, -s, s, c);
}

#pragma glslify: export(rotate)
