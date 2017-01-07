/*!
 * svg.js - A lightweight library for manipulating and animating SVG.
 * @version 2.3.6
 * https://svgdotjs.github.io/
 * 
 * @copyright Wout Fierens <wout@mick-wout.com>
 * @license MIT
 * 
 * BUILT: Fri Jan 06 2017 20:27:57 GMT-0600 (Central Standard Time)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SVG"] = factory();
	else
		root["SVG"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ids_js__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(exports, "ns", function() { return ns; });
/* harmony export (binding) */ __webpack_require__.d(exports, "xmlns", function() { return xmlns; });
/* harmony export (binding) */ __webpack_require__.d(exports, "xlink", function() { return xlink; });
/* harmony export (binding) */ __webpack_require__.d(exports, "svgjs", function() { return svgjs; });
/* harmony export (binding) */ __webpack_require__.d(exports, "supported", function() { return supported; });
/* harmony export (immutable) */ exports["create"] = create;
/* harmony export (immutable) */ exports["extend"] = extend;
/* harmony export (immutable) */ exports["invent"] = invent;
/* harmony export (immutable) */ exports["adopt"] = adopt;
/* harmony export (binding) */ __webpack_require__.d(exports, "parser", function() { return parser; });
/* harmony export (immutable) */ exports["prepare"] = prepare;




var svg_Set, Doc, Nested, Container, Gradient, Element, SVG;
__webpack_require__(28).callbacks.push(function () {
  svg_Set = __webpack_require__(35).default;
  Doc = __webpack_require__(18).default;
  Nested = __webpack_require__(65).default;
  Container = __webpack_require__(4).default;
  Gradient = __webpack_require__(40).default;
  Element = __webpack_require__(5).default;

  // NOTE: dont import the whole library, maybe have a hash array of element types
  SVG = __webpack_require__(64);

  // when the document loads, prepare the parser
  document.addEventListener('DOMContentLoaded', function () {
    if (!parser.draw) prepare();
  }, !1);
});

// Default namespaces
var ns = 'http://www.w3.org/2000/svg';
var xmlns = 'http://www.w3.org/2000/xmlns/';
var xlink = 'http://www.w3.org/1999/xlink';
var svgjs = 'http://svgjs.com/svgjs';

// Svg support test
var supported = function () {
  return !!document.createElementNS && !!document.createElementNS(ns, 'svg');
}();

// Method for element creation
function create(name) {
  // create element
  var element = document.createElementNS(ns, name);

  // apply unique id
  element.setAttribute('id', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ids_js__["eid"])(name));

  return element;
}

// Method for extending objects
function extend() {

  // Get object with extensions
  for (var methods, key, i, _len = arguments.length, modules = Array(_len), _key = 0; _key < _len; _key++) {
    modules[_key] = arguments[_key];
  }

  methods = modules.pop();

  for (i = modules.length - 1; i >= 0; i--) {
    if (modules[i]) for (key in methods) {
      modules[i].prototype[key] = methods[key];
    }
  } // Make sure SVG.Set inherits any newly added methods
  if (svg_Set && svg_Set.inherit) svg_Set.inherit();
}

// Invent new element
function invent(config) {
  // Create element initializer
  var initializer = typeof config.create == 'function' ? config.create : function () {
    this.constructor.call(this, create(config.create));
  };

  // Inherit prototype
  if (config.inherit) initializer.prototype = new config.inherit();

  // Extend with methods
  if (config.extend) extend(initializer, config.extend);

  // Attach construct method to parent
  if (config.construct) extend(config.parent || Container, config.construct);

  return initializer;
}

// Adopt existing svg elements
function adopt(node) {
  // check for presence of node
  if (!node) return null;

  // make sure a node isn't already adopted
  if (node.instance) return node.instance;

  // initialize variables
  var element;

  // adopt with element-specific settings
  if (node.nodeName == 'svg') element = node.parentNode instanceof SVGElement ? new Nested() : new Doc();else if (node.nodeName == 'linearGradient') element = new Gradient('linear');else if (node.nodeName == 'radialGradient') element = new Gradient('radial');else if (SVG[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_js__["b" /* capitalize */])(node.nodeName)]) element = new SVG[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_js__["b" /* capitalize */])(node.nodeName)]();else element = new Element(node);

  // ensure references
  element.type = node.nodeName;
  element.node = node;
  node.instance = element;

  // SVG.Class specific preparations
  if (element instanceof Doc) element.namespace().defs();

  // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
  element.setData(JSON.parse(node.getAttribute('svgjs:data')) || {});

  return element;
}

var parser = {};

// Initialize parsing element
function prepare(element) {
  // Select document body and create invisible svg element
  var body = document.getElementsByTagName('body')[0],
      draw = (body ? new Doc(body) : new Doc(document.documentElement).nested()).size(2, 0);

  // Create parser object
  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(parser, {
    body: body || document.documentElement,
    draw: draw.style('opacity:0;position:fixed;left:100%;top:100%;overflow:hidden'),
    poly: draw.polyline().node,
    path: draw.path().node,
    native: create('svg')
  });
}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(104);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(102);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parent_js__ = __webpack_require__(14);





var Container = function (_Parent) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Container, _Parent);

  function Container() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Container);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Parent.apply(this, arguments));
  }

  return Container;
}(__WEBPACK_IMPORTED_MODULE_3__parent_js__["a" /* default */]);

/* harmony default export */ exports["default"] = Container;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__number_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__default_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_js__ = __webpack_require__(6);








var Doc;
__webpack_require__(28).callbacks.push(function () {
  Doc = __webpack_require__(18).default;
});

var Element = function () {
  function Element(node) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Element);

    // make stroke value accessible dynamically
    this._stroke = __WEBPACK_IMPORTED_MODULE_4__default_js__["a" /* default */].attrs.stroke;

    // initialize data object
    this.dom = {};

    // create circular reference
    if (this.node = node) {
      this.type = node.nodeName;
      this.node.instance = this;

      // store current attribute value
      this._stroke = node.getAttribute('stroke') || this._stroke;
    }
  }

  // Move over x-axis


  Element.prototype.x = function x(_x) {
    return this.attr('x', _x);
  };
  // Move over y-axis


  Element.prototype.y = function y(_y) {
    return this.attr('y', _y);
  };
  // Move by center over x-axis


  Element.prototype.cx = function cx(x) {
    return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2);
  };
  // Move by center over y-axis


  Element.prototype.cy = function cy(y) {
    return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2);
  };
  // Move element to given x and y values


  Element.prototype.move = function move(x, y) {
    return this.x(x).y(y);
  };
  // Move element by its center


  Element.prototype.center = function center(x, y) {
    return this.cx(x).cy(y);
  };
  // Set width of element


  Element.prototype.width = function width(_width) {
    return this.attr('width', _width);
  };
  // Set height of element


  Element.prototype.height = function height(_height) {
    return this.attr('height', _height);
  };
  // Set element size to given width and height


  Element.prototype.size = function size(width, height) {
    var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_js__["k" /* proportionalSize */])(this, width, height);

    return this.width(new __WEBPACK_IMPORTED_MODULE_3__number_js__["default"](p.width)).height(new __WEBPACK_IMPORTED_MODULE_3__number_js__["default"](p.height));
  };
  // Clone element


  Element.prototype.clone = function clone() {
    // clone element and assign new id
    var clone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_js__["a" /* assignNewId */])(this.node.cloneNode(!0));

    // insert the clone in the given parent or after myself
    if (parent) parent.add(clone);else this.after(clone);

    return clone;
  };
  // Remove element


  Element.prototype.remove = function remove() {
    if (this.parent()) this.parent().removeElement(this);

    return this;
  };
  // Replace element


  Element.prototype.replace = function replace(element) {
    this.after(element).remove();

    return element;
  };
  // Add element to given container and return self


  Element.prototype.addTo = function addTo(parent) {
    return parent.put(this);
  };
  // Add element to given container and return container


  Element.prototype.putIn = function putIn(parent) {
    return parent.add(this);
  };
  // Get / set id


  Element.prototype.id = function id(_id) {
    return this.attr('id', _id);
  };
  // Checks whether the given point inside the bounding box of the element


  Element.prototype.inside = function inside(x, y) {
    var box = this.bbox();

    return x > box.x && y > box.y && x < box.x + box.width && y < box.y + box.height;
  };
  // Show element


  Element.prototype.show = function show() {
    return this.style('display', '');
  };
  // Hide element


  Element.prototype.hide = function hide() {
    return this.style('display', 'none');
  };
  // Is element visible?


  Element.prototype.visible = function visible() {
    return this.style('display') != 'none';
  };
  // Return id on string conversion


  Element.prototype.toString = function toString() {
    return this.attr('id');
  };
  // Return array of classes on the node


  Element.prototype.classes = function classes() {
    var attr = this.attr('class');

    return attr == null ? [] : attr.trim().split(/\s+/);
  };
  // Return true if class exists on the node, false otherwise


  Element.prototype.hasClass = function hasClass(name) {
    return this.classes().indexOf(name) != -1;
  };
  // Add class to the node


  Element.prototype.addClass = function addClass(name) {
    if (!this.hasClass(name)) {
      var array = this.classes();
      array.push(name);
      this.attr('class', array.join(' '));
    }

    return this;
  };
  // Remove class from the node


  Element.prototype.removeClass = function removeClass(name) {
    if (this.hasClass(name)) {
      this.attr('class', this.classes().filter(function (c) {
        return c != name;
      }).join(' '));
    }

    return this;
  };
  // Toggle the presence of a class on the node


  Element.prototype.toggleClass = function toggleClass(name) {
    return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);
  };
  // Returns the parent element instance


  Element.prototype.parent = function parent(type) {
    var parent = this;

    // check for parent
    if (!parent.node.parentNode) return null;

    // get parent element
    parent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["adopt"])(parent.node.parentNode);

    if (!type) return parent;

    // loop trough ancestors if type is given
    while (parent && parent.node instanceof SVGElement) {
      if (typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent;
      parent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["adopt"])(parent.node.parentNode);
    }
  };
  // Get parent document


  Element.prototype.doc = function doc() {
    return this instanceof Doc ? this : this.parent(Doc);
  };
  // return array of all ancestors of given type up to the root svg


  Element.prototype.parents = function parents(type) {
    var parents = [],
        parent = this;

    do {
      parent = parent.parent(type);
      if (!parent || !parent.node) break;

      parents.push(parent);
    } while (parent.parent);

    return parents;
  };
  // matches the element vs a css selector


  Element.prototype.matches = function matches(selector) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_js__["o" /* matches */])(this.node, selector);
  };
  // Returns the svg node to call native svg methods on it


  Element.prototype.native = function native() {
    return this.node;
  };
  // Import raw svg


  Element.prototype.svg = function svg(_svg) {
    // create temporary holder
    var well = document.createElement('svg');

    // act as a setter if svg is given
    if (_svg && this instanceof SVG.Parent) {
      // dump raw svg
      well.innerHTML = '<svg>' + _svg.replace(/\n/, '').replace(/<(\w+)([^<]+?)\/>/g, '<$1$2></$1>') + '</svg>';

      // transplant nodes
      for (var i = 0, il = well.firstChild.childNodes.length; i < il; i++) {
        this.node.appendChild(well.firstChild.firstChild);
      } // otherwise act as a getter
    } else {
      // create a wrapping svg element in case of partial content
      well.appendChild(_svg = document.createElement('svg'));

      // write svgjs data to the dom
      this.writeDataToDom();

      // insert a copy of this node
      _svg.appendChild(this.node.cloneNode(!0));

      // return target element
      return well.innerHTML.replace(/^<svg>/, '').replace(/<\/svg>$/, '');
    }

    return this;
  };
  // write svgjs data to the dom


  Element.prototype.writeDataToDom = function writeDataToDom() {
    // dump variables recursively
    if (this.each || this.lines) {
      var fn = this.each ? this : this.lines();
      fn.each(function () {
        this.writeDataToDom();
      });
    }

    // remove previously set data
    this.node.removeAttribute('svgjs:data');

    if (__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(this.dom).length) this.node.setAttribute('svgjs:data', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.dom)); // see #428

    return this;
  };
  // set given data to the elements data property


  Element.prototype.setData = function setData(o) {
    this.dom = o;
    return this;
  };

  Element.prototype.is = function (_is) {
    function is(_x2) {
      return _is.apply(this, arguments);
    }

    is.toString = function () {
      return _is.toString();
    };

    return is;
  }(function (obj) {
    return is(this, obj);
  });

  return Element;
}();

/* harmony default export */ exports["default"] = Element;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export is */
/* harmony export (immutable) */ exports["o"] = matches;
/* harmony export (immutable) */ exports["p"] = camelCase;
/* harmony export (immutable) */ exports["b"] = capitalize;
/* harmony export (immutable) */ exports["c"] = fullHex;
/* harmony export (immutable) */ exports["d"] = compToHex;
/* harmony export (immutable) */ exports["k"] = proportionalSize;
/* harmony export (immutable) */ exports["h"] = deltaTransformPoint;
/* harmony export (immutable) */ exports["e"] = arrayToMatrix;
/* harmony export (immutable) */ exports["i"] = parseMatrix;
/* harmony export (immutable) */ exports["n"] = ensureCentre;
/* harmony export (immutable) */ exports["f"] = stringToMatrix;
/* unused harmony export at */
/* harmony export (immutable) */ exports["l"] = arrayToString;
/* harmony export (immutable) */ exports["a"] = assignNewId;
/* harmony export (immutable) */ exports["m"] = fullBox;
/* harmony export (immutable) */ exports["j"] = idFromReference;
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return abcdef; });
var Matrix, regex, svg_Number, Color, utils, adopt, eid;
__webpack_require__(28).callbacks.push(function () {
  Matrix = __webpack_require__(19).default;
  regex = __webpack_require__(10).default;
  svg_Number = __webpack_require__(8).default;
  utils = __webpack_require__(20).default;
  Color = __webpack_require__(29).default;
  adopt = __webpack_require__(0).adopt;
  eid = __webpack_require__(41).eid;
});

function is(el, obj) {
  return el instanceof obj;
}

// tests if a given selector matches an element
function matches(el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
}

// Convert dash-separated-string to camelCase
function camelCase(s) {
  return s.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  });
}

// Capitalize first letter of a string
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Ensure to six-based hex
function fullHex(hex) {
  return hex.length == 4 ? ['#', hex.substring(1, 2), hex.substring(1, 2), hex.substring(2, 3), hex.substring(2, 3), hex.substring(3, 4), hex.substring(3, 4)].join('') : hex;
}

// Component to hex value
function compToHex(comp) {
  var hex = comp.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

// Calculate proportional width and height values when necessary
function proportionalSize(element, width, height) {
  if (width == null || height == null) {
    var box = element.bbox();

    if (width == null) width = box.width / box.height * height;else if (height == null) height = box.height / box.width * width;
  }

  return {
    width: width,
    height: height
  };
}

// Delta transform point
function deltaTransformPoint(matrix, x, y) {
  return {
    x: x * matrix.a + y * matrix.c + 0,
    y: x * matrix.b + y * matrix.d + 0
  };
}

// Map matrix array to object
function arrayToMatrix(a) {
  return { a: a[0], b: a[1], c: a[2], d: a[3], e: a[4], f: a[5] };
}

// Parse matrix if required
function parseMatrix(matrix) {
  if (!(matrix instanceof Matrix)) matrix = new Matrix(matrix);

  return matrix;
}

// Add centre point to transform object
function ensureCentre(o, target) {
  o.cx = o.cx == null ? target.bbox().cx : o.cx;
  o.cy = o.cy == null ? target.bbox().cy : o.cy;
}

// Convert string to matrix
function stringToMatrix(source) {
  // remove matrix wrapper and split to individual numbers
  source = source.replace(regex.whitespace, '').replace(regex.matrix, '').split(regex.matrixElements);

  // convert string values to floats and convert to a matrix-formatted object
  return arrayToMatrix(utils.map(source, function (n) {
    return parseFloat(n);
  }));
}

// Calculate position according to from and to
function at(o, pos) {
  // number recalculation (don't bother converting to SVG.Number for performance reasons)
  return typeof o.from == 'number' ? o.from + (o.to - o.from) * pos :

  // instance recalculation
  o instanceof Color || o instanceof svg_Number || o instanceof Matrix ? o.at(pos) :

  // for all other values wait until pos has reached 1 to return the final value
  pos < 1 ? o.from : o.to;
}

// PathArray Helpers
function arrayToString(a) {
  for (var i = 0, il = a.length, s = ''; i < il; i++) {
    s += a[i][0];

    if (a[i][1] != null) {
      s += a[i][1];

      if (a[i][2] != null) {
        s += ' ';
        s += a[i][2];

        if (a[i][3] != null) {
          s += ' ';
          s += a[i][3];
          s += ' ';
          s += a[i][4];

          if (a[i][5] != null) {
            s += ' ';
            s += a[i][5];
            s += ' ';
            s += a[i][6];

            if (a[i][7] != null) {
              s += ' ';
              s += a[i][7];
            }
          }
        }
      }
    }
  }

  return s + ' ';
}

// Deep new id assignment
function assignNewId(node) {
  // do the same for SVG child nodes as well
  for (var i = node.childNodes.length - 1; i >= 0; i--) {
    if (node.childNodes[i] instanceof SVGElement) assignNewId(node.childNodes[i]);
  }return adopt(node).id(eid(node.nodeName));
}

// Add more bounding box properties
function fullBox(b) {
  if (b.x == null) {
    b.x = 0;
    b.y = 0;
    b.width = 0;
    b.height = 0;
  }

  b.w = b.width;
  b.h = b.height;
  b.x2 = b.x + b.width;
  b.y2 = b.y + b.height;
  b.cx = b.x + b.width / 2;
  b.cy = b.y + b.height / 2;

  return b;
}

// Get id from reference string
function idFromReference(url) {
  var m = url.toString().match(regex.reference);

  if (m) return m[1];
}

// Create matrix array for looping
var abcdef = 'abcdef'.split('');

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(106);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(105);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__regex_js__ = __webpack_require__(10);



var Number = function () {
  function Number(value, unit) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Number);

    // initialize defaults
    this.value = 0;
    this.unit = unit || '';

    // parse value
    if (typeof value === 'number') {
      // ensure a valid numeric value
      this.value = isNaN(value) ? 0 : !isFinite(value) ? value < 0 ? -3.4e+38 : +3.4e+38 : value;
    } else if (typeof value === 'string') {
      unit = value.match(__WEBPACK_IMPORTED_MODULE_1__regex_js__["default"].numberAndUnit);

      if (unit) {
        // make value numeric
        this.value = parseFloat(unit[1]);

        // normalize
        if (unit[5] == '%') this.value /= 100;else if (unit[5] == 's') this.value *= 1000;

        // store unit
        this.unit = unit[5];
      }
    } else {
      if (value instanceof Number) {
        this.value = value.valueOf();
        this.unit = value.unit;
      }
    }
  }

  // Stringalize


  Number.prototype.toString = function toString() {
    return (this.unit == '%' ? ~~(this.value * 1e8) / 1e6 : this.unit == 's' ? this.value / 1e3 : this.value) + this.unit;
  };

  Number.prototype.toJSON = function toJSON() {
    return this.toString();
  };
  // Convert to primitive


  Number.prototype.valueOf = function valueOf() {
    return this.value;
  };
  // Add number


  Number.prototype.plus = function plus(number) {
    return new Number(this + new Number(number), this.unit);
  };
  // Subtract number


  Number.prototype.minus = function minus(number) {
    return this.plus(-new Number(number));
  };
  // Multiply number


  Number.prototype.times = function times(number) {
    return new Number(this * new Number(number), this.unit);
  };
  // Divide number


  Number.prototype.divide = function divide(number) {
    return new Number(this / new Number(number), this.unit);
  };
  // Convert to different unit


  Number.prototype.to = function to(unit) {
    var number = new Number(this);

    if (typeof unit === 'string') number.unit = unit;

    return number;
  };
  // Make number morphable


  Number.prototype.morph = function morph(number) {
    this.destination = new Number(number);

    return this;
  };
  // Get morphed number at given position


  Number.prototype.at = function at(pos) {
    // Make sure a destination is defined
    if (!this.destination) return this;

    // Generate new morphed number
    return new Number(this.destination).minus(this).times(pos).plus(this);
  };

  return Number;
}();

/* harmony default export */ exports["default"] = Number;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__element_js__ = __webpack_require__(5);





var Shape = function (_Element) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Shape, _Element);

  function Shape() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Shape);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Element.apply(this, arguments));
  }

  return Shape;
}(__WEBPACK_IMPORTED_MODULE_3__element_js__["default"]);

