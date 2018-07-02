#pragma glslify: import('../common/define.glsl')

//==========================================================================
// params
//==========================================================================
varying vec2 vUv;

// uniform float uCurlAmount;
uniform float uZamount;
uniform float uRotationZ;
uniform float uTime2;


//==========================================================================
// method
//==========================================================================
#pragma glslify: snoise2 = require(glsl-noise/simplex/2d)

// const mat2 deformUV = mat2(1.0, 0.0, 0.0, 2.0);

// GLSL Rotation About An Arbitrary Axis
// http://www.neilmendoza.com/glsl-rotation-about-an-arbitrary-axis/
mat4 rotationMatrix(vec3 axis, float angle)
{
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;

  return mat4(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
    0.0,                                0.0,                                0.0,                                1.0);
}


//==========================================================================
// main
//==========================================================================
void main(){
  vUv = uv;

  vec3 _position = position;

  if(uZamount == 0.0){
    // Curl
    // _position.z = cos((_position.x + (uTime2*30.))  / 2.);
    // vec4 transp = rotationMatrix(vec3(0, 0, 1), uRotationZ) * vec4(position, 1.0);
    // float theta = transp.x / uRotationZ;
    // float tx = uRotationZ * sin(theta);
    // float ty = transp.y;
    // float tz = uRotationZ * (1.0 - cos(theta * snoise2(vec2(uTime2 * 0.25))));
    // vec3 p = vec3(tx, ty, tz);
    // vec4 backedp = rotationMatrix(vec3(0, 0, 1), -uRotationZ) * vec4(p, 1.0);
    // _position = backedp.xyz;


  } else {
    // snoise
    _position.z = snoise2(_position.xy*(uTime2*0.1)) * uZamount;
  }

  // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(_position, 1.0);
}
