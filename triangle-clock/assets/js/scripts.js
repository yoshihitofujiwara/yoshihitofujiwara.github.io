!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports="precision highp float;\n#define GLSLIFY 1\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float progress;\nuniform float time;\nuniform float noise;\nuniform float size;\n\nattribute vec3 position;\nattribute vec3 offset;\nattribute vec3 nextOffset;\nattribute vec4 rotate;\nattribute vec4 color;\n\nvarying vec3 vPosition;\nvarying vec4 vColor;\n\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_1_0(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_1_1(vec3 x) {\n  return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_1_2(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289_1_0(i); // Avoid truncation effects in permutation\n  vec3 p = permute_1_1( permute_1_1( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n\n\n\n\n\nmat3 rotateQ(float angle, vec3 axis){\n\tvec3 a = normalize(axis);\n\tfloat s = sin(angle);\n\tfloat c = cos(angle);\n\tfloat r = 1.0 - c;\n\tmat3 m = mat3(\n\t\t\ta.x * a.x * r + c,\n\t\t\ta.y * a.x * r + a.z * s,\n\t\t\ta.z * a.x * r - a.y * s,\n\t\t\ta.x * a.y * r - a.z * s,\n\t\t\ta.y * a.y * r + c,\n\t\t\ta.z * a.y * r + a.x * s,\n\t\t\ta.x * a.z * r + a.y * s,\n\t\t\ta.y * a.z * r - a.x * s,\n\t\t\ta.z * a.z * r + c\n\t);\n\treturn m;\n}\n\n\nvoid main(){\n\tvColor = color;\n\n\tvec4 orientation = vec4(rotate.xyz, rotate.w + time);\n\n\tvec3 basePosition = mix(offset, nextOffset, progress) + (position * size) * rotateQ(orientation.w, orientation.xyz);\n\n\tvec3 noise3D = vec3(\n\t\tsnoise_1_2(vec2(basePosition.x, time)),\n\t\tsnoise_1_2(vec2(basePosition.y, time)),\n\t\tsnoise_1_2(vec2(basePosition.z, time))\n\t) * noise;\n\n\tvPosition = basePosition + noise3D;\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition, 1.0 );\n}\n"},function(t,e){t.exports="precision highp float;\n#define GLSLIFY 1\n\nuniform float time;\nuniform float opacity;\n\nvarying vec3 vPosition;\nvarying vec4 vColor;\n\n\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\n\nvoid main() {\n\tvec4 color = vColor;\n\n\tcolor.r = vColor.r + vPosition.x / 50.0;\n\tcolor.g = vColor.g + vPosition.y / 50.0;\n\tcolor.b = vColor.b + vPosition.z / 50.0;\n\tcolor.a = opacity;\n\n\tgl_FragColor = color;\n}\n"},function(t,e,n){"use strict";n.r(e);var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var r=function(){function t(e,n){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$container=e,this.options=$.extend(!0,{isController:!1,isAxis:!1,isGui:!0,isStats:!0},n),this.width=this.$container.width(),this.height=this.$container.height(),this.startTime=null,this.time=null,this._animationId=null,this.event=new INK.Events,this.stats=new Stats,this.$container[0].appendChild(this.stats.dom),this.options.isStats||$(this.stats.domElement).css({display:"none"}),this.options.isGui&&(this.gui=new dat.GUI,this.gui.params={},this.gui.params.stats=this.options.isStats,this.gui.add(this.gui.params,"stats").name("FPS Metor").onChange(function(){i.gui.params.stats?$(i.stats.domElement).css("display","block"):$(i.stats.domElement).css("display","none")})),this.renderer=new THREE.WebGLRenderer,this.renderer.setClearColor(0),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.scene=new THREE.Scene,this.camera=new THREE.PerspectiveCamera(60,this.width/this.height,.01,1e4),this.camera.position.set(0,0,10),this.camera.aspect=this.width/this.height,this.options.isController&&(this.controller=new THREE.OrbitControls(this.camera,this.renderer.domElement),this.controller.autoRotate=!1,this.controller.autoRotateSpeed=5),this.options.isAxis&&(this.axis=new THREE.AxisHelper(1e3),this.scene.add(this.axis)),this.$container[0].appendChild(this.renderer.domElement),$(window).resize(this.resize.bind(this))}return i(t,[{key:"start",value:function(){this.startTime=performance.now(),cancelAnimationFrame(this._animationId),this.event.trigger("start",this),this.update()}},{key:"stop",value:function(){cancelAnimationFrame(this._animationId),this.event.trigger("stop",this)}},{key:"update",value:function(){this.time=(performance.now()-this.startTime)/1e3,this._animationId=requestAnimationFrame(this.update.bind(this)),this.event.trigger("update",this),this.render(),this.controller&&this.controller.update(),this.gui.params.stats&&this.stats.update()}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"resize",value:function(){this.width=this.$container.width(),this.height=this.$container.height(),this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.event.trigger("resize",this)}}]),t}(),a=void 0,o=[],s=[],c=void 0,u=f();function l(){for(var t=function(t){o[t]={},o[t].geometry=new THREE.TextGeometry(t,{font:c,size:40,height:8,curveSegments:10}),o[t].geometry.center(),o[t].particles=new THREE.Geometry,o[t].particles.vertices=THREE.GeometryUtils.randomPointsInGeometry(o[t].geometry,a.gui.params.particles/6),o[t].particles.offsets=[],o[t].particles.vertices.forEach(function(e){o[t].particles.offsets.push(e.x,e.y,e.z)})},e=0;e<10;++e)t(e);a.scene.remove.apply(a.scene,a.scene.children);for(var i=[0,.5,0,.5,-.5,0,-.5,-.5,0],r=0;r<u.length;++r){for(var l=o[+u[r]].particles.offsets.concat(),h=[],f=[],m=0;m<a.gui.params.particles/6;m+=1)h.push(Math.random(),Math.random(),Math.random()),f.push(2*Math.random()-1,2*Math.random()-1,2*Math.random()-1,2*Math.random()-1*INK.TWO_PI);var d=new THREE.InstancedBufferGeometry;d.maxInstancedCount=a.gui.params.particles/6,d.addAttribute("position",new THREE.Float32BufferAttribute(i.concat(),3)),d.addAttribute("offset",new THREE.InstancedBufferAttribute(new Float32Array(l),3)),d.addAttribute("nextOffset",new THREE.InstancedBufferAttribute(new Float32Array(l),3)),d.addAttribute("color",new THREE.InstancedBufferAttribute(new Float32Array(h),3)),d.addAttribute("rotate",new THREE.InstancedBufferAttribute(new Float32Array(f),4));var p={time:{value:1},progress:{type:"f",value:0},size:{type:"f",value:a.gui.params.size},opacity:{type:"f",value:a.gui.params.opacity},noise:{type:"f",value:a.gui.params.noise}},v=new THREE.RawShaderMaterial({uniforms:p,vertexShader:n(0),fragmentShader:n(1),side:THREE.DoubleSide,blending:THREE.AdditiveBlending,depthTest:!1,transparent:!0}),x=new THREE.Mesh(d,v);x.position.x=34*r-34*2.55,s[r]=x,a.scene.add(x)}}function h(t,e){var n=s[t].geometry.attributes;n.nextOffset.array=new Float32Array(o[e].particles.offsets),s[t].material.uniforms.progress.value=0,n.offset.needsUpdate=!0,n.nextOffset.needsUpdate=!0,TweenMax.to(s[t].material.uniforms.progress,.6,{value:1,ease:Expo.easeOut,onComplete:function(){n.offset.array=new Float32Array(o[e].particles.offsets)}})}function f(){var t=new Date;return m(t.getHours())+m(t.getMinutes())+m(t.getSeconds())}function m(t){var e=""+t;return e.length<2&&(e="0"+e),e}$(function(){!function(){(a=new r($("#canvas_container"),{isController:!0})).gui.params.particles=24e3,a.gui.params.size=1,a.gui.params.opacity=.5,a.gui.params.noise=1.5;var t=new THREE.FontLoader,e="./assets/fonts/helvetiker_bold.typeface.json?"+performance.now();t.load(e,function(t){c=t,a.gui.add(a.gui.params,"particles",1e3,1e5).step(10).onChange(function(t){l()}),a.gui.add(a.gui.params,"size",.1,10).onChange(function(t){s.forEach(function(e,n){e.material.uniforms.size.value=t})}),a.gui.add(a.gui.params,"opacity",.1,1).onChange(function(t){s.forEach(function(e,n){e.material.uniforms.opacity.value=t})}),a.gui.add(a.gui.params,"noise",0,5).onChange(function(t){s.forEach(function(e,n){e.material.uniforms.noise.value=t})}),l(),a.start()}),INK.isSmartPhone()?a.camera.position.z=360:a.camera.position.z=120,a.event.on("update",function(){s.forEach(function(t,e){t.material.uniforms.time.value=a.time});var t=f();if(u!=t){for(var e=0;e<u.length;e++)u[e]!=t[e]&&h(e,+t[e]);u=t}})}()})}]);