/* harmony default export */ exports["a"] = Shape;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Storage for regular expressions
var regex = {
  // Parse unit value
  numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i

  // Parse hex value
  , hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

  // Parse rgb value
  , rgb: /rgb\((\d+),(\d+),(\d+)\)/

  // Parse reference id
  , reference: /#([a-z0-9\-_]+)/i

  // Parse matrix wrapper
  , matrix: /matrix\(|\)/g

  // Elements of a matrix
  , matrixElements: /,*\s+|,/

  // Whitespace
  , whitespace: /\s/g

  // Test hex value
  , isHex: /^#[a-f0-9]{3,6}$/i

  // Test rgb value
  , isRgb: /^rgb\(/

  // Test css declaration
  , isCss: /[^:]+:[^;]+;?/

  // Test for blank string
  , isBlank: /^(\s+)?$/

  // Test for numeric string
  , isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i

  // Test for percent value
  , isPercent: /^-?[\d\.]+%$/

  // Test for image url
  , isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i

  // The following regex are used to parse the d attribute of a path

  // Replaces all negative exponents
  , negExp: /e\-/gi

  // Replaces all comma
  , comma: /,/g

  // Replaces all hyphens
  , hyphen: /\-/g

  // Replaces and tests for all path letters
  , pathLetters: /[MLHVCSQTAZ]/gi

  // yes we need this one, too
  , isPathLetter: /[MLHVCSQTAZ]/i

  // split at whitespaces
  , whitespaces: /\s+/

  // matches X
  , X: /X/g
};
/* harmony default export */ exports["default"] = regex;

/***/ },
/* 11 */
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__text_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__number_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__color_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__viewbox_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__matrix_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__regex_js__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return easing; });
/* harmony export (immutable) */ exports["f"] = morph;
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return Situation; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return Delay; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return MorphObj; });












var easing = {
  '-': function _(pos) {
    return pos;
  },
  '<>': function _(pos) {
    return -Math.cos(pos * Math.PI) / 2 + 0.5;
  },
  '>': function _(pos) {
    return Math.sin(pos * Math.PI / 2);
  },
  '<': function _(pos) {
    return -Math.cos(pos * Math.PI / 2) + 1;
  }
};

function morph(pos) {
  return function (from, to) {
    return new MorphObj(from, to).at(pos);
  };
}

var Situation = function Situation(o) {
  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Situation);

  this.init = !1;
  this.reversed = !1;
  this.reversing = !1;

  this.duration = new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](o.duration).valueOf();
  this.delay = new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](o.delay).valueOf();

  this.start = +new Date() + this.delay;
  this.finish = this.start + this.duration;
  this.ease = o.ease;

  this.loop = !1;
  this.loops = !1;

  this.animations = {
    // functionToCall: [list of morphable objects]
    // e.g. move: [SVG.Number, SVG.Number]
  };

  this.attrs = {
    // holds all attributes which are not represented from a function svg.js provides
    // e.g. someAttr: SVG.Number
  };

  this.styles = {
    // holds all styles which should be animated
    // e.g. fill-color: SVG.Color
  };

  this.transforms = [
    // holds all transformations as transformation objects
    // e.g. [SVG.Rotate, SVG.Translate, SVG.Matrix]
  ];

  this.once = {
    // functions to fire at a specific position
    // e.g. "0.5": function foo(){}
  };
};

var Delay = function Delay(dealy) {
  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Delay);

  this.delay = new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](delay).valueOf();
};

var FX = function () {
  function FX(element) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, FX);

    this._target = element;
    this.situations = [];
    this.active = !1;
    this.situation = null;
    this.paused = !1;
    this.lastPos = 0;
    this.pos = 0;
  }

  /**
   * sets or returns the target of this animation
   * @param o object || number In case of Object it holds all parameters. In case of number its the duration of the animation
   * @param ease function || string Function which should be used for easing or easing keyword
   * @param delay Number indicating the delay before the animation starts
   * @return target || this
   */


  FX.prototype.animate = function animate(o, ease, delay) {
    if ((typeof o === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(o)) == 'object') {
      ease = o.ease;
      delay = o.delay;
      o = o.duration;
    }

    var situation = new Situation({
      duration: o || 1000,
      delay: delay || 0,
      ease: easing[ease || '-'] || ease
    });

    this.queue(situation);

    return this;
  };

  /**
   * sets a delay before the next element of the queue is called
   * @param delay Duration of delay in milliseconds
   * @return this.target()
   */


  FX.prototype.delay = function delay(delay) {
    var delay = new Delay(delay);

    return this.queue(delay);
  };

  /**
   * sets or returns the target of this animation
   * @param null || target SVG.Elemenet which should be set as new target
   * @return target || this
   */


  FX.prototype.target = function target(_target) {
    if (_target && _target instanceof __WEBPACK_IMPORTED_MODULE_2__element_js__["default"]) {
      this._target = _target;
      return this;
    }

    return this._target;
  };

  // returns the position at a given time


  FX.prototype.timeToPos = function timeToPos(timestamp) {
    return (timestamp - this.situation.start) / this.situation.duration;
  };

  // returns the timestamp from a given positon


  FX.prototype.posToTime = function posToTime(pos) {
    return this.situation.duration * pos + this.situation.start;
  };

  // starts the animationloop


  FX.prototype.startAnimFrame = function startAnimFrame() {
    this.stopAnimFrame();
    this.animationFrame = requestAnimationFrame(function () {
      this.step();
    }.bind(this));
  };

  // cancels the animationframe


  FX.prototype.stopAnimFrame = function stopAnimFrame() {
    cancelAnimationFrame(this.animationFrame);
  };

  // kicks off the animation - only does something when the queue is curretly not active and at least one situation is set


  FX.prototype.start = function start() {
    // dont start if already started
    if (!this.active && this.situation) {
      this.situation.start = +new Date() + this.situation.delay;
      this.situation.finish = this.situation.start + this.situation.duration;

      this.initAnimations();
      this.active = !0;
      this.startAnimFrame();
    }

    return this;
  };

  /**
   * adds a function / Situation to the animation queue
   * @param fn function / situation to add
   * @return this
   */


  FX.prototype.queue = function queue(fn) {
    if (typeof fn == 'function' || fn instanceof Situation || fn instanceof Delay) this.situations.push(fn);

    if (!this.situation) this.situation = this.situations.shift();

    return this;
  };

  /**
   * pulls next element from the queue and execute it
   * @return this
   */


  FX.prototype.dequeue = function dequeue() {
    // stop current animation
    this.situation && this.situation.stop && this.situation.stop();

    // get next animation from queue
    this.situation = this.situations.shift();

    if (this.situation) {

      var fn = function () {
        if (this.situation instanceof Situation) this.initAnimations().at(0);else if (this.situation instanceof Delay) this.dequeue();else this.situation.call(this);
      }.bind(this);

      // start next animation
      if (this.situation.delay) {
        setTimeout(function () {
          fn();
        }, this.situation.delay);
      } else {
        fn();
      }
    }

    return this;
  };

  // updates all animations to the current state of the element
  // this is important when one property could be changed from another property


  FX.prototype.initAnimations = function initAnimations() {
    var i,
        s = this.situation;


    if (s.init) return this;

    for (i in s.animations) {

      if (i == 'viewbox') {
        s.animations[i] = this.target().viewbox().morph(s.animations[i]);
      } else {

        // TODO: this is not a clean clone of the array. We may have some unchecked references
        s.animations[i].value = i == 'plot' ? this.target().array().value : this.target()[i]();

        // sometimes we get back an object and not the real value, fix this
        if (s.animations[i].value.value) {
          s.animations[i].value = s.animations[i].value.value;
        }

        if (s.animations[i].relative) s.animations[i].destination.value = s.animations[i].destination.value + s.animations[i].value;
      }
    }

    for (i in s.attrs) {
      if (s.attrs[i] instanceof __WEBPACK_IMPORTED_MODULE_7__color_js__["default"]) {
        var color = new __WEBPACK_IMPORTED_MODULE_7__color_js__["default"](this.target().attr(i));
        s.attrs[i].r = color.r;
        s.attrs[i].g = color.g;
        s.attrs[i].b = color.b;
      } else {
        s.attrs[i].value = this.target().attr(i); // + s.attrs[i].value
      }
    }

    for (i in s.styles) {
      s.styles[i].value = this.target().style(i);
    }

    s.initialTransformation = this.target().matrixify();

    s.init = !0;
    return this;
  };

  FX.prototype.clearQueue = function clearQueue() {
    this.situations = [];
    return this;
  };

  FX.prototype.clearCurrent = function clearCurrent() {
    this.situation = null;
    return this;
  };
  /** stops the animation immediately
   * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately.
   * @param clearQueue A Boolean indicating whether to remove queued animation as well.
   * @return this
   */


  FX.prototype.stop = function stop(jumpToEnd, clearQueue) {
    if (!this.active) this.start();

    if (clearQueue) {
      this.clearQueue();
    }

    this.active = !1;

    if (jumpToEnd && this.situation) {

      this.situation.loop = !1;

      if (this.situation.loops % 2 == 0 && this.situation.reversing) {
        this.situation.reversed = !0;
      }

      this.at(1);
    }

    this.stopAnimFrame();
    clearTimeout(this.timeout);

    return this.clearCurrent();
  };

  /** resets the element to the state where the current element has started
   * @return this
   */


  FX.prototype.reset = function reset() {
    if (this.situation) {
      var temp = this.situation;
      this.stop();
      this.situation = temp;
      this.at(0);
    }
    return this;
  };

  // Stop the currently-running animation, remove all queued animations, and complete all animations for the element.


  FX.prototype.finish = function finish() {
    this.stop(!0, !1);

    while (this.dequeue().situation && this.stop(!0, !1)) {}

    this.clearQueue().clearCurrent();

    return this;
  };

  // set the internal animation pointer to the specified position and updates the visualisation


  FX.prototype.at = function at(pos) {
    this.pos = pos;
    this.situation.start = +new Date() - pos * this.situation.duration;
    this.situation.finish = this.situation.start + this.situation.duration;
    return this.step(!0);
  };

  // speeds up the animation by the given factor
  // this changes the duration of the animation


  FX.prototype.speed = function speed(_speed) {
    this.situation.duration = this.situation.duration * this.pos + (1 - this.pos) * this.situation.duration / _speed;
    this.situation.finish = this.situation.start + this.situation.duration;
    return this.at(this.pos);
  };
  // Make loopable


  FX.prototype.loop = function loop(times, reverse) {
    // store current loop and total loops
    this.situation.loop = this.situation.loops = times || !0;

    if (reverse) this.last().reversing = !0;
    return this;
  };

  // pauses the animation


  FX.prototype.pause = function pause() {
    this.paused = !0;
    this.stopAnimFrame();
    clearTimeout(this.timeout);
    return this;
  };

  // unpause the animation


  FX.prototype.play = function play() {
    if (!this.paused) return this;
    this.paused = !1;
    return this.at(this.pos);
  };

  /**
   * toggle or set the direction of the animation
   * true sets direction to backwards while false sets it to forwards
   * @param reversed Boolean indicating whether to reverse the animation or not (default: toggle the reverse status)
   * @return this
   */


  FX.prototype.reverse = function reverse(reversed) {
    var c = this.last();

    if (typeof reversed == 'undefined') c.reversed = !c.reversed;else c.reversed = reversed;

    return this;
  };

  /**
   * returns a float from 0-1 indicating the progress of the current animation
   * @param eased Boolean indicating whether the returned position should be eased or not
   * @return number
   */


  FX.prototype.progress = function progress(easeIt) {
    return easeIt ? this.situation.ease(this.pos) : this.pos;
  };

  /**
   * adds a callback function which is called when the current animation is finished
   * @param fn Function which should be executed as callback
   * @return number
   */


  FX.prototype.after = function after(fn) {
    var c = this.last(),
        wrapper = function wrapper(e) {
      if (e.detail.situation == c) {
        fn.call(this, c);
        this.off('finished.fx', wrapper); // prevent memory leak
      }
    };

    this.target().on('finished.fx', wrapper);
    return this;
  };

  // adds a callback which is called whenever one animation step is performed


  FX.prototype.during = function during(fn) {
    var c = this.last(),
        wrapper = function wrapper(e) {
      if (e.detail.situation == c) {
        fn.call(this, e.detail.pos, morph(e.detail.pos), e.detail.eased, c);
      }
    };

    // see above
    this.target().off('during.fx', wrapper).on('during.fx', wrapper);

    return this.after(function () {
      this.off('during.fx', wrapper);
    });
  };

  // calls after ALL animations in the queue are finished


  FX.prototype.afterAll = function afterAll(fn) {
    var wrapper = function wrapper(e) {
      fn.call(this);
      this.off('allfinished.fx', wrapper);
    };

    // see above
    this.target().off('allfinished.fx', wrapper).on('allfinished.fx', wrapper);
    return this;
  };

  // calls on every animation step for all animations


  FX.prototype.duringAll = function duringAll(fn) {
    var wrapper = function wrapper(e) {
      fn.call(this, e.detail.pos, morph, e.detail.eased, e.detail.situation);
    };

    this.target().off('during.fx', wrapper).on('during.fx', wrapper);

    return this.afterAll(function () {
      this.off('during.fx', wrapper);
    });
  };

  FX.prototype.last = function last() {
    return this.situations.length ? this.situations[this.situations.length - 1] : this.situation;
  };

  // adds one property to the animations


  FX.prototype.add = function add(method, args, type) {
    this.last()[type || 'animations'][method] = args;
    setTimeout(function () {
      this.start();
    }.bind(this), 0);
    return this;
  };

  /** perform one step of the animation
   *  @param ignoreTime Boolean indicating whether to ignore time and use position directly or recalculate position based on time
   *  @return this
   */


  FX.prototype.step = function step(ignoreTime) {
    // convert current time to position
    if (!ignoreTime) this.pos = this.timeToPos(+new Date());

    if (this.pos >= 1 && (this.situation.loop === !0 || typeof this.situation.loop == 'number' && --this.situation.loop)) {

      if (this.situation.reversing) {
        this.situation.reversed = !this.situation.reversed;
      }
      return this.at(this.pos - 1);
    }

    if (this.situation.reversed) this.pos = 1 - this.pos;

    // correct position
    if (this.pos > 1) this.pos = 1;
    if (this.pos < 0) this.pos = 0;

    // apply easing
    var eased = this.situation.ease(this.pos);

    // call once-callbacks
    for (var i in this.situation.once) {
      if (i > this.lastPos && i <= eased) {
        this.situation.once[i].call(this.target(), this.pos, eased);
        delete this.situation.once[i];
      }
    }

    // fire during callback with position, eased position and current situation as parameter
    if (this.active) this.target().fire('during', { pos: this.pos, eased: eased, fx: this, situation: this.situation });

    // the user may call stop or finish in the during callback
    // so make sure that we still have a valid situation
    if (!this.situation) {
      return this;
    }

    // apply the actual animation to every property
    this.eachAt();

    // do final code when situation is finished
    if (this.pos == 1 && !this.situation.reversed || this.situation.reversed && this.pos == 0) {

      // stop animation callback
      this.stopAnimFrame();

      // fire finished callback with current situation as parameter
      this.target().fire('finished', { fx: this, situation: this.situation });

      if (!this.situations.length) {
        this.target().fire('allfinished');
        this.target().off('.fx'); // there shouldnt be any binding left, but to make sure...
        this.active = !1;
      }

      // start next animation
      if (this.active) this.dequeue();else this.clearCurrent();
    } else if (!this.paused && this.active) {
      // we continue animating when we are not at the end
      this.startAnimFrame();
    }

    // save last eased position for once callback triggering
    this.lastPos = eased;
    return this;
  };

  // calculates the step for every property and calls block with it


  FX.prototype.eachAt = function eachAt() {
    var i,
        at,
        self = this,
        target = this.target(),
        s = this.situation;

    // apply animations which can be called trough a method
    for (i in s.animations) {
      at = [].concat(s.animations[i]).map(function (el) {
        return el.at ? el.at(s.ease(self.pos), self.pos) : el;
      });

      target[i].apply(target, at);
    }

    // apply animation which has to be applied with attr()
    for (i in s.attrs) {
      at = [i].concat(s.attrs[i]).map(function (el) {
        return el.at ? el.at(s.ease(self.pos), self.pos) : el;
      });

      target.attr.apply(target, at);
    }

    // apply animation which has to be applied with style()
    for (i in s.styles) {
      at = [i].concat(s.styles[i]).map(function (el) {
        return el.at ? el.at(s.ease(self.pos), self.pos) : el;
      });

      target.style.apply(target, at);
    }

    // animate initialTransformation which has to be chained
    if (s.transforms.length) {

      // get inital initialTransformation
      at = s.initialTransformation;
      for (i in s.transforms) {

        // get next transformation in chain
        var a = s.transforms[i];

        // multiply matrix directly
        if (a instanceof __WEBPACK_IMPORTED_MODULE_9__matrix_js__["default"]) {

          if (a.relative) {
            at = at.multiply(a.at(s.ease(this.pos)));
          } else {
            at = at.morph(a).at(s.ease(this.pos));
          }
          continue;
        }

        // when transformation is absolute we have to reset the needed transformation first
        if (!a.relative) a.undo(at.extract());

        // and reapply it after
        at = at.multiply(a.at(s.ease(this.pos)));
      }

      // set new matrix on element
      target.matrix(at);
    }

    return this;
  };

  // adds an once-callback which is called at a specific position and never again


  FX.prototype.once = function once(pos, fn, isEased) {
    if (!isEased) pos = this.situation.ease(pos);

    this.situation.once[pos] = fn;

    return this;
  };

  return FX;
}();

/* harmony default export */ exports["a"] = FX;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_2__element_js__["default"], {
  // Get fx module or create a new one, then animate with given duration and ease
  animate: function animate(o, ease, delay) {
    return (this.fx || (this.fx = new FX(this))).animate(o, ease, delay);
  },
  delay: function (_delay) {
    function delay(_x) {
      return _delay.apply(this, arguments);
    }

    delay.toString = function () {
      return _delay.toString();
    };

    return delay;
  }(function (delay) {
    return (this.fx || (this.fx = new FX(this))).delay(delay);
  }),
  stop: function stop(jumpToEnd, clearQueue) {
    if (this.fx) this.fx.stop(jumpToEnd, clearQueue);

    return this;
  },
  finish: function finish() {
    if (this.fx) this.fx.finish();

    return this;
  }
  // Pause current animation
  , pause: function pause() {
    if (this.fx) this.fx.pause();

    return this;
  }
  // Play paused current animation
  , play: function play() {
    if (this.fx) this.fx.play();

    return this;
  }
});

