precision mediump float;

#pragma glslify: import('../common/define.glsl')

//==========================================================================
// @params
//==========================================================================
varying vec2 vUv;

uniform sampler2D texture;
uniform float uTime;
uniform vec2 resolution;

// effect
uniform int uBlendMode;
uniform float uAmount;
uniform vec4 uColor;
uniform bool uOverLay;


//==========================================================================
// @import
//==========================================================================
// #pragma glslify: blenduBlendMode = require(glsl-blend/all)

#pragma glslify: blendHardMix = require(glsl-blend/hard-mix)
#pragma glslify: blendVividLight = require(glsl-blend/vivid-light)
#pragma glslify: blendLinearLight = require(glsl-blend/linear-light)
#pragma glslify: blendPinLight = require(glsl-blend/pin-light)
#pragma glslify: blendGlow = require(glsl-blend/glow)
#pragma glslify: blendHardLight = require(glsl-blend/hard-light)
#pragma glslify: blendPhoenix = require(glsl-blend/phoenix)
#pragma glslify: blendOverlay = require(glsl-blend/overlay)
#pragma glslify: blendNormal = require(glsl-blend/normal)
#pragma glslify: blendNegation = require(glsl-blend/negation)
#pragma glslify: blendMultiply = require(glsl-blend/multiply)
#pragma glslify: blendReflect = require(glsl-blend/reflect)
#pragma glslify: blendAverage = require(glsl-blend/average)
#pragma glslify: blendLinearBurn = require(glsl-blend/linear-burn)
#pragma glslify: blendLighten = require(glsl-blend/lighten)
#pragma glslify: blendScreen = require(glsl-blend/screen)
#pragma glslify: blendSoftLight = require(glsl-blend/soft-light)
#pragma glslify: blendSubtract = require(glsl-blend/subtract)
#pragma glslify: blendExclusion = require(glsl-blend/exclusion)
#pragma glslify: blendDifference = require(glsl-blend/difference)
#pragma glslify: blendDarken = require(glsl-blend/darken)
#pragma glslify: blendColorDodge = require(glsl-blend/color-dodge)
#pragma glslify: blendColorBurn = require(glsl-blend/color-burn)
#pragma glslify: blendAdd = require(glsl-blend/add)
#pragma glslify: blendLinearDodge = require(glsl-blend/linear-dodge)





//==========================================================================
// @main
//==========================================================================
void main() {

	vec4 fgColor = texture2D( texture, vUv );

	vec4 bgColor = vec4(1.0);
	if(uOverLay){
		bgColor = texture2D( texture, vUv );
	} else {
		bgColor = vec4(uColor);
	}

	vec3 color = vec3(0.0);

	if( uBlendMode == 1 ){
		color = blendAdd(bgColor.rgb, fgColor.rgb, uAmount);
// }else if( uBlendMode == 2 ){
	// color = blendAverage(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 3 ){
		color = blendColorBurn(bgColor.rgb, fgColor.rgb, uAmount);
// }else if( uBlendMode == 4 ){
	// color = blendColorDodge(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 5 ){
		color = blendDarken(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 6 ){
		color = blendDifference(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 7 ){
		color = blendExclusion(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 8 ){
		color = blendGlow(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 9 ){
		color = blendHardLight(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 10 ){
		color = blendHardMix(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 11 ){
		color = blendLighten(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 12 ){
		color = blendLinearBurn(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 13 ){
		color = blendLinearDodge(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 14 ){
		color = blendLinearLight(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 15 ){
		color = blendMultiply(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 16 ){
		color = blendNegation(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 17 ){
		color = blendNormal(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 18 ){
		color = blendOverlay(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 19 ){
		color = blendPhoenix(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 20 ){
		color = blendPinLight(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 21 ){
		color = blendReflect(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 22 ){
		color = blendScreen(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 23 ){
		color = blendSoftLight(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 24 ){
		color = blendSubtract(bgColor.rgb, fgColor.rgb, uAmount);
	}else if( uBlendMode == 25 ){
		color = blendVividLight(bgColor.rgb, fgColor.rgb, uAmount);
	}

	gl_FragColor = vec4(color, 1.0);
}

