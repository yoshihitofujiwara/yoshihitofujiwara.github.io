//--------------------------------------------------------------------------
// rand:
//--------------------------------------------------------------------------
// @method rand 擬似乱数
// @param {vec2} position 座標
// @return {float}
float rand(vec2 position){
	return fract(sin(dot(position, vec2(12.9898, 78.233))) * 43758.5453);
}

#pragma glslify: export(rand)