// MorphObj is used whenever no morphable object is given
var MorphObj = function () {
  function MorphObj(from, to) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MorphObj);

    // prepare color for morphing
    if (__WEBPACK_IMPORTED_MODULE_7__color_js__["default"].isColor(to)) return new __WEBPACK_IMPORTED_MODULE_7__color_js__["default"](from).morph(to);
    // prepare number for morphing
    if (__WEBPACK_IMPORTED_MODULE_10__regex_js__["default"].numberAndUnit.test(to)) return new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](from).morph(to);

    // prepare for plain morphing
    this.value = 0;
    this.destination = to;
  }

  MorphObj.prototype.at = function at(pos, real) {
    return real < 1 ? this.value : this.destination;
  };

  MorphObj.prototype.valueOf = function valueOf() {
    return this.value;
  };

  return MorphObj;
}();

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["extend"])(FX, {
  // Add animatable attributes
  attr: function attr(a, v, relative) {
    // apply attributes individually
    if ((typeof a === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(a)) == 'object') {
      for (var key in a) {
        this.attr(key, a[key]);
      }
    } else {
      // the MorphObj takes care about the right function used
      this.add(a, new MorphObj(null, v), 'attrs');
    }

    return this;
  }
  // Add animatable styles
  , style: function style(s, v) {
    if ((typeof s === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(s)) == 'object') for (var key in s) {
      this.style(key, s[key]);
    } else this.add(s, new MorphObj(null, v), 'styles');

    return this;
  }
  // Animatable x-axis
  , x: function x(_x2, relative) {
    if (this.target() instanceof __WEBPACK_IMPORTED_MODULE_3__group_js__["a" /* default */]) {
      this.transform({ x: _x2 }, relative);
      return this;
    }

    var num = new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"]().morph(_x2);
    num.relative = relative;
    return this.add('x', num);
  }
  // Animatable y-axis
  , y: function y(_y, relative) {
    if (this.target() instanceof __WEBPACK_IMPORTED_MODULE_3__group_js__["a" /* default */]) {
      this.transform({ y: _y }, relative);
      return this;
    }

    var num = new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"]().morph(_y);
    num.relative = relative;
    return this.add('y', num);
  }
  // Animatable center x-axis
  , cx: function cx(x) {
    return this.add('cx', new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"]().morph(x));
  }
  // Animatable center y-axis
  , cy: function cy(y) {
    return this.add('cy', new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"]().morph(y));
  }
  // Add animatable move
  , move: function move(x, y) {
    return this.x(x).y(y);
  }
  // Add animatable center
  , center: function center(x, y) {
    return this.cx(x).cy(y);
  }
  // Add animatable size
  , size: function size(width, height) {
    if (this.target() instanceof __WEBPACK_IMPORTED_MODULE_4__text_js__["a" /* default */]) {
      // animate font size for Text elements
      this.attr('font-size', width);
    } else {
      // animate bbox based size for all other elements
      var box;

      if (!width || !height) {
        box = this.target().bbox();
      }

      if (!width) {
        width = box.width / box.height * height;
      }

      if (!height) {
        height = box.height / box.width * width;
      }

      this.add('width', new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"]().morph(width)).add('height', new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"]().morph(height));
    }

    return this;
  }
  // Add animatable plot
  , plot: function plot(p) {
    return this.add('plot', this.target().array().morph(p));
  }
  // Add leading method
  , leading: function leading(value) {
    return this.target().leading ? this.add('leading', new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"]().morph(value)) : this;
  }
  // Add animatable viewbox
  , viewbox: function viewbox(x, y, width, height) {
    if (this.target() instanceof Container) {
      this.add('viewbox', new __WEBPACK_IMPORTED_MODULE_8__viewbox_js__["a" /* default */](x, y, width, height));
    }

    return this;
  },
  update: function update(o) {
    if (this.target() instanceof Stop) {
      if (typeof o == 'number' || o instanceof __WEBPACK_IMPORTED_MODULE_6__number_js__["default"]) {
        return this.update({
          offset: arguments[0],
          color: arguments[1],
          opacity: arguments[2]
        });
      }

      if (o.opacity != null) this.attr('stop-opacity', o.opacity);
      if (o.color != null) this.attr('stop-color', o.color);
      if (o.offset != null) this.attr('offset', o.offset);
    }

    return this;
  }
});

/***/ },
/* 13 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_js__ = __webpack_require__(0);







var Parent = function (_Element) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Parent, _Element);

  function Parent() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Parent);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Element.apply(this, arguments));
  }

  // Returns all child elements
  Parent.prototype.children = function children() {
    return __WEBPACK_IMPORTED_MODULE_4__utilities_js__["default"].map(__WEBPACK_IMPORTED_MODULE_4__utilities_js__["default"].filterSVGElements(this.node.childNodes), function (node) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["adopt"])(node);
    });
  };
  // Add given element at a position


  Parent.prototype.add = function add(element, i) {
    if (i == null) this.node.appendChild(element.node);else if (element.node != this.node.childNodes[i]) this.node.insertBefore(element.node, this.node.childNodes[i]);

    return this;
  };
  // Basically does the same as `add()` but returns the added element instead


  Parent.prototype.put = function put(element, i) {
    this.add(element, i);
    return element;
  };
  // Checks if the given element is a child


  Parent.prototype.has = function has(element) {
    return this.index(element) >= 0;
  };
  // Gets index of given element


  Parent.prototype.index = function index(element) {
    return this.children().indexOf(element);
  };
  // Get a element at the given index


  Parent.prototype.get = function get(i) {
    return this.children()[i];
  };
  // Get first child, skipping the defs node


  Parent.prototype.first = function first() {
    return this.children()[0];
  };
  // Get the last child


  Parent.prototype.last = function last() {
    return this.children()[this.children().length - 1];
  };
  // Iterates over all children and invokes a given block


  Parent.prototype.each = function each(block, deep) {
    var i,
        il,
        children = this.children();

    for (i = 0, il = children.length; i < il; i++) {
      if (children[i] instanceof __WEBPACK_IMPORTED_MODULE_3__element_js__["default"]) block.apply(children[i], [i, children]);

      if (deep && children[i] instanceof Parent) children[i].each(block, deep);
    }

    return this;
  };
  // Remove a given child


  Parent.prototype.removeElement = function removeElement(element) {
    this.node.removeChild(element.node);

    return this;
  };
  // Remove all elements in this container


  Parent.prototype.clear = function clear() {
    // remove children
    while (this.node.hasChildNodes()) {
      this.node.removeChild(this.node.lastChild);
    } // remove defs reference
    delete this._defs;

    return this;
  };
  // Get defs


  Parent.prototype.defs = function defs() {
    return this.doc().defs();
  };

  return Parent;
}(__WEBPACK_IMPORTED_MODULE_3__element_js__["default"]);

/* harmony default export */ exports["a"] = Parent;

/***/ },
/* 15 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(74)
  , defined = __webpack_require__(46);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_js__ = __webpack_require__(0);






var Defs = function (_Container) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Defs, _Container);

	function Defs() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Defs);

		return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Container.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__svg_js__["create"])('defs')));
	}

	return Defs;
}(__WEBPACK_IMPORTED_MODULE_3__container_js__["default"]);

/* harmony default export */ exports["a"] = Defs;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defs_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_js__ = __webpack_require__(0);







var Doc = function (_Container) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Doc, _Container);

  function Doc(element) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Doc);

    if (element) {
      // ensure the presence of a dom element
      element = typeof element == 'string' ? document.getElementById(element) : element;

      // If the target is an svg element, use that element as the main wrapper.
      // This allows svg.js to work with svg documents as well.
      if (element.nodeName == 'svg') {
        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Container.call(this, element));
      } else {
        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Container.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["create"])('svg')));

        element.appendChild(_this.node);
        _this.size('100%', '100%');
      }

      // set svg element attributes and ensure defs node
      _this.namespace().defs();
    } else {
      var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Container.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["create"])('svg')));
    }

    // set svg element attributes and ensure defs node
    _this.namespace().size('100%', '100%').defs();
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(_this);
  }

  // Add namespaces


  Doc.prototype.namespace = function namespace() {
    return this.attr({ xmlns: __WEBPACK_IMPORTED_MODULE_5__svg_js__["ns"], version: '1.1' }).attr('xmlns:xlink', __WEBPACK_IMPORTED_MODULE_5__svg_js__["xlink"], __WEBPACK_IMPORTED_MODULE_5__svg_js__["xmlns"]).attr('xmlns:svgjs', __WEBPACK_IMPORTED_MODULE_5__svg_js__["svgjs"], __WEBPACK_IMPORTED_MODULE_5__svg_js__["xmlns"]);
  };

  // Creates and returns defs element


  Doc.prototype.defs = function defs() {
    if (!this._defs) {
      var defs;

      // Find or create a defs element in this instance
      if (defs = this.node.getElementsByTagName('defs')[0]) this._defs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["adopt"])(defs);else this._defs = new __WEBPACK_IMPORTED_MODULE_4__defs_js__["a" /* default */]();

      // Make sure the defs node is at the end of the stack
      this.node.appendChild(this._defs.node);
    }

    return this._defs;
  };

  // custom parent method


  Doc.prototype.parent = function parent() {
    return this.node.parentNode.nodeName == '#document' ? null : this.node.parentNode;
  };

  // Fix for possible sub-pixel offset. See:
  // https://bugzilla.mozilla.org/show_bug.cgi?id=608812


  Doc.prototype.spof = function spof(_spof) {
    var pos = this.node.getScreenCTM();

    if (pos) this.style('left', -pos.e % 1 + 'px').style('top', -pos.f % 1 + 'px');

    return this;
  };

  // Removes the doc from the DOM


  Doc.prototype.remove = function remove() {
    if (this.parent()) {
      this.parent().removeChild(this.node);
    }

    return this;
  };

  return Doc;
}(__WEBPACK_IMPORTED_MODULE_3__container_js__["default"]);

/* harmony default export */ exports["default"] = Doc;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_js__ = __webpack_require__(6);







var Matrix = function () {
  function Matrix(source) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Matrix);

    var i,
        base = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_js__["e" /* arrayToMatrix */])([1, 0, 0, 1, 0, 0]);

    // ensure source as object
    source = source instanceof __WEBPACK_IMPORTED_MODULE_2__element_js__["default"] ? source.matrixify() : typeof source === 'string' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_js__["f" /* stringToMatrix */])(source) : arguments.length == 6 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_js__["e" /* arrayToMatrix */])([].slice.call(arguments)) : (typeof source === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(source)) === 'object' ? source : base;

    // merge source
    for (i = __WEBPACK_IMPORTED_MODULE_5__helpers_js__["g" /* abcdef */].length - 1; i >= 0; --i) {
      this[__WEBPACK_IMPORTED_MODULE_5__helpers_js__["g" /* abcdef */][i]] = source && typeof source[__WEBPACK_IMPORTED_MODULE_5__helpers_js__["g" /* abcdef */][i]] === 'number' ? source[__WEBPACK_IMPORTED_MODULE_5__helpers_js__["g" /* abcdef */][i]] : base[__WEBPACK_IMPORTED_MODULE_5__helpers_js__["g" /* abcdef */][i]];
    }
  }

  // Extract individual transformations


  Matrix.prototype.extract = function extract() {
    // find delta transform points
    var px = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_js__["h" /* deltaTransformPoint */])(this, 0, 1),
        py = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_js__["h" /* deltaTransformPoint */])(this, 1, 0),
        skewX = 180 / Math.PI * Math.atan2(px.y, px.x) - 90;

    return {
      // translation
      x: this.e,
      y: this.f,
      transformedX: (this.e * Math.cos(skewX * Math.PI / 180) + this.f * Math.sin(skewX * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b),
      transformedY: (this.f * Math.cos(skewX * Math.PI / 180) + this.e * Math.sin(-skewX * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d)
      // skew
      , skewX: -skewX,
      skewY: 180 / Math.PI * Math.atan2(py.y, py.x)
      // scale
      , scaleX: Math.sqrt(this.a * this.a + this.b * this.b),
      scaleY: Math.sqrt(this.c * this.c + this.d * this.d)
      // rotation
      , rotation: skewX,
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f,
      matrix: new Matrix(this)
    };
  };
  // Clone matrix


  Matrix.prototype.clone = function clone() {
    return new Matrix(this);
  };
  // Morph one matrix into another


  Matrix.prototype.morph = function morph(matrix) {
    // store new destination
    this.destination = new Matrix(matrix);

    return this;
  };
  // Get morphed matrix at a given position


  Matrix.prototype.at = function at(pos) {
    // make sure a destination is defined
    if (!this.destination) return this;

    // calculate morphed matrix at a given position
    var matrix = new Matrix({
      a: this.a + (this.destination.a - this.a) * pos,
      b: this.b + (this.destination.b - this.b) * pos,
      c: this.c + (this.destination.c - this.c) * pos,
      d: this.d + (this.destination.d - this.d) * pos,
      e: this.e + (this.destination.e - this.e) * pos,
      f: this.f + (this.destination.f - this.f) * pos
    });

    // process parametric rotation if present
    if (this.param && this.param.to) {
      // calculate current parametric position
      var param = {
        rotation: this.param.from.rotation + (this.param.to.rotation - this.param.from.rotation) * pos,
        cx: this.param.from.cx,
        cy: this.param.from.cy
      };

      // rotate matrix
      matrix = matrix.rotate((this.param.to.rotation - this.param.from.rotation * 2) * pos, param.cx, param.cy);

      // store current parametric values
      matrix.param = param;
    }

    return matrix;
  };
  // Multiplies by given matrix


  Matrix.prototype.multiply = function multiply(matrix) {
    return new Matrix(this.native().multiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_js__["i" /* parseMatrix */])(matrix).native()));
  };
  // Inverses matrix


  Matrix.prototype.inverse = function inverse() {
    return new Matrix(this.native().inverse());
  };
  // Translate matrix


  Matrix.prototype.translate = function translate(x, y) {
    return new Matrix(this.native().translate(x || 0, y || 0));
  };
  // Scale matrix


  Matrix.prototype.scale = function scale(x, y, cx, cy) {
    // support universal scale
    if (arguments.length == 1) y = x;
    if (arguments.length == 3) {
      cy = cx;
      cx = y;
    }

    return this.around(cx, cy, new Matrix(x, 0, 0, y, 0, 0));
  };
  // Rotate matrix


  Matrix.prototype.rotate = function rotate(r, cx, cy) {
    // convert degrees to radians
    r = __WEBPACK_IMPORTED_MODULE_3__utilities_js__["default"].radians(r);

    return this.around(cx, cy, new Matrix(Math.cos(r), Math.sin(r), -Math.sin(r), Math.cos(r), 0, 0));
  };
  // Flip matrix on x or y, at a given offset


  Matrix.prototype.flip = function flip(a, o) {
    return a == 'x' ? this.scale(-1, 1, o, 0) : this.scale(1, -1, 0, o);
  };
  // Skew


  Matrix.prototype.skew = function skew(x, y, cx, cy) {
    // support uniformal skew
    if (arguments.length == 1) {
      y = x;
    } else if (arguments.length == 3) {
      cy = cx;
      cx = y;
      y = x;
    }

    // convert degrees to radians
    x = __WEBPACK_IMPORTED_MODULE_3__utilities_js__["default"].radians(x);
    y = __WEBPACK_IMPORTED_MODULE_3__utilities_js__["default"].radians(y);

    return this.around(cx, cy, new Matrix(1, Math.tan(y), Math.tan(x), 1, 0, 0));
  };
  // SkewX


  Matrix.prototype.skewX = function skewX(x, cx, cy) {
    return this.skew(x, 0, cx, cy);
  };
  // SkewY


  Matrix.prototype.skewY = function skewY(y, cx, cy) {
    return this.skew(0, y, cx, cy);
  };
  // Transform around a center point


  Matrix.prototype.around = function around(cx, cy, matrix) {
    return this.multiply(new Matrix(1, 0, 0, 1, cx || 0, cy || 0)).multiply(matrix).multiply(new Matrix(1, 0, 0, 1, -cx || 0, -cy || 0));
  };
  // Convert to native SVGMatrix


  Matrix.prototype.native = function native() {

    // update with current values
    for (var matrix = SVG.parser.draw.node.createSVGMatrix(), i = __WEBPACK_IMPORTED_MODULE_5__helpers_js__["g" /* abcdef */].length - 1; i >= 0; i--) {
      matrix[__WEBPACK_IMPORTED_MODULE_5__helpers_js__["g" /* abcdef */][i]] = this[__WEBPACK_IMPORTED_MODULE_5__helpers_js__["g" /* abcdef */][i]];
    }
    // create new matrix
    return matrix;
  };
  // Convert matrix to string


  Matrix.prototype.toString = function toString() {
    return 'matrix(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ')';
  };

  return Matrix;
}();

// add methods to element


/* harmony default export */ exports["default"] = Matrix;
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_2__element_js__["default"], {
  // Get current matrix
  ctm: function ctm() {
    return new Matrix(this.node.getCTM());
  },
  // Get current screen matrix
  screenCTM: function screenCTM() {
    return new Matrix(this.node.getScreenCTM());
  }
});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = {
  // Map function
  map: function map(array, block) {
    var i,
        il = array.length,
        result = [];

    for (i = 0; i < il; i++) {
      result.push(block(array[i]));
    }return result;
  }

  // Filter function
  , filter: function filter(array, block) {
    var i,
        il = array.length,
        result = [];

    for (i = 0; i < il; i++) {
      if (block(array[i])) result.push(array[i]);
    }return result;
  }

  // Degrees to radians
  , radians: function radians(d) {
    return d % 360 * Math.PI / 180;
  }

  // Radians to degrees
  , degrees: function degrees(r) {
    return r * 180 / Math.PI % 360;
  },

  filterSVGElements: function filterSVGElements(nodes) {
    return this.filter(nodes, function (el) {
      return el instanceof SVGElement;
    });
  }

};
/* harmony default export */ exports["default"] = utils;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(23)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(13)
  , core      = __webpack_require__(11)
  , ctx       = __webpack_require__(71)
  , hide      = __webpack_require__(24)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(25)
  , createDesc = __webpack_require__(38);
module.exports = __webpack_require__(21) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(30)
  , IE8_DOM_DEFINE = __webpack_require__(73)
  , toPrimitive    = __webpack_require__(57)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(78)
  , enumBugKeys = __webpack_require__(47);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

var store      = __webpack_require__(54)('wks')
  , uid        = __webpack_require__(39)
  , Symbol     = __webpack_require__(13).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(exports, "callbacks", function() { return callbacks; });
/* harmony export (immutable) */ exports["loaded"] = loaded;
var callbacks = [];
function loaded() {
	for (var i in callbacks) {
		callbacks[i]();
	}
}

// just in case no one calls it, call it the next step
setTimeout(loaded, 0);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regex_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_js__ = __webpack_require__(6);





var Color = function () {
  function Color(color) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Color);

    var match;

    // initialize defaults
    this.r = 0;
    this.g = 0;
    this.b = 0;

    if (!color) return;

    // parse color
    if (typeof color === 'string') {
      if (__WEBPACK_IMPORTED_MODULE_2__regex_js__["default"].isRgb.test(color)) {
        // get rgb values
        match = __WEBPACK_IMPORTED_MODULE_2__regex_js__["default"].rgb.exec(color.replace(/\s/g, ''));

        // parse numeric values
        this.r = parseInt(match[1]);
        this.g = parseInt(match[2]);
        this.b = parseInt(match[3]);
      } else if (__WEBPACK_IMPORTED_MODULE_2__regex_js__["default"].isHex.test(color)) {
        // get hex values
        match = __WEBPACK_IMPORTED_MODULE_2__regex_js__["default"].hex.exec(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_js__["c" /* fullHex */])(color));

        // parse numeric values
        this.r = parseInt(match[1], 16);
        this.g = parseInt(match[2], 16);
        this.b = parseInt(match[3], 16);
      }
    } else if ((typeof color === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(color)) === 'object') {
      this.r = color.r;
      this.g = color.g;
      this.b = color.b;
    }
  }

  // Default to hex conversion


  Color.prototype.toString = function toString() {
    return this.toHex();
  };
  // Build hex value


  Color.prototype.toHex = function toHex() {
    return '#' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_js__["d" /* compToHex */])(this.r) + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_js__["d" /* compToHex */])(this.g) + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_js__["d" /* compToHex */])(this.b);
  };
  // Build rgb value


  Color.prototype.toRgb = function toRgb() {
    return 'rgb(' + [this.r, this.g, this.b].join() + ')';
  };
  // Calculate true brightness


  Color.prototype.brightness = function brightness() {
    return this.r / 255 * 0.30 + this.g / 255 * 0.59 + this.b / 255 * 0.11;
  };
  // Make color morphable


  Color.prototype.morph = function morph(color) {
    this.destination = new Color(color);

    return this;
  };
  // Get morphed color at given position


  Color.prototype.at = function at(pos) {
    // make sure a destination is defined
    if (!this.destination) return this;

    // normalise pos
    pos = pos < 0 ? 0 : pos > 1 ? 1 : pos;

    // generate morphed color
    return new Color({
      r: ~~(this.r + (this.destination.r - this.r) * pos),
      g: ~~(this.g + (this.destination.g - this.g) * pos),
      b: ~~(this.b + (this.destination.b - this.b) * pos)
    });
  };

  return Color;
}();
// Testers

// Test if given value is a color string


/* harmony default export */ exports["default"] = Color;
Color.test = function (color) {
  color += '';
  return __WEBPACK_IMPORTED_MODULE_2__regex_js__["default"].isHex.test(color) || __WEBPACK_IMPORTED_MODULE_2__regex_js__["default"].isRgb.test(color);
};

// Test if given value is a rgb object
Color.isRgb = function (color) {
  return color && typeof color.r == 'number' && typeof color.g == 'number' && typeof color.b == 'number';
};

// Test if given value is a color
Color.isColor = function (color) {
  return Color.isRgb(color) || Color.test(color);
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(31);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);


