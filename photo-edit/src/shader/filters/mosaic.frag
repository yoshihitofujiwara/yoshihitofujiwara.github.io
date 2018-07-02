//--------------------------------------------------------------------------
// mosaic: モザイク
//--------------------------------------------------------------------------
vec2 mosaic(vec2 posi, float size){
	if(0.0 < size){
		posi -= 0.5;
		posi = floor(posi*size) / size;
		posi += 0.5;
	}
	return posi;
}
vec2 mosaic(vec2 posi, float size, vec2 resolution){
	if(0.0 < size){
		posi -= 0.5;
		posi = floor(posi*resolution/size) / (resolution/size) + (size/2.0) / resolution;
		posi += 0.5;
	}
	return posi;
}
#pragma glslify: export(mosaic)

