//--------------------------------------------------------------------------
// nega: 色反転
//--------------------------------------------------------------------------
vec3 nega(vec3 color){
	return vec3(1.0-color.x, 1.0-color.y, 1.0-color.z);
}
vec4 nega(vec4 color){
	return vec4(1.0-color.x, 1.0-color.y, 1.0-color.z, 1.0);
	// return vec4(1.0-color.x, 1.0-color.y, 1.0-color.z, 1.0-color.w);
}
#pragma glslify: export(nega)
