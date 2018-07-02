precision mediump float;

#pragma glslify: import('../common/define.glsl')


//==========================================================================
// params
//==========================================================================
varying vec2 vUv;

// uniform sampler2D texture;
uniform float time;
uniform vec2 resolution;
uniform vec3 metaballs[15];
uniform float threshold;


//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb( in vec3 c ){
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                             6.0)-3.0)-1.0,
                     0.0,
                     1.0 );
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix( vec3(1.0), rgb, c.y);
}


//==========================================================================
// main
//==========================================================================
void main() {
  float x = gl_FragCoord.x;
  float y = gl_FragCoord.y;
  float v = 0.0;

  vec2 st = gl_FragCoord.xy/resolution;
  vec3 color = vec3(0.0);
  vec2 toCenter = vec2(0.5)-st;
  float angle = atan(toCenter.y,toCenter.x);
  float radius = length(toCenter) * 2.0;
  // angle += time;
  color = hsb2rgb(vec3((angle/TWO_PI)+0.5,radius,1.0));

  for (int i = 0; i < 15; i++) {
    vec3 mb = metaballs[i];
    float dx = mb.x - x;
    float dy = mb.y - y;
    float r = mb.z;
    v += r*r/(dx*dx + dy*dy);
  }

  if (v > threshold) {
    gl_FragColor = vec4(color, 1.0);
  } else {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
}
