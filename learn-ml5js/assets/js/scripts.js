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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/scripts/class/Base.js":
/*!**************************************!*\
  !*** ./src/js/scripts/class/Base.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\r\n * @class Base\r\n */\nvar Base = function () {\n  /**\r\n   * constructor\r\n   * @param  {[type]} name [description]\r\n   * @return {[type]}      [description]\r\n   */\n  function Base(name) {\n    _classCallCheck(this, Base);\n\n    // props\n    this.name = name;\n  }\n\n  /**\r\n   * setup\r\n   * @return {[type]} [description]\r\n   */\n\n\n  _createClass(Base, [{\n    key: 'setup',\n    value: function setup() {\n      console.log('super : ' + this.name);\n    }\n\n    /**\r\n     * update\r\n     * @return {[type]} [description]\r\n     */\n\n  }, {\n    key: 'update',\n    value: function update() {}\n  }]);\n\n  return Base;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Base);\n\n//# sourceURL=webpack:///./src/js/scripts/class/Base.js?");

/***/ }),

/***/ "./src/js/scripts/class/Child.js":
/*!***************************************!*\
  !*** ./src/js/scripts/class/Child.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ \"./src/js/scripts/class/Base.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n/**\r\n * @class Child\r\n * @extend Base\r\n */\n\nvar Child = function (_Base) {\n  _inherits(Child, _Base);\n\n  /**\r\n   * constructor\r\n   * @param  {[type]} name [description]\r\n   * @param  {[type]} num [description]\r\n   * @return {[type]}      [description]\r\n   */\n  function Child(name, num) {\n    _classCallCheck(this, Child);\n\n    var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name));\n\n    _this.num = num;\n    return _this;\n  }\n\n  /**\r\n   * @override\r\n   * setup\r\n   * @return {[type]} [description]\r\n   */\n\n\n  _createClass(Child, [{\n    key: 'setup',\n    value: function setup() {\n      _get(Child.prototype.__proto__ || Object.getPrototypeOf(Child.prototype), 'setup', this).call(this);\n      console.log('child : ' + this.name + this.num);\n    }\n  }]);\n\n  return Child;\n}(_Base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Child);\n\n//# sourceURL=webpack:///./src/js/scripts/class/Child.js?");

/***/ }),

/***/ "./src/js/scripts/index.js":
/*!*********************************!*\
  !*** ./src/js/scripts/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/Base */ \"./src/js/scripts/class/Base.js\");\n/* harmony import */ var _class_Child__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/Child */ \"./src/js/scripts/class/Child.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ \"./src/js/scripts/utils/utils.js\");\n/**\r\n * scripts.js エントリポイント\r\n */\n\n// libs\n// npm moduleで配布されていないライブラリの場合は、requireでバンドル化\n// コード参考用 jQuery\n// window.$ = window.jQuery = require(\"./libs/jquery-3.1.0.min.js\");\n// console.log(jQuery);\n// import $ from \"jquery\";\n\n// import INK from \"ink-javascript\";\n// require(\"ink-javascript/dist/ink-0.0.1.min.js\");\n\n\n// app-es\n\n\n\n\n// import glsl from \"glslify\";\n// const myFragShader = glsl(`\n// void main () {\n//   gl_FragColor = vec4(1.);\n// }\n// `);\n// console.log(myFragShader);\n// var shader = require(\"../shader/common/default.frag\");\n// console.log(shader);\n\n\n/*==========================================================================\r\n\tinit call\r\n==========================================================================*/\n$(function ($) {\n\tvar base = new _class_Base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Base');\n\tvar child = new _class_Child__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Child', 999);\n\n\t_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"template\"]();\n\n\tconsole.log(INK.queryHashMap());\n\n\tconsole.log('-----------');\n\t// alert(\"2000000000000000000\");\n\t// alert(\"2000000000000000000\");\n\t// alert(\"2000000000000000000\");\n\t// alert(\"2000000000000000000\");\n\tbase.setup();\n\n\tconsole.log('-----------');\n\tchild.setup();\n});\n\n//# sourceURL=webpack:///./src/js/scripts/index.js?");

/***/ }),

/***/ "./src/js/scripts/utils/utils.js":
/*!***************************************!*\
  !*** ./src/js/scripts/utils/utils.js ***!
  \***************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return template; });\n/**\r\n * ES6テスト\r\n * template\r\n * @return {[type]} [description]\r\n */\nvar template = function template() {\n\t// テンプレート文字列は「`」バッククォート\n\tvar str = '\\u3042\\n\\t\\u3044\\n\\t\\u3046';\n\tconsole.log(str);\n\n\t// 変数の文字列への埋め込み\n\tvar name = '1-10';\n\tvar age = 20;\n\tvar greeting = '\\u79C1\\u306E\\u540D\\u524D\\u306F' + name + '\\u3067\\u3059\\u3002' + age + '\\u6B73\\u3067\\u3059';\n\tconsole.log(greeting);\n\n\t// 分割代入\n\tvar name = '1-10',\n\t    age = 20;\n\n\tconsole.log(name, age);\n\n\t// 可変長引数\n\tvar array = [1, 5, 3];\n\tvar max = Math.max.apply(Math, array);\n\tconsole.log(max); // 5\n\n\tfunction show1() {\n\t\tfor (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n\t\t\targs[_key] = arguments[_key];\n\t\t}\n\n\t\tconsole.log(args);\n\t}\n\tshow1(1, 2, 3); // [1, 2, 3]\n\n\n\t// 初期値代入\n\tfunction show2() {\n\t\tvar name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1-10';\n\n\t\tconsole.log(name);\n\t}\n\tshow2('1-10 design');\n\tshow2();\n\n\t// アロー関数\n\tvar show3 = function show3(text) {\n\t\tconsole.log(text);\n\t};\n\n\t// 引数が一つの時には()を省略可能\n\tvar show4 = function show4(text) {\n\t\tconsole.log(text);\n\t};\n\n\t// また一文の場合、{}とreturnの省略も可能。\n\tvar show5 = function show5(text) {\n\t\treturn text + ' さようなら';\n\t};\n\n\tvar text = show5('こんにちは');\n\tconsole.log(text); // こんにちは さようなら\n\n\n\t// thisを束縛\n\tvar counter = {\n\t\tcount: 0,\n\n\t\tstart: function start() {\n\t\t\tvar _this = this;\n\n\t\t\tsetTimeout(function () {\n\t\t\t\tconsole.log(_this.count++);\n\t\t\t}, 1000);\n\t\t}\n\t};\n\tcounter.start();\n};\n\n//# sourceURL=webpack:///./src/js/scripts/utils/utils.js?");

/***/ })

/******/ });