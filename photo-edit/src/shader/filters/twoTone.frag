//--------------------------------------------------------------------------
// twoTone: 2階調化
//--------------------------------------------------------------------------
vec3 twoTone(vec3 color, float threshold){
	if(0.0 < threshold){
		color =	vec3(dot(color, LUMINANCE));
	  return floor(color * 1. + smoothstep(0., 255.0, threshold)) / 1.0;
	} else {
		return color;
	}
}
vec4 twoTone(vec4 color, float threshold){
	if(0.0 < threshold){
		vec3 _color =	vec3(dot(color.rgb, LUMINANCE));
		_color = floor(_color * 1. + smoothstep(0., 255.0, threshold)) / 1.0;
	  return vec4(_color.rgb, 1.0);
	} else {
		return color;
	}
}
#pragma glslify: export(twoTone)
