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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/003/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/003/index.js":
/*!*****************************!*\
  !*** ./src/js/003/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_Render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Render */ \"./src/js/utils/Render.js\");\n/* harmony import */ var _utils_OffScreenRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/OffScreenRender */ \"./src/js/utils/OffScreenRender.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar $offScreenCanvas = void 0,\n    offScreenRender = void 0,\n    offScreenTexture = void 0,\n    render = void 0,\n    loader = void 0,\n    texture = void 0,\n    shader = void 0,\n    uniforms = void 0,\n    group = void 0,\n    webCamera = void 0,\n    img = void 0,\n    params = {},\n    is3D = false,\n    width = 1920,\n    height = 1080,\n    size = {\n\twidth: 2,\n\theight: 2\n};\n\nif (AMP.queryHashMap().is3D) {\n\tis3D = true;\n}\n\n/**\r\n * @calss Sketch\r\n */\n\nvar Sketch = function () {\n\t/**\r\n  * constructor\r\n  */\n\tfunction Sketch() {\n\t\tvar _this = this;\n\n\t\t_classCallCheck(this, Sketch);\n\n\t\tloader = new THREE.TextureLoader();\n\n\t\twebCamera = new AMP.WebCamera($('#webcamera')[0], {\n\t\t\tconstraints: {\n\t\t\t\tvideo: {\n\t\t\t\t\twidth: width,\n\t\t\t\t\theight: height\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\twebCamera.setup().on('load', function () {\n\t\t\t// webCamera.play();\n\t\t\t// this.setup();\n\t\t});\n\n\t\trender = new _utils_Render__WEBPACK_IMPORTED_MODULE_0__[\"default\"]($('#canvas_container'), {\n\t\t\tis3D: is3D,\n\t\t\tisController: true\n\t\t});\n\n\t\tloader.load(\"img/photo04.jpg\", function (_texture) {\n\t\t\timg = _texture.image;\n\t\t\ttexture = _texture;\n\t\t\ttexture.minFilter = THREE.LinearFilter;\n\t\t\ttexture.magFilter = THREE.LinearFilter;\n\t\t\ttexture.format = THREE.RGBFormat;\n\n\t\t\t_this.setup();\n\t\t});\n\t}\n\n\t/**\r\n  * renderStart\r\n  */\n\n\n\t_createClass(Sketch, [{\n\t\tkey: 'renderStart',\n\t\tvalue: function renderStart() {\n\t\t\tvar _this2 = this;\n\n\t\t\trender.event.on(\"update\", function () {\n\t\t\t\tuniforms.uTime.value = render.time;\n\t\t\t\tuniforms.uTime2.value = render.time;\n\n\t\t\t\toffScreenTexture.needsUpdate = true;\n\t\t\t\tuniforms.mask.value = offScreenTexture;\n\t\t\t});\n\n\t\t\trender.resize(width, height);\n\t\t\toffScreenRender.resize(width, height);\n\t\t\trender.start();\n\n\t\t\trender.event.on(\"inputImg\", function (_img) {\n\t\t\t\tloader.load(_img.src, function (_texture) {\n\t\t\t\t\timg = _texture.image;\n\t\t\t\t\ttexture = _texture;\n\t\t\t\t\tuniforms.texture.value = texture;\n\t\t\t\t\trender.resize(_img.width, _img.height);\n\t\t\t\t\t_this2.generateGeometry();\n\t\t\t\t});\n\t\t\t});\n\t\t}\n\n\t\t/**\r\n   * setup\r\n   */\n\n\t}, {\n\t\tkey: 'setup',\n\t\tvalue: function setup() {\n\t\t\t// オフスクリーン\n\t\t\t$offScreenCanvas = $(\"#canvas_offscreen\");\n\t\t\toffScreenRender = new _utils_OffScreenRender__WEBPACK_IMPORTED_MODULE_1__[\"default\"]($offScreenCanvas);\n\t\t\toffScreenTexture = new THREE.Texture(offScreenRender.app.renderer.view);\n\n\t\t\tvar webCameraTexture = new THREE.VideoTexture(webCamera.video);\n\t\t\twebCameraTexture.minFilter = THREE.LinearFilter;\n\t\t\twebCameraTexture.magFilter = THREE.LinearFilter;\n\t\t\twebCameraTexture.format = THREE.RGBFormat;\n\n\t\t\tvar textureObj = {\n\t\t\t\ttypes: [\"image\", \"webCamera\"],\n\t\t\t\ttexture: \"image\",\n\t\t\t\timage: texture,\n\t\t\t\twebCamera: webCameraTexture\n\t\t\t};\n\n\t\t\tuniforms = {\n\t\t\t\ttexture: { type: \"t\", value: texture },\n\t\t\t\tmask: { type: \"t\", value: offScreenTexture },\n\t\t\t\tresolution: { type: \"v2\", value: new THREE.Vector2(1920, 1080) },\n\t\t\t\tuTime: { type: \"f\", value: 0.0 },\n\t\t\t\tuTime2: { type: \"f\", value: 0.0 },\n\t\t\t\tuZamount: { type: \"f\", value: 0 },\n\t\t\t\tuIsMask: { type: \"b\", value: false },\n\n\t\t\t\tuColor: { type: \"v4\", value: new THREE.Vector4(1.0, 1.0, 1.0, 1.0) }\n\t\t\t};\n\n\t\t\tvar material = new THREE.ShaderMaterial({\n\t\t\t\tvertexShader: __webpack_require__(/*! ../../shader/sketches/sketch.vert */ \"./src/shader/sketches/sketch.vert\"),\n\t\t\t\tfragmentShader: __webpack_require__(/*! ../../shader/edit/003.frag */ \"./src/shader/edit/003.frag\"),\n\t\t\t\tuniforms: uniforms\n\t\t\t});\n\n\t\t\t// custom material\n\t\t\tmaterial.transparent = true;\n\t\t\tmaterial.blending = THREE.NormalBlending;\n\t\t\tmaterial.side = THREE.DoubleSide;\n\n\t\t\t// dat gui\n\t\t\trender.gui.open();\n\t\t\trender.gui.wireFolder.add(material, \"wireframe\");\n\n\t\t\trender.gui.add(textureObj, \"texture\", textureObj.types).onChange(function (type) {\n\t\t\t\tif (type == \"webCamera\") {\n\t\t\t\t\twebCamera.play();\n\t\t\t\t} else {\n\t\t\t\t\twebCamera.pause();\n\t\t\t\t}\n\t\t\t\tuniforms.texture.value = textureObj[type];\n\t\t\t});\n\n\t\t\trender.gui.add(uniforms.uIsMask, \"value\").name(\"Is Mask\");\n\n\t\t\tparams.Color = [0, 0, 0];\n\t\t\trender.gui.addColor(params, \"Color\");\n\n\t\t\tif (is3D) {\n\t\t\t\tsize.width = width / 150;\n\t\t\t\tsize.height = height / 150;\n\t\t\t}\n\n\t\t\tgroup = new THREE.Group();\n\t\t\tvar geometry = new THREE.PlaneBufferGeometry(size.width, size.width, 1, 1);\n\t\t\tvar lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });\n\t\t\tvar mesh = new THREE.Mesh(geometry, material);\n\n\t\t\tgroup.add(new THREE.LineSegments(geometry, lineMaterial));\n\t\t\tgroup.add(mesh);\n\n\t\t\tparams.widthSegments = 10;\n\t\t\tparams.widthSegments = 10;\n\t\t\tparams.heightSegments = 10;\n\n\t\t\trender.gui.wireFolder.add(params, 'widthSegments', 1, 300).step(1).onChange(this.generateGeometry.bind(this));\n\t\t\trender.gui.wireFolder.add(params, 'heightSegments', 1, 300).step(1).onChange(this.generateGeometry.bind(this));\n\n\t\t\tif (is3D) {\n\t\t\t\trender.gui.wireFolder.add(uniforms.uZamount, 'value').min(0).max(10).step(0.01).name(\"Z Amount\");\n\t\t\t}\n\n\t\t\trender.scene.add(group);\n\n\t\t\tvar mask = new PIXI.Graphics();\n\t\t\tmask.beginFill(0xffffff);\n\t\t\tmask.drawCircle(300, 110, 80);\n\t\t\tmask.endFill();\n\t\t\toffScreenRender.app.stage.addChild(mask);\n\n\t\t\t// render\n\t\t\tthis.renderStart();\n\t\t\tthis.generateGeometry();\n\n\t\t\t// this.__hoge();\n\t\t}\n\n\t\t// __hoge(){\n\t\t// \t// offScene\n\t\t// \tvar geometry = new THREE.CircleGeometry(1, 90);\n\t\t// \tvar material = new THREE.MeshBasicMaterial({ color: 0xffff00 });\n\t\t// \tvar circle = new THREE.Mesh(geometry, material);\n\n\t\t// \t// console.log(circle);\n\n\t\t// \tcircle.scale.set(1.0 * 0.1, width / height * 0.1, 0.0);\n\t\t// \toffScene.add(circle);\n\t\t// }\n\n\n\t\t/**\r\n   * [generateGeometry description]\r\n   * @return {[type]} [description]\r\n   */\n\n\t}, {\n\t\tkey: 'generateGeometry',\n\t\tvalue: function generateGeometry() {\n\t\t\tif (is3D) {\n\t\t\t\tsize.width = img.width / 150;\n\t\t\t\tsize.height = img.height / 150;\n\t\t\t} else {\n\t\t\t\tsize.width = 2;\n\t\t\t\tsize.height = 2;\n\t\t\t}\n\n\t\t\tvar geometry = new THREE.PlaneGeometry(size.width, size.height, params.widthSegments, params.heightSegments);\n\t\t\tgroup.children[0].geometry.dispose();\n\t\t\tgroup.children[1].geometry.dispose();\n\t\t\tgroup.children[0].geometry = new THREE.WireframeGeometry(geometry);\n\t\t\tgroup.children[1].geometry = geometry;\n\t\t}\n\t}]);\n\n\treturn Sketch;\n}();\n\n/*==========================================================================\r\n\tDOM READY\r\n==========================================================================*/\n\n\n$(function () {\n\tnew Sketch();\n});\n\n//# sourceURL=webpack:///./src/js/003/index.js?");

