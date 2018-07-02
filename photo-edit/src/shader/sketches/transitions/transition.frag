precision mediump float;

#pragma glslify: import('../../common/define.glsl')

#pragma glslify: import('../../filters/sobel.frag')
#pragma glslify: import('../../filters/grayscale.frag')
#pragma glslify: import('../../filters/blur.frag')


//==========================================================================
// params
//==========================================================================
varying vec2 vUv;

uniform sampler2D texture1;
uniform sampler2D texture2;
uniform sampler2D effectTexture;
uniform sampler2D videoTexture;
uniform vec2 resolution;
uniform float time;
uniform float progress;




//==========================================================================
// main
//==========================================================================
void main() {
	vec2 uv = vUv;

	// 係数
	float effectFactor = -0.1;

	float val;

	vec4 disp = texture2D(effectTexture, uv);
	val = disp.r;

	// vec2 distortedPosition1 = vec2(uv.x + progress * (val*effectFactor), uv.y);
	// vec2 distortedPosition2 = vec2(uv.x - (1.0 - progress) * (val*effectFactor), uv.y);

	// vec4 color1 = texture2D(texture1, distortedPosition1);
	// vec4 color2 = texture2D(texture2, distortedPosition2);

	// vec4 color = mix(color1, color2, progress);


	// float blendVal = smoothstep(0., 1., (1.0+val) * progress);
// smoothstep(0., 1.,(1.0+val) * progress)
	// vec4 color1 = texture2D(texture1, uv);
	// vec4 color2 = texture2D(texture2, uv);

	float blendVal = smoothstep(0., 1.,  1.0 * progress + val * progress);

	float sp = progress;
	if(step(0.5, progress) == 1.0){
		sp = 1.0 - progress;
	}

	vec4 color1 = blur(sp, uv, texture1, resolution);
	vec4 color2 =	blur(sp, uv, texture2, resolution);
	vec4 color = mix(color1, color2, blendVal);

	gl_FragColor = color;
}
