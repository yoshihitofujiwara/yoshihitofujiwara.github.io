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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Base
 */
var Base = function () {
  /**
   * constructor
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  function Base(name) {
    _classCallCheck(this, Base);

    // props
    this.name = name;
  }

  /**
   * setup
   * @return {[type]} [description]
   */


  _createClass(Base, [{
    key: 'setup',
    value: function setup() {
      console.log('super : ' + this.name);
    }

    /**
     * update
     * @return {[type]} [description]
     */

  }, {
    key: 'update',
    value: function update() {}
  }]);

  return Base;
}();

/* harmony default export */ __webpack_exports__["a"] = (Base);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_Base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_Child__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_utils__ = __webpack_require__(3);
/**
 * scripts.js エントリポイント
 */

// app-es




/*==========================================================================
	init call
==========================================================================*/
// $(function($){
// 	var base = new Base('Base');
// 	var child = new Child('Child', 999);

// 	utils.template();

// 	console.log('-----------');
// 	// alert("2000000000000000000");
// 	// alert("2000000000000000000");
// 	// alert("2000000000000000000");
// 	// alert("2000000000000000000");
// 	base.setup();

// 	console.log('-----------');
// 	child.setup();
// });

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/**
 * @class Child
 * @extend Base
 */

var Child = function (_Base) {
  _inherits(Child, _Base);

  /**
   * constructor
   * @param  {[type]} name [description]
   * @param  {[type]} num [description]
   * @return {[type]}      [description]
   */
  function Child(name, num) {
    _classCallCheck(this, Child);

    var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name));

    _this.num = num;
    return _this;
  }

  /**
   * @override
   * setup
   * @return {[type]} [description]
   */


  _createClass(Child, [{
    key: 'setup',
    value: function setup() {
      _get(Child.prototype.__proto__ || Object.getPrototypeOf(Child.prototype), 'setup', this).call(this);
      console.log('child : ' + this.name + this.num);
    }
  }]);

  return Child;
}(__WEBPACK_IMPORTED_MODULE_0__Base__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Child);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export template */
/**
 * ES6テスト
 * template
 * @return {[type]} [description]
 */
var template = function template() {
	// テンプレート文字列は「`」バッククォート
	var str = '\u3042\n\t\u3044\n\t\u3046';
	console.log(str);

	// 変数の文字列への埋め込み
	var name = '1-10';
	var age = 20;
	var greeting = '\u79C1\u306E\u540D\u524D\u306F' + name + '\u3067\u3059\u3002' + age + '\u6B73\u3067\u3059';
	console.log(greeting);

	// 分割代入
	var name = '1-10',
	    age = 20;

	console.log(name, age);

	// 可変長引数
	var array = [1, 5, 3];
	var max = Math.max.apply(Math, array);
	console.log(max); // 5

	function show1() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		console.log(args);
	}
	show1(1, 2, 3); // [1, 2, 3]


	// 初期値代入
	function show2() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1-10';

		console.log(name);
	}
	show2('1-10 design');
	show2();

	// アロー関数
	var show3 = function show3(text) {
		console.log(text);
	};

	// 引数が一つの時には()を省略可能
	var show4 = function show4(text) {
		console.log(text);
	};

	// また一文の場合、{}とreturnの省略も可能。
	var show5 = function show5(text) {
		return text + ' さようなら';
	};

	var text = show5('こんにちは');
	console.log(text); // こんにちは さようなら


	// thisを束縛
	var counter = {
		count: 0,

		start: function start() {
			var _this = this;

			setTimeout(function () {
				console.log(_this.count++);
			}, 1000);
		}
	};
	counter.start();
};

/***/ })
/******/ ]);