var svg_Array = function () {
  function svg_Array(array, fallback) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, svg_Array);

    array = (array || []).valueOf();

    // if array is empty and fallback is provided, use fallback
    if (array.length == 0 && fallback) array = fallback.valueOf();

    // parse array
    this.value = this.parse(array);
  }

  // Make array morphable


  svg_Array.prototype.morph = function morph(array) {
    this.destination = this.parse(array);

    // normalize length of arrays
    if (this.value.length != this.destination.length) {
      var lastValue = this.value[this.value.length - 1],
          lastDestination = this.destination[this.destination.length - 1];

      while (this.value.length > this.destination.length) {
        this.destination.push(lastDestination);
      }while (this.value.length < this.destination.length) {
        this.value.push(lastValue);
      }
    }

    return this;
  };
  // Clean up any duplicate points


  svg_Array.prototype.settle = function settle() {
    // find all unique values
    for (var i = 0, il = this.value.length, seen = []; i < il; i++) {
      if (seen.indexOf(this.value[i]) == -1) seen.push(this.value[i]);
    } // set new value
    return this.value = seen;
  };
  // Get morphed array at given position


  svg_Array.prototype.at = function at(pos) {
    // make sure a destination is defined
    if (!this.destination) return this;

    // generate morphed array
    for (var i = 0, il = this.value.length, array = []; i < il; i++) {
      array.push(this.value[i] + (this.destination[i] - this.value[i]) * pos);
    }return new svg_Array(array);
  };
  // Convert array to string


  svg_Array.prototype.toString = function toString() {
    return this.value.join(' ');
  };
  // Real value


  svg_Array.prototype.valueOf = function valueOf() {
    return this.value;
  };
  // Parse whitespace separated string


  svg_Array.prototype.parse = function parse(array) {
    array = array.valueOf();

    // if already is an array, no need to parse it
    if (Array.isArray(array)) return array;

    return this.split(array);
  };
  // Strip unnecessary whitespace


  svg_Array.prototype.split = function split(string) {
    return string.trim().split(/\s+/);
  };
  // Reverse array


  svg_Array.prototype.reverse = function reverse() {
    this.value.reverse();

    return this;
  };

  return svg_Array;
}();

/* harmony default export */ exports["a"] = svg_Array;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var defaults = {
  // Default attribute values
  attrs: {
    // fill and stroke
    'fill-opacity': 1,
    'stroke-opacity': 1,
    'stroke-width': 0,
    'stroke-linejoin': 'miter',
    'stroke-linecap': 'butt',
    fill: '#000000',
    stroke: '#000000',
    opacity: 1
    // position
    , x: 0,
    y: 0,
    cx: 0,
    cy: 0
    // size
    , width: 0,
    height: 0
    // radius
    , r: 0,
    rx: 0,
    ry: 0
    // gradient
    , offset: 0,
    'stop-opacity': 1,
    'stop-color': '#000000'
    // text
    , 'font-size': 16,
    'font-family': 'Helvetica, Arial, sans-serif',
    'text-anchor': 'start'
  }

};
/* harmony default export */ exports["a"] = defaults;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__array_js__ = __webpack_require__(32);





var PointArray = function (_svg_Array) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(PointArray, _svg_Array);

  function PointArray(array, fallback) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PointArray);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _svg_Array.call(this, array, fallback || [[0, 0]]));
  }

  // Convert array to string


  PointArray.prototype.toString = function toString() {
    // convert to a poly point string
    for (var i = 0, il = this.value.length, array = []; i < il; i++) {
      array.push(this.value[i].join(','));
    }return array.join(' ');
  };
  // Convert array to line object


  PointArray.prototype.toLine = function toLine() {
    return {
      x1: this.value[0][0],
      y1: this.value[0][1],
      x2: this.value[1][0],
      y2: this.value[1][1]
    };
  };
  // Get morphed array at given position


  PointArray.prototype.at = function at(pos) {
    // make sure a destination is defined
    if (!this.destination) return this;

    // generate morphed point string
    for (var i = 0, il = this.value.length, array = []; i < il; i++) {
      array.push([this.value[i][0] + (this.destination[i][0] - this.value[i][0]) * pos, this.value[i][1] + (this.destination[i][1] - this.value[i][1]) * pos]);
    }return new PointArray(array);
  };
  // Parse point string


  PointArray.prototype.parse = function parse(array) {
    var points = [];

    array = array.valueOf();

    // if already is an array, no need to parse it
    if (Array.isArray(array)) return array;

    // parse points
    array = array.trim().split(/\s+|,/);

    // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
    // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.
    if (array.length % 2 !== 0) array.pop();

    // wrap points in two-tuples and parse points as floats
    for (var i = 0, len = array.length; i < len; i = i + 2) {
      points.push([parseFloat(array[i]), parseFloat(array[i + 1])]);
    }return points;
  };
  // Move point string


  PointArray.prototype.move = function move(x, y) {
    var box = this.bbox();

    // get relative offset
    x -= box.x;
    y -= box.y;

    // move every point
    if (!isNaN(x) && !isNaN(y)) for (var i = this.value.length - 1; i >= 0; i--) {
      this.value[i] = [this.value[i][0] + x, this.value[i][1] + y];
    }return this;
  };
  // Resize poly string


  PointArray.prototype.size = function size(width, height) {
    var i,
        box = this.bbox();

    // recalculate position of all points according to new size
    for (i = this.value.length - 1; i >= 0; i--) {
      this.value[i][0] = (this.value[i][0] - box.x) * width / box.width + box.x;
      this.value[i][1] = (this.value[i][1] - box.y) * height / box.height + box.y;
    }

    return this;
  };
  // Get bounding box of points


  PointArray.prototype.bbox = function bbox() {
    SVG.parser.poly.setAttribute('points', this.toString());

    return SVG.parser.poly.getBBox();
  };

  return PointArray;
}(__WEBPACK_IMPORTED_MODULE_3__array_js__["a" /* default */]);

/* harmony default export */ exports["a"] = PointArray;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fx_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shape_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boxes_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_js__ = __webpack_require__(0);







var Set = function () {
  function Set(members) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Set);

    // Set initial state
    Array.isArray(members) ? this.members = members : this.clear();
  }

  // Add element to set


  Set.prototype.add = function add() {
    var i,
        il,
        elements = [].slice.call(arguments);

    for (i = 0, il = elements.length; i < il; i++) {
      this.members.push(elements[i]);
    }return this;
  };
  // Remove element from set


  Set.prototype.remove = function remove(element) {
    var i = this.index(element);

    // remove given child
    if (i > -1) this.members.splice(i, 1);

    return this;
  };
  // Iterate over all members


  Set.prototype.each = function each(block) {
    for (var i = 0, il = this.members.length; i < il; i++) {
      block.apply(this.members[i], [i, this.members]);
    }return this;
  };
  // Restore to defaults


  Set.prototype.clear = function clear() {
    // initialize store
    this.members = [];

    return this;
  };
  // Get the length of a set


  Set.prototype.length = function length() {
    return this.members.length;
  };
  // Checks if a given element is present in set


  Set.prototype.has = function has(element) {
    return this.index(element) >= 0;
  };
  // retuns index of given element in set


  Set.prototype.index = function index(element) {
    return this.members.indexOf(element);
  };
  // Get member at given index


  Set.prototype.get = function get(i) {
    return this.members[i];
  };
  // Get first member


  Set.prototype.first = function first() {
    return this.get(0);
  };
  // Get last member


  Set.prototype.last = function last() {
    return this.get(this.members.length - 1);
  };
  // Default value


  Set.prototype.valueOf = function valueOf() {
    return this.members;
  };
  // Get the bounding box of all members included or empty box if set has no items


  Set.prototype.bbox = function bbox() {
    var box = new __WEBPACK_IMPORTED_MODULE_4__boxes_js__["a" /* BBox */]();

    // return an empty box of there are no members
    if (this.members.length == 0) return box;

    // get the first rbox and update the target bbox
    var rbox = this.members[0].rbox();
    box.x = rbox.x;
    box.y = rbox.y;
    box.width = rbox.width;
    box.height = rbox.height;

    this.each(function () {
      // user rbox for correct position and visual representation
      box = box.merge(this.rbox());
    });

    return box;
  };

  return Set;
}();

/* harmony default export */ exports["default"] = Set;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_1__container_js__["default"], {
  // Create a new set
  set: function set(members) {
    return new Set(members);
  }
});

// FX.Set = class FX_Set{
//   // Initialize node
//   constructor(set) {
//     // store reference to set
//     this.set = set
//   }
// }

// Alias methods
Set.inherit = function () {
  var m,
      methods = [];

  // gather shape methods
  for (var m in __WEBPACK_IMPORTED_MODULE_3__shape_js__["a" /* default */].prototype) {
    if (typeof __WEBPACK_IMPORTED_MODULE_3__shape_js__["a" /* default */].prototype[m] == 'function' && typeof Set.prototype[m] != 'function') methods.push(m);
  } // apply shape aliasses
  methods.forEach(function (method) {
    Set.prototype[method] = function () {
      for (var i = 0, il = this.members.length; i < il; i++) {
        if (this.members[i] && typeof this.members[i][method] == 'function') this.members[i][method].apply(this.members[i], arguments);
      }return method == 'animate' ? this.fx || (this.fx = new __WEBPACK_IMPORTED_MODULE_2__fx_js__["a" /* default */].Set(this)) : this;
    };
  });

  // clear methods for the next round
  methods = [];

  // gather fx methods
  for (var m in __WEBPACK_IMPORTED_MODULE_2__fx_js__["a" /* default */].prototype) {
    if (typeof __WEBPACK_IMPORTED_MODULE_2__fx_js__["a" /* default */].prototype[m] == 'function' && typeof __WEBPACK_IMPORTED_MODULE_2__fx_js__["a" /* default */].Set.prototype[m] != 'function') methods.push(m);
  } // apply fx aliasses
  methods.forEach(function (method) {
    __WEBPACK_IMPORTED_MODULE_2__fx_js__["a" /* default */].Set.prototype[method] = function () {
      for (var i = 0, il = this.set.members.length; i < il; i++) {
        this.set.members[i].fx[method].apply(this.set.members[i].fx, arguments);
      }return this;
    };
  });
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shape_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__set_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__number_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__default_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utilities_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_js__ = __webpack_require__(6);
/* unused harmony export Tspan */












var Text = function (_Shape) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Text, _Shape);

  function Text() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Text);

    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Shape.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["create"])('text')));

    _this.dom.leading = new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](1.3); // store leading value for rebuilding
    _this._rebuild = !0; // enable automatic updating of dy values
    _this._build = !1; // disable build mode for adding multiple lines

    // set default font
    _this.attr('font-family', __WEBPACK_IMPORTED_MODULE_7__default_js__["a" /* default */].attrs['font-family']);
    return _this;
  }

  Text.prototype.clone = function clone() {
    // clone element and assign new id
    var clone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__helpers_js__["a" /* assignNewId */])(this.node.cloneNode(!0));

    // insert the clone after myself
    this.after(clone);

    return clone;
  };
  // Move over x-axis


  Text.prototype.x = function x(_x) {
    // act as getter
    if (_x == null) return this.attr('x');

    // move lines as well if no textPath is present
    if (!this.textPath) this.lines().each(function () {
      if (this.dom.newLined) this.x(_x);
    });

    return this.attr('x', _x);
  };
  // Move over y-axis


  Text.prototype.y = function y(_y) {
    var oy = this.attr('y'),
        o = typeof oy === 'number' ? oy - this.bbox().y : 0;

    // act as getter
    if (_y == null) return typeof oy === 'number' ? oy - o : oy;

    return this.attr('y', typeof _y === 'number' ? _y + o : _y);
  };
  // Move center over x-axis


  Text.prototype.cx = function cx(x) {
    return x == null ? this.bbox().cx : this.x(x - this.bbox().width / 2);
  };
  // Move center over y-axis


  Text.prototype.cy = function cy(y) {
    return y == null ? this.bbox().cy : this.y(y - this.bbox().height / 2);
  };
  // Set the text content


  Text.prototype.text = function text(text) {
    // act as getter
    if (typeof text === 'undefined') {
      for (var text = '', children = this.node.childNodes, i = 0, len = children.length; i < len; ++i) {

        // add newline if its not the first child and newLined is set to true
        if (i != 0 && children[i].nodeType != 3 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["adopt"])(children[i]).dom.newLined == !0) {
          text += '\n';
        }

        // add content of this node
        text += children[i].textContent;
      }

      return text;
    }

    // remove existing content
    this.clear().build(!0);

    if (typeof text === 'function') {
      // call block
      text.call(this, this);
    } else {
      // store text and make sure text is not blank
      text = text.split('\n');

      // build new lines
      for (var i = 0, il = text.length; i < il; i++) {
        this.tspan(text[i]).newLine();
      }
    }

    // disable build mode and rebuild lines
    return this.build(!1).rebuild();
  };
  // Set font size


  Text.prototype.size = function size(_size) {
    return this.attr('font-size', _size).rebuild();
  };
  // Set / get leading


  Text.prototype.leading = function leading(value) {
    // act as getter
    if (value == null) return this.dom.leading;

    // act as setter
    this.dom.leading = new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](value);

    return this.rebuild();
  };
  // Get all the first level lines


  Text.prototype.lines = function lines() {
    var node = (this.textPath && this.textPath() || this).node,
        lines = __WEBPACK_IMPORTED_MODULE_8__utilities_js__["default"].map(__WEBPACK_IMPORTED_MODULE_8__utilities_js__["default"].filterSVGElements(node.childNodes), function (el) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["adopt"])(el);
    });

    // filter tspans and map them to SVG.js instances


    // return an instance of SVG.set
    return new __WEBPACK_IMPORTED_MODULE_5__set_js__["default"](lines);
  };
  // Rebuild appearance type


  Text.prototype.rebuild = function rebuild(_rebuild) {
    // store new rebuild flag if given
    if (typeof _rebuild == 'boolean') this._rebuild = _rebuild;

    // define position of all lines
    if (this._rebuild) {
      var self = this,
          blankLineOffset = 0,
          dy = this.dom.leading * new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](this.attr('font-size'));

      this.lines().each(function () {
        if (this.dom.newLined) {
          if (!this.textPath) this.attr('x', self.attr('x'));

          if (this.text() == '\n') {
            blankLineOffset += dy;
          } else {
            this.attr('dy', dy + blankLineOffset);
            blankLineOffset = 0;
          }
        }
      });

      this.fire('rebuild');
    }

    return this;
  };
  // Enable / disable build mode


  Text.prototype.build = function build(_build) {
    this._build = !!_build;
    return this;
  };
  // overwrite method from parent to set data properly


  Text.prototype.setData = function setData(o) {
    this.dom = o;
    this.dom.leading = new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](o.leading || 1.3);
    return this;
  };

  return Text;
}(__WEBPACK_IMPORTED_MODULE_3__shape_js__["a" /* default */]);

/* harmony default export */ exports["a"] = Text;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__container_js__["default"], {
  // Create text element
  text: function text(_text) {
    return this.put(new Text()).text(_text);
  }
  // Create plain text element
  , plain: function plain(text) {
    return this.put(new Text()).plain(text);
  }
});

var Tspan = function (_Shape2) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Tspan, _Shape2);

  function Tspan() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Tspan);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Shape2.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["create"])('tspan')));
  }
  // Set text content


  Tspan.prototype.text = function text(_text2) {
    if (_text2 == null) return this.node.textContent + (this.dom.newLined ? '\n' : '');

    typeof _text2 === 'function' ? _text2.call(this, this) : this.plain(_text2);

    return this;
  };
  // Shortcut dx


  Tspan.prototype.dx = function dx(_dx) {
    return this.attr('dx', _dx);
  };
  // Shortcut dy


  Tspan.prototype.dy = function dy(_dy) {
    return this.attr('dy', _dy);
  };
  // Create new line


  Tspan.prototype.newLine = function newLine() {
    // fetch text parent
    var t = this.parent(Text);

    // mark new line
    this.dom.newLined = !0;

    // apply new hy¡n
    return this.dy(t.dom.leading * t.attr('font-size')).attr('x', t.x());
  };

  return Tspan;
}(__WEBPACK_IMPORTED_MODULE_3__shape_js__["a" /* default */]);




__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["extend"])(Text, Tspan, {
  // Create plain text node
  plain: function plain(text) {
    // clear if build mode is disabled
    if (this._build === !1) this.clear();

    // create text node
    this.node.appendChild(document.createTextNode(text));

    return this;
  }
  // Create a tspan
  , tspan: function tspan(text) {
    var node = (this.textPath && this.textPath() || this).node,
        tspan = new Tspan();

    // clear if build mode is disabled
    if (this._build === !1) this.clear();

    // add new tspan
    node.appendChild(tspan.node);

    return tspan.text(text);
  }
  // Clear all lines
  , clear: function clear() {
    var node = (this.textPath && this.textPath() || this).node;

    // remove existing child nodes
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }return this;
  }
  // Get length of text element
  , length: function length() {
    return this.node.getComputedTextLength();
  }
});

/***/ },
/* 37 */
/***/ function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ },
/* 39 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defs_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__number_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fx_js__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(exports, "Stop", function() { return Stop; });










var Gradient = function (_Container) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Gradient, _Container);

  function Gradient(type) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Gradient);

    // store type
    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Container.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__svg_js__["create"])(type + 'Gradient')));

    _this.type = type;
    return _this;
  }

  // Add a color stop


  Gradient.prototype.at = function at(offset, color, opacity) {
    return this.put(new Stop()).update(offset, color, opacity);
  };
  // Update gradient


  Gradient.prototype.update = function update(block) {
    // remove all stops
    this.clear();

    // invoke passed block
    if (typeof block == 'function') block.call(this, this);

    return this;
  };
  // Return the fill id


  Gradient.prototype.fill = function fill() {
    return 'url(#' + this.id() + ')';
  };
  // Alias string convertion to fill


  Gradient.prototype.toString = function toString() {
    return this.fill();
  };
  // custom attr to handle transform


  Gradient.prototype.attr = function attr(a, b, c) {
    if (a == 'transform') a = 'gradientTransform';
    return __WEBPACK_IMPORTED_MODULE_4__container_js__["default"].prototype.attr.call(this, a, b, c);
  };

  return Gradient;
}(__WEBPACK_IMPORTED_MODULE_4__container_js__["default"]);

/* harmony default export */ exports["default"] = Gradient;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__container_js__["default"], {
  // Create gradient element in defs
  gradient: function gradient(type, block) {
    return this.defs().gradient(type, block);
  }
});

// Base gradient generation
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_5__defs_js__["a" /* default */], {
  // define gradient
  gradient: function gradient(type, block) {
    return this.put(new Gradient(type)).update(block);
  }
});

// Add animatable methods to both gradient and fx module
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__svg_js__["extend"])(Gradient, __WEBPACK_IMPORTED_MODULE_8__fx_js__["a" /* default */], {
  // From position
  from: function from(x, y) {
    return (this._target || this).type == 'radial' ? this.attr({ fx: new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](x), fy: new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](y) }) : this.attr({ x1: new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](x), y1: new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](y) });
  }
  // To position
  , to: function to(x, y) {
    return (this._target || this).type == 'radial' ? this.attr({ cx: new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](x), cy: new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](y) }) : this.attr({ x2: new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](x), y2: new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](y) });
  }
});

var Stop = function (_Element) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Stop, _Element);

  function Stop() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Stop);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Element.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__svg_js__["create"])('stop')));
  }
  // add color stops


  Stop.prototype.update = function update(o) {
    if (typeof o == 'number' || o instanceof __WEBPACK_IMPORTED_MODULE_6__number_js__["default"]) {
      o = {
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      };
    }

    // set attributes
    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](o.offset));

    return this;
  };

  return Stop;
}(__WEBPACK_IMPORTED_MODULE_3__element_js__["default"]);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_8__fx_js__["a" /* default */], {
  update: function update(o) {
    if (this.target() instanceof Stop) {
      if (typeof o == 'number' || o instanceof __WEBPACK_IMPORTED_MODULE_6__number_js__["default"]) {
        return this.update({
          offset: arguments[0],
          color: arguments[1],
          opacity: arguments[2]
        });
      }

      if (o.opacity != null) this.attr('stop-opacity', o.opacity);
      if (o.color != null) this.attr('stop-color', o.color);
      if (o.offset != null) this.attr('offset', o.offset);
    }

    return this;
  }
});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_js__ = __webpack_require__(6);
/* harmony export (immutable) */ exports["eid"] = eid;
/* harmony export (immutable) */ exports["getDid"] = getDid;


var did = 1000;

// Get next named element id
function eid(name) {
  return 'Svgjs' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["b" /* capitalize */])(name) + did++;
}

//returns did
function getDid() {
  return did;
}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shape_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pointarray_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_js__ = __webpack_require__(6);









var Line = function (_Shape) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Line, _Shape);

  function Line() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Line);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Shape.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["create"])('line')));
  }

  // Get array


  Line.prototype.array = function array() {
    return new __WEBPACK_IMPORTED_MODULE_5__pointarray_js__["a" /* default */]([[this.attr('x1'), this.attr('y1')], [this.attr('x2'), this.attr('y2')]]);
  };
  // Overwrite native plot() method


  Line.prototype.plot = function plot(x1, y1, x2, y2) {
    if (typeof y1 !== 'undefined') x1 = { x1: x1, y1: y1, x2: x2, y2: y2 };else x1 = new __WEBPACK_IMPORTED_MODULE_5__pointarray_js__["a" /* default */](x1).toLine();

    return this.attr(x1);
  };
  // Move by left top corner


  Line.prototype.move = function move(x, y) {
    return this.attr(this.array().move(x, y).toLine());
  };
  // Set element size to given width and height


  Line.prototype.size = function size(width, height) {
    var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__helpers_js__["k" /* proportionalSize */])(this, width, height);

    return this.attr(this.array().size(p.width, p.height).toLine());
  };

  return Line;
}(__WEBPACK_IMPORTED_MODULE_3__shape_js__["a" /* default */]);