/***/ }),

/***/ "./src/js/utils/OffScreenRender.js":
/*!*****************************************!*\
  !*** ./src/js/utils/OffScreenRender.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar OffScreenRender = function () {\n\t/**\r\n  * constructor\r\n  * @param  {jQuery} $container canvas container\r\n  * @param  {Object} oprions\r\n  */\n\tfunction OffScreenRender($canvas, options) {\n\t\t_classCallCheck(this, OffScreenRender);\n\n\t\tvar _options = $.extend(true, {\n\t\t\twidth: 600,\n\t\t\theight: 480\n\t\t}, options);\n\n\t\tthis.app = new PIXI.Application({\n\t\t\twidth: _options.width,\n\t\t\theight: _options.height,\n\t\t\tview: $canvas[0],\n\t\t\tantialias: true\n\t\t\t// resolution: devicePixelRatio\n\t\t\t// preserveDrawingBuffer: true,\n\t\t\t// backgroundColor: 0xff9900\n\t\t\t// transparent: true,\n\t\t\t// resolution: 1,\n\t\t});\n\t}\n\n\t/**\r\n  * start\r\n  */\n\n\n\t_createClass(OffScreenRender, [{\n\t\tkey: \"start\",\n\t\tvalue: function start() {}\n\n\t\t/**\r\n   * stop\r\n   */\n\n\t}, {\n\t\tkey: \"stop\",\n\t\tvalue: function stop() {}\n\n\t\t/**\r\n   * update\r\n   */\n\n\t}, {\n\t\tkey: \"update\",\n\t\tvalue: function update() {}\n\n\t\t/**\r\n   * render description\r\n   */\n\n\t}, {\n\t\tkey: \"render\",\n\t\tvalue: function render() {}\n\n\t\t/**\r\n   * clear\r\n   */\n\n\t}, {\n\t\tkey: \"clear\",\n\t\tvalue: function clear() {\n\t\t\tthis.app.removeChildren();\n\t\t}\n\n\t\t/**\r\n   * resize\r\n   */\n\n\t}, {\n\t\tkey: \"resize\",\n\t\tvalue: function resize(width, height) {\n\t\t\tthis.app.renderer.resize(width, height);\n\t\t\t// this.app.renderer.width = width;\n\t\t\t// this.app.renderer.height = height;\n\t\t}\n\t}]);\n\n\treturn OffScreenRender;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OffScreenRender);\n\n//# sourceURL=webpack:///./src/js/utils/OffScreenRender.js?");

/***/ }),

/***/ "./src/js/utils/Render.js":
/*!********************************!*\
  !*** ./src/js/utils/Render.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Render = function () {\n\t/**\r\n  * constructor\r\n  * @param  {jQuery} $container canvas container\r\n  * @param  {Object} oprions\r\n  */\n\tfunction Render($container, options) {\n\t\tvar _this = this;\n\n\t\t_classCallCheck(this, Render);\n\n\t\tthis.$container = $container;\n\t\tthis.width = 600;\n\t\tthis.height = 480;\n\n\t\tthis.options = $.extend(true, {\n\t\t\tis3D: false,\n\t\t\tisController: false,\n\t\t\tisAxis: false,\n\t\t\tisGui: true\n\t\t}, options);\n\n\t\tthis.startTime = null;\n\t\tthis.time = null;\n\n\t\t// event: [start, stop, resize, update]\n\t\tthis.event = new AMP.Events();\n\n\t\tthis.isDebug = -1 < location.href.indexOf('http://localhost');\n\n\t\t// stats\n\t\tthis.stats = new Stats();\n\t\tthis.$container[0].appendChild(this.stats.dom);\n\n\t\tif (this.isDebug) {\n\t\t\t$(this.stats.domElement).css({ display: 'block' });\n\t\t} else {\n\t\t\t$(this.stats.domElement).css({ display: 'none' });\n\t\t}\n\n\t\t// gui\n\t\tif (this.options.isGui) {\n\t\t\tthis.gui = new dat.GUI();\n\t\t\tthis.gui.commonFolder = this.gui.addFolder(\"common\");\n\t\t\tthis.gui.wireFolder = this.gui.addFolder(\"wire\");\n\n\t\t\tif (!AMP.hasHash(\"guiopen\")) {\n\t\t\t\tthis.gui.close();\n\t\t\t}\n\t\t\tthis.gui.params = {};\n\n\t\t\tthis.gui.params.stats = this.isDebug;\n\n\t\t\tthis.gui.commonFolder.add(this.gui.params, 'stats').name('FPS Metor').onChange(function () {\n\t\t\t\tif (_this.gui.params.stats) {\n\t\t\t\t\t$(_this.stats.domElement).css('display', 'block');\n\t\t\t\t} else {\n\t\t\t\t\t$(_this.stats.domElement).css('display', 'none');\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tif (this.isDebug) {\n\t\t\t\tthis.gui.open();\n\t\t\t}\n\t\t}\n\n\t\t// input file\n\t\tvar $file = $(\"#file\");\n\t\tif ($file[0]) {\n\t\t\tvar fileReader = new FileReader(),\n\t\t\t    img = new Image();\n\n\t\t\t$file.change(function () {\n\t\t\t\tif (this.files && this.files[0] && this.files[0].type.indexOf(\"image/\") > -1) {\n\t\t\t\t\tfileReader.readAsDataURL(this.files[0]);\n\t\t\t\t}\n\t\t\t\t$(this).val(\"\");\n\t\t\t});\n\n\t\t\tfileReader.addEventListener('load', function (event) {\n\t\t\t\timg.src = event.target.result;\n\t\t\t\t_this.event.trigger(\"inputImg\", img);\n\t\t\t});\n\n\t\t\tthis.gui.params.inputFile = function () {\n\t\t\t\t$file.click();\n\t\t\t};\n\t\t\tthis.gui.commonFolder.add(this.gui.params, \"inputFile\");\n\t\t}\n\n\t\tthis._animationId = null;\n\n\t\tthis.renderer = new THREE.WebGLRenderer({\n\t\t\tpreserveDrawingBuffer: true\n\t\t});\n\t\tthis.renderer.setClearColor(0x000000);\n\t\t// this.renderer.setPixelRatio(window.devicePixelRatio);\n\t\tthis.renderer.setPixelRatio(1);\n\t\t// this.renderer.setSize(this.width, this.height);\n\t\tthis.scene = new THREE.Scene();\n\n\t\t// saveFile\n\t\tfunction Base64toBlob(base64) {\n\t\t\tvar tmp = base64.split(',');\n\t\t\tvar data = atob(tmp[1]);\n\t\t\tvar mime = tmp[0].split(':')[1].split(';')[0];\n\t\t\tvar buf = new Uint8Array(data.length);\n\t\t\tfor (var i = 0; i < data.length; i++) {\n\t\t\t\tbuf[i] = data.charCodeAt(i);\n\t\t\t}\n\t\t\tvar blob = new Blob([buf], { type: mime });\n\t\t\treturn blob;\n\t\t}\n\n\t\tfunction saveBlob(blob, fileName) {\n\t\t\tvar url = window.URL || window.webkitURL;\n\t\t\tvar dataUrl = url.createObjectURL(blob);\n\t\t\tvar event = document.createEvent(\"MouseEvents\");\n\t\t\tevent.initMouseEvent(\"click\", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);\n\t\t\tvar a = document.createElementNS(\"http://www.w3.org/1999/xhtml\", \"a\");\n\t\t\ta.href = dataUrl;\n\t\t\ta.download = fileName;\n\t\t\ta.dispatchEvent(event);\n\t\t}\n\n\t\tthis.gui.params.saveFile = function () {\n\t\t\tvar base64 = _this.renderer.domElement.toDataURL();\n\t\t\tvar blob = Base64toBlob(base64);\n\t\t\tsaveBlob(blob, \"img\" + $.now() + \".jpg\");\n\t\t};\n\n\t\tthis.gui.commonFolder.add(this.gui.params, \"saveFile\");\n\n\t\t// Camera: 2D or 3D\n\t\tif (this.options.is3D) {\n\t\t\tthis.camera = new THREE.PerspectiveCamera(90, this.width / this.height, 0.1, 1000);\n\t\t\tthis.camera.position.set(0, 0, 5);\n\t\t\tthis.camera.aspect = this.width / this.height;\n\n\t\t\tif (this.options.isController) {\n\t\t\t\tthis.controller = new THREE.OrbitControls(this.camera, this.renderer.domElement);\n\t\t\t\tthis.controller.autoRotate = false;\n\t\t\t\tthis.controller.autoRotateSpeed = 5.0;\n\t\t\t}\n\t\t} else {\n\t\t\tthis.camera = new THREE.Camera();\n\t\t\t// this.camera = new THREE.OrthographicCamera(this.width/-2,this.width/2,this.height/2,this.height/-2, 0.1 , 10000);\n\t\t\t// this.camera.up.set(0,0,1);\n\t\t\t// this.camera.position.z = 1;\n\t\t}\n\n\t\t// AxisHelper\n\t\tif (this.options.isAxis) {\n\t\t\tthis.axis = new THREE.AxisHelper(1000);\n\t\t\tthis.scene.add(this.axis);\n\t\t}\n\n\t\tthis.$container[0].appendChild(this.renderer.domElement);\n\n\t\t// @resize\n\t\t// $(window).resize(this.resize.bind(this));\n\t}\n\n\t/**\r\n  * start\r\n  */\n\n\n\t_createClass(Render, [{\n\t\tkey: 'start',\n\t\tvalue: function start() {\n\t\t\tthis.startTime = AMP.now();\n\t\t\tcancelAnimationFrame(this._animationId);\n\t\t\tthis.event.trigger('start', this);\n\t\t\tthis.update();\n\t\t}\n\n\t\t/**\r\n   * stop\r\n   */\n\n\t}, {\n\t\tkey: 'stop',\n\t\tvalue: function stop() {\n\t\t\tcancelAnimationFrame(this._animationId);\n\t\t\tthis.event.trigger('stop', this);\n\t\t}\n\n\t\t/**\r\n   * update\r\n   */\n\n\t}, {\n\t\tkey: 'update',\n\t\tvalue: function update() {\n\t\t\tthis.time = (AMP.now() - this.startTime) / 1000;\n\t\t\tthis._animationId = requestAnimationFrame(this.update.bind(this));\n\n\t\t\tthis.event.trigger('update', this);\n\n\t\t\tif (this.controller) {\n\t\t\t\tthis.controller.update();\n\t\t\t}\n\n\t\t\tthis.render();\n\n\t\t\tif (this.gui.params.stats) {\n\t\t\t\tthis.stats.update();\n\t\t\t}\n\t\t}\n\n\t\t/**\r\n   * render description\r\n   */\n\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tthis.renderer.render(this.scene, this.camera);\n\t\t}\n\n\t\t/**\r\n   * resize\r\n   */\n\n\t}, {\n\t\tkey: 'resize',\n\t\tvalue: function resize(width, height) {\n\t\t\tthis.width = width;\n\t\t\tthis.height = height;\n\n\t\t\tthis.renderer.setSize(this.width, this.height);\n\n\t\t\tif (this.options.is3D) {\n\t\t\t\tthis.camera.aspect = this.width / this.height;\n\t\t\t\tthis.camera.updateProjectionMatrix();\n\t\t\t} else {\n\t\t\t\t// this.camera.left = -this.width / 2;\n\t\t\t\t// this.camera.right = this.width / 2;\n\t\t\t\t// this.camera.top = this.height / 2;\n\t\t\t\t// this.camera.bottom = -this.height / 2;\n\t\t\t}\n\t\t\tthis.event.trigger('resize', this);\n\t\t}\n\t}]);\n\n\treturn Render;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Render);\n\n//# sourceURL=webpack:///./src/js/utils/Render.js?");

/***/ }),

