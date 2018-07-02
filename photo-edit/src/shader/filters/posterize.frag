//--------------------------------------------------------------------------
// posterize: 階調化
//--------------------------------------------------------------------------
vec3 posterize(vec3 color, float tone){
	tone = smoothstep(2.0, 255.0, tone);
	tone = mix(1.0, 255.0, tone);
	if(1.0 < tone){
  	return floor(color * tone + 0.5) / tone;
	} else {
		return color;
	}
}
vec4 posterize(vec4 color, float tone){
	tone = smoothstep(2.0, 255.0, tone);
	tone = mix(1.0, 255.0, tone);
	if(1.0 < tone){
  	return floor(color * tone + 0.5) / tone;
	} else {
		return color;
	}
}
#pragma glslify: export(posterize)
