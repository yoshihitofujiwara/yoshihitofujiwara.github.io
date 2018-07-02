//--------------------------------------------------------------------------
// rotate2d: 2D回転
//--------------------------------------------------------------------------
vec2 rotate2d(vec2 posi, float angle){
  posi -= 0.5;
  posi = mat2(
  	cos(angle), -sin(angle),
  	sin(angle), cos(angle)
  ) * posi;
  posi += 0.5;
  return posi;
}


mat2 scale(vec2 posi){
	return mat2(
		posi.x, 0.0,
		0.0, posi.y
	);
}



float map(float value, float inMin, float inMax, float outMin, float outMax) {
  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
}