/***/ "./src/shader/common/define.glsl":
/*!***************************************!*\
  !*** ./src/shader/common/define.glsl ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"#define GLSLIFY 1\\n\\n\\n\\n#define PI 3.14159265358979323846\\n#define HARF_PI (PI / 2.0)\\n#define TWO_PI (PI * 2.0)\\n\\n#define DEG_TO_RAD (PI / 180.0)\\n#define RAD_TO_DEG (180.0 / PI)\\n\\n\\n\\n#define LUMINANCE_R 0.298912\\n#define LUMINANCE_G 0.586611\\n#define LUMINANCE_B 0.114478\\n\\n\\n#define DELTA (1.0 / 60.0)\\nvec3 LUMINANCE = vec3(LUMINANCE_R, LUMINANCE_G, LUMINANCE_B);\\n\"\n\n//# sourceURL=webpack:///./src/shader/common/define.glsl?");

/***/ }),

/***/ "./src/shader/edit/003.frag":
/*!**********************************!*\
  !*** ./src/shader/edit/003.frag ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"precision mediump float;\\n#define GLSLIFY 1\\n\\n\" + __webpack_require__(/*! ../common/define.glsl */ \"./src/shader/common/define.glsl\") + \"\\n\\n\\n\\n\\nvarying vec2 vUv;\\n\\nuniform sampler2D texture;\\nuniform sampler2D mask;\\nuniform float uTime;\\nuniform vec2 resolution;\\n\\n\\nuniform vec4 uColor;\\nuniform bool uIsMask;\\n\\n\\n\\n\\n\\n\\n\\nvoid main() {\\n\\tvec4 color = texture2D( texture, vUv );\\n\\tvec4 maskColor = texture2D( mask, vUv );\\n\\n\\t\\n\\t\\t\\n\\t\\t\\n\\t\\t\\n\\t\\t\\n\\t\\n\\n\\tif(uIsMask){\\n\\t\\t\\n\\t\\tgl_FragColor = color * maskColor;\\n\\t} else {\\n\\n\\t\\tgl_FragColor = color ;\\n\\t}\\n\\t\\n\\n}\\n\\n\"\n\n//# sourceURL=webpack:///./src/shader/edit/003.frag?");

