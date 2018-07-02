//--------------------------------------------------------------------------
// grayscale: グレースケール
//--------------------------------------------------------------------------
vec3 grayscale(vec3 color){
	return vec3(dot(color, LUMINANCE));
}
vec4 grayscale(vec4 color){
	return vec4(vec3(dot(color.rgb, LUMINANCE)), 1.0);
}
#pragma glslify: export(grayscale)