/* harmony default export */ exports["a"] = Line;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__container_js__["default"], {
  // Create a line element
  line: function line(x1, y1, x2, y2) {
    return this.put(new Line()).plot(x1, y1, x2, y2);
  }
});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shape_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__patharray_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_js__ = __webpack_require__(6);









var Path = function (_Shape) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Path, _Shape);

  function Path() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Path);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Shape.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["create"])('path')));
  }

  // Get array


  Path.prototype.array = function array() {
    return this._array || (this._array = new __WEBPACK_IMPORTED_MODULE_5__patharray_js__["a" /* default */](this.attr('d')));
  };
  // Plot new poly points


  Path.prototype.plot = function plot(p) {
    return this.attr('d', this._array = new __WEBPACK_IMPORTED_MODULE_5__patharray_js__["a" /* default */](p));
  };
  // Move by left top corner


  Path.prototype.move = function move(x, y) {
    return this.attr('d', this.array().move(x, y));
  };
  // Move by left top corner over x-axis


  Path.prototype.x = function x(_x) {
    return _x == null ? this.bbox().x : this.move(_x, this.bbox().y);
  };
  // Move by left top corner over y-axis


  Path.prototype.y = function y(_y) {
    return _y == null ? this.bbox().y : this.move(this.bbox().x, _y);
  };
  // Set element size to given width and height


  Path.prototype.size = function size(width, height) {
    var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__helpers_js__["k" /* proportionalSize */])(this, width, height);

    return this.attr('d', this.array().size(p.width, p.height));
  };
  // Set width of element


  Path.prototype.width = function width(_width) {
    return _width == null ? this.bbox().width : this.size(_width, this.bbox().height);
  };
  // Set height of element


  Path.prototype.height = function height(_height) {
    return _height == null ? this.bbox().height : this.size(this.bbox().width, _height);
  };

  return Path;
}(__WEBPACK_IMPORTED_MODULE_3__shape_js__["a" /* default */]);

/* harmony default export */ exports["a"] = Path;

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["extend"])(Path, {
  // Define morphable array
  morphArray: __WEBPACK_IMPORTED_MODULE_5__patharray_js__["a" /* default */]
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__container_js__["default"], {
  // Create a wrapped path element
  path: function path(d) {
    return this.put(new Path()).plot(d);
  }
});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shape_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pointarray_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_js__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Polyline; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Polygon; });









var Polyline = function (_Shape) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Polyline, _Shape);

  function Polyline() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Polyline);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Shape.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["create"])('polyline')));
  }

  return Polyline;
}(__WEBPACK_IMPORTED_MODULE_3__shape_js__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__container_js__["default"], {
  // Create a wrapped polyline element
  polyline: function polyline(p) {
    return this.put(new Polyline()).plot(p);
  }
});

var Polygon = function (_Shape2) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Polygon, _Shape2);

  function Polygon() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Polygon);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Shape2.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["create"])('polygon')));
  }

  return Polygon;
}(__WEBPACK_IMPORTED_MODULE_3__shape_js__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__container_js__["default"], {
  // Create a wrapped polygon element
  polygon: function polygon(p) {
    return this.put(new Polygon()).plot(p);
  }
});

// Add polygon-specific functions
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["extend"])(Polyline, Polygon, {
  // Get array
  array: function array() {
    return this._array || (this._array = new __WEBPACK_IMPORTED_MODULE_5__pointarray_js__["a" /* default */](this.attr('points')));
  }
  // Plot new path
  , plot: function plot(p) {
    return this.attr('points', this._array = new __WEBPACK_IMPORTED_MODULE_5__pointarray_js__["a" /* default */](p));
  }
  // Move by left top corner
  , move: function move(x, y) {
    return this.attr('points', this.array().move(x, y));
  }
  // Set element size to given width and height
  , size: function size(width, height) {
    var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__helpers_js__["k" /* proportionalSize */])(this, width, height);

    return this.attr('points', this.array().size(p.width, p.height));
  }

});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shape_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_js__ = __webpack_require__(0);







var Rect = function (_Shape) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Rect, _Shape);

  function Rect() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Rect);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Shape.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["create"])('rect')));
  }

  return Rect;
}(__WEBPACK_IMPORTED_MODULE_3__shape_js__["a" /* default */]);

/* harmony default export */ exports["a"] = Rect;

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__container_js__["default"], {
  // Create a rect element
  rect: function rect(width, height) {
    return this.put(new Rect()).size(width, height);
  }
});

/***/ },
/* 46 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 47 */
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = {};

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = true;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(30)
  , dPs         = __webpack_require__(125)
  , enumBugKeys = __webpack_require__(47)
  , IE_PROTO    = __webpack_require__(53)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(72)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(118).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ },
/* 51 */
/***/ function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

var def = __webpack_require__(25).f
  , has = __webpack_require__(15)
  , TAG = __webpack_require__(27)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(54)('keys')
  , uid    = __webpack_require__(39);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(13)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 55 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(46);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(31);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

var global         = __webpack_require__(13)
  , core           = __webpack_require__(11)
  , LIBRARY        = __webpack_require__(49)
  , wksExt         = __webpack_require__(59)
  , defineProperty = __webpack_require__(25).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(27);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shape_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_js__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BBox; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return TBox; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return RBox; });





var BBox = function BBox(element) {
  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, BBox);

  // get values if element is given
  if (element) {
    var box;

    // yes this is ugly, but Firefox can be a bitch when it comes to elements that are not yet rendered
    try {

      // the element is NOT in the dom, throw error
      if (!document.documentElement.contains(element.node)) throw new Exception('Element not in the dom');

      // find native bbox
      box = element.node.getBBox();
    } catch (e) {
      if (element instanceof __WEBPACK_IMPORTED_MODULE_2__shape_js__["a" /* default */]) {
        var clone = element.clone(__WEBPACK_IMPORTED_MODULE_3__svg_js__["parser"].draw).show();
        box = clone.bbox();
        clone.remove();
      } else {
        box = {
          x: element.node.clientLeft,
          y: element.node.clientTop,
          width: element.node.clientWidth,
          height: element.node.clientHeight
        };
      }
    }

    // plain x and y
    this.x = box.x;
    this.y = box.y;

    // plain width and height
    this.width = box.width;
    this.height = box.height;
  }

  // add center, right and bottom
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_js__["m" /* fullBox */])(this);
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_1__element_js__["default"], {
  // Get bounding box
  bbox: function bbox() {
    return new BBox(this);
  }
});

var TBox = function TBox(element) {
  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, TBox);

  // get values if element is given
  if (element) {
    var t = element.ctm().extract(),
        box = element.bbox();

    // width and height including transformations
    this.width = box.width * t.scaleX;
    this.height = box.height * t.scaleY;

    // x and y including transformations
    this.x = box.x + t.x;
    this.y = box.y + t.y;
  }

  // add center, right and bottom
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_js__["m" /* fullBox */])(this);
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_1__element_js__["default"], {
  // Get bounding box
  tbox: function tbox() {
    return new TBox(this);
  }
});

var RBox = function RBox(element) {
  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, RBox);

  if (element) {
    var e = element.doc().parent(),
        box = element.node.getBoundingClientRect(),
        zoom = 1;

    // get screen offset
    this.x = box.left;
    this.y = box.top;

    // subtract parent offset
    this.x -= e.offsetLeft;
    this.y -= e.offsetTop;

    while (e = e.offsetParent) {
      this.x -= e.offsetLeft;
      this.y -= e.offsetTop;
    }

    // calculate cumulative zoom from svg documents
    e = element;
    while (e.parent && (e = e.parent())) {
      if (e.viewbox) {
        zoom *= e.viewbox().zoom;
        this.x -= e.x() || 0;
        this.y -= e.y() || 0;
      }
    }

    // recalculate viewbox distortion
    this.width = box.width / zoom;
    this.height = box.height / zoom;
  }

  // add center, right and bottom
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_js__["m" /* fullBox */])(this);

  // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
  this.x += window.pageXOffset;
  this.y += window.pageYOffset;
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_1__element_js__["default"], {
  // Get bounding box
  rbox: function rbox() {
    return new RBox(this);
  }
})

// Add universal merge method
;[BBox, TBox, RBox].forEach(function (c) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__svg_js__["extend"])(c, {
    // Merge rect box with another, return a new instance
    merge: function merge(box) {
      var b = new c();

      // merge boxes
      b.x = Math.min(this.x, box.x);
      b.y = Math.min(this.y, box.y);
      b.width = Math.max(this.x + this.width, box.x + box.width) - b.x;
      b.height = Math.max(this.y + this.height, box.y + box.height) - b.y;

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_js__["m" /* fullBox */])(b);
    }

  });
});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shape_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fx_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__number_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rect_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_js__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Ellipse; });











var Circle = function (_Shape) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Circle, _Shape);

  function Circle() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Circle);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Shape.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__svg_js__["create"])('circle')));
  }

  return Circle;
}(__WEBPACK_IMPORTED_MODULE_3__shape_js__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_5__container_js__["default"], {
  // Create circle element, based on ellipse
  circle: function circle(size) {
    return this.put(new Circle()).rx(new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](size).divide(2)).move(0, 0);
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__svg_js__["extend"])(Circle, __WEBPACK_IMPORTED_MODULE_4__fx_js__["a" /* default */], {
  // Radius x value
  rx: function rx(_rx) {
    return this.attr('r', _rx);
  }
  // Alias radius x value
  , ry: function ry(_ry) {
    return this.rx(_ry);
  }
});

var Ellipse = function (_Shape2) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Ellipse, _Shape2);

  function Ellipse() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Ellipse);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Shape2.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__svg_js__["create"])('ellipse')));
  }

  return Ellipse;
}(__WEBPACK_IMPORTED_MODULE_3__shape_js__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_5__container_js__["default"], {
  // Create an ellipse
  ellipse: function ellipse(width, height) {
    return this.put(new Ellipse()).size(width, height).move(0, 0);
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__svg_js__["extend"])(Ellipse, __WEBPACK_IMPORTED_MODULE_7__rect_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__fx_js__["a" /* default */], {
  // Radius x value
  rx: function rx(_rx2) {
    return this.attr('rx', _rx2);
  }
  // Radius y value
  , ry: function ry(_ry2) {
    return this.attr('ry', _ry2);
  }
});

// Add common method
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__svg_js__["extend"])(Circle, Ellipse, {
  // Move over x-axis
  x: function x(_x) {
    return _x == null ? this.cx() - this.rx() : this.cx(_x + this.rx());
  }
  // Move over y-axis
  , y: function y(_y) {
    return _y == null ? this.cy() - this.ry() : this.cy(_y + this.ry());
  }
  // Move by center over x-axis
  , cx: function cx(x) {
    return x == null ? this.attr('cx') : this.attr('cx', x);
  }
  // Move by center over y-axis
  , cy: function cy(y) {
    return y == null ? this.attr('cy') : this.attr('cy', y);
  }
  // Set width of element
  , width: function width(_width) {
    return _width == null ? this.rx() * 2 : this.rx(new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](_width).divide(2));
  }
  // Set height of element
  , height: function height(_height) {
    return _height == null ? this.ry() * 2 : this.ry(new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](_height).divide(2));
  }
  // Custom size function
  , size: function size(width, height) {
    var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__helpers_js__["k" /* proportionalSize */])(this, width, height);

    return this.rx(new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](p.width).divide(2)).ry(new __WEBPACK_IMPORTED_MODULE_6__number_js__["default"](p.height).divide(2));
  }
});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_js__ = __webpack_require__(0);






var Group = function (_Container) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Group, _Container);

  function Group() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Group);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Container.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__svg_js__["create"])('g')));
  }
  // Move over x-axis


  Group.prototype.x = function x(_x) {
    return _x == null ? this.transform('x') : this.transform({ x: _x - this.x() }, !0);
  };
  // Move over y-axis


  Group.prototype.y = function y(_y) {
    return _y == null ? this.transform('y') : this.transform({ y: _y - this.y() }, !0);
  };
  // Move by center over x-axis


  Group.prototype.cx = function cx(x) {
    return x == null ? this.gbox().cx : this.x(x - this.gbox().width / 2);
  };
  // Move by center over y-axis


  Group.prototype.cy = function cy(y) {
    return y == null ? this.gbox().cy : this.y(y - this.gbox().height / 2);
  };

  Group.prototype.gbox = function gbox() {
    var bbox = this.bbox(),
        trans = this.transform();

    bbox.x += trans.x;
    bbox.x2 += trans.x;
    bbox.cx += trans.x;

    bbox.y += trans.y;
    bbox.y2 += trans.y;
    bbox.cy += trans.y;

    return bbox;
  };

  return Group;
}(__WEBPACK_IMPORTED_MODULE_3__container_js__["default"]);

/* harmony default export */ exports["a"] = Group;

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_3__container_js__["default"], {
  // Create a group element
  group: function group() {
    return this.put(new Group());
  }
});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shape_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pattern_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_js__ = __webpack_require__(0);








var Image = function (_Shape) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Image, _Shape);

  function Image() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Image);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Shape.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["create"])('image')));
  }
  // (re)load image


  Image.prototype.load = function load(url) {
    var _this2 = this;

    if (!url) return this;

    var img = document.createElement('img');

    // preload image
    img.onload = function () {
      var p = _this2.parent(__WEBPACK_IMPORTED_MODULE_5__pattern_js__["a" /* default */]);

      if (p === null) return;

      // ensure image size
      if (_this2.width() == 0 && _this2.height() == 0) _this2.size(img.width, img.height);

      // ensure pattern size if not set
      if (p && p.width() == 0 && p.height() == 0) p.size(_this2.width(), _this2.height());

      // callback
      if (typeof _this2._loaded === 'function') _this2._loaded.call(_this2, {
        width: img.width,
        height: img.height,
        ratio: img.width / img.height,
        url: url
      });
    };

    img.onerror = function (e) {
      if (typeof _this2._error === 'function') {
        _this2._error.call(_this2, e);
      }
    };

    return this.attr('href', img.src = this.src = url, __WEBPACK_IMPORTED_MODULE_6__svg_js__["xlink"]);
  };
  // Add loaded callback


  Image.prototype.loaded = function loaded(_loaded) {
    this._loaded = _loaded;
    return this;
  };
  // add an error callback


  Image.prototype.error = function error(_error) {
    this._error = _error;
    return this;
  };

  return Image;
}(__WEBPACK_IMPORTED_MODULE_3__shape_js__["a" /* default */]);

/* harmony default export */ exports["a"] = Image;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__container_js__["default"], {
  // create image element, load image and set its size
  image: function image(source, width, height) {
    return this.put(new Image()).load(source).size(width || 0, height || width || 0);
  }
});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfill_js__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfill_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfill_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ids_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__arrange_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__attr_js__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__memory_js__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_js__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sugar_js__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__transform_js__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__array_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bare_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__boxes_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__clip_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__color_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__default_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__defs_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__doc_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ellipse_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__event_js__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__fx_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__gradient_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__group_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__hyperlink_js__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__image_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__line_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__marker_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__mask_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__matrix_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__nested_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__number_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__parent_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ungroup_js__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__path_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__patharray_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pattern_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__point_js__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pointarray_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__poly_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pointed_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__rect_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__regex_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__selector_js__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__set_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__shape_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__text_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__textpath_js__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__use_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__utilities_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__viewbox_js__ = __webpack_require__(68);
/* harmony export (immutable) */ exports["default"] = SVG;





function SVG(el) {
  if (__WEBPACK_IMPORTED_MODULE_1__svg_js__["supported"]) {
    var element = new __WEBPACK_IMPORTED_MODULE_20__doc_js__["default"](el);

    if (!__WEBPACK_IMPORTED_MODULE_1__svg_js__["parser"]) __WEBPACK_IMPORTED_MODULE_1__svg_js__["prepare"](element);

    return element;
  }
}
for (var i in __WEBPACK_IMPORTED_MODULE_1__svg_js__) {
  SVG[i] = __WEBPACK_IMPORTED_MODULE_1__svg_js__[i];
}
SVG.eid = __WEBPACK_IMPORTED_MODULE_2__ids_js__["eid"];
Object.defineProperty(SVG, 'did', {
  get: __WEBPACK_IMPORTED_MODULE_2__ids_js__["getDid"]
});

// import classes









SVG.Element = __WEBPACK_IMPORTED_MODULE_3__element_js__["default"];

for (var _i in __WEBPACK_IMPORTED_MODULE_11__transform_js__) {
  SVG[_i] = __WEBPACK_IMPORTED_MODULE_11__transform_js__[_i];
}
SVG.Array = __WEBPACK_IMPORTED_MODULE_12__array_js__["a" /* default */];


SVG.Bare = __WEBPACK_IMPORTED_MODULE_13__bare_js__["a" /* default */];


SVG.BBox = __WEBPACK_IMPORTED_MODULE_14__boxes_js__["a" /* BBox */];
SVG.RBox = __WEBPACK_IMPORTED_MODULE_14__boxes_js__["b" /* RBox */];
SVG.TBox = __WEBPACK_IMPORTED_MODULE_14__boxes_js__["c" /* TBox */];


SVG.ClipPath = __WEBPACK_IMPORTED_MODULE_15__clip_js__["a" /* default */];


SVG.Color = __WEBPACK_IMPORTED_MODULE_16__color_js__["default"];


SVG.Container = __WEBPACK_IMPORTED_MODULE_17__container_js__["default"];


SVG.defaults = __WEBPACK_IMPORTED_MODULE_18__default_js__["a" /* default */];


SVG.Defs = __WEBPACK_IMPORTED_MODULE_19__defs_js__["a" /* default */];



SVG.Doc = __WEBPACK_IMPORTED_MODULE_20__doc_js__["default"];


SVG.Circle = __WEBPACK_IMPORTED_MODULE_21__ellipse_js__["a" /* Circle */];
SVG.Ellipse = __WEBPACK_IMPORTED_MODULE_21__ellipse_js__["b" /* Ellipse */];


SVG.on = __WEBPACK_IMPORTED_MODULE_22__event_js__["a" /* on */];
SVG.off = __WEBPACK_IMPORTED_MODULE_22__event_js__["b" /* off */];
SVG.listeners = __WEBPACK_IMPORTED_MODULE_22__event_js__["c" /* listeners */];
SVG.handlerMap = __WEBPACK_IMPORTED_MODULE_22__event_js__["d" /* handlerMap */];
SVG.listenerId = __WEBPACK_IMPORTED_MODULE_22__event_js__["e" /* listenerId */];


SVG.FX = __WEBPACK_IMPORTED_MODULE_23__fx_js__["a" /* default */];
SVG.easing = __WEBPACK_IMPORTED_MODULE_23__fx_js__["b" /* easing */];
SVG.Situation = __WEBPACK_IMPORTED_MODULE_23__fx_js__["c" /* Situation */];
SVG.Delay = __WEBPACK_IMPORTED_MODULE_23__fx_js__["d" /* Delay */];
SVG.MorphObj = __WEBPACK_IMPORTED_MODULE_23__fx_js__["e" /* MorphObj */];
SVG.morph = __WEBPACK_IMPORTED_MODULE_23__fx_js__["f" /* morph */];


SVG.Gradient = __WEBPACK_IMPORTED_MODULE_24__gradient_js__["default"];
SVG.Stop = __WEBPACK_IMPORTED_MODULE_24__gradient_js__["Stop"];


SVG.G = __WEBPACK_IMPORTED_MODULE_25__group_js__["a" /* default */];
SVG.Group = __WEBPACK_IMPORTED_MODULE_25__group_js__["a" /* default */];


SVG.A = __WEBPACK_IMPORTED_MODULE_26__hyperlink_js__["a" /* default */];


SVG.Image = __WEBPACK_IMPORTED_MODULE_27__image_js__["a" /* default */];


SVG.Line = __WEBPACK_IMPORTED_MODULE_28__line_js__["a" /* default */];


SVG.Marker = __WEBPACK_IMPORTED_MODULE_29__marker_js__["a" /* default */];


SVG.Mask = __WEBPACK_IMPORTED_MODULE_30__mask_js__["a" /* default */];


SVG.Matrix = __WEBPACK_IMPORTED_MODULE_31__matrix_js__["default"];


SVG.Nested = __WEBPACK_IMPORTED_MODULE_32__nested_js__["default"];


SVG.Number = __WEBPACK_IMPORTED_MODULE_33__number_js__["default"];



SVG.Parent = __WEBPACK_IMPORTED_MODULE_34__parent_js__["a" /* default */];


SVG.Path = __WEBPACK_IMPORTED_MODULE_36__path_js__["a" /* default */];