/***/ }),

/***/ "./src/shader/sketches/sketch.vert":
/*!*****************************************!*\
  !*** ./src/shader/sketches/sketch.vert ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"#define GLSLIFY 1\\n\" + __webpack_require__(/*! ../common/define.glsl */ \"./src/shader/common/define.glsl\") + \"\\n\\n\\n\\n\\nvarying vec2 vUv;\\n\\n\\nuniform float uZamount;\\nuniform float uRotationZ;\\nuniform float uTime2;\\n\\n\\n\\n\\n\\n//\\n// Description : Array and textureless GLSL 2D simplex noise function.\\n//      Author : Ian McEwan, Ashima Arts.\\n//  Maintainer : ijm\\n//     Lastmod : 20110822 (ijm)\\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\\n//               Distributed under the MIT License. See LICENSE file.\\n//               https://github.com/ashima/webgl-noise\\n//\\n\\nvec3 mod289_1_0(vec3 x) {\\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec2 mod289_1_0(vec2 x) {\\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec3 permute_1_1(vec3 x) {\\n  return mod289_1_0(((x*34.0)+1.0)*x);\\n}\\n\\nfloat snoise_1_2(vec2 v)\\n  {\\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\\n                      0.024390243902439); // 1.0 / 41.0\\n// First corner\\n  vec2 i  = floor(v + dot(v, C.yy) );\\n  vec2 x0 = v -   i + dot(i, C.xx);\\n\\n// Other corners\\n  vec2 i1;\\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\\n  //i1.y = 1.0 - i1.x;\\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\\n  // x1 = x0 - i1 + 1.0 * C.xx ;\\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\\n  vec4 x12 = x0.xyxy + C.xxzz;\\n  x12.xy -= i1;\\n\\n// Permutations\\n  i = mod289_1_0(i); // Avoid truncation effects in permutation\\n  vec3 p = permute_1_1( permute_1_1( i.y + vec3(0.0, i1.y, 1.0 ))\\n    + i.x + vec3(0.0, i1.x, 1.0 ));\\n\\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\\n  m = m*m ;\\n  m = m*m ;\\n\\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\\n\\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\\n  vec3 h = abs(x) - 0.5;\\n  vec3 ox = floor(x + 0.5);\\n  vec3 a0 = x - ox;\\n\\n// Normalise gradients implicitly by scaling m\\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\\n\\n// Compute final noise value at P\\n  vec3 g;\\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\\n  return 130.0 * dot(m, g);\\n}\\n\\n\\n\\n\\n\\n\\n\\n\\nmat4 rotationMatrix(vec3 axis, float angle)\\n{\\n  axis = normalize(axis);\\n  float s = sin(angle);\\n  float c = cos(angle);\\n  float oc = 1.0 - c;\\n\\n  return mat4(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\\n    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\\n    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\\n    0.0,                                0.0,                                0.0,                                1.0);\\n}\\n\\n\\n\\n\\n\\nvoid main(){\\n  vUv = uv;\\n\\n  vec3 _position = position;\\n\\n  if(uZamount == 0.0){\\n    \\n    \\n    \\n    \\n    \\n    \\n    \\n    \\n    \\n    \\n\\n\\n  } else {\\n    \\n    _position.z = snoise_1_2(_position.xy*(uTime2*0.1)) * uZamount;\\n  }\\n\\n  \\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(_position, 1.0);\\n}\\n\"\n\n//# sourceURL=webpack:///./src/shader/sketches/sketch.vert?");

/***/ })

/******/ });