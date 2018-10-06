/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/scripts/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/scripts/scripts.js":
/*!***********************************!*\
  !*** ./src/js/scripts/scripts.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_RenderManeger3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/RenderManeger3D */ \"./src/js/scripts/utils/RenderManeger3D.js\");\n\n\n/*--------------------------------------------------------------------------\r\n\tparameter\r\n--------------------------------------------------------------------------*/\nvar renderManeger3D = void 0;\n\n// 数値の頂点管理リスト\nvar numGeoList = [];\n\n// 最大頂点数をもつGeometry\nvar maxGeometry = null;\n\n// 表示時間の頂点リスト（文字単位）\nvar vertexList = [];\n\n// font data\nvar fontData = void 0;\n\n// 現在時間（6桁の文字列）\nvar now = getNow();\n\n/*--------------------------------------------------------------------------\r\n\tinit\r\n--------------------------------------------------------------------------*/\nfunction init() {\n\trenderManeger3D = new _utils_RenderManeger3D__WEBPACK_IMPORTED_MODULE_0__[\"default\"]($(\"#canvas_container\"), {\n\t\tisController: true\n\t});\n\n\t// 頂点のノイズ量・ノイズ速度\n\trenderManeger3D.gui.params.noise = 0.5;\n\trenderManeger3D.gui.params.speed = 1;\n\n\t// numGeometryListに数字の頂点生成して座標をキャッシュしておく\n\tvar loader = new THREE.FontLoader();\n\tvar typeface = \"./assets/fonts/helvetiker_regular.typeface.json?\" + performance.now();\n\n\tloader.load(typeface, function (font) {\n\t\tfontData = font;\n\n\t\t// dat.gui\n\t\trenderManeger3D.gui.add(renderManeger3D.gui.params, 'noise', 0, 10).onChange(function (val) {\n\t\t\tvertexList.forEach(function (item) {\n\t\t\t\titem.material.uniforms.noiseAmount.value = val;\n\t\t\t});\n\t\t});\n\t\trenderManeger3D.gui.add(renderManeger3D.gui.params, 'speed', 0, 100);\n\n\t\t// ライン生成\n\t\tcreateLine();\n\n\t\t// start\n\t\trenderManeger3D.start();\n\t});\n\n\t// camera positon\n\tif (INK.isSmartPhone()) {\n\t\trenderManeger3D.camera.position.z = 360;\n\t} else {\n\t\trenderManeger3D.camera.position.z = 150;\n\t}\n\n\t// update\n\trenderManeger3D.event.on(\"update\", function () {\n\t\tvertexList.forEach(function (item) {\n\t\t\t// item.material.uniforms.color.value.offsetHSL(0.0005, 0, 0);\n\t\t\titem.material.uniforms.time.value = renderManeger3D.time * renderManeger3D.gui.params.speed;\n\t\t});\n\n\t\t// 表示時間の更新\n\t\tvar _now = getNow();\n\t\tif (now != _now) {\n\t\t\tfor (var i = 0; i < now.length; i++) {\n\t\t\t\tif (now[i] != _now[i]) {\n\t\t\t\t\tmorphTo(i, +_now[i]);\n\t\t\t\t}\n\t\t\t}\n\t\t\tnow = _now;\n\t\t}\n\t});\n}\n\n/*--------------------------------------------------------------------------\r\n\tcreateLine\r\n--------------------------------------------------------------------------*/\nfunction createLine() {\n\t// numGeometryList: 0から9までのTextBufferGeometryを生成\n\tvar numGeometryList = [];\n\n\tfor (var i = 0; i < 10; ++i) {\n\t\tnumGeometryList[i] = {};\n\n\t\tnumGeometryList[i] = new THREE.TextBufferGeometry(i, {\n\t\t\tfont: fontData,\n\t\t\tsize: 40,\n\t\t\theight: 15,\n\t\t\tcurveSegments: 10,\n\t\t\tbevelThickness: 5,\n\t\t\tbevelSize: 2,\n\t\t\tbevelEnabled: true,\n\t\t\tbevelSegments: 10\n\t\t});\n\n\t\t// ジオメトリを中央に配置\n\t\tnumGeometryList[i].center();\n\n\t\t// 最大頂点を持つGeometryを保管\n\t\tif (i == 0 || maxGeometry.attributes.position.count < numGeometryList[i].attributes.position.count) {\n\t\t\tmaxGeometry = numGeometryList[i];\n\t\t}\n\t}\n\n\t// 最大頂点数\n\tvar count = maxGeometry.attributes.position.count;\n\n\t// numGeoList: 頂点アニメーション用のGeometryListを生成\n\t// 最大頂点数に合わせて、数字Geometryの頂点数を全て揃えて作り直す\n\tfor (var _i = 0; _i < 10; ++_i) {\n\t\tvar geometry = new THREE.BufferGeometry();\n\n\t\tvar position = new THREE.Float32BufferAttribute(count * 3, 3);\n\t\tvar color = new THREE.Float32BufferAttribute(count * 3, 3);\n\t\tvar opacity = new THREE.Float32BufferAttribute(count, 1);\n\n\t\tvar numAry = numGeometryList[_i].attributes.position.array;\n\t\tvar maxCount = numGeometryList[_i].attributes.position.count;\n\t\tvar addCount = opacity.count / maxCount;\n\t\tvar baseColor = new THREE.Color(0x00000);\n\n\t\t// 全ての文字の頂点数が合うように頂点を生成\n\t\t// 頂点色も調整\n\t\tfor (var j = 0, k = 0; j < color.array.length; j += 1, k += addCount) {\n\t\t\tposition.array[j] = numAry[j % numAry.length];\n\t\t\tbaseColor.setHSL(k / maxCount, 0.5, 0.5);\n\n\t\t\t// 頂点が重複したら透過\n\t\t\tif (maxCount > j) {\n\t\t\t\topacity.array[j] = 1.0;\n\t\t\t} else {\n\t\t\t\topacity.array[j] = 0.0;\n\t\t\t}\n\n\t\t\tbaseColor.toArray(color.array, j * color.itemSize);\n\t\t}\n\n\t\tgeometry.addAttribute('position', position);\n\t\tgeometry.addAttribute('color', color);\n\t\tgeometry.addAttribute('opacity', opacity);\n\n\t\tnumGeoList[_i] = geometry;\n\t}\n\n\t// vertexList: 表示する時間の頂点を生成\n\tfor (var _i2 = 0; _i2 < now.length; ++_i2) {\n\t\tvar _geometry = new THREE.BufferGeometry();\n\n\t\t// set attributes\n\t\t// 頂点ポジション\n\t\tvar _position = new THREE.Float32BufferAttribute(count * 3, 3);\n\t\t_position.array = new Float32Array(numGeoList[now[_i2]].attributes.position.array);\n\t\t_geometry.addAttribute('position', _position);\n\n\t\t// 次に表示するポジション\n\t\tvar nextPosition = new THREE.Float32BufferAttribute(count * 3, 3);\n\t\tnextPosition.array = new Float32Array(numGeoList[now[_i2]].attributes.position.array);\n\t\t_geometry.addAttribute('nextPosition', nextPosition);\n\n\t\t// 頂点色\n\t\tvar _color = new THREE.Float32BufferAttribute(count * 3, 3);\n\t\t_color.array = new Float32Array(numGeoList[now[_i2]].attributes.color.array);\n\t\t_geometry.addAttribute('color', _color);\n\n\t\t// 頂点の透明度（重複する頂点は0.0 透過する）\n\t\tvar _opacity = new THREE.Float32BufferAttribute(count, 1);\n\t\t_opacity.array = new Float32Array(numGeoList[now[_i2]].attributes.opacity.array);\n\t\t_geometry.addAttribute('opacity', _opacity);\n\n\t\tvar uniforms = {\n\t\t\ttime: { type: \"f\", value: 0 },\n\t\t\tnoiseAmount: { type: \"f\", value: 1.0 },\n\t\t\tprogress: { type: \"f\", value: 0 }\n\t\t};\n\n\t\tvar shaderMaterial = new THREE.ShaderMaterial({\n\t\t\tuniforms: uniforms,\n\t\t\tvertexShader: __webpack_require__(/*! ../../shader/default.vert */ \"./src/shader/default.vert\"),\n\t\t\tfragmentShader: __webpack_require__(/*! ../../shader/default.frag */ \"./src/shader/default.frag\"),\n\t\t\tblending: THREE.AdditiveBlending,\n\t\t\tdepthTest: false,\n\t\t\ttransparent: true\n\t\t});\n\n\t\tvar line = new THREE.Line(_geometry, shaderMaterial);\n\n\t\t// 文字を中央配置\n\t\tline.position.x = 35 * _i2 - 35 * 2.5;\n\n\t\t// 表示時間頂点リスト\n\t\tvertexList.push(line);\n\n\t\trenderManeger3D.scene.add(line);\n\t}\n}\n\n/*--------------------------------------------------------------------------\r\n\tutils\r\n--------------------------------------------------------------------------*/\n/**\r\n * @method morphTo モーフィングアニメーション\r\n * @param {Number} index 桁数（頭から数えて）\r\n * @param {Number} num アニメーションする数字\r\n */\nfunction morphTo(index, num) {\n\tvertexList[index].geometry.attributes.nextPosition.array = new Float32Array(numGeoList[num].attributes.position.array);\n\tvertexList[index].geometry.attributes.color.array = new Float32Array(numGeoList[num].attributes.color.array);\n\tvertexList[index].geometry.attributes.opacity.array = new Float32Array(numGeoList[num].attributes.opacity.array);\n\tvertexList[index].material.uniforms.progress.value = 0;\n\n\tvertexList[index].geometry.attributes.nextPosition.needsUpdate = true;\n\tvertexList[index].geometry.attributes.color.needsUpdate = true;\n\tvertexList[index].geometry.attributes.opacity.needsUpdate = true;\n\tvertexList[index].geometry.attributes.position.needsUpdate = true;\n\n\tTweenMax.to(vertexList[index].material.uniforms.progress, .6, {\n\t\tvalue: 1,\n\t\tease: Expo.easeOut,\n\t\tonComplete: function onComplete() {\n\t\t\tvertexList[index].geometry.attributes.position.array = new Float32Array(numGeoList[num].attributes.position.array);\n\t\t}\n\t});\n}\n\n/**\r\n * @method getNow 現在の時、分、秒を文字列にして返す\r\n * @return {String}\r\n */\nfunction getNow() {\n\tvar date = new Date();\n\treturn zeroPadding(date.getHours()) + zeroPadding(date.getMinutes()) + zeroPadding(date.getSeconds());\n}\n\n/**\r\n * @method zeroPadding 1桁の場合、先頭に0を追加して2桁にする\r\n * @param {Number} num\r\n * @return {String}\r\n */\nfunction zeroPadding(num) {\n\tvar numStr = \"\" + num;\n\tif (numStr.length < 2) {\n\t\tnumStr = \"0\" + numStr;\n\t}\n\treturn numStr;\n}\n\n/*==========================================================================\r\n\tDOM READY\r\n==========================================================================*/\n$(function () {\n\tinit();\n});\n\n//# sourceURL=webpack:///./src/js/scripts/scripts.js?");