SVG.PathArray = __WEBPACK_IMPORTED_MODULE_37__patharray_js__["a" /* default */];


SVG.Pattern = __WEBPACK_IMPORTED_MODULE_38__pattern_js__["a" /* default */];


SVG.Point = __WEBPACK_IMPORTED_MODULE_39__point_js__["a" /* default */];


SVG.PointArray = __WEBPACK_IMPORTED_MODULE_40__pointarray_js__["a" /* default */];



SVG.Polyline = __WEBPACK_IMPORTED_MODULE_41__poly_js__["a" /* Polyline */];
SVG.Polygon = __WEBPACK_IMPORTED_MODULE_41__poly_js__["b" /* Polygon */];


SVG.Rect = __WEBPACK_IMPORTED_MODULE_43__rect_js__["a" /* default */];


SVG.regex = __WEBPACK_IMPORTED_MODULE_44__regex_js__["default"];


SVG.get = __WEBPACK_IMPORTED_MODULE_45__selector_js__["a" /* get */];
SVG.select = __WEBPACK_IMPORTED_MODULE_45__selector_js__["b" /* select */];


SVG.Set = __WEBPACK_IMPORTED_MODULE_46__set_js__["default"];


SVG.Shape = __WEBPACK_IMPORTED_MODULE_47__shape_js__["a" /* default */];


SVG.Text = __WEBPACK_IMPORTED_MODULE_48__text_js__["a" /* default */];


SVG.TextPath = __WEBPACK_IMPORTED_MODULE_49__textpath_js__["a" /* default */];


SVG.Use = __WEBPACK_IMPORTED_MODULE_50__use_js__["a" /* default */];


SVG.utils = __WEBPACK_IMPORTED_MODULE_51__utilities_js__["default"];


SVG.ViewBox = __WEBPACK_IMPORTED_MODULE_52__viewbox_js__["a" /* default */];

// tell all the modules that the library has loaded
__webpack_require__(28).loaded();

// export the function and not a object
if (module && module.exports) module.exports = module.exports.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(100)(module)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg_js__ = __webpack_require__(0);






var Nested = function (_Container) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Nested, _Container);

  function Nested() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Nested);

    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Container.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__svg_js__["create"])('svg')));

    _this.style('overflow', 'visible');
    return _this;
  }

  return Nested;
}(__WEBPACK_IMPORTED_MODULE_3__container_js__["default"]);

/* harmony default export */ exports["default"] = Nested;

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_3__container_js__["default"], {
  // Create nested svg document
  nested: function nested() {
    return this.put(new Nested());
  }
});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__array_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__regex_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_js__ = __webpack_require__(6);








// Path points array

var PathArray = function (_svg_Array) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(PathArray, _svg_Array);

  function PathArray(array, fallback) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PathArray);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _svg_Array.call(this, array, fallback || [['M', 0, 0]]));
  }

  // Convert array to string


  PathArray.prototype.toString = function toString() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_js__["l" /* arrayToString */])(this.value);
  };
  // Move path string


  PathArray.prototype.move = function move(x, y) {
    // get bounding box of current situation
    var box = this.bbox();

    // get relative offset
    x -= box.x;
    y -= box.y;

    if (!isNaN(x) && !isNaN(y)) {
      // move every point
      for (var l, i = this.value.length - 1; i >= 0; i--) {
        l = this.value[i][0];

        if (l == 'M' || l == 'L' || l == 'T') {
          this.value[i][1] += x;
          this.value[i][2] += y;
        } else if (l == 'H') {
          this.value[i][1] += x;
        } else if (l == 'V') {
          this.value[i][1] += y;
        } else if (l == 'C' || l == 'S' || l == 'Q') {
          this.value[i][1] += x;
          this.value[i][2] += y;
          this.value[i][3] += x;
          this.value[i][4] += y;

          if (l == 'C') {
            this.value[i][5] += x;
            this.value[i][6] += y;
          }
        } else if (l == 'A') {
          this.value[i][6] += x;
          this.value[i][7] += y;
        }
      }
    }

    return this;
  };
  // Resize path string


  PathArray.prototype.size = function size(width, height) {
    // get bounding box of current situation
    var i,
        l,
        box = this.bbox();

    // recalculate position of all points according to new size
    for (i = this.value.length - 1; i >= 0; i--) {
      l = this.value[i][0];

      if (l == 'M' || l == 'L' || l == 'T') {
        this.value[i][1] = (this.value[i][1] - box.x) * width / box.width + box.x;
        this.value[i][2] = (this.value[i][2] - box.y) * height / box.height + box.y;
      } else if (l == 'H') {
        this.value[i][1] = (this.value[i][1] - box.x) * width / box.width + box.x;
      } else if (l == 'V') {
        this.value[i][1] = (this.value[i][1] - box.y) * height / box.height + box.y;
      } else if (l == 'C' || l == 'S' || l == 'Q') {
        this.value[i][1] = (this.value[i][1] - box.x) * width / box.width + box.x;
        this.value[i][2] = (this.value[i][2] - box.y) * height / box.height + box.y;
        this.value[i][3] = (this.value[i][3] - box.x) * width / box.width + box.x;
        this.value[i][4] = (this.value[i][4] - box.y) * height / box.height + box.y;

        if (l == 'C') {
          this.value[i][5] = (this.value[i][5] - box.x) * width / box.width + box.x;
          this.value[i][6] = (this.value[i][6] - box.y) * height / box.height + box.y;
        }
      } else if (l == 'A') {
        // resize radii
        this.value[i][1] = this.value[i][1] * width / box.width;
        this.value[i][2] = this.value[i][2] * height / box.height;

        // move position values
        this.value[i][6] = (this.value[i][6] - box.x) * width / box.width + box.x;
        this.value[i][7] = (this.value[i][7] - box.y) * height / box.height + box.y;
      }
    }

    return this;
  };
  // Absolutize and parse path to array


  PathArray.prototype.parse = function parse(array) {
    // if it's already a patharray, no need to parse it
    if (array instanceof PathArray) return array.valueOf();

    // prepare for parsing
    var i,
        x0,
        y0,
        s,
        seg,
        arr,
        x = 0,
        y = 0,
        paramCnt = { 'M': 2, 'L': 2, 'H': 1, 'V': 1, 'C': 6, 'S': 4, 'Q': 4, 'T': 2, 'A': 7 };

    if (typeof array == 'string') {

      array = array.replace(__WEBPACK_IMPORTED_MODULE_4__regex_js__["default"].negExp, 'X') // replace all negative exponents with certain char
      .replace(__WEBPACK_IMPORTED_MODULE_4__regex_js__["default"].pathLetters, ' $& ') // put some room between letters and numbers
      .replace(__WEBPACK_IMPORTED_MODULE_4__regex_js__["default"].hyphen, ' -') // add space before hyphen
      .replace(__WEBPACK_IMPORTED_MODULE_4__regex_js__["default"].comma, ' ') // unify all spaces
      .replace(__WEBPACK_IMPORTED_MODULE_4__regex_js__["default"].X, 'e-') // add back the expoent
      .trim() // trim
      .split(__WEBPACK_IMPORTED_MODULE_4__regex_js__["default"].whitespaces); // split into array

      // at this place there could be parts like ['3.124.854.32'] because we could not determine the point as seperator till now
      // we fix this elements in the next loop
      for (i = array.length; --i;) {
        if (array[i].indexOf('.') != array[i].lastIndexOf('.')) {
          var split = array[i].split('.'),
              first = [split.shift(), split.shift()].join('.'); // split at the point
          // join the first number together
          array.splice.apply(array, [i, 1].concat(first, split.map(function (el) {
            return '.' + el;
          }))); // add first and all other entries back to array
        }
      }
    } else {
      array = array.reduce(function (prev, curr) {
        return [].concat.apply(prev, curr);
      }, []);
    }

    // array now is an array containing all parts of a path e.g. ['M', '0', '0', 'L', '30', '30' ...]

    var arr = [];

    do {
      // Test if we have a path letter
      if (__WEBPACK_IMPORTED_MODULE_4__regex_js__["default"].isPathLetter.test(array[0])) {
        s = array[0];
        array.shift();
        // If last letter was a move command and we got no new, it defaults to [L]ine
      } else if (s == 'M') {
        s = 'L';
      } else if (s == 'm') {
        s = 'l';
      }

      // add path letter as first element
      seg = [s.toUpperCase()];

      // push all necessary parameters to segment
      for (i = 0; i < paramCnt[seg[0]]; ++i) {
        seg.push(parseFloat(array.shift()));
      }

      // upper case
      if (s == seg[0]) {

        if (s == 'M' || s == 'L' || s == 'C' || s == 'Q' || s == 'S' || s == 'T') {
          x = seg[paramCnt[seg[0]] - 1];
          y = seg[paramCnt[seg[0]]];
        } else if (s == 'V') {
          y = seg[1];
        } else if (s == 'H') {
          x = seg[1];
        } else if (s == 'A') {
          x = seg[6];
          y = seg[7];
        }

        // lower case
      } else {

        // convert relative to absolute values
        if (s == 'm' || s == 'l' || s == 'c' || s == 's' || s == 'q' || s == 't') {

          seg[1] += x;
          seg[2] += y;

          if (seg[3] != null) {
            seg[3] += x;
            seg[4] += y;
          }

          if (seg[5] != null) {
            seg[5] += x;
            seg[6] += y;
          }

          // move pointer
          x = seg[paramCnt[seg[0]] - 1];
          y = seg[paramCnt[seg[0]]];
        } else if (s == 'v') {
          seg[1] += y;
          y = seg[1];
        } else if (s == 'h') {
          seg[1] += x;
          x = seg[1];
        } else if (s == 'a') {
          seg[6] += x;
          seg[7] += y;
          x = seg[6];
          y = seg[7];
        }
      }

      if (seg[0] == 'M') {
        x0 = x;
        y0 = y;
      }

      if (seg[0] == 'Z') {
        x = x0;
        y = y0;
      }

      arr.push(seg);
    } while (array.length);

    return arr;
  };
  // Get bounding box of path


  PathArray.prototype.bbox = function bbox() {
    __WEBPACK_IMPORTED_MODULE_5__svg_js__["parser"].path.setAttribute('d', this.toString());

    return __WEBPACK_IMPORTED_MODULE_5__svg_js__["parser"].path.getBBox();
  };

  return PathArray;
}(__WEBPACK_IMPORTED_MODULE_3__array_js__["a" /* default */]);

/* harmony default export */ exports["a"] = PathArray;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defs_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_js__ = __webpack_require__(0);







var Pattern = function (_Container) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Pattern, _Container);

  function Pattern() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Pattern);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Container.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["create"])('pattern')));
  }

  // Return the fill id


  Pattern.prototype.fill = function fill() {
    return 'url(#' + this.id() + ')';
  };
  // Update pattern by rebuilding


  Pattern.prototype.update = function update(block) {
    // remove content
    this.clear();

    // invoke passed block
    if (typeof block == 'function') block.call(this, this);

    return this;
  };
  // Alias string convertion to fill


  Pattern.prototype.toString = function toString() {
    return this.fill();
  };
  // custom attr to handle transform


  Pattern.prototype.attr = function attr(a, b, c) {
    if (a == 'transform') a = 'patternTransform';
    return __WEBPACK_IMPORTED_MODULE_3__container_js__["default"].prototype.attr.call(this, a, b, c);
  };

  return Pattern;
}(__WEBPACK_IMPORTED_MODULE_3__container_js__["default"]);

/* harmony default export */ exports["a"] = Pattern;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_3__container_js__["default"], {
  // Create pattern element in defs
  pattern: function pattern(width, height, block) {
    return this.defs().pattern(width, height, block);
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__defs_js__["a" /* default */], {
  // Define gradient
  pattern: function pattern(width, height, block) {
    return this.put(new Pattern()).update(block).attr({
      x: 0,
      y: 0,
      width: width,
      height: height,
      patternUnits: 'userSpaceOnUse'
    });
  }

});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doc_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__number_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fx_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__svg_js__ = __webpack_require__(0);









var ViewBox = function () {
  function ViewBox(source) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ViewBox);

    var i,
        base = [0, 0, 0, 0],
        x,
        y,
        width,
        height,
        box,
        view,
        we,
        he,
        wm = 1 // width multiplier
    ,
        hm = 1 // height multiplier
    ,
        reg = /[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;

    if (source instanceof __WEBPACK_IMPORTED_MODULE_2__element_js__["default"]) {

      we = source;
      he = source;
      view = (source.attr('viewBox') || '').match(reg);
      box = source.bbox;

      // get dimensions of current node
      width = new __WEBPACK_IMPORTED_MODULE_5__number_js__["default"](source.width());
      height = new __WEBPACK_IMPORTED_MODULE_5__number_js__["default"](source.height());

      // find nearest non-percentual dimensions
      while (width.unit == '%') {
        wm *= width.value;
        width = new __WEBPACK_IMPORTED_MODULE_5__number_js__["default"](we instanceof __WEBPACK_IMPORTED_MODULE_4__doc_js__["default"] ? we.parent().offsetWidth : we.parent().width());
        we = we.parent();
      }
      while (height.unit == '%') {
        hm *= height.value;
        height = new __WEBPACK_IMPORTED_MODULE_5__number_js__["default"](he instanceof __WEBPACK_IMPORTED_MODULE_4__doc_js__["default"] ? he.parent().offsetHeight : he.parent().height());
        he = he.parent();
      }

      // ensure defaults
      this.x = 0;
      this.y = 0;
      this.width = width * wm;
      this.height = height * hm;
      this.zoom = 1;

      if (view) {
        // get width and height from viewbox
        x = parseFloat(view[0]);
        y = parseFloat(view[1]);
        width = parseFloat(view[2]);
        height = parseFloat(view[3]);

        // calculate zoom accoring to viewbox
        this.zoom = this.width / this.height > width / height ? this.height / height : this.width / width;

        // calculate real pixel dimensions on parent SVG.Doc element
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
      }
    } else {
      // ensure source as object
      source = typeof source === 'string' ? source.match(reg).map(function (el) {
        return parseFloat(el);
      }) : Array.isArray(source) ? source : (typeof source === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(source)) == 'object' ? [source.x, source.y, source.width, source.height] : arguments.length == 4 ? [].slice.call(arguments) : base;

      this.x = source[0];
      this.y = source[1];
      this.width = source[2];
      this.height = source[3];
    }
  }

  ViewBox.prototype.toString = function toString() {
    return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height;
  };

  ViewBox.prototype.morph = function morph(v) {
    var v = arguments.length == 1 ? [v.x, v.y, v.width, v.height] : [].slice.call(arguments);

    this.destination = new ViewBox(v);

    return this;
  };

  ViewBox.prototype.at = function at(pos) {
    if (!this.destination) return this;

    return new ViewBox([this.x + (this.destination.x - this.x) * pos, this.y + (this.destination.y - this.y) * pos, this.width + (this.destination.width - this.width) * pos, this.height + (this.destination.height - this.height) * pos]);
  };

  return ViewBox;
}();

/* harmony default export */ exports["a"] = ViewBox;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_3__container_js__["default"], {
  // Get the viewBox and calculate the zoom value
  viewbox: function viewbox(v) {
    if (arguments.length == 0)
      // act as a getter if there are no arguments
      return new ViewBox(this);

    // otherwise act as a setter
    v = arguments.length == 1 ? [v.x, v.y, v.width, v.height] : [].slice.call(arguments);

    return this.attr('viewBox', v);
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_6__fx_js__["a" /* default */], {
  // Add animatable viewbox
  viewbox: function viewbox(x, y, width, height) {
    if (this.target() instanceof __WEBPACK_IMPORTED_MODULE_3__container_js__["default"]) {
      this.add('viewbox', new ViewBox(x, y, width, height));
    }

    return this;
  }
});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ },
/* 70 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(114);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(31)
  , document = __webpack_require__(13).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(21) && !__webpack_require__(23)(function(){
  return Object.defineProperty(__webpack_require__(72)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(70);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(49)
  , $export        = __webpack_require__(22)
  , redefine       = __webpack_require__(79)
  , hide           = __webpack_require__(24)
  , has            = __webpack_require__(15)
  , Iterators      = __webpack_require__(48)
  , $iterCreate    = __webpack_require__(120)
  , setToStringTag = __webpack_require__(52)
  , getPrototypeOf = __webpack_require__(127)
  , ITERATOR       = __webpack_require__(27)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(37)
  , createDesc     = __webpack_require__(38)
  , toIObject      = __webpack_require__(16)
  , toPrimitive    = __webpack_require__(57)
  , has            = __webpack_require__(15)
  , IE8_DOM_DEFINE = __webpack_require__(73)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(21) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(78)
  , hiddenKeys = __webpack_require__(47).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(15)
  , toIObject    = __webpack_require__(16)
  , arrayIndexOf = __webpack_require__(116)(false)
  , IE_PROTO     = __webpack_require__(53)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__doc_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_js__ = __webpack_require__(0);




__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_1__element_js__["default"], {
    // Get all siblings, including myself
    siblings: function siblings() {
        return this.parent().children();
    }
    // Get the curent position siblings
    , position: function position() {
        return this.parent().index(this);
    }
    // Get the next element (will return null if there is none)
    , next: function next() {
        return this.siblings()[this.position() + 1];
    }
    // Get the next element (will return null if there is none)
    , previous: function previous() {
        return this.siblings()[this.position() - 1];
    }
    // Send given element one step forward
    , forward: function forward() {
        var i = this.position() + 1,
            p = this.parent();

        // move node one step forward
        p.removeElement(this).add(this, i);

        // make sure defs node is always at the top
        if (p instanceof __WEBPACK_IMPORTED_MODULE_0__doc_js__["default"]) p.node.appendChild(p.defs().node);

        return this;
    }
    // Send given element one step backward
    , backward: function backward() {
        var i = this.position();

        if (i > 0) this.parent().removeElement(this).add(this, i - 1);

        return this;
    }
    // Send given element all the way to the front
    , front: function front() {
        var p = this.parent();

        // Move node forward
        p.node.appendChild(this.node);

        // Make sure defs node is always at the top
        if (p instanceof __WEBPACK_IMPORTED_MODULE_0__doc_js__["default"]) p.node.appendChild(p.defs().node);

        return this;
    }
    // Send given element all the way to the back
    , back: function back() {
        if (this.position() > 0) this.parent().removeElement(this).add(this, 0);

        return this;
    }
    // Inserts a given element before the targeted element
    , before: function before(element) {
        element.remove();

        var i = this.position();

        this.parent().add(element, i);

        return this;
    }
    // Insters a given element after the targeted element
    , after: function after(element) {
        element.remove();

        var i = this.position();

        this.parent().add(element, i + 1);

        return this;
    }

});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__array_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__matrix_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__regex_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__default_js__ = __webpack_require__(33);











__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_1__element_js__["default"], {
  // Set svg element attribute
  attr: function attr(a, v, n) {
    // act as full getter
    if (a == null) {
      // get an object of attributes
      a = {};
      v = this.node.attributes;
      for (n = v.length - 1; n >= 0; n--) {
        a[v[n].nodeName] = __WEBPACK_IMPORTED_MODULE_8__regex_js__["default"].isNumber.test(v[n].nodeValue) ? parseFloat(v[n].nodeValue) : v[n].nodeValue;
      }return a;
    } else if ((typeof a === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(a)) == 'object') {
      // apply every attribute individually if an object is passed
      for (v in a) {
        this.attr(v, a[v]);
      }
    } else if (v === null) {
      // remove value
      this.node.removeAttribute(a);
    } else if (v == null) {
      // act as a getter if the first and only argument is not an object
      v = this.node.getAttribute(a);
      return v == null ? __WEBPACK_IMPORTED_MODULE_9__default_js__["a" /* default */].attrs[a] : __WEBPACK_IMPORTED_MODULE_8__regex_js__["default"].isNumber.test(v) ? parseFloat(v) : v;
    } else {
      // BUG FIX: some browsers will render a stroke if a color is given even though stroke width is 0
      if (a == 'stroke-width') this.attr('stroke', parseFloat(v) > 0 ? this._stroke : null);else if (a == 'stroke') this._stroke = v;

      // convert image fill and stroke to patterns
      if (a == 'fill' || a == 'stroke') {
        if (__WEBPACK_IMPORTED_MODULE_8__regex_js__["default"].isImage.test(v)) v = this.doc().defs().image(v, 0, 0);

        if (v instanceof __WEBPACK_IMPORTED_MODULE_2__image_js__["a" /* default */]) v = this.doc().defs().pattern(0, 0, function () {
          this.add(v);
        });
      }

      // ensure correct numeric values (also accepts NaN and Infinity)
      if (typeof v === 'number') v = new __WEBPACK_IMPORTED_MODULE_4__number_js__["default"](v);

      // ensure full hex color
      else if (__WEBPACK_IMPORTED_MODULE_3__color_js__["default"].isColor(v)) v = new __WEBPACK_IMPORTED_MODULE_3__color_js__["default"](v);

        // parse array values
        else if (Array.isArray(v)) v = new __WEBPACK_IMPORTED_MODULE_5__array_js__["a" /* default */](v);

          // store parametric transformation values locally
          else if (v instanceof __WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"] && v.param) this.param = v.param;

      // if the passed attribute is leading...
      if (a == 'leading') {
        // ... call the leading method instead
        if (this.leading) this.leading(v);
      } else {
        // set given attribute on node
        typeof n === 'string' ? this.node.setAttributeNS(n, a, v.toString()) : this.node.setAttribute(a, v.toString());
      }

      // rebuild if required
      if (this.rebuild && (a == 'font-size' || a == 'x')) this.rebuild(a, v);
    }

    return this;
  }
});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parent_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_js__ = __webpack_require__(0);








