precision mediump float;

#pragma glslify: import('../common/define.glsl')


//==========================================================================
// params
//==========================================================================
varying vec2 vUv;

uniform float u_time;
uniform vec2 u_resolution;



//--------------------------------------------------------------------------
// import
//--------------------------------------------------------------------------
#pragma glslify: import('../utils/circle.glsl')
#pragma glslify: import('../utils/rect.glsl')
#pragma glslify: import('../utils/grid.glsl')
#pragma glslify: import('../utils/gridCenter.glsl')
#pragma glslify: import('../utils/rand.glsl')
#pragma glslify: import('../utils/rotate.glsl')



//--------------------------------------------------------------------------
//	追加予定
//--------------------------------------------------------------------------

// 未実装
// 楕円
bool ellipse(vec2 center, vec2 prop, float size) {
  vec2 q = (center - vec2(0.5)) / prop;
    if (length(q) < size) {
        return true;
    }
    return false;
}



//==========================================================================
// main
//==========================================================================
void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;
	vec2 uv = vUv;
	float time2 = u_time*2.;


	////
	// 作りかけ
	// fish eye
	////
	// 個々から
  float aperture = 100.0;
  float apertureHalf = 0.5 * aperture * (PI / 180.0);
  float maxFactor = sin(apertureHalf);

	vec2 xy = uv * 2.0 - 1.0;

  float d = length(xy);
  // if (d < (2.0-maxFactor)) {
  if (d < 1.0) {
    d = length(xy * maxFactor);
    float z = sqrt(1.0 - d * d);
    float r = atan(d, z) / PI;
    float phi = atan(xy.y, xy.x);

    uv.x = r * cos(phi) + 0.5;
    uv.y = r * sin(phi) + 0.5;
  } else {
    uv = uv.xy;
  }


	uv = grid(uv, 10.0);
	float color = rect(uv, 0.8);

	gl_FragColor = vec4(vec3(color), 1.0);


	////
	// karafuru tone
	////
	// float grid = 10.0;
	// uv *= rotate(radians(45.));

	// vec2 gUv = gridCenter(uv, 10.0);

	// float dist = distance( vec2(0.5), gUv * rand(gUv) * 5.0);
	// dist = (1. + sin(dist * 2. - time2 * 2.)) * 0.5;

	// float r = rect(fract( uv*grid ), dist);
	// float g = rect(fract( uv*grid*2.0 ), dist);
	// float b = rect(fract( uv*grid*3.0 ), dist);

	// gl_FragColor = vec4(vec3(r, g, b), 1.0);
}