/***/ }),

/***/ "./src/js/scripts/utils/RenderManeger3D.js":
/*!*************************************************!*\
  !*** ./src/js/scripts/utils/RenderManeger3D.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar RenderManeger3D = function () {\n\t/**\r\n  * constructor\r\n  * @param  {jQuery} $container canvas container\r\n  * @param  {Object} oprions\r\n  */\n\tfunction RenderManeger3D($container, options) {\n\t\tvar _this = this;\n\n\t\t_classCallCheck(this, RenderManeger3D);\n\n\t\tthis.$container = $container;\n\n\t\tthis.options = $.extend(true, {\n\t\t\tisController: false,\n\t\t\tisAxis: false,\n\t\t\tisGui: true,\n\t\t\tisStats: true\n\t\t}, options);\n\n\t\tthis.width = this.$container.width();\n\t\tthis.height = this.$container.height();\n\n\t\tthis.startTime = null;\n\t\tthis.time = null;\n\t\tthis._animationId = null;\n\n\t\t// event: [start, stop, resize, update]\n\t\tthis.event = new INK.Events();\n\n\t\t// stats\n\t\tthis.stats = new Stats();\n\t\tthis.$container[0].appendChild(this.stats.dom);\n\t\tif (!this.options.isStats) {\n\t\t\t$(this.stats.domElement).css({ display: 'none' });\n\t\t}\n\n\t\t// gui\n\t\tif (this.options.isGui) {\n\t\t\tthis.gui = new dat.GUI();\n\n\t\t\tthis.gui.params = {};\n\t\t\tthis.gui.params.stats = this.options.isStats;\n\t\t\tthis.gui.add(this.gui.params, 'stats').name('FPS Metor').onChange(function () {\n\t\t\t\tif (_this.gui.params.stats) {\n\t\t\t\t\t$(_this.stats.domElement).css('display', 'block');\n\t\t\t\t} else {\n\t\t\t\t\t$(_this.stats.domElement).css('display', 'none');\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\n\t\t// renderer\n\t\tthis.renderer = new THREE.WebGLRenderer();\n\t\tthis.renderer.setClearColor(0x000000);\n\t\tthis.renderer.setPixelRatio(window.devicePixelRatio);\n\t\tthis.renderer.setSize(this.width, this.height);\n\n\t\t// scene\n\t\tthis.scene = new THREE.Scene();\n\n\t\t// camera\n\t\tthis.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 0.01, 10000);\n\t\tthis.camera.position.set(0, 0, 10);\n\t\tthis.camera.aspect = this.width / this.height;\n\n\t\tif (this.options.isController) {\n\t\t\tthis.controller = new THREE.OrbitControls(this.camera, this.renderer.domElement);\n\t\t\tthis.controller.autoRotate = false;\n\t\t\tthis.controller.autoRotateSpeed = 5.0;\n\t\t}\n\n\t\t// AxisHelper\n\t\tif (this.options.isAxis) {\n\t\t\tthis.axis = new THREE.AxisHelper(1000);\n\t\t\tthis.scene.add(this.axis);\n\t\t}\n\n\t\tthis.$container[0].appendChild(this.renderer.domElement);\n\n\t\t// resize\n\t\t$(window).resize(this.resize.bind(this));\n\t}\n\n\t/**\r\n  * start\r\n  */\n\n\n\t_createClass(RenderManeger3D, [{\n\t\tkey: 'start',\n\t\tvalue: function start() {\n\t\t\tthis.startTime = performance.now();\n\t\t\tcancelAnimationFrame(this._animationId);\n\t\t\tthis.event.trigger('start', this);\n\t\t\tthis.update();\n\t\t}\n\n\t\t/**\r\n   * stop\r\n   */\n\n\t}, {\n\t\tkey: 'stop',\n\t\tvalue: function stop() {\n\t\t\tcancelAnimationFrame(this._animationId);\n\t\t\tthis.event.trigger('stop', this);\n\t\t}\n\n\t\t/**\r\n   * update\r\n   */\n\n\t}, {\n\t\tkey: 'update',\n\t\tvalue: function update() {\n\t\t\tthis.time = (performance.now() - this.startTime) / 1000;\n\t\t\tthis._animationId = requestAnimationFrame(this.update.bind(this));\n\n\t\t\tthis.event.trigger('update', this);\n\t\t\tthis.render();\n\n\t\t\tif (this.controller) {\n\t\t\t\tthis.controller.update();\n\t\t\t}\n\t\t\tif (this.gui.params.stats) {\n\t\t\t\tthis.stats.update();\n\t\t\t}\n\t\t}\n\n\t\t/**\r\n   * render\r\n   */\n\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tthis.renderer.render(this.scene, this.camera);\n\t\t}\n\n\t\t/**\r\n   * resize\r\n   */\n\n\t}, {\n\t\tkey: 'resize',\n\t\tvalue: function resize() {\n\t\t\tthis.width = this.$container.width();\n\t\t\tthis.height = this.$container.height();\n\t\t\tthis.renderer.setSize(this.width, this.height);\n\t\t\tthis.camera.aspect = this.width / this.height;\n\t\t\tthis.camera.updateProjectionMatrix();\n\t\t\tthis.event.trigger('resize', this);\n\t\t}\n\t}]);\n\n\treturn RenderManeger3D;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RenderManeger3D);\n\n//# sourceURL=webpack:///./src/js/scripts/utils/RenderManeger3D.js?");

/***/ }),