var Bare = function (_Element) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Bare, _Element);

  function Bare(element, inherit) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Bare);

    // inherit custom methods
    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Element.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["create"])(element)));
    // construct element


    if (inherit) for (var method in inherit.prototype) {
      if (typeof inherit.prototype[method] === 'function') _this[method] = inherit.prototype[method];
    }return _this;
  }

  // Insert some plain text


  Bare.prototype.words = function words(text) {
    // remove contents
    while (this.node.hasChildNodes()) {
      this.node.removeChild(this.node.lastChild);
    } // create text node
    this.node.appendChild(document.createTextNode(text));

    return this;
  };

  return Bare;
}(__WEBPACK_IMPORTED_MODULE_3__element_js__["default"]);

/* harmony default export */ exports["a"] = Bare;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__parent_js__["a" /* default */], {
  // Create an element that is not described by SVG.js
  element: function element(_element, inherit) {
    return this.put(new Bare(_element, inherit));
  }
  // Add symbol element
  , symbol: function symbol() {
    return this.defs().element('symbol', __WEBPACK_IMPORTED_MODULE_5__container_js__["default"]);
  }

});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_js__ = __webpack_require__(0);







var ClipPath = function (_Container) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ClipPath, _Container);

  function ClipPath() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ClipPath);

    // keep references to clipped elements
    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Container.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["create"])('clipPath')));

    _this.targets = [];
    return _this;
  }

  // Unclip all clipped elements and remove itself


  ClipPath.prototype.remove = function remove() {
    // unclip all targets
    for (var i = this.targets.length - 1; i >= 0; i--) {
      if (this.targets[i]) this.targets[i].unclip();
    }this.targets = [];

    // remove clipPath from parent
    this.parent().removeElement(this);

    return this;
  };

  return ClipPath;
}(__WEBPACK_IMPORTED_MODULE_3__container_js__["default"]);

/* harmony default export */ exports["a"] = ClipPath;

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_3__container_js__["default"], {
  // Create clipping element
  clip: function clip() {
    return this.defs().put(new ClipPath());
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__element_js__["default"], {
  // Distribute clipPath to svg element
  clipWith: function clipWith(element) {
    // use given clip or create a new one
    this.clipper = element instanceof ClipPath ? element : this.parent().clip().add(element);

    // store reverence on self in mask
    this.clipper.targets.push(this);

    // apply mask
    return this.attr('clip-path', 'url("#' + this.clipper.attr('id') + '")');
  }
  // Unclip element
  , unclip: function unclip() {
    delete this.clipper;
    return this.attr('clip-path', null);
  }
});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_js__ = __webpack_require__(0);




__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_2__element_js__["default"], {
  // Store data values on svg nodes
  data: function data(a, v, r) {
    if ((typeof a === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(a)) == 'object') {
      for (v in a) {
        this.data(v, a[v]);
      }
    } else if (arguments.length < 2) {
      try {
        return JSON.parse(this.attr('data-' + a));
      } catch (e) {
        return this.attr('data-' + a);
      }
    } else {
      this.attr('data-' + a, v === null ? null : r === !0 || typeof v === 'string' || typeof v === 'number' ? v : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(v));
    }

    return this;
  }
});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_js__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return _on; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return _off; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return listeners; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return handlerMap; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return listenerId; });





// Add events to elements
;['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove'
// , 'mouseenter' -> not supported by IE
// , 'mouseleave' -> not supported by IE
, 'touchstart', 'touchmove', 'touchleave', 'touchend', 'touchcancel'].forEach(function (event) {
  var _extend;

  // add event to Element
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_0__element_js__["default"], (_extend = {}, _extend[event] = function (f) {
    var self = this;

    // bind event to element rather than element node
    this.node['on' + event] = typeof f == 'function' ? function () {
      return f.apply(self, arguments);
    } : null;

    return this;
  }, _extend));
});

// Initialize listeners stack
var listeners = [];
var handlerMap = [];
var listenerId = 0;

// Add event binder in the SVG namespace
function _on(node, event, listener, binding) {
  // create listener, get object-index
  var l = listener.bind(binding || node.instance || node),
      index = (handlerMap.indexOf(node) + 1 || handlerMap.push(node)) - 1,
      ev = event.split('.')[0],
      ns = event.split('.')[1] || '*';

  // ensure valid object
  listeners[index] = listeners[index] || {};
  listeners[index][ev] = listeners[index][ev] || {};
  listeners[index][ev][ns] = listeners[index][ev][ns] || {};

  if (!listener._svgjsListenerId) listener._svgjsListenerId = ++listenerId;

  // reference listener
  listeners[index][ev][ns][listener._svgjsListenerId] = l;

  // add listener
  node.addEventListener(ev, l, !1);
}

// Add event unbinder in the SVG namespace
function _off(node, event, listener) {
  var index = handlerMap.indexOf(node),
      ev = event && event.split('.')[0],
      ns = event && event.split('.')[1];

  if (index == -1) return;

  if (listener) {
    if (typeof listener == 'function') listener = listener._svgjsListenerId;
    if (!listener) return;

    // remove listener reference
    if (listeners[index][ev] && listeners[index][ev][ns || '*']) {
      // remove listener
      node.removeEventListener(ev, listeners[index][ev][ns || '*'][listener], !1);

      delete listeners[index][ev][ns || '*'][listener];
    }
  } else if (ns && ev) {
    // remove all listeners for a namespaced event
    if (listeners[index][ev] && listeners[index][ev][ns]) {
      for (listener in listeners[index][ev][ns]) {
        _off(node, [ev, ns].join('.'), listener);
      }delete listeners[index][ev][ns];
    }
  } else if (ns) {
    // remove all listeners for a specific namespace
    for (event in listeners[index]) {
      for (var namespace in listeners[index][event]) {
        if (ns === namespace) {
          _off(node, [event, ns].join('.'));
        }
      }
    }
  } else if (ev) {
    // remove all listeners for the event
    if (listeners[index][ev]) {
      for (var _namespace in listeners[index][ev]) {
        _off(node, [ev, _namespace].join('.'));
      }delete listeners[index][ev];
    }
  } else {
    // remove all listeners on a given node
    for (event in listeners[index]) {
      _off(node, event);
    }delete listeners[index];
  }
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_0__element_js__["default"], {
  // Bind given event to listener
  on: function on(event, listener, binding) {
    _on(this.node, event, listener, binding);

    return this;
  }
  // Unbind event from listener
  , off: function off(event, listener) {
    _off(this.node, event, listener);

    return this;
  }
  // Fire given event
  , fire: function fire(event, data) {

    // Dispatch event
    if (event instanceof Event) {
      this.node.dispatchEvent(event);
    } else {
      this.node.dispatchEvent(new CustomEvent(event, { detail: data }));
    }

    return this;
  }
});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_js__ = __webpack_require__(0);







var A = function (_Container) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(A, _Container);

  function A() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, A);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Container.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["create"])('a')));
  }

  // Link url


  A.prototype.to = function to(url) {
    return this.attr('href', url, __WEBPACK_IMPORTED_MODULE_5__svg_js__["xlink"]);
  };
  // Link show attribute


  A.prototype.show = function show(target) {
    return this.attr('show', target, __WEBPACK_IMPORTED_MODULE_5__svg_js__["xlink"]);
  };
  // Link target attribute


  A.prototype.target = function target(_target) {
    return this.attr('target', _target);
  };

  return A;
}(__WEBPACK_IMPORTED_MODULE_3__container_js__["default"]);

/* harmony default export */ exports["a"] = A;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_3__container_js__["default"], {
  // Create a hyperlink element
  link: function link(url) {
    return this.put(new A()).to(url);
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__element_js__["default"], {
  // Create a hyperlink element
  linkTo: function linkTo(url) {
    var link = new A();

    if (typeof url == 'function') url.call(link, link);else link.to(url);

    return this.parent().put(link).put(this);
  }

});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defs_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__poly_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__line_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__path_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__svg_js__ = __webpack_require__(0);











var Marker = function (_Container) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Marker, _Container);

  function Marker() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Marker);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Container.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["create"])('marker')));
  }

  // Set width of element


  Marker.prototype.width = function width(_width) {
    return this.attr('markerWidth', _width);
  };
  // Set height of element


  Marker.prototype.height = function height(_height) {
    return this.attr('markerHeight', _height);
  };
  // Set marker refX and refY


  Marker.prototype.ref = function ref(x, y) {
    return this.attr('refX', x).attr('refY', y);
  };
  // Update marker


  Marker.prototype.update = function update(block) {
    // remove all content
    this.clear();

    // invoke passed block
    if (typeof block == 'function') block.call(this, this);

    return this;
  };
  // Return the fill id


  Marker.prototype.toString = function toString() {
    return 'url(#' + this.id() + ')';
  };

  return Marker;
}(__WEBPACK_IMPORTED_MODULE_5__container_js__["default"]);

/* harmony default export */ exports["a"] = Marker;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_5__container_js__["default"], {
  marker: function marker(width, height, block) {
    // Create marker element in defs
    return this.defs().marker(width, height, block);
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__defs_js__["a" /* default */], {
  // Create marker
  marker: function marker(width, height, block) {
    // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
    return this.put(new Marker()).size(width, height).ref(width / 2, height / 2).viewbox(0, 0, width, height).attr('orient', 'auto').update(block);
  }

});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_7__line_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__poly_js__["a" /* Polyline */], __WEBPACK_IMPORTED_MODULE_6__poly_js__["b" /* Polygon */], __WEBPACK_IMPORTED_MODULE_8__path_js__["a" /* default */], {
  // Create and attach markers
  marker: function marker(_marker, width, height, block) {
    var attr = ['marker'];

    // Build attribute name
    if (_marker != 'all') attr.push(_marker);
    attr = attr.join('-');

    // Set marker attribute
    _marker = arguments[1] instanceof Marker ? arguments[1] : this.doc().marker(width, height, block);

    return this.attr(attr, _marker);
  }

});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_js__ = __webpack_require__(0);







var Mask = function (_Container) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Mask, _Container);

  function Mask() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Mask);

    // keep references to masked elements
    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Container.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["create"])('mask')));

    _this.targets = [];
    return _this;
  }

  // Unmask all masked elements and remove itself


  Mask.prototype.remove = function remove() {
    // unmask all targets
    for (var i = this.targets.length - 1; i >= 0; i--) {
      if (this.targets[i]) this.targets[i].unmask();
    }this.targets = [];

    // remove mask from parent
    this.parent().removeElement(this);

    return this;
  };

  return Mask;
}(__WEBPACK_IMPORTED_MODULE_4__container_js__["default"]);

/* harmony default export */ exports["a"] = Mask;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__container_js__["default"], {
  // Create masking element
  mask: function mask() {
    return this.defs().put(new Mask());
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_3__element_js__["default"], {
  // Distribute mask to svg element
  maskWith: function maskWith(element) {
    // use given mask or create a new one
    this.masker = element instanceof Mask ? element : this.parent().mask().add(element);

    // store reverence on self in mask
    this.masker.targets.push(this);

    // apply mask
    return this.attr('mask', 'url("#' + this.masker.attr('id') + '")');
  }
  // Unmask element
  , unmask: function unmask() {
    delete this.masker;
    return this.attr('mask', null);
  }

});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_js__ = __webpack_require__(0);



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_1__element_js__["default"], {
  // Remember arbitrary data
  remember: function remember(k, v) {
    // remember every item in an object individually
    if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(arguments[0]) == 'object') for (var v in k) {
      this.remember(v, k[v]);
    } // retrieve memory
    else if (arguments.length == 1) return this.memory()[k];

      // store memory
      else this.memory()[k] = v;

    return this;
  }

  // Erase a given memory
  , forget: function forget() {
    if (arguments.length == 0) this._memory = {};else for (var i = arguments.length - 1; i >= 0; i--) {
      delete this.memory()[arguments[i]];
    }return this;
  }

  // Initialize or return local memory object
  , memory: function memory() {
    return this._memory || (this._memory = {});
  }

});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_js__ = __webpack_require__(0);





var Point = function () {
  function Point(x, y) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Point);

    var i,
        source,
        base = { x: 0, y: 0 };

    // ensure source as object
    source = Array.isArray(x) ? { x: x[0], y: x[1] } : (typeof x === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(x)) === 'object' ? { x: x.x, y: x.y } : x != null ? { x: x, y: y != null ? y : x } : base; // If y has no value, then x is used has its value

    // merge source
    this.x = source.x;
    this.y = source.y;
  }

  // Clone point


  Point.prototype.clone = function clone() {
    return new Point(this);
  };
  // Morph one point into another


  Point.prototype.morph = function morph(x, y) {
    // store new destination
    this.destination = new Point(x, y);

    return this;
  };
  // Get morphed point at a given position


  Point.prototype.at = function at(pos) {
    // make sure a destination is defined
    if (!this.destination) return this;

    // calculate morphed matrix at a given position
    var point = new Point({
      x: this.x + (this.destination.x - this.x) * pos,
      y: this.y + (this.destination.y - this.y) * pos
    });

    return point;
  };
  // Convert to native SVGPoint


  Point.prototype.native = function native() {
    // create new point
    var point = SVG.parser.draw.node.createSVGPoint();

    // update with current values
    point.x = this.x;
    point.y = this.y;

    return point;
  };
  // transform point with matrix


  Point.prototype.transform = function transform(matrix) {
    return new Point(this.native().matrixTransform(matrix.native()));
  };

  return Point;
}();

/* harmony default export */ exports["a"] = Point;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_2__element_js__["default"], {
  // Get point
  point: function point(x, y) {
    return new Point(x, y).transform(this.screenCTM().inverse());
  }
});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointarray_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poly_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_js__ = __webpack_require__(0);





// unify all point to point elements
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_2__line_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__poly_js__["a" /* Polyline */], __WEBPACK_IMPORTED_MODULE_1__poly_js__["b" /* Polygon */], {
  // Define morphable array
  morphArray: __WEBPACK_IMPORTED_MODULE_0__pointarray_js__["a" /* default */]
  // Move by left top corner over x-axis
  , x: function x(_x) {
    return _x == null ? this.bbox().x : this.move(_x, this.bbox().y);
  }
  // Move by left top corner over y-axis
  , y: function y(_y) {
    return _y == null ? this.bbox().y : this.move(this.bbox().x, _y);
  }
  // Set width of element
  , width: function width(_width) {
    var b = this.bbox();

    return _width == null ? b.width : this.size(_width, b.height);
  }
  // Set height of element
  , height: function height(_height) {
    var b = this.bbox();

    return _height == null ? b.height : this.size(b.width, _height);
  }
});

/***/ },
/* 92 */
/***/ function(module, exports) {

// Add CustomEvent to IE9 and IE10 
if (typeof CustomEvent !== 'function') {
  // Code from: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
  var CustomEvent = function CustomEvent(event, options) {
    options = options || { bubbles: !1, cancelable: !1, detail: undefined };
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(event, options.bubbles, options.cancelable, options.detail);
    return e;
  };

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}

// requestAnimationFrame / cancelAnimationFrame Polyfill with fallback based on Paul Irish
(function (w) {

  for (var lastTime = 0, vendors = ['moz', 'webkit'], x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    w.requestAnimationFrame = w[vendors[x] + 'RequestAnimationFrame'];
    w.cancelAnimationFrame = w[vendors[x] + 'CancelAnimationFrame'] || w[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  w.requestAnimationFrame = w.requestAnimationFrame || function (callback) {
    var currTime = new Date().getTime(),
        timeToCall = Math.max(0, 16 - (currTime - lastTime)),
        id = w.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);


    lastTime = currTime + timeToCall;
    return id;
  };

  w.cancelAnimationFrame = w.cancelAnimationFrame || w.clearTimeout;
})(window);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__set_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parent_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__element__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_js__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return _select; });
/* harmony export (immutable) */ exports["a"] = get;








// Method for getting an element by id
function get(id) {
  var node = document.getElementById(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_js__["j" /* idFromReference */])(id) || id);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__svg_js__["adopt"])(node);
}

// Select elements by query string
function _select(query, parent) {
  return new __WEBPACK_IMPORTED_MODULE_0__set_js__["default"](__WEBPACK_IMPORTED_MODULE_4__utilities_js__["default"].map((parent || document).querySelectorAll(query), function (node) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__svg_js__["adopt"])(node);
  }));
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_2__parent_js__["a" /* default */], {
  // Scoped select method
  select: function select(query) {
    return _select(query, this.node);
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_3__element__["default"], {
  // Get referenced element form attribute value
  reference: function reference(attr) {
    return get(this.attr(attr));
  }
});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fx_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__regex_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_js__ = __webpack_require__(6);







__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_1__element_js__["default"], {
  // Dynamic style generator
  style: function style(s, v) {
    if (arguments.length == 0) {
      // get full style
      return this.node.style.cssText || '';
    } else if (arguments.length < 2) {
      // apply every style individually if an object is passed
      if ((typeof s === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(s)) == 'object') {
        for (v in s) {
          this.style(v, s[v]);
        }
      } else if (__WEBPACK_IMPORTED_MODULE_4__regex_js__["default"].isCss.test(s)) {
        // parse css string
        s = s.split(';');

        // apply every definition individually
        for (var i = 0; i < s.length; i++) {
          v = s[i].split(':');
          this.style(v[0].replace(/\s+/g, ''), v[1]);
        }
      } else {
        // act as a getter if the first and only argument is not an object
        return this.node.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_js__["p" /* camelCase */])(s)];
      }
    } else {
      this.node.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_js__["p" /* camelCase */])(s)] = v === null || __WEBPACK_IMPORTED_MODULE_4__regex_js__["default"].isBlank.test(v) ? '' : v;
    }

    return this;
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_2__fx_js__["a" /* default */], {
  // Add animatable styles
  style: function style(s, v) {
    if ((typeof s === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(s)) == 'object') for (var key in s) {
      this.style(key, s[key]);
    } else this.add(s, new __WEBPACK_IMPORTED_MODULE_2__fx_js__["e" /* MorphObj */](null, v), 'styles');

    return this;
  }
});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fx_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parent_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rect_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ellipse_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__text_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__path_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gradient_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__color_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__matrix_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__number_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__svg_js__ = __webpack_require__(0);













// Define list of available attributes for stroke and fill
var sugar = {
  stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset'],
  fill: ['color', 'opacity', 'rule'],
  prefix: function prefix(t, a) {
    return a == 'color' ? t : t + '-' + a;
  }
}

