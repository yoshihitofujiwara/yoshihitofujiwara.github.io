//--------------------------------------------------------------------------
// hsbToRgb:
// --------------------------------------------------------------------------
// @method hsbToRgb
// @param {vec3} c hsb color
// @return {vec3} rgb color
vec3 hsbToRgb( in vec3 c ){
	vec3 rgb = clamp(
		abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0,
		0.0,
		1.0
	);

	rgb = rgb*rgb*(3.0-2.0*rgb);
	return c.z * mix(vec3(1.0), rgb, c.y);
}

#pragma glslify: export(hsbToRgb)