/***/ "./src/shader/default.frag":
/*!*********************************!*\
  !*** ./src/shader/default.frag ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n#define GLSLIFY 1\\n\\nvarying vec3 vColor;\\nvarying float vOpacity;\\n\\n\\nvoid main() {\\n\\tif(vOpacity == 0.0){\\n\\t\\tdiscard;\\n\\t} else {\\n\\t\\tgl_FragColor = vec4(vColor, (vOpacity * 0.2));\\n\\t}\\n}\\n\"\n\n//# sourceURL=webpack:///./src/shader/default.frag?");

/***/ }),

/***/ "./src/shader/default.vert":
/*!*********************************!*\
  !*** ./src/shader/default.vert ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision mediump float;\\n#define GLSLIFY 1\\n\\nattribute vec3 color;\\nattribute float opacity;\\nattribute vec3 nextPosition;\\n\\nuniform float time;\\nuniform float noiseAmount;\\nuniform float progress;\\n\\nvarying vec3 vColor;\\nvarying float vOpacity;\\n\\n\\n//\\n// Description : Array and textureless GLSL 2D simplex noise function.\\n//      Author : Ian McEwan, Ashima Arts.\\n//  Maintainer : ijm\\n//     Lastmod : 20110822 (ijm)\\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\\n//               Distributed under the MIT License. See LICENSE file.\\n//               https://github.com/ashima/webgl-noise\\n//\\n\\nvec3 mod289_1_0(vec3 x) {\\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec2 mod289_1_0(vec2 x) {\\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec3 permute_1_1(vec3 x) {\\n  return mod289_1_0(((x*34.0)+1.0)*x);\\n}\\n\\nfloat snoise_1_2(vec2 v)\\n  {\\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\\n                      0.024390243902439); // 1.0 / 41.0\\n// First corner\\n  vec2 i  = floor(v + dot(v, C.yy) );\\n  vec2 x0 = v -   i + dot(i, C.xx);\\n\\n// Other corners\\n  vec2 i1;\\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\\n  //i1.y = 1.0 - i1.x;\\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\\n  // x1 = x0 - i1 + 1.0 * C.xx ;\\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\\n  vec4 x12 = x0.xyxy + C.xxzz;\\n  x12.xy -= i1;\\n\\n// Permutations\\n  i = mod289_1_0(i); // Avoid truncation effects in permutation\\n  vec3 p = permute_1_1( permute_1_1( i.y + vec3(0.0, i1.y, 1.0 ))\\n    + i.x + vec3(0.0, i1.x, 1.0 ));\\n\\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\\n  m = m*m ;\\n  m = m*m ;\\n\\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\\n\\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\\n  vec3 h = abs(x) - 0.5;\\n  vec3 ox = floor(x + 0.5);\\n  vec3 a0 = x - ox;\\n\\n// Normalise gradients implicitly by scaling m\\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\\n\\n// Compute final noise value at P\\n  vec3 g;\\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\\n  return 130.0 * dot(m, g);\\n}\\n\\n\\n\\n\\n\\nvoid main() {\\n\\tvColor = color;\\n\\tvOpacity = opacity;\\n\\n\\tvec3 newPosition = mix(position, nextPosition, progress);\\n\\n\\tnewPosition += vec3(\\n\\t\\tsnoise_1_2(vec2(newPosition.x, time)),\\n\\t\\tsnoise_1_2(vec2(newPosition.y, time)),\\n\\t\\tsnoise_1_2(vec2(newPosition.z, time))\\n\\t) * noiseAmount;\\n\\n\\tgl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/shader/default.vert?");

/***/ })

/******/ });