// Add sugar for fill and stroke
;['fill', 'stroke'].forEach(function (m) {
  var i,
      extension = {};

  extension[m] = function (o) {
    if (typeof o == 'undefined') return this;
    if (typeof o == 'string' || SVG.Color.isRgb(o) || o && typeof o.fill === 'function') this.attr(m, o);else
      // set all attributes from sugar.fill and sugar.stroke list
      for (i = sugar[m].length - 1; i >= 0; i--) {
        if (o[sugar[m][i]] != null) this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]]);
      }return this;
  };

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_0__element_js__["default"], __WEBPACK_IMPORTED_MODULE_1__fx_js__["a" /* default */], extension);
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_0__element_js__["default"], __WEBPACK_IMPORTED_MODULE_1__fx_js__["a" /* default */], {
  // Map rotation to transform
  rotate: function rotate(d, cx, cy) {
    return this.transform({ rotation: d, cx: cx, cy: cy });
  }
  // Map skew to transform
  , skew: function skew(x, y, cx, cy) {
    return arguments.length == 1 || arguments.length == 3 ? this.transform({ skew: x, cx: y, cy: cx }) : this.transform({ skewX: x, skewY: y, cx: cx, cy: cy });
  }
  // Map scale to transform
  , scale: function scale(x, y, cx, cy) {
    return arguments.length == 1 || arguments.length == 3 ? this.transform({ scale: x, cx: y, cy: cx }) : this.transform({ scaleX: x, scaleY: y, cx: cx, cy: cy });
  }
  // Map translate to transform
  , translate: function translate(x, y) {
    return this.transform({ x: x, y: y });
  }
  // Map flip to transform
  , flip: function flip(a, o) {
    return this.transform({ flip: a, offset: o });
  }
  // Map matrix to transform
  , matrix: function matrix(m) {
    return this.attr('transform', new __WEBPACK_IMPORTED_MODULE_9__matrix_js__["default"](m));
  }
  // Opacity
  , opacity: function opacity(value) {
    return this.attr('opacity', value);
  }
  // Relative move over x axis
  , dx: function dx(x) {
    return this.x((this instanceof __WEBPACK_IMPORTED_MODULE_1__fx_js__["a" /* default */] ? 0 : this.x()) + x, !0);
  }
  // Relative move over y axis
  , dy: function dy(y) {
    return this.y((this instanceof __WEBPACK_IMPORTED_MODULE_1__fx_js__["a" /* default */] ? 0 : this.y()) + y, !0);
  }
  // Relative move over x and y axes
  , dmove: function dmove(x, y) {
    return this.dx(x).dy(y);
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_3__rect_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__ellipse_js__["b" /* Ellipse */], __WEBPACK_IMPORTED_MODULE_4__ellipse_js__["a" /* Circle */], __WEBPACK_IMPORTED_MODULE_7__gradient_js__["default"], __WEBPACK_IMPORTED_MODULE_1__fx_js__["a" /* default */], {
  // Add x and y radius
  radius: function radius(x, y) {
    var type = (this._target || this).type;
    return type == 'radial' || type == 'circle' ? this.attr('r', new SVG.Number(x)) : this.rx(x).ry(y == null ? x : y);
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_6__path_js__["a" /* default */], {
  // Get path length
  length: function length() {
    return this.node.getTotalLength();
  }
  // Get point at length
  , pointAt: function pointAt(length) {
    return this.node.getPointAtLength(length);
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_2__parent_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__text_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__fx_js__["a" /* default */], {
  // Set font
  font: function font(o) {
    for (var k in o) {
      k == 'leading' ? this.leading(o[k]) : k == 'anchor' ? this.attr('text-anchor', o[k]) : k == 'size' || k == 'family' || k == 'weight' || k == 'stretch' || k == 'variant' || k == 'style' ? this.attr('font-' + k, o[k]) : this.attr(k, o[k]);
    }return this;
  }
});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parent_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__text_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__svg_js__ = __webpack_require__(0);








var TextPath = function (_Parent) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(TextPath, _Parent);

  function TextPath() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, TextPath);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Parent.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["create"])('textPath')));
  }

  return TextPath;
}(__WEBPACK_IMPORTED_MODULE_4__parent_js__["a" /* default */]);

/* harmony default export */ exports["a"] = TextPath;

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_5__text_js__["a" /* default */], {
  // Create path for text to run on
  path: function path(d) {
    // create textPath element
    var path = new TextPath(),
        track = this.doc().defs().path(d);

    // move lines to textpath
    while (this.node.hasChildNodes()) {
      path.node.appendChild(this.node.firstChild);
    } // add textPath element as child node
    this.node.appendChild(path.node);

    // link textPath to path and add content
    path.attr('href', '#' + track, __WEBPACK_IMPORTED_MODULE_6__svg_js__["xlink"]);

    return this;
  },
  // Plot path if any
  plot: function plot(d) {
    var track = this.track();

    if (track) track.plot(d);

    return this;
  },
  // Get the path track element
  track: function track() {
    var path = this.textPath();

    if (path) return path.reference('href');
  },
  // Get the textPath child
  textPath: function textPath() {
    if (this.node.firstChild && this.node.firstChild.nodeName == 'textPath') return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__svg_js__["adopt"])(this.node.firstChild);
  }
});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__element_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fx_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__matrix_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__regex_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__number_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__svg_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_js__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "Transformation", function() { return Transformation; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Translate", function() { return Translate; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Rotate", function() { return Rotate; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Scale", function() { return Scale; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Skew", function() { return Skew; });












var SVG;
__webpack_require__(28).callbacks.push(function () {
  SVG = __webpack_require__(64);
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__element_js__["default"], {
  // Add transformations
  transform: function transform(o, relative) {
    // get target in case of the fx module, otherwise reference this
    var target = this,
        matrix;

    // act as a getter
    if ((typeof o === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(o)) !== 'object') {
      // get current matrix
      matrix = new __WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"](target).extract();

      return typeof o === 'string' ? matrix[o] : matrix;
    }

    // get current matrix
    matrix = new __WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"](target);

    // ensure relative flag
    relative = !!relative || !!o.relative;

    // act on matrix
    if (o.a != null) {
      matrix = relative ?
      // relative
      matrix.multiply(new __WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"](o)) :
      // absolute
      new __WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"](o);

      // act on rotation
    } else if (o.rotation != null) {
      // ensure centre point
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__helpers_js__["n" /* ensureCentre */])(o, target);

      // apply transformation
      matrix = relative ?
      // relative
      matrix.rotate(o.rotation, o.cx, o.cy) :
      // absolute
      matrix.rotate(o.rotation - matrix.extract().rotation, o.cx, o.cy);

      // act on scale
    } else if (o.scale != null || o.scaleX != null || o.scaleY != null) {
      // ensure centre point
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__helpers_js__["n" /* ensureCentre */])(o, target);

      // ensure scale values on both axes
      o.scaleX = o.scale != null ? o.scale : o.scaleX != null ? o.scaleX : 1;
      o.scaleY = o.scale != null ? o.scale : o.scaleY != null ? o.scaleY : 1;

      if (!relative) {
        // absolute; multiply inversed values
        var e = matrix.extract();
        o.scaleX = o.scaleX * 1 / e.scaleX;
        o.scaleY = o.scaleY * 1 / e.scaleY;
      }

      matrix = matrix.scale(o.scaleX, o.scaleY, o.cx, o.cy);

      // act on skew
    } else if (o.skew != null || o.skewX != null || o.skewY != null) {
      // ensure centre point
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__helpers_js__["n" /* ensureCentre */])(o, target);

      // ensure skew values on both axes
      o.skewX = o.skew != null ? o.skew : o.skewX != null ? o.skewX : 0;
      o.skewY = o.skew != null ? o.skew : o.skewY != null ? o.skewY : 0;

      if (!relative) {
        // absolute; reset skew values
        var e = matrix.extract();
        matrix = matrix.multiply(new __WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"]().skew(e.skewX, e.skewY, o.cx, o.cy).inverse());
      }

      matrix = matrix.skew(o.skewX, o.skewY, o.cx, o.cy);

      // act on flip
    } else if (o.flip) {
      matrix = matrix.flip(o.flip, o.offset == null ? target.bbox()['c' + o.flip] : o.offset);

      // act on translate
    } else if (o.x != null || o.y != null) {
      if (relative) {
        // relative
        matrix = matrix.translate(o.x, o.y);
      } else {
        // absolute
        if (o.x != null) matrix.e = o.x;
        if (o.y != null) matrix.f = o.y;
      }
    }

    return this.attr('transform', matrix);
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_5__fx_js__["a" /* default */], {
  transform: function transform(o, relative) {
    // get target in case of the fx module, otherwise reference this
    var target = this.target(),
        matrix;

    // act as a getter
    if ((typeof o === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(o)) !== 'object') {
      // get current matrix
      matrix = new __WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"](target).extract();

      return typeof o === 'string' ? matrix[o] : matrix;
    }

    // ensure relative flag
    relative = !!relative || !!o.relative;

    // act on matrix
    if (o.a != null) {
      matrix = new __WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"](o);

      // act on rotation
    } else if (o.rotation != null) {
      // ensure centre point
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__helpers_js__["n" /* ensureCentre */])(o, target);

      // apply transformation
      matrix = new Rotate(o.rotation, o.cx, o.cy);

      // act on scale
    } else if (o.scale != null || o.scaleX != null || o.scaleY != null) {
      // ensure centre point
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__helpers_js__["n" /* ensureCentre */])(o, target);

      // ensure scale values on both axes
      o.scaleX = o.scale != null ? o.scale : o.scaleX != null ? o.scaleX : 1;
      o.scaleY = o.scale != null ? o.scale : o.scaleY != null ? o.scaleY : 1;

      matrix = new Scale(o.scaleX, o.scaleY, o.cx, o.cy);

      // act on skew
    } else if (o.skewX != null || o.skewY != null) {
      // ensure centre point
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__helpers_js__["n" /* ensureCentre */])(o, target);

      // ensure skew values on both axes
      o.skewX = o.skewX != null ? o.skewX : 0;
      o.skewY = o.skewY != null ? o.skewY : 0;

      matrix = new Skew(o.skewX, o.skewY, o.cx, o.cy);

      // act on flip
    } else if (o.flip) {
      matrix = new __WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"]().morph(new __WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"]().flip(o.flip, o.offset == null ? target.bbox()['c' + o.flip] : o.offset));

      // act on translate
    } else if (o.x != null || o.y != null) {
      matrix = new Translate(o.x, o.y);
    }

    if (!matrix) return this;

    matrix.relative = relative;

    this.last().transforms.push(matrix);

    setTimeout(function () {
      this.start();
    }.bind(this), 0);

    return this;
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__element_js__["default"], {
  // Reset all transformations
  untransform: function untransform() {
    return this.attr('transform', null);
  },
  // merge the whole transformation chain into one matrix and returns it
  matrixify: function matrixify() {

    var matrix = (this.attr('transform') || '').
    // split transformations
    split(/\)\s*,?\s*/).slice(0, -1).map(function (str) {
      // generate key => value pairs
      var kv = str.trim().split('(');
      return [kv[0], kv[1].split(__WEBPACK_IMPORTED_MODULE_7__regex_js__["default"].matrixElements).map(function (str) {
        return parseFloat(str);
      })];
    })
    // calculate every transformation into one matrix
    .reduce(function (matrix, transform) {

      if (transform[0] == 'matrix') return matrix.multiply(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__helpers_js__["e" /* arrayToMatrix */])(transform[1]));
      return matrix[transform[0]].apply(matrix, transform[1]);
    }, new __WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"]());

    return matrix;
  },
  // add an element to another parent without changing the visual representation on the screen
  toParent: function toParent(parent) {
    if (this == parent) return this;
    var ctm = this.screenCTM(),
        temp = parent.rect(1, 1),
        pCtm = temp.screenCTM().inverse();

    temp.remove();

    this.addTo(parent).untransform().transform(pCtm.multiply(ctm));

    return this;
  },
  // same as above with parent equals root-svg
  toDoc: function toDoc() {
    return this.toParent(this.doc());
  }

});
var Transformation = function () {
  function Transformation(source, inversed) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Transformation);

    if (arguments.length > 1 && typeof inversed != 'boolean') {
      return this.create([].slice.call(arguments));
    }

    if ((typeof source === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(source)) == 'object') {
      for (var i = 0, len = this.arguments.length; i < len; ++i) {
        this[this.arguments[i]] = source[this.arguments[i]];
      }
    }

    if (Array.isArray(source)) {
      for (var i = 0, len = this.arguments.length; i < len; ++i) {
        this[this.arguments[i]] = source[i];
      }
    }

    this.inversed = !1;

    if (inversed === !0) {
      this.inversed = !0;
    }
  }

  Transformation.prototype.at = function at(pos) {

    for (var params = [], i = 0, len = this.arguments.length; i < len; ++i) {
      params.push(this[this.arguments[i]]);
    }

    var m = this._undo || new __WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"]();

    m = new __WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"]().morph(__WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"].prototype[this.method].apply(m, params)).at(pos);

    return this.inversed ? m.inverse() : m;
  };

  Transformation.prototype.undo = function undo(o) {
    for (var i = 0, len = this.arguments.length; i < len; ++i) {
      o[this.arguments[i]] = typeof this[this.arguments[i]] == 'undefined' ? 0 : o[this.arguments[i]];
    }

    // The method SVG.Matrix.extract which was used before calling this
    // method to obtain a value for the parameter o doesn't return a cx and
    // a cy so we use the ones that were provided to this object at its creation
    o.cx = this.cx;
    o.cy = this.cy;

    this._undo = new SVG[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__helpers_js__["b" /* capitalize */])(this.method)](o, !0).at(1);

    return this;
  };

  return Transformation;
}();

var Translate = function (_Transformation) {
  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_inherits___default()(Translate, _Transformation);

  function Translate(source, inversed) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Translate);

    if ((typeof source === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(source)) == 'object') {
      ;

      var _this = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Transformation.call(this, source, inversed));
    } else {
      ;

      var _this = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Transformation.call(this, [].slice.call(arguments)));
    }return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn___default()(_this);
  }

  return Translate;
}(Transformation);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["extend"])(Translate, {
  arguments: ['transformedX', 'transformedY'],
  method: 'translate'
});

var Rotate = function (_Transformation2) {
  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_inherits___default()(Rotate, _Transformation2);

  function Rotate(source, inversed) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Rotate);

    if ((typeof source === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(source)) == 'object') {
      ;

      var _this2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Transformation2.call(this, source, inversed));
    } else {
      ;

      var _this2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Transformation2.call(this, [].slice.call(arguments)));
    }return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn___default()(_this2);
  }

  Rotate.prototype.at = function at(pos) {
    var m = new __WEBPACK_IMPORTED_MODULE_6__matrix_js__["default"]().rotate(new __WEBPACK_IMPORTED_MODULE_8__number_js__["default"]().morph(this.rotation - (this._undo ? this._undo.rotation : 0)).at(pos), this.cx, this.cy);
    return this.inversed ? m.inverse() : m;
  };

  Rotate.prototype.undo = function undo(o) {
    this._undo = o;
  };

  return Rotate;
}(Transformation);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["extend"])(Rotate, {
  arguments: ['rotation', 'cx', 'cy'],
  method: 'rotate'
});

var Scale = function (_Transformation3) {
  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_inherits___default()(Scale, _Transformation3);

  function Scale(source, inversed) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Scale);

    if ((typeof source === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(source)) == 'object') {
      ;

      var _this3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Transformation3.call(this, source, inversed));
    } else {
      ;

      var _this3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Transformation3.call(this, [].slice.call(arguments)));
    }return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn___default()(_this3);
  }

  return Scale;
}(Transformation);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["extend"])(Scale, {
  arguments: ['scaleX', 'scaleY', 'cx', 'cy'],
  method: 'scale'
});

var Skew = function (_Transformation4) {
  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_inherits___default()(Skew, _Transformation4);

  function Skew(source, inversed) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Skew);

    if ((typeof source === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(source)) == 'object') {
      ;

      var _this4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Transformation4.call(this, source, inversed));
    } else {
      ;

      var _this4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Transformation4.call(this, [].slice.call(arguments)));
    }return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_possibleConstructorReturn___default()(_this4);
  }

  return Skew;
}(Transformation);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__svg_js__["extend"])(Skew, {
  arguments: ['skewX', 'skewY', 'cx', 'cy'],
  method: 'skew'
});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parent_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defs_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doc_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__svg_js__ = __webpack_require__(0);





__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_0__parent_js__["a" /* default */], {

  ungroup: function ungroup(parent, depth) {
    if (depth === 0 || this instanceof __WEBPACK_IMPORTED_MODULE_1__defs_js__["a" /* default */]) return this;

    parent = parent || (this instanceof __WEBPACK_IMPORTED_MODULE_2__doc_js__["default"] ? this : this.parent(__WEBPACK_IMPORTED_MODULE_0__parent_js__["a" /* default */]));
    depth = depth || Infinity;

    this.each(function () {
      if (this instanceof __WEBPACK_IMPORTED_MODULE_1__defs_js__["a" /* default */]) return this;
      if (this instanceof __WEBPACK_IMPORTED_MODULE_0__parent_js__["a" /* default */]) return this.ungroup(parent, depth - 1);
      return this.toParent(parent);
    });

    this.node.firstChild || this.remove();

    return this;
  },

  flatten: function flatten(parent, depth) {
    return this.ungroup(parent, depth);
  }

});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shape_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_js__ = __webpack_require__(0);







var Use = function (_Shape) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Use, _Shape);

  function Use() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Use);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Shape.call(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["create"])('use')));
  }

  // Use element as a reference


  Use.prototype.element = function element(_element, file) {
    // Set lined element
    return this.attr('href', (file || '') + '#' + _element, SVG.xlink);
  };

  return Use;
}(__WEBPACK_IMPORTED_MODULE_3__shape_js__["a" /* default */]);

/* harmony default export */ exports["a"] = Use;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__svg_js__["extend"])(__WEBPACK_IMPORTED_MODULE_4__container_js__["default"], {
  // Create a use element
  use: function use(element, file) {
    return this.put(new Use()).element(element, file);
  }
});

/***/ },
/* 100 */
/***/ function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			configurable: false,
			get: function() { return module.l; }
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			configurable: false,
			get: function() { return module.i; }
		});
		module.webpackPolyfill = 1;
	}
	return module;
}


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

var core  = __webpack_require__(11)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(134);
module.exports = __webpack_require__(11).Object.assign;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(135);
var $Object = __webpack_require__(11).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(136);
module.exports = __webpack_require__(11).Object.keys;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(137);
module.exports = __webpack_require__(11).Object.setPrototypeOf;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(140);
__webpack_require__(138);
__webpack_require__(141);
__webpack_require__(142);
module.exports = __webpack_require__(11).Symbol;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(139);
__webpack_require__(143);
module.exports = __webpack_require__(59).f('iterator');

/***/ },
/* 114 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 115 */
/***/ function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16)
  , toLength  = __webpack_require__(132)
  , toIndex   = __webpack_require__(131);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(26)
  , gOPS    = __webpack_require__(51)
  , pIE     = __webpack_require__(37);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13).document && document.documentElement;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(70);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(50)
  , descriptor     = __webpack_require__(38)
  , setToStringTag = __webpack_require__(52)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(24)(IteratorPrototype, __webpack_require__(27)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ },
/* 121 */
/***/ function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(26)
  , toIObject = __webpack_require__(16);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

var META     = __webpack_require__(39)('meta')
  , isObject = __webpack_require__(31)
  , has      = __webpack_require__(15)
  , setDesc  = __webpack_require__(25).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(23)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(26)
  , gOPS     = __webpack_require__(51)
  , pIE      = __webpack_require__(37)
  , toObject = __webpack_require__(56)
  , IObject  = __webpack_require__(74)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(23)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(25)
  , anObject = __webpack_require__(30)
  , getKeys  = __webpack_require__(26);

module.exports = __webpack_require__(21) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(16)
  , gOPN      = __webpack_require__(77).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(15)
  , toObject    = __webpack_require__(56)
  , IE_PROTO    = __webpack_require__(53)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(22)
  , core    = __webpack_require__(11)
  , fails   = __webpack_require__(23);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(31)
  , anObject = __webpack_require__(30);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(71)(Function.call, __webpack_require__(76).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(55)
  , defined   = __webpack_require__(46);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(55)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(55)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(115)
  , step             = __webpack_require__(121)
  , Iterators        = __webpack_require__(48)
  , toIObject        = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(75)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(22);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(124)});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(22)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(50)});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(56)
  , $keys    = __webpack_require__(26);

__webpack_require__(128)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(22);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(129).set});

/***/ },
/* 138 */
/***/ function(module, exports) {



/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(130)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(75)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(13)
  , has            = __webpack_require__(15)
  , DESCRIPTORS    = __webpack_require__(21)
  , $export        = __webpack_require__(22)
  , redefine       = __webpack_require__(79)
  , META           = __webpack_require__(123).KEY
  , $fails         = __webpack_require__(23)
  , shared         = __webpack_require__(54)
  , setToStringTag = __webpack_require__(52)
  , uid            = __webpack_require__(39)
  , wks            = __webpack_require__(27)
  , wksExt         = __webpack_require__(59)
  , wksDefine      = __webpack_require__(58)
  , keyOf          = __webpack_require__(122)
  , enumKeys       = __webpack_require__(117)
  , isArray        = __webpack_require__(119)
  , anObject       = __webpack_require__(30)
  , toIObject      = __webpack_require__(16)
  , toPrimitive    = __webpack_require__(57)
  , createDesc     = __webpack_require__(38)
  , _create        = __webpack_require__(50)
  , gOPNExt        = __webpack_require__(126)
  , $GOPD          = __webpack_require__(76)
  , $DP            = __webpack_require__(25)
  , $keys          = __webpack_require__(26)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(77).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(37).f  = $propertyIsEnumerable;
  __webpack_require__(51).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(49)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(24)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(58)('asyncIterator');

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(58)('observable');

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(133);
var global        = __webpack_require__(13)
  , hide          = __webpack_require__(24)
  , Iterators     = __webpack_require__(48)
  , TO_STRING_TAG = __webpack_require__(27)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }
/******/ ]);
});