//--------------------------------------------------------------------------
// #README
// kareido: カレイドスコープ
//--------------------------------------------------------------------------
vec2 kareido(vec2 posi, float sides, float angle){
	posi -= 0.5;
	float a = atan(posi.y, posi.x) + angle;
	if(sides != 0.0){
		a = mod(a, TWO_PI/sides);
		a = abs(a-TWO_PI/sides/2.);
	}
	posi = length(posi) * vec2(cos(a), sin(a));
	posi += 0.5;
	return posi;
}
#pragma glslify: export(kareido)
