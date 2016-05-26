/*!
* svg.js - A lightweight library for manipulating and animating SVG.
* @version 2.3.0
* http://www.svgjs.com
*
* @copyright Wout Fierens <wout@woutfierens.com>
* @license MIT
*
* BUILT: Thu May 26 2016 09:51:04 GMT-0500 (Central Daylight Time)
*/;
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	exports.default = SVG;

	__webpack_require__(2);

	var _svg = __webpack_require__(3),
	    props = _interopRequireWildcard(_svg),
	    _ids = __webpack_require__(5),
	    ids = _interopRequireWildcard(_ids),
	    _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element);

	__webpack_require__(10);

	__webpack_require__(16);

	__webpack_require__(23);

	__webpack_require__(4);

	__webpack_require__(24);

	__webpack_require__(25);

	__webpack_require__(31);

	__webpack_require__(37);

	var _array = __webpack_require__(21),
	    _array2 = _interopRequireDefault(_array),
	    _bare = __webpack_require__(38),
	    _bare2 = _interopRequireDefault(_bare),
	    _boxes = __webpack_require__(30),
	    _clip = __webpack_require__(39),
	    _clip2 = _interopRequireDefault(_clip),
	    _color = __webpack_require__(20),
	    _color2 = _interopRequireDefault(_color),
	    _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _default = __webpack_require__(9),
	    _default2 = _interopRequireDefault(_default),
	    _defs = __webpack_require__(15),
	    _defs2 = _interopRequireDefault(_defs),
	    _doc = __webpack_require__(11),
	    _doc2 = _interopRequireDefault(_doc),
	    _ellipse = __webpack_require__(33),
	    _event = __webpack_require__(40),
	    _fx = __webpack_require__(26),
	    _fx2 = _interopRequireDefault(_fx),
	    _gradient = __webpack_require__(36),
	    _gradient2 = _interopRequireDefault(_gradient),
	    _group = __webpack_require__(27),
	    _group2 = _interopRequireDefault(_group),
	    _hyperlink = __webpack_require__(41),
	    _image = __webpack_require__(17),
	    _image2 = _interopRequireDefault(_image),
	    _line = __webpack_require__(42),
	    _line2 = _interopRequireDefault(_line),
	    _marker = __webpack_require__(44),
	    _marker2 = _interopRequireDefault(_marker),
	    _mask = __webpack_require__(46),
	    _mask2 = _interopRequireDefault(_mask),
	    _matrix = __webpack_require__(22),
	    _matrix2 = _interopRequireDefault(_matrix),
	    _nested = __webpack_require__(47),
	    _nested2 = _interopRequireDefault(_nested),
	    _number = __webpack_require__(7),
	    _number2 = _interopRequireDefault(_number),
	    _parent = __webpack_require__(13),
	    _parent2 = _interopRequireDefault(_parent);

	__webpack_require__(48);

	var _path = __webpack_require__(34),
	    _path2 = _interopRequireDefault(_path),
	    _patharray = __webpack_require__(35),
	    _patharray2 = _interopRequireDefault(_patharray),
	    _pattern = __webpack_require__(19),
	    _pattern2 = _interopRequireDefault(_pattern),
	    _point = __webpack_require__(49),
	    _point2 = _interopRequireDefault(_point),
	    _pointarray = __webpack_require__(43),
	    _pointarray2 = _interopRequireDefault(_pointarray),
	    _poly = __webpack_require__(45);

	__webpack_require__(50);

	var _rect = __webpack_require__(32),
	    _rect2 = _interopRequireDefault(_rect),
	    _regex = __webpack_require__(8),
	    _regex2 = _interopRequireDefault(_regex),
	    _selector = __webpack_require__(51),
	    _set = __webpack_require__(29),
	    _set2 = _interopRequireDefault(_set),
	    _shape = __webpack_require__(18),
	    _shape2 = _interopRequireDefault(_shape),
	    _text = __webpack_require__(28),
	    _text2 = _interopRequireDefault(_text),
	    _textpath = __webpack_require__(52),
	    _textpath2 = _interopRequireDefault(_textpath),
	    _use = __webpack_require__(53),
	    _use2 = _interopRequireDefault(_use),
	    _utilities = __webpack_require__(14),
	    _utilities2 = _interopRequireDefault(_utilities),
	    _viewbox = __webpack_require__(54),
	    _viewbox2 = _interopRequireDefault(_viewbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function SVG(el) {
	  if (props.supported) {
	    var element = new _doc2.default(el);

	    if (!props.parser) props.prepare(element);

	    return element;
	  }
	}
	for (var i in props) {
	  SVG[i] = props[i];
	}
	SVG.eid = ids.eid;
	Object.defineProperty(SVG, 'did', {
	  get: ids.getDid
	});

	SVG.Element = _element2.default;

	SVG.Array = _array2.default;

	SVG.Bare = _bare2.default;

	SVG.BBox = _boxes.BBox;
	SVG.RBox = _boxes.RBox;
	SVG.TBox = _boxes.TBox;

	SVG.ClipPath = _clip2.default;

	SVG.Color = _color2.default;

	SVG.Container = _container2.default;

	SVG.defaults = _default2.default;

	SVG.Defs = _defs2.default;

	SVG.Doc = _doc2.default;

	SVG.Circle = _ellipse.Circle;
	SVG.Ellipse = _ellipse.Ellipse;

	SVG.on = _event.on;
	SVG.off = _event.off;
	SVG.listeners = _event.listeners;
	SVG.handlerMap = _event.handlerMap;
	SVG.listenerId = _event.listenerId;

	SVG.FX = _fx2.default;
	SVG.easing = _fx.easing;
	SVG.Situation = _fx.Situation;
	SVG.Delay = _fx.Delay;
	SVG.MorphObj = _fx.MorphObj;
	SVG.morph = _fx.morph;

	SVG.Gradient = _gradient2.default;
	SVG.Stop = _gradient.Stop;

	SVG.G = _group2.default;
	SVG.Group = _group2.default;

	SVG.A = _hyperlink.A;

	SVG.Image = _image2.default;

	SVG.Line = _line2.default;

	SVG.Marker = _marker2.default;

	SVG.Mask = _mask2.default;

	SVG.Matrix = _matrix2.default;

	SVG.Nested = _nested2.default;

	SVG.Number = _number2.default;

	SVG.Parent = _parent2.default;

	SVG.Path = _path2.default;

	SVG.PathArray = _patharray2.default;

	SVG.Pattern = _pattern2.default;

	SVG.Point = _point2.default;

	SVG.PointArray = _pointarray2.default;

	SVG.Polyline = _poly.Polyline;
	SVG.Polygon = _poly.Polygon;

	SVG.Rect = _rect2.default;

	SVG.regex = _regex2.default;

	SVG.get = _selector.get;
	SVG.select = _selector.select;

	SVG.Set = _set2.default;

	SVG.Shape = _shape2.default;

	SVG.Text = _text2.default;

	SVG.TextPath = _textpath2.default;

	SVG.Use = _use2.default;

	SVG.utils = _utilities2.default;

	SVG.ViewBox = _viewbox2.default;

	if (module && module.exports) module.exports = module.exports.default;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];

			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	if (typeof CustomEvent !== 'function') {
	  var CustomEvent = function CustomEvent(event, options) {
	    options = options || { bubbles: !1, cancelable: !1, detail: undefined };
	    var e = document.createEvent('CustomEvent');
	    e.initCustomEvent(event, options.bubbles, options.cancelable, options.detail);
	    return e;
	  };

	  CustomEvent.prototype = window.Event.prototype;

	  window.CustomEvent = CustomEvent;
	}

	(function (w) {
	  var lastTime = 0,
	      vendors = ['moz', 'webkit'];


	  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	exports.supported = exports.svgjs = exports.xlink = exports.xmlns = exports.ns = undefined;
	exports.create = create;
	exports.extend = extend;
	exports.invent = invent;
	exports.adopt = adopt;
	exports.prepare = prepare;

	var _helpers = __webpack_require__(4),
	    _ids = __webpack_require__(5),
	    ns = exports.ns = 'http://www.w3.org/2000/svg',
	    xmlns = exports.xmlns = 'http://www.w3.org/2000/xmlns/',
	    xlink = exports.xlink = 'http://www.w3.org/1999/xlink',
	    svgjs = exports.svgjs = 'http://svgjs.com/svgjs',
	    supported = exports.supported = function () {
	  return !!document.createElementNS && !!document.createElementNS(ns, 'svg').createSVGRect;
	}();

	function create(name) {
	  var element = document.createElementNS(ns, name);

	  element.setAttribute('id', (0, _ids.eid)(name));

	  return element;
	}

	function extend() {
	  var modules, methods, key, i;

	  modules = [].slice.call(arguments);

	  methods = modules.pop();

	  for (i = modules.length - 1; i >= 0; i--) {
	    if (modules[i]) for (key in methods) {
	      modules[i].prototype[key] = methods[key];
	    }
	  }
	}

	function invent(config) {
	  var initializer = typeof config.create == 'function' ? config.create : function () {
	    this.constructor.call(this, create(config.create));
	  };

	  if (config.inherit) initializer.prototype = new config.inherit();

	  if (config.extend) extend(initializer, config.extend);

	  if (config.construct) extend(config.parent || SVG.Container, config.construct);

	  return initializer;
	}

	function adopt(node) {
	  if (!node) return null;

	  if (node.instance) return node.instance;

	  var element;

	  if (node.nodeName == 'svg') element = node.parentNode instanceof SVGElement ? new SVG.Nested() : new SVG.Doc();else if (node.nodeName == 'linearGradient') element = new SVG.Gradient('linear');else if (node.nodeName == 'radialGradient') element = new SVG.Gradient('radial');else if (SVG[(0, _helpers.capitalize)(node.nodeName)]) element = new SVG[(0, _helpers.capitalize)(node.nodeName)]();else element = new SVG.Element(node);

	  element.type = node.nodeName;
	  element.node = node;
	  node.instance = element;

	  if (element instanceof SVG.Doc) element.namespace().defs();

	  element.setData(JSON.parse(node.getAttribute('svgjs:data')) || {});

	  return element;
	}

	function prepare(element) {
	  var body = document.getElementsByTagName('body')[0],
	      draw = (body ? new SVG.Doc(body) : element.nested()).size(2, 0),
	      path = SVG.create('path');

	  draw.node.appendChild(path);

	  SVG.parser = {
	    body: body || element.parent(),
	    draw: draw.style('opacity:0;position:fixed;left:100%;top:100%;overflow:hidden'),
	    poly: draw.polyline().node,
	    path: path
	  };
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	exports.is = is;
	exports.matches = matches;
	exports.camelCase = camelCase;
	exports.capitalize = capitalize;
	exports.fullHex = fullHex;
	exports.compToHex = compToHex;
	exports.proportionalSize = proportionalSize;
	exports.deltaTransformPoint = deltaTransformPoint;
	exports.arrayToMatrix = arrayToMatrix;
	exports.parseMatrix = parseMatrix;
	exports.ensureCentre = ensureCentre;
	exports.stringToMatrix = stringToMatrix;
	exports.at = at;
	exports.arrayToString = arrayToString;
	exports.assignNewId = assignNewId;
	exports.fullBox = fullBox;
	exports.idFromReference = idFromReference;
	function is(el, obj) {
	  return el instanceof obj;
	}

	function matches(el, selector) {
	  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
	}

	function camelCase(s) {
	  return s.toLowerCase().replace(/-(.)/g, function (m, g) {
	    return g.toUpperCase();
	  });
	}

	function capitalize(s) {
	  return s.charAt(0).toUpperCase() + s.slice(1);
	}

	function fullHex(hex) {
	  return hex.length == 4 ? ['#', hex.substring(1, 2), hex.substring(1, 2), hex.substring(2, 3), hex.substring(2, 3), hex.substring(3, 4), hex.substring(3, 4)].join('') : hex;
	}

	function compToHex(comp) {
	  var hex = comp.toString(16);
	  return hex.length == 1 ? '0' + hex : hex;
	}

	function proportionalSize(box, width, height) {
	  if (height == null) height = box.height / box.width * width;else if (width == null) width = box.width / box.height * height;

	  return {
	    width: width,
	    height: height
	  };
	}

	function deltaTransformPoint(matrix, x, y) {
	  return {
	    x: x * matrix.a + y * matrix.c + 0,
	    y: x * matrix.b + y * matrix.d + 0
	  };
	}

	function arrayToMatrix(a) {
	  return { a: a[0], b: a[1], c: a[2], d: a[3], e: a[4], f: a[5] };
	}

	function parseMatrix(matrix) {
	  if (!(matrix instanceof SVG.Matrix)) matrix = new SVG.Matrix(matrix);

	  return matrix;
	}

	function ensureCentre(o, target) {
	  o.cx = o.cx == null ? target.bbox().cx : o.cx;
	  o.cy = o.cy == null ? target.bbox().cy : o.cy;
	}

	function stringToMatrix(source) {
	  source = source.replace(SVG.regex.whitespace, '').replace(SVG.regex.matrix, '').split(SVG.regex.matrixElements);

	  return arrayToMatrix(SVG.utils.map(source, function (n) {
	    return parseFloat(n);
	  }));
	}

	function at(o, pos) {
	  return typeof o.from == 'number' ? o.from + (o.to - o.from) * pos : o instanceof SVG.Color || o instanceof SVG.Number || o instanceof SVG.Matrix ? o.at(pos) : pos < 1 ? o.from : o.to;
	}

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

	function assignNewId(node) {
	  for (var i = node.childNodes.length - 1; i >= 0; i--) {
	    if (node.childNodes[i] instanceof SVGElement) assignNewId(node.childNodes[i]);
	  }return SVG.adopt(node).id(SVG.eid(node.nodeName));
	}

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

	function idFromReference(url) {
	  var m = url.toString().match(SVG.regex.reference);

	  if (m) return m[1];
	}

	var abcdef = exports.abcdef = 'abcdef'.split('');

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	exports.eid = eid;
	exports.getDid = getDid;

	var _helpers = __webpack_require__(4),
	    did = 1000;

	function eid(name) {
	  return 'Svgjs' + (0, _helpers.capitalize)(name) + did++;
	}

	function getDid() {
	  return did;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _number = __webpack_require__(7),
	    _number2 = _interopRequireDefault(_number),
	    _default = __webpack_require__(9),
	    _default2 = _interopRequireDefault(_default),
	    _svg2 = __webpack_require__(3),
	    _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Element = function () {
	  function Element(node) {
	    _classCallCheck(this, Element);

	    this._stroke = _default2.default.attrs.stroke;

	    this.dom = {};

	    if (this.node = node) {
	      this.type = node.nodeName;
	      this.node.instance = this;

	      this._stroke = node.getAttribute('stroke') || this._stroke;
	    }
	  }

	  _createClass(Element, [{
	    key: 'x',
	    value: function x(_x) {
	      return this.attr('x', _x);
	    }
	  }, {
	    key: 'y',
	    value: function y(_y) {
	      return this.attr('y', _y);
	    }
	  }, {
	    key: 'cx',
	    value: function cx(x) {
	      return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2);
	    }
	  }, {
	    key: 'cy',
	    value: function cy(y) {
	      return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2);
	    }
	  }, {
	    key: 'move',
	    value: function move(x, y) {
	      return this.x(x).y(y);
	    }
	  }, {
	    key: 'center',
	    value: function center(x, y) {
	      return this.cx(x).cy(y);
	    }
	  }, {
	    key: 'width',
	    value: function width(_width) {
	      return this.attr('width', _width);
	    }
	  }, {
	    key: 'height',
	    value: function height(_height) {
	      return this.attr('height', _height);
	    }
	  }, {
	    key: 'size',
	    value: function size(width, height) {
	      var p = (0, _helpers.proportionalSize)(this.bbox(), width, height);

	      return this.width(new _number2.default(p.width)).height(new _number2.default(p.height));
	    }
	  }, {
	    key: 'clone',
	    value: function clone() {
	      var clone = (0, _helpers.assignNewId)(this.node.cloneNode(!0));

	      this.after(clone);

	      return clone;
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      if (this.parent()) this.parent().removeElement(this);

	      return this;
	    }
	  }, {
	    key: 'replace',
	    value: function replace(element) {
	      this.after(element).remove();

	      return element;
	    }
	  }, {
	    key: 'addTo',
	    value: function addTo(parent) {
	      return parent.put(this);
	    }
	  }, {
	    key: 'putIn',
	    value: function putIn(parent) {
	      return parent.add(this);
	    }
	  }, {
	    key: 'id',
	    value: function id(_id) {
	      return this.attr('id', _id);
	    }
	  }, {
	    key: 'inside',
	    value: function inside(x, y) {
	      var box = this.bbox();

	      return x > box.x && y > box.y && x < box.x + box.width && y < box.y + box.height;
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      return this.style('display', '');
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      return this.style('display', 'none');
	    }
	  }, {
	    key: 'visible',
	    value: function visible() {
	      return this.style('display') != 'none';
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.attr('id');
	    }
	  }, {
	    key: 'classes',
	    value: function classes() {
	      var attr = this.attr('class');

	      return attr == null ? [] : attr.trim().split(/\s+/);
	    }
	  }, {
	    key: 'hasClass',
	    value: function hasClass(name) {
	      return this.classes().indexOf(name) != -1;
	    }
	  }, {
	    key: 'addClass',
	    value: function addClass(name) {
	      if (!this.hasClass(name)) {
	        var array = this.classes();
	        array.push(name);
	        this.attr('class', array.join(' '));
	      }

	      return this;
	    }
	  }, {
	    key: 'removeClass',
	    value: function removeClass(name) {
	      if (this.hasClass(name)) {
	        this.attr('class', this.classes().filter(function (c) {
	          return c != name;
	        }).join(' '));
	      }

	      return this;
	    }
	  }, {
	    key: 'toggleClass',
	    value: function toggleClass(name) {
	      return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);
	    }
	  }, {
	    key: 'parent',
	    value: function parent(type) {
	      var parent = this;

	      if (!parent.node.parentNode) return null;

	      parent = (0, _svg2.adopt)(parent.node.parentNode);

	      if (!type) return parent;

	      while (parent && parent.node instanceof SVGElement) {
	        if (typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent;
	        parent = (0, _svg2.adopt)(parent.node.parentNode);
	      }
	    }
	  }, {
	    key: 'doc',
	    value: function doc() {
	      return this instanceof SVG.Doc ? this : this.parent(SVG.Doc);
	    }
	  }, {
	    key: 'parents',
	    value: function parents(type) {
	      var parents = [],
	          parent = this;

	      do {
	        parent = parent.parent(type);
	        if (!parent || !parent.node) break;

	        parents.push(parent);
	      } while (parent.parent);

	      return parents;
	    }
	  }, {
	    key: 'matches',
	    value: function matches(selector) {
	      return (0, _helpers.matches)(this.node, selector);
	    }
	  }, {
	    key: 'native',
	    value: function native() {
	      return this.node;
	    }
	  }, {
	    key: 'svg',
	    value: function svg(_svg) {
	      var well = document.createElement('svg');

	      if (_svg && this instanceof SVG.Parent) {
	        well.innerHTML = '<svg>' + _svg.replace(/\n/, '').replace(/<(\w+)([^<]+?)\/>/g, '<$1$2></$1>') + '</svg>';

	        for (var i = 0, il = well.firstChild.childNodes.length; i < il; i++) {
	          this.node.appendChild(well.firstChild.firstChild);
	        }
	      } else {
	          well.appendChild(_svg = document.createElement('svg'));

	          this.writeDataToDom();

	          _svg.appendChild(this.node.cloneNode(!0));

	          return well.innerHTML.replace(/^<svg>/, '').replace(/<\/svg>$/, '');
	        }

	      return this;
	    }
	  }, {
	    key: 'writeDataToDom',
	    value: function writeDataToDom() {
	      if (this.each || this.lines) {
	        var fn = this.each ? this : this.lines();
	        fn.each(function () {
	          this.writeDataToDom();
	        });
	      }

	      this.node.removeAttribute('svgjs:data');

	      if (Object.keys(this.dom).length) this.node.setAttribute('svgjs:data', JSON.stringify(this.dom));

	      return this;
	    }
	  }, {
	    key: 'setData',
	    value: function setData(o) {
	      this.dom = o;
	      return this;
	    }
	  }, {
	    key: 'is',
	    value: function (_is) {
	      function is(_x2) {
	        return _is.apply(this, arguments);
	      }

	      is.toString = function () {
	        return _is.toString();
	      };

	      return is;
	    }(function (obj) {
	      return is(this, obj);
	    })
	  }]);

	  return Element;
	}();

	exports.default = Element;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _regex = __webpack_require__(8),
	    _regex2 = _interopRequireDefault(_regex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Number = function () {
	  function Number(value, unit) {
	    _classCallCheck(this, Number);

	    this.value = 0;
	    this.unit = unit || '';

	    if (typeof value === 'number') {
	      this.value = isNaN(value) ? 0 : !isFinite(value) ? value < 0 ? -3.4e+38 : +3.4e+38 : value;
	    } else if (typeof value === 'string') {
	      unit = value.match(_regex2.default.numberAndUnit);

	      if (unit) {
	        this.value = parseFloat(unit[1]);

	        if (unit[5] == '%') this.value /= 100;else if (unit[5] == 's') this.value *= 1000;

	        this.unit = unit[5];
	      }
	    } else {
	      if (value instanceof Number) {
	        this.value = value.valueOf();
	        this.unit = value.unit;
	      }
	    }
	  }

	  _createClass(Number, [{
	    key: 'toString',
	    value: function toString() {
	      return (this.unit == '%' ? ~ ~(this.value * 1e8) / 1e6 : this.unit == 's' ? this.value / 1e3 : this.value) + this.unit;
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return this.toString();
	    }
	  }, {
	    key: 'valueOf',
	    value: function valueOf() {
	      return this.value;
	    }
	  }, {
	    key: 'plus',
	    value: function plus(number) {
	      return new Number(this + new Number(number), this.unit);
	    }
	  }, {
	    key: 'minus',
	    value: function minus(number) {
	      return this.plus(-new Number(number));
	    }
	  }, {
	    key: 'times',
	    value: function times(number) {
	      return new Number(this * new Number(number), this.unit);
	    }
	  }, {
	    key: 'divide',
	    value: function divide(number) {
	      return new Number(this / new Number(number), this.unit);
	    }
	  }, {
	    key: 'to',
	    value: function to(unit) {
	      var number = new Number(this);

	      if (typeof unit === 'string') number.unit = unit;

	      return number;
	    }
	  }, {
	    key: 'morph',
	    value: function morph(number) {
	      this.destination = new Number(number);

	      return this;
	    }
	  }, {
	    key: 'at',
	    value: function at(pos) {
	      if (!this.destination) return this;

	      return new Number(this.destination).minus(this).times(pos).plus(this);
	    }
	  }]);

	  return Number;
	}();

	exports.default = Number;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var regex = {
	  numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,

	  hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,

	  rgb: /rgb\((\d+),(\d+),(\d+)\)/,

	  reference: /#([a-z0-9\-_]+)/i,

	  matrix: /matrix\(|\)/g,

	  matrixElements: /,*\s+|,/,

	  whitespace: /\s/g,

	  isHex: /^#[a-f0-9]{3,6}$/i,

	  isRgb: /^rgb\(/,

	  isCss: /[^:]+:[^;]+;?/,

	  isBlank: /^(\s+)?$/,

	  isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,

	  isPercent: /^-?[\d\.]+%$/,

	  isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,

	  negExp: /e\-/gi,

	  comma: /,/g,

	  hyphen: /\-/g,

	  pathLetters: /[MLHVCSQTAZ]/gi,

	  isPathLetter: /[MLHVCSQTAZ]/i,

	  whitespaces: /\s+/,

	  X: /X/g
	};
	exports.default = regex;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	var defaults = {
	  attrs: {
	    'fill-opacity': 1,
	    'stroke-opacity': 1,
	    'stroke-width': 0,
	    'stroke-linejoin': 'miter',
	    'stroke-linecap': 'butt',
	    fill: '#000000',
	    stroke: '#000000',
	    opacity: 1,
	    x: 0,
	    y: 0,
	    cx: 0,
	    cy: 0,
	    width: 0,
	    height: 0,
	    r: 0,
	    rx: 0,
	    ry: 0,
	    offset: 0,
	    'stop-opacity': 1,
	    'stop-color': '#000000',
	    'font-size': 16,
	    'font-family': 'Helvetica, Arial, sans-serif',
	    'text-anchor': 'start'
	  }

	};
	exports.default = defaults;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _doc = __webpack_require__(11),
	    _doc2 = _interopRequireDefault(_doc),
	    _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _svg.extend)(_element2.default, {
	    siblings: function siblings() {
	        return this.parent().children();
	    },
	    position: function position() {
	        return this.parent().index(this);
	    },
	    next: function next() {
	        return this.siblings()[this.position() + 1];
	    },
	    previous: function previous() {
	        return this.siblings()[this.position() - 1];
	    },
	    forward: function forward() {
	        var i = this.position() + 1,
	            p = this.parent();

	        p.removeElement(this).add(this, i);

	        if (p instanceof _doc2.default) p.node.appendChild(p.defs().node);

	        return this;
	    },
	    backward: function backward() {
	        var i = this.position();

	        if (i > 0) this.parent().removeElement(this).add(this, i - 1);

	        return this;
	    },
	    front: function front() {
	        var p = this.parent();

	        p.node.appendChild(this.node);

	        if (p instanceof _doc2.default) p.node.appendChild(p.defs().node);

	        return this;
	    },
	    back: function back() {
	        if (this.position() > 0) this.parent().removeElement(this).add(this, 0);

	        return this;
	    },
	    before: function before(element) {
	        element.remove();

	        var i = this.position();

	        this.parent().add(element, i);

	        return this;
	    },
	    after: function after(element) {
	        element.remove();

	        var i = this.position();

	        this.parent().add(element, i + 1);

	        return this;
	    }

	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _defs = __webpack_require__(15),
	    _defs2 = _interopRequireDefault(_defs),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Doc = function (_Container) {
	  _inherits(Doc, _Container);

	  function Doc(element) {
	    _classCallCheck(this, Doc);

	    if (element) {
	      element = typeof element == 'string' ? document.getElementById(element) : element;

	      if (element.nodeName == 'svg') {
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Doc).call(this, element));
	      } else {
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Doc).call(this, (0, _svg.create)('svg')));

	        element.appendChild(_this.node);
	      }
	    } else {
	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Doc).call(this, (0, _svg.create)('svg')));
	    }

	    _this.namespace().size('100%', '100%').defs();
	    return _possibleConstructorReturn(_this);
	  }

	  _createClass(Doc, [{
	    key: 'namespace',
	    value: function namespace() {
	      return this.attr({ xmlns: _svg.ns, version: '1.1' }).attr('xmlns:xlink', _svg.xlink, _svg.xmlns).attr('xmlns:svgjs', _svg.svgjs, _svg.xmlns);
	    }
	  }, {
	    key: 'defs',
	    value: function defs() {
	      if (!this._defs) {
	        var defs;

	        if (defs = this.node.getElementsByTagName('defs')[0]) this._defs = (0, _svg.adopt)(defs);else this._defs = new _defs2.default();

	        this.node.appendChild(this._defs.node);
	      }

	      return this._defs;
	    }
	  }, {
	    key: 'parent',
	    value: function parent() {
	      return this.node.parentNode.nodeName == '#document' ? null : this.node.parentNode;
	    }
	  }, {
	    key: 'spof',
	    value: function spof(_spof) {
	      var pos = this.node.getScreenCTM();

	      if (pos) this.style('left', -pos.e % 1 + 'px').style('top', -pos.f % 1 + 'px');

	      return this;
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      if (this.parent()) {
	        this.parent().removeChild(this.node);
	      }

	      return this;
	    }
	  }]);

	  return Doc;
	}(_container2.default);

	exports.default = Doc;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _parent = __webpack_require__(13),
	    _parent2 = _interopRequireDefault(_parent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Container = function (_Parent) {
	  _inherits(Container, _Parent);

	  function Container() {
	    _classCallCheck(this, Container);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Container).apply(this, arguments));
	  }

	  return Container;
	}(_parent2.default);

	exports.default = Container;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _utilities = __webpack_require__(14),
	    _utilities2 = _interopRequireDefault(_utilities),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Parent = function (_Element) {
	  _inherits(Parent, _Element);

	  function Parent() {
	    _classCallCheck(this, Parent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Parent).apply(this, arguments));
	  }

	  _createClass(Parent, [{
	    key: 'children',
	    value: function children() {
	      return _utilities2.default.map(_utilities2.default.filterSVGElements(this.node.childNodes), function (node) {
	        return (0, _svg.adopt)(node);
	      });
	    }
	  }, {
	    key: 'add',
	    value: function add(element, i) {
	      if (!this.has(element)) {
	        i = i == null ? this.children().length : i;

	        this.node.insertBefore(element.node, this.node.childNodes[i] || null);
	      }

	      return this;
	    }
	  }, {
	    key: 'put',
	    value: function put(element, i) {
	      this.add(element, i);
	      return element;
	    }
	  }, {
	    key: 'has',
	    value: function has(element) {
	      return this.index(element) >= 0;
	    }
	  }, {
	    key: 'index',
	    value: function index(element) {
	      return this.children().indexOf(element);
	    }
	  }, {
	    key: 'get',
	    value: function get(i) {
	      return this.children()[i];
	    }
	  }, {
	    key: 'first',
	    value: function first() {
	      return this.children()[0];
	    }
	  }, {
	    key: 'last',
	    value: function last() {
	      return this.children()[this.children().length - 1];
	    }
	  }, {
	    key: 'each',
	    value: function each(block, deep) {
	      var i,
	          il,
	          children = this.children();

	      for (i = 0, il = children.length; i < il; i++) {
	        if (children[i] instanceof _element2.default) block.apply(children[i], [i, children]);

	        if (deep && children[i] instanceof Parent) children[i].each(block, deep);
	      }

	      return this;
	    }
	  }, {
	    key: 'removeElement',
	    value: function removeElement(element) {
	      this.node.removeChild(element.node);

	      return this;
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      while (this.node.hasChildNodes()) {
	        this.node.removeChild(this.node.lastChild);
	      }
	      delete this._defs;

	      return this;
	    }
	  }, {
	    key: 'defs',
	    value: function defs() {
	      return this.doc().defs();
	    }
	  }]);

	  return Parent;
	}(_element2.default);

	exports.default = Parent;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	var utils = {
	  map: function map(array, block) {
	    var i,
	        il = array.length,
	        result = [];

	    for (i = 0; i < il; i++) {
	      result.push(block(array[i]));
	    }return result;
	  },

	  radians: function radians(d) {
	    return d % 360 * Math.PI / 180;
	  },
	  degrees: function degrees(r) {
	    return r * 180 / Math.PI % 360;
	  },
	  filterSVGElements: function filterSVGElements(p) {
	    return [].filter.call(p, function (el) {
	      return el instanceof SVGElement;
	    });
	  }

	};
	exports.default = utils;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: !0
	});

	var _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Defs = function (_Container) {
		_inherits(Defs, _Container);

		function Defs() {
			_classCallCheck(this, Defs);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Defs).call(this, (0, _svg.create)('defs')));
		}

		return Defs;
	}(_container2.default);

	exports.default = Defs;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _image = __webpack_require__(17),
	    _image2 = _interopRequireDefault(_image),
	    _color = __webpack_require__(20),
	    _color2 = _interopRequireDefault(_color),
	    _number = __webpack_require__(7),
	    _number2 = _interopRequireDefault(_number),
	    _array = __webpack_require__(21),
	    _array2 = _interopRequireDefault(_array),
	    _matrix = __webpack_require__(22),
	    _matrix2 = _interopRequireDefault(_matrix),
	    _svg = __webpack_require__(3),
	    _regex = __webpack_require__(8),
	    _regex2 = _interopRequireDefault(_regex),
	    _default = __webpack_require__(9),
	    _default2 = _interopRequireDefault(_default);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _svg.extend)(_element2.default, {
	  attr: function attr(a, v, n) {
	    if (a == null) {
	      a = {};
	      v = this.node.attributes;
	      for (n = v.length - 1; n >= 0; n--) {
	        a[v[n].nodeName] = _regex2.default.isNumber.test(v[n].nodeValue) ? parseFloat(v[n].nodeValue) : v[n].nodeValue;
	      }return a;
	    } else if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object') {
	      for (v in a) {
	        this.attr(v, a[v]);
	      }
	    } else if (v === null) {
	      this.node.removeAttribute(a);
	    } else if (v == null) {
	      v = this.node.getAttribute(a);
	      return v == null ? _default2.default.attrs[a] : _regex2.default.isNumber.test(v) ? parseFloat(v) : v;
	    } else {
	      if (a == 'stroke-width') this.attr('stroke', parseFloat(v) > 0 ? this._stroke : null);else if (a == 'stroke') this._stroke = v;

	      if (a == 'fill' || a == 'stroke') {
	        if (_regex2.default.isImage.test(v)) v = this.doc().defs().image(v, 0, 0);

	        if (v instanceof _image2.default) v = this.doc().defs().pattern(0, 0, function () {
	          this.add(v);
	        });
	      }

	      if (typeof v === 'number') v = new _number2.default(v);else if (_color2.default.isColor(v)) v = new _color2.default(v);else if (Array.isArray(v)) v = new _array2.default(v);else if (v instanceof _matrix2.default && v.param) this.param = v.param;

	      if (a == 'leading') {
	        if (this.leading) this.leading(v);
	      } else {
	        typeof n === 'string' ? this.node.setAttributeNS(n, a, v.toString()) : this.node.setAttribute(a, v.toString());
	      }

	      if (this.rebuild && (a == 'font-size' || a == 'x')) this.rebuild(a, v);
	    }

	    return this;
	  }
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _shape = __webpack_require__(18),
	    _shape2 = _interopRequireDefault(_shape),
	    _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _pattern = __webpack_require__(19),
	    _pattern2 = _interopRequireDefault(_pattern),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Image = function (_Shape) {
	  _inherits(Image, _Shape);

	  function Image() {
	    _classCallCheck(this, Image);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Image).call(this, (0, _svg.create)('image')));
	  }

	  _createClass(Image, [{
	    key: 'load',
	    value: function load(url) {
	      if (!url) return this;

	      var self = this,
	          img = document.createElement('img');

	      img.onload = function () {
	        var p = self.parent(_pattern2.default);

	        if (p === null) return;

	        if (self.width() == 0 && self.height() == 0) self.size(img.width, img.height);

	        if (p && p.width() == 0 && p.height() == 0) p.size(self.width(), self.height());

	        if (typeof self._loaded === 'function') self._loaded.call(self, {
	          width: img.width,
	          height: img.height,
	          ratio: img.width / img.height,
	          url: url
	        });
	      };

	      return this.attr('href', img.src = this.src = url, _svg.xlink);
	    }
	  }, {
	    key: 'loaded',
	    value: function loaded(_loaded) {
	      this._loaded = _loaded;
	      return this;
	    }
	  }]);

	  return Image;
	}(_shape2.default);

	exports.default = Image;


	(0, _svg.extend)(_container2.default, {
	  image: function image(source, width, height) {
	    return this.put(new Image()).load(source).size(width || 0, height || width || 0);
	  }
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Shape = function (_Element) {
	  _inherits(Shape, _Element);

	  function Shape() {
	    _classCallCheck(this, Shape);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Shape).apply(this, arguments));
	  }

	  return Shape;
	}(_element2.default);

	exports.default = Shape;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _defs = __webpack_require__(15),
	    _defs2 = _interopRequireDefault(_defs),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pattern = function (_Container) {
	  _inherits(Pattern, _Container);

	  function Pattern() {
	    _classCallCheck(this, Pattern);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Pattern).call(this, (0, _svg.create)('pattern')));
	  }

	  _createClass(Pattern, [{
	    key: 'fill',
	    value: function fill() {
	      return 'url(#' + this.id() + ')';
	    }
	  }, {
	    key: 'update',
	    value: function update(block) {
	      this.clear();

	      if (typeof block == 'function') block.call(this, this);

	      return this;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.fill();
	    }
	  }, {
	    key: 'attr',
	    value: function attr(a, b, c) {
	      if (a == 'transform') a = 'patternTransform';
	      return _container2.default.prototype.attr.call(this, a, b, c);
	    }
	  }]);

	  return Pattern;
	}(_container2.default);

	exports.default = Pattern;


	(0, _svg.extend)(_container2.default, {
	  pattern: function pattern(width, height, block) {
	    return this.defs().pattern(width, height, block);
	  }
	});

	(0, _svg.extend)(_defs2.default, {
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _regex = __webpack_require__(8),
	    _regex2 = _interopRequireDefault(_regex),
	    _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Color = function () {
	  function Color(color) {
	    _classCallCheck(this, Color);

	    var match;

	    this.r = 0;
	    this.g = 0;
	    this.b = 0;

	    if (typeof color === 'string') {
	      if (_regex2.default.isRgb.test(color)) {
	        match = _regex2.default.rgb.exec(color.replace(/\s/g, ''));

	        this.r = parseInt(match[1]);
	        this.g = parseInt(match[2]);
	        this.b = parseInt(match[3]);
	      } else if (_regex2.default.isHex.test(color)) {
	        match = _regex2.default.hex.exec((0, _helpers.fullHex)(color));

	        this.r = parseInt(match[1], 16);
	        this.g = parseInt(match[2], 16);
	        this.b = parseInt(match[3], 16);
	      }
	    } else if ((typeof color === 'undefined' ? 'undefined' : _typeof(color)) === 'object') {
	      this.r = color.r;
	      this.g = color.g;
	      this.b = color.b;
	    }
	  }

	  _createClass(Color, [{
	    key: 'toString',
	    value: function toString() {
	      return this.toHex();
	    }
	  }, {
	    key: 'toHex',
	    value: function toHex() {
	      return '#' + (0, _helpers.compToHex)(this.r) + (0, _helpers.compToHex)(this.g) + (0, _helpers.compToHex)(this.b);
	    }
	  }, {
	    key: 'toRgb',
	    value: function toRgb() {
	      return 'rgb(' + [this.r, this.g, this.b].join() + ')';
	    }
	  }, {
	    key: 'brightness',
	    value: function brightness() {
	      return this.r / 255 * 0.30 + this.g / 255 * 0.59 + this.b / 255 * 0.11;
	    }
	  }, {
	    key: 'morph',
	    value: function morph(color) {
	      this.destination = new Color(color);

	      return this;
	    }
	  }, {
	    key: 'at',
	    value: function at(pos) {
	      if (!this.destination) return this;

	      pos = pos < 0 ? 0 : pos > 1 ? 1 : pos;

	      return new Color({
	        r: ~ ~(this.r + (this.destination.r - this.r) * pos),
	        g: ~ ~(this.g + (this.destination.g - this.g) * pos),
	        b: ~ ~(this.b + (this.destination.b - this.b) * pos)
	      });
	    }
	  }]);

	  return Color;
	}();

	exports.default = Color;

	Color.test = function (color) {
	  color += '';
	  return _regex2.default.isHex.test(color) || _regex2.default.isRgb.test(color);
	};

	Color.isRgb = function (color) {
	  return color && typeof color.r == 'number' && typeof color.g == 'number' && typeof color.b == 'number';
	};

	Color.isColor = function (color) {
	  return Color.isRgb(color) || Color.test(color);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(),
	    svg_Array = function () {
	  function svg_Array(array, fallback) {
	    _classCallCheck(this, svg_Array);

	    array = (array || []).valueOf();

	    if (array.length == 0 && fallback) array = fallback.valueOf();

	    this.value = this.parse(array);
	  }

	  _createClass(svg_Array, [{
	    key: 'morph',
	    value: function morph(array) {
	      this.destination = this.parse(array);

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
	    }
	  }, {
	    key: 'settle',
	    value: function settle() {
	      for (var i = 0, il = this.value.length, seen = []; i < il; i++) {
	        if (seen.indexOf(this.value[i]) == -1) seen.push(this.value[i]);
	      }
	      return this.value = seen;
	    }
	  }, {
	    key: 'at',
	    value: function at(pos) {
	      if (!this.destination) return this;

	      for (var i = 0, il = this.value.length, array = []; i < il; i++) {
	        array.push(this.value[i] + (this.destination[i] - this.value[i]) * pos);
	      }return new svg_Array(array);
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.value.join(' ');
	    }
	  }, {
	    key: 'valueOf',
	    value: function valueOf() {
	      return this.value;
	    }
	  }, {
	    key: 'parse',
	    value: function parse(array) {
	      array = array.valueOf();

	      if (Array.isArray(array)) return array;

	      return this.split(array);
	    }
	  }, {
	    key: 'split',
	    value: function split(string) {
	      return string.trim().split(/\s+/);
	    }
	  }, {
	    key: 'reverse',
	    value: function reverse() {
	      this.value.reverse();

	      return this;
	    }
	  }]);

	  return svg_Array;
	}();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	exports.default = svg_Array;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _utilities = __webpack_require__(14),
	    _utilities2 = _interopRequireDefault(_utilities),
	    _svg = __webpack_require__(3),
	    _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Matrix = function () {
	  function Matrix(source) {
	    _classCallCheck(this, Matrix);

	    var i,
	        base = (0, _helpers.arrayToMatrix)([1, 0, 0, 1, 0, 0]);

	    source = source instanceof _element2.default ? source.matrixify() : typeof source === 'string' ? (0, _helpers.stringToMatrix)(source) : arguments.length == 6 ? (0, _helpers.arrayToMatrix)([].slice.call(arguments)) : (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object' ? source : base;

	    for (i = _helpers.abcdef.length - 1; i >= 0; --i) {
	      this[_helpers.abcdef[i]] = source && typeof source[_helpers.abcdef[i]] === 'number' ? source[_helpers.abcdef[i]] : base[_helpers.abcdef[i]];
	    }
	  }

	  _createClass(Matrix, [{
	    key: 'extract',
	    value: function extract() {
	      var px = (0, _helpers.deltaTransformPoint)(this, 0, 1),
	          py = (0, _helpers.deltaTransformPoint)(this, 1, 0),
	          skewX = 180 / Math.PI * Math.atan2(px.y, px.x) - 90;

	      return {
	        x: this.e,
	        y: this.f,
	        transformedX: (this.e * Math.cos(skewX * Math.PI / 180) + this.f * Math.sin(skewX * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b),
	        transformedY: (this.f * Math.cos(skewX * Math.PI / 180) + this.e * Math.sin(-skewX * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d),
	        skewX: -skewX,
	        skewY: 180 / Math.PI * Math.atan2(py.y, py.x),
	        scaleX: Math.sqrt(this.a * this.a + this.b * this.b),
	        scaleY: Math.sqrt(this.c * this.c + this.d * this.d),
	        rotation: skewX,
	        a: this.a,
	        b: this.b,
	        c: this.c,
	        d: this.d,
	        e: this.e,
	        f: this.f,
	        matrix: new Matrix(this)
	      };
	    }
	  }, {
	    key: 'clone',
	    value: function clone() {
	      return new Matrix(this);
	    }
	  }, {
	    key: 'morph',
	    value: function morph(matrix) {
	      this.destination = new Matrix(matrix);

	      return this;
	    }
	  }, {
	    key: 'at',
	    value: function at(pos) {
	      if (!this.destination) return this;

	      var matrix = new Matrix({
	        a: this.a + (this.destination.a - this.a) * pos,
	        b: this.b + (this.destination.b - this.b) * pos,
	        c: this.c + (this.destination.c - this.c) * pos,
	        d: this.d + (this.destination.d - this.d) * pos,
	        e: this.e + (this.destination.e - this.e) * pos,
	        f: this.f + (this.destination.f - this.f) * pos
	      });

	      if (this.param && this.param.to) {
	        var param = {
	          rotation: this.param.from.rotation + (this.param.to.rotation - this.param.from.rotation) * pos,
	          cx: this.param.from.cx,
	          cy: this.param.from.cy
	        };

	        matrix = matrix.rotate((this.param.to.rotation - this.param.from.rotation * 2) * pos, param.cx, param.cy);

	        matrix.param = param;
	      }

	      return matrix;
	    }
	  }, {
	    key: 'multiply',
	    value: function multiply(matrix) {
	      return new Matrix(this.native().multiply((0, _helpers.parseMatrix)(matrix).native()));
	    }
	  }, {
	    key: 'inverse',
	    value: function inverse() {
	      return new Matrix(this.native().inverse());
	    }
	  }, {
	    key: 'translate',
	    value: function translate(x, y) {
	      return new Matrix(this.native().translate(x || 0, y || 0));
	    }
	  }, {
	    key: 'scale',
	    value: function scale(x, y, cx, cy) {
	      if (arguments.length == 1 || arguments.length == 3) y = x;
	      if (arguments.length == 3) {
	        cy = cx;
	        cx = y;
	      }

	      return this.around(cx, cy, new Matrix(x, 0, 0, y, 0, 0));
	    }
	  }, {
	    key: 'rotate',
	    value: function rotate(r, cx, cy) {
	      r = _utilities2.default.radians(r);

	      return this.around(cx, cy, new Matrix(Math.cos(r), Math.sin(r), -Math.sin(r), Math.cos(r), 0, 0));
	    }
	  }, {
	    key: 'flip',
	    value: function flip(a, o) {
	      return a == 'x' ? this.scale(-1, 1, o, 0) : this.scale(1, -1, 0, o);
	    }
	  }, {
	    key: 'skew',
	    value: function skew(x, y, cx, cy) {
	      return this.around(cx, cy, this.native().skewX(x || 0).skewY(y || 0));
	    }
	  }, {
	    key: 'skewX',
	    value: function skewX(x, cx, cy) {
	      return this.around(cx, cy, this.native().skewX(x || 0));
	    }
	  }, {
	    key: 'skewY',
	    value: function skewY(y, cx, cy) {
	      return this.around(cx, cy, this.native().skewY(y || 0));
	    }
	  }, {
	    key: 'around',
	    value: function around(cx, cy, matrix) {
	      return this.multiply(new Matrix(1, 0, 0, 1, cx || 0, cy || 0)).multiply(matrix).multiply(new Matrix(1, 0, 0, 1, -cx || 0, -cy || 0));
	    }
	  }, {
	    key: 'native',
	    value: function native() {
	      var matrix = SVG.parser.draw.node.createSVGMatrix();

	      for (var i = _helpers.abcdef.length - 1; i >= 0; i--) {
	        matrix[_helpers.abcdef[i]] = this[_helpers.abcdef[i]];
	      }return matrix;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return 'matrix(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ')';
	    }
	  }]);

	  return Matrix;
	}();

	exports.default = Matrix;

	(0, _svg.extend)(_element2.default, {
	  ctm: function ctm() {
	    return new Matrix(this.node.getCTM());
	  },

	  screenCTM: function screenCTM() {
	    return new Matrix(this.node.getScreenCTM());
	  }
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _svg.extend)(_element2.default, {
	  data: function data(a, v, r) {
	    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object') {
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
	      this.attr('data-' + a, v === null ? null : r === !0 || typeof v === 'string' || typeof v === 'number' ? v : JSON.stringify(v));
	    }

	    return this;
	  }
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _svg.extend)(_element2.default, {
	  remember: function remember(k, v) {
	    if (_typeof(arguments[0]) == 'object') for (var v in k) {
	      this.remember(v, k[v]);
	    } else if (arguments.length == 1) return this.memory()[k];else this.memory()[k] = v;

	    return this;
	  },

	  forget: function forget() {
	    if (arguments.length == 0) this._memory = {};else for (var i = arguments.length - 1; i >= 0; i--) {
	      delete this.memory()[arguments[i]];
	    }return this;
	  },

	  memory: function memory() {
	    return this._memory || (this._memory = {});
	  }

	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _fx = __webpack_require__(26),
	    _fx2 = _interopRequireDefault(_fx),
	    _svg = __webpack_require__(3),
	    _regex = __webpack_require__(8),
	    _regex2 = _interopRequireDefault(_regex),
	    _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _svg.extend)(_element2.default, {
	  style: function style(s, v) {
	    if (arguments.length == 0) {
	      return this.node.style.cssText || '';
	    } else if (arguments.length < 2) {
	      if ((typeof s === 'undefined' ? 'undefined' : _typeof(s)) == 'object') {
	        for (v in s) {
	          this.style(v, s[v]);
	        }
	      } else if (_regex2.default.isCss.test(s)) {
	        s = s.split(';');

	        for (var i = 0; i < s.length; i++) {
	          v = s[i].split(':');
	          this.style(v[0].replace(/\s+/g, ''), v[1]);
	        }
	      } else {
	        return this.node.style[(0, _helpers.camelCase)(s)];
	      }
	    } else {
	      this.node.style[(0, _helpers.camelCase)(s)] = v === null || _regex2.default.isBlank.test(v) ? '' : v;
	    }

	    return this;
	  }
	});

	(0, _svg.extend)(_fx2.default, {
	  style: function style(s, v) {
	    if ((typeof s === 'undefined' ? 'undefined' : _typeof(s)) == 'object') for (var key in s) {
	      this.style(key, s[key]);
	    } else this.add(s, new _fx.MorphObj(null, v), 'styles');

	    return this;
	  }
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	exports.MorphObj = exports.Delay = exports.Situation = exports.easing = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; },
	    _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.morph = morph;

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _group = __webpack_require__(27),
	    _group2 = _interopRequireDefault(_group),
	    _text = __webpack_require__(28),
	    _text2 = _interopRequireDefault(_text),
	    _svg = __webpack_require__(3),
	    _number = __webpack_require__(7),
	    _number2 = _interopRequireDefault(_number),
	    _color = __webpack_require__(20),
	    _color2 = _interopRequireDefault(_color),
	    _matrix = __webpack_require__(22),
	    _matrix2 = _interopRequireDefault(_matrix),
	    _regex = __webpack_require__(8),
	    _regex2 = _interopRequireDefault(_regex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var easing = exports.easing = {
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

	function morph(from, to) {
	  return new MorphObj(from, to).at(pos);
	}

	var Situation = exports.Situation = function Situation(o) {
	  _classCallCheck(this, Situation);

	  this.init = !1;
	  this.reversed = !1;
	  this.reversing = !1;

	  this.duration = new _number2.default(o.duration).valueOf();
	  this.delay = new _number2.default(o.delay).valueOf();

	  this.start = +new Date() + this.delay;
	  this.finish = this.start + this.duration;
	  this.ease = o.ease;

	  this.loop = !1;
	  this.loops = !1;

	  this.animations = {};

	  this.attrs = {};

	  this.styles = {};

	  this.transforms = [];

	  this.once = {};
	};

	var Delay = exports.Delay = function Delay(dealy) {
	  _classCallCheck(this, Delay);

	  this.delay = new Number(delay).valueOf();
	};

	var FX = function () {
	  function FX(element) {
	    _classCallCheck(this, FX);

	    this._target = element;
	    this.situations = [];
	    this.active = !1;
	    this.situation = null;
	    this.paused = !1;
	    this.lastPos = 0;
	    this.pos = 0;
	  }

	  _createClass(FX, [{
	    key: 'animate',
	    value: function animate(o, ease, delay) {

	      if ((typeof o === 'undefined' ? 'undefined' : _typeof(o)) == 'object') {
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
	    }
	  }, {
	    key: 'delay',
	    value: function delay(delay) {
	      var delay = new Delay(delay);

	      return this.queue(delay);
	    }
	  }, {
	    key: 'target',
	    value: function target(_target) {
	      if (_target && _target instanceof _element2.default) {
	        this._target = _target;
	        return this;
	      }

	      return this._target;
	    }
	  }, {
	    key: 'timeToPos',
	    value: function timeToPos(timestamp) {
	      return (timestamp - this.situation.start) / this.situation.duration;
	    }
	  }, {
	    key: 'posToTime',
	    value: function posToTime(pos) {
	      return this.situation.duration * pos + this.situation.start;
	    }
	  }, {
	    key: 'startAnimFrame',
	    value: function startAnimFrame() {
	      this.stopAnimFrame();
	      this.animationFrame = requestAnimationFrame(function () {
	        this.step();
	      }.bind(this));
	    }
	  }, {
	    key: 'stopAnimFrame',
	    value: function stopAnimFrame() {
	      cancelAnimationFrame(this.animationFrame);
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	      if (!this.active && this.situation) {
	        this.situation.start = +new Date() + this.situation.delay;
	        this.situation.finish = this.situation.start + this.situation.duration;

	        this.initAnimations();
	        this.active = !0;
	        this.startAnimFrame();
	      }

	      return this;
	    }
	  }, {
	    key: 'queue',
	    value: function queue(fn) {
	      if (typeof fn == 'function' || fn instanceof Situation || fn instanceof Delay) this.situations.push(fn);

	      if (!this.situation) this.situation = this.situations.shift();

	      return this;
	    }
	  }, {
	    key: 'dequeue',
	    value: function dequeue() {
	      this.situation && this.situation.stop && this.situation.stop();

	      this.situation = this.situations.shift();

	      if (this.situation) {

	        var fn = function () {
	          if (this.situation instanceof Situation) this.initAnimations().at(0);else if (this.situation instanceof Delay) this.dequeue();else this.situation.call(this);
	        }.bind(this);

	        if (this.situation.delay) {
	          setTimeout(function () {
	            fn();
	          }, this.situation.delay);
	        } else {
	          fn();
	        }
	      }

	      return this;
	    }
	  }, {
	    key: 'initAnimations',
	    value: function initAnimations() {
	      var i,
	          s = this.situation;


	      if (s.init) return this;

	      for (i in s.animations) {

	        if (i == 'viewbox') {
	          s.animations[i] = this.target().viewbox().morph(s.animations[i]);
	        } else {
	          s.animations[i].value = i == 'plot' ? this.target().array().value : this.target()[i]();

	          if (s.animations[i].value.value) {
	            s.animations[i].value = s.animations[i].value.value;
	          }

	          if (s.animations[i].relative) s.animations[i].destination.value = s.animations[i].destination.value + s.animations[i].value;
	        }
	      }

	      for (i in s.attrs) {
	        if (s.attrs[i] instanceof _color2.default) {
	          var color = new _color2.default(this.target().attr(i));
	          s.attrs[i].r = color.r;
	          s.attrs[i].g = color.g;
	          s.attrs[i].b = color.b;
	        } else {
	          s.attrs[i].value = this.target().attr(i);
	        }
	      }

	      for (i in s.styles) {
	        s.styles[i].value = this.target().style(i);
	      }

	      s.initialTransformation = this.target().matrixify();

	      s.init = !0;
	      return this;
	    }
	  }, {
	    key: 'clearQueue',
	    value: function clearQueue() {
	      this.situations = [];
	      return this;
	    }
	  }, {
	    key: 'clearCurrent',
	    value: function clearCurrent() {
	      this.situation = null;
	      return this;
	    }
	  }, {
	    key: 'stop',
	    value: function stop(jumpToEnd, clearQueue) {
	      if (!this.active) this.start();

	      if (clearQueue) {
	        this.clearQueue();
	      }

	      this.active = !1;

	      if (jumpToEnd) {

	        this.situation.loop = !1;

	        if (this.situation.loops % 2 == 0 && this.situation.reversing) {
	          this.situation.reversed = !0;
	        }

	        this.at(1);
	      }

	      this.stopAnimFrame();
	      clearTimeout(this.timeout);

	      return this.clearCurrent();
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      if (this.situation) {
	        var temp = this.situation;
	        this.stop();
	        this.situation = temp;
	        this.at(0);
	      }
	      return this;
	    }
	  }, {
	    key: 'finish',
	    value: function finish() {

	      this.stop(!0, !1);

	      while (this.dequeue().situation && this.stop(!0, !1)) {}

	      this.clearQueue().clearCurrent();

	      return this;
	    }
	  }, {
	    key: 'at',
	    value: function at(pos) {
	      this.pos = pos;
	      this.situation.start = +new Date() - pos * this.situation.duration;
	      this.situation.finish = this.situation.start + this.situation.duration;
	      return this.step(!0);
	    }
	  }, {
	    key: 'speed',
	    value: function speed(_speed) {
	      this.situation.duration = this.situation.duration * this.pos + (1 - this.pos) * this.situation.duration / _speed;
	      this.situation.finish = this.situation.start + this.situation.duration;
	      return this.at(this.pos);
	    }
	  }, {
	    key: 'loop',
	    value: function loop(times, reverse) {
	      this.situation.loop = this.situation.loops = times || !0;

	      if (reverse) this.last().reversing = !0;
	      return this;
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this.paused = !0;
	      this.stopAnimFrame();
	      clearTimeout(this.timeout);
	      return this;
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      if (!this.paused) return this;
	      this.paused = !1;
	      return this.at(this.pos);
	    }
	  }, {
	    key: 'reverse',
	    value: function reverse(reversed) {
	      var c = this.last();

	      if (typeof reversed == 'undefined') c.reversed = !c.reversed;else c.reversed = reversed;

	      return this;
	    }
	  }, {
	    key: 'progress',
	    value: function progress(easeIt) {
	      return easeIt ? this.situation.ease(this.pos) : this.pos;
	    }
	  }, {
	    key: 'after',
	    value: function after(fn) {
	      var c = this.last(),
	          wrapper = function wrapper(e) {
	        if (e.detail.situation == c) {
	          fn.call(this, c);
	          this.off('finished.fx', wrapper);
	        }
	      };

	      this.target().on('finished.fx', wrapper);
	      return this;
	    }
	  }, {
	    key: 'during',
	    value: function during(fn) {
	      var c = this.last(),
	          wrapper = function wrapper(e) {
	        if (e.detail.situation == c) {
	          fn.call(this, e.detail.pos, morph, e.detail.eased, c);
	        }
	      };

	      this.target().off('during.fx', wrapper).on('during.fx', wrapper);

	      return this.after(function () {
	        this.off('during.fx', wrapper);
	      });
	    }
	  }, {
	    key: 'afterAll',
	    value: function afterAll(fn) {
	      var wrapper = function wrapper(e) {
	        fn.call(this);
	        this.off('allfinished.fx', wrapper);
	      };

	      this.target().off('allfinished.fx', wrapper).on('allfinished.fx', wrapper);
	      return this;
	    }
	  }, {
	    key: 'duringAll',
	    value: function duringAll(fn) {
	      var wrapper = function wrapper(e) {
	        fn.call(this, e.detail.pos, morph, e.detail.eased, e.detail.situation);
	      };

	      this.target().off('during.fx', wrapper).on('during.fx', wrapper);

	      return this.afterAll(function () {
	        this.off('during.fx', wrapper);
	      });
	    }
	  }, {
	    key: 'last',
	    value: function last() {
	      return this.situations.length ? this.situations[this.situations.length - 1] : this.situation;
	    }
	  }, {
	    key: 'add',
	    value: function add(method, args, type) {
	      this.last()[type || 'animations'][method] = args;
	      setTimeout(function () {
	        this.start();
	      }.bind(this), 0);
	      return this;
	    }
	  }, {
	    key: 'step',
	    value: function step(ignoreTime) {
	      if (!ignoreTime) this.pos = this.timeToPos(+new Date());

	      if (this.pos >= 1 && (this.situation.loop === !0 || typeof this.situation.loop == 'number' && --this.situation.loop)) {

	        if (this.situation.reversing) {
	          this.situation.reversed = !this.situation.reversed;
	        }
	        return this.at(this.pos - 1);
	      }

	      if (this.situation.reversed) this.pos = 1 - this.pos;

	      if (this.pos > 1) this.pos = 1;
	      if (this.pos < 0) this.pos = 0;

	      var eased = this.situation.ease(this.pos);

	      for (var i in this.situation.once) {
	        if (i > this.lastPos && i <= eased) {
	          this.situation.once[i].call(this.target(), this.pos, eased);
	          delete this.situation.once[i];
	        }
	      }

	      if (this.active) this.target().fire('during', { pos: this.pos, eased: eased, fx: this, situation: this.situation });

	      if (!this.situation) {
	        return this;
	      }

	      this.eachAt();

	      if (this.pos == 1 && !this.situation.reversed || this.situation.reversed && this.pos == 0) {
	        this.stopAnimFrame();

	        this.target().fire('finished', { fx: this, situation: this.situation });

	        if (!this.situations.length) {
	          this.target().fire('allfinished');
	          this.target().off('.fx');
	          this.active = !1;
	        }

	        if (this.active) this.dequeue();else this.clearCurrent();
	      } else if (!this.paused && this.active) {
	        this.startAnimFrame();
	      }

	      this.lastPos = eased;
	      return this;
	    }
	  }, {
	    key: 'eachAt',
	    value: function eachAt() {
	      var i,
	          at,
	          self = this,
	          target = this.target(),
	          s = this.situation;

	      for (i in s.animations) {

	        at = [].concat(s.animations[i]).map(function (el) {
	          return el.at ? el.at(s.ease(self.pos), self.pos) : el;
	        });

	        target[i].apply(target, at);
	      }

	      for (i in s.attrs) {

	        at = [i].concat(s.attrs[i]).map(function (el) {
	          return el.at ? el.at(s.ease(self.pos), self.pos) : el;
	        });

	        target.attr.apply(target, at);
	      }

	      for (i in s.styles) {

	        at = [i].concat(s.styles[i]).map(function (el) {
	          return el.at ? el.at(s.ease(self.pos), self.pos) : el;
	        });

	        target.style.apply(target, at);
	      }

	      if (s.transforms.length) {
	        at = s.initialTransformation;
	        for (i in s.transforms) {
	          var a = s.transforms[i];

	          if (a instanceof _matrix2.default) {

	            if (a.relative) {
	              at = at.multiply(a.at(s.ease(this.pos)));
	            } else {
	              at = at.morph(a).at(s.ease(this.pos));
	            }
	            continue;
	          }

	          if (!a.relative) a.undo(at.extract());

	          at = at.multiply(a.at(s.ease(this.pos)));
	        }

	        target.matrix(at);
	      }

	      return this;
	    }
	  }, {
	    key: 'once',
	    value: function once(pos, fn, isEased) {

	      if (!isEased) pos = this.situation.ease(pos);

	      this.situation.once[pos] = fn;

	      return this;
	    }
	  }]);

	  return FX;
	}();

	exports.default = FX;


	(0, _svg.extend)(_element2.default, {
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
	  },
	  pause: function pause() {
	    if (this.fx) this.fx.pause();

	    return this;
	  },
	  play: function play() {
	    if (this.fx) this.fx.play();

	    return this;
	  }
	});

	var MorphObj = exports.MorphObj = function () {
	  function MorphObj(from, to) {
	    _classCallCheck(this, MorphObj);

	    if (_color2.default.isColor(to)) return new _color2.default(from).morph(to);

	    if (_regex2.default.numberAndUnit.test(to)) return new _number2.default(from).morph(to);

	    this.value = 0;
	    this.destination = to;
	  }

	  _createClass(MorphObj, [{
	    key: 'at',
	    value: function at(pos, real) {
	      return real < 1 ? this.value : this.destination;
	    }
	  }, {
	    key: 'valueOf',
	    value: function valueOf() {
	      return this.value;
	    }
	  }]);

	  return MorphObj;
	}();

	(0, _svg.extend)(FX, {
	  attr: function attr(a, v, relative) {
	    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object') {
	      for (var key in a) {
	        this.attr(key, a[key]);
	      }
	    } else {
	      this.add(a, new MorphObj(null, v), 'attrs');
	    }

	    return this;
	  },
	  x: function x(_x2, relative) {
	    if (this.target() instanceof _group2.default) {
	      this.transform({ x: _x2 }, relative);
	      return this;
	    }

	    var num = new _number2.default().morph(_x2);
	    num.relative = relative;
	    return this.add('x', num);
	  },
	  y: function y(_y, relative) {
	    if (this.target() instanceof _group2.default) {
	      this.transform({ y: _y }, relative);
	      return this;
	    }

	    var num = new _number2.default().morph(_y);
	    num.relative = relative;
	    return this.add('y', num);
	  },
	  cx: function cx(x) {
	    return this.add('cx', new _number2.default().morph(x));
	  },
	  cy: function cy(y) {
	    return this.add('cy', new _number2.default().morph(y));
	  },
	  move: function move(x, y) {
	    return this.x(x).y(y);
	  },
	  center: function center(x, y) {
	    return this.cx(x).cy(y);
	  },
	  size: function size(width, height) {
	    if (this.target() instanceof _text2.default) {
	      this.attr('font-size', width);
	    } else {
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

	      this.add('width', new _number2.default().morph(width)).add('height', new _number2.default().morph(height));
	    }

	    return this;
	  },
	  plot: function plot(p) {
	    return this.add('plot', this.target().array().morph(p));
	  },
	  leading: function leading(value) {
	    return this.target().leading ? this.add('leading', new _number2.default().morph(value)) : this;
	  }
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Group = function (_Container) {
	  _inherits(Group, _Container);

	  function Group() {
	    _classCallCheck(this, Group);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Group).call(this, (0, _svg.create)('g')));
	  }

	  _createClass(Group, [{
	    key: 'x',
	    value: function x(_x) {
	      return _x == null ? this.transform('x') : this.transform({ x: _x - this.x() }, !0);
	    }
	  }, {
	    key: 'y',
	    value: function y(_y) {
	      return _y == null ? this.transform('y') : this.transform({ y: _y - this.y() }, !0);
	    }
	  }, {
	    key: 'cx',
	    value: function cx(x) {
	      return x == null ? this.gbox().cx : this.x(x - this.gbox().width / 2);
	    }
	  }, {
	    key: 'cy',
	    value: function cy(y) {
	      return y == null ? this.gbox().cy : this.y(y - this.gbox().height / 2);
	    }
	  }, {
	    key: 'gbox',
	    value: function gbox() {
	      var bbox = this.bbox(),
	          trans = this.transform();

	      bbox.x += trans.x;
	      bbox.x2 += trans.x;
	      bbox.cx += trans.x;

	      bbox.y += trans.y;
	      bbox.y2 += trans.y;
	      bbox.cy += trans.y;

	      return bbox;
	    }
	  }]);

	  return Group;
	}(_container2.default);

	exports.default = Group;

	(0, _svg.extend)(_container2.default, {
	  group: function group() {
	    return this.put(new Group());
	  }
	});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	exports.Tspan = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _shape = __webpack_require__(18),
	    _shape2 = _interopRequireDefault(_shape),
	    _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _set = __webpack_require__(29),
	    _set2 = _interopRequireDefault(_set),
	    _number = __webpack_require__(7),
	    _number2 = _interopRequireDefault(_number),
	    _default = __webpack_require__(9),
	    _default2 = _interopRequireDefault(_default),
	    _utilities = __webpack_require__(14),
	    _utilities2 = _interopRequireDefault(_utilities),
	    _svg = __webpack_require__(3),
	    _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Text = function (_Shape) {
	  _inherits(Text, _Shape);

	  function Text() {
	    _classCallCheck(this, Text);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Text).call(this, (0, _svg.create)('text')));

	    _this.dom.leading = new _number2.default(1.3);
	    _this._rebuild = !0;
	    _this._build = !1;
	    _this.attr('font-family', _default2.default.attrs['font-family']);
	    return _this;
	  }

	  _createClass(Text, [{
	    key: 'clone',
	    value: function clone() {
	      var clone = (0, _helpers.assignNewId)(this.node.cloneNode(!0));

	      this.after(clone);

	      return clone;
	    }
	  }, {
	    key: 'x',
	    value: function x(_x) {
	      if (_x == null) return this.attr('x');

	      if (!this.textPath) this.lines().each(function () {
	        if (this.dom.newLined) this.x(_x);
	      });

	      return this.attr('x', _x);
	    }
	  }, {
	    key: 'y',
	    value: function y(_y) {
	      var oy = this.attr('y'),
	          o = typeof oy === 'number' ? oy - this.bbox().y : 0;

	      if (_y == null) return typeof oy === 'number' ? oy - o : oy;

	      return this.attr('y', typeof _y === 'number' ? _y + o : _y);
	    }
	  }, {
	    key: 'cx',
	    value: function cx(x) {
	      return x == null ? this.bbox().cx : this.x(x - this.bbox().width / 2);
	    }
	  }, {
	    key: 'cy',
	    value: function cy(y) {
	      return y == null ? this.bbox().cy : this.y(y - this.bbox().height / 2);
	    }
	  }, {
	    key: 'text',
	    value: function text(text) {
	      if (typeof text === 'undefined') {
	        var text = '',
	            children = this.node.childNodes;

	        for (var i = 0, len = children.length; i < len; ++i) {
	          if (i != 0 && children[i].nodeType != 3 && (0, _svg.adopt)(children[i]).dom.newLined == !0) {
	            text += '\n';
	          }

	          text += children[i].textContent;
	        }

	        return text;
	      }

	      this.clear().build(!0);

	      if (typeof text === 'function') {
	        text.call(this, this);
	      } else {
	        text = text.split('\n');

	        for (var i = 0, il = text.length; i < il; i++) {
	          this.tspan(text[i]).newLine();
	        }
	      }

	      return this.build(!1).rebuild();
	    }
	  }, {
	    key: 'size',
	    value: function size(_size) {
	      return this.attr('font-size', _size).rebuild();
	    }
	  }, {
	    key: 'leading',
	    value: function leading(value) {
	      if (value == null) return this.dom.leading;

	      this.dom.leading = new _number2.default(value);

	      return this.rebuild();
	    }
	  }, {
	    key: 'lines',
	    value: function lines() {
	      var node = (this.textPath && this.textPath() || this).node,
	          lines = _utilities2.default.map(_utilities2.default.filterSVGElements(node.childNodes), function (el) {
	        return (0, _svg.adopt)(el);
	      });

	      return new _set2.default(lines);
	    }
	  }, {
	    key: 'rebuild',
	    value: function rebuild(_rebuild) {
	      if (typeof _rebuild == 'boolean') this._rebuild = _rebuild;

	      if (this._rebuild) {
	        var self = this,
	            blankLineOffset = 0,
	            dy = this.dom.leading * new _number2.default(this.attr('font-size'));

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
	    }
	  }, {
	    key: 'build',
	    value: function build(_build) {
	      this._build = !!_build;
	      return this;
	    }
	  }, {
	    key: 'setData',
	    value: function setData(o) {
	      this.dom = o;
	      this.dom.leading = new _number2.default(o.leading || 1.3);
	      return this;
	    }
	  }]);

	  return Text;
	}(_shape2.default);

	exports.default = Text;


	(0, _svg.extend)(_container2.default, {
	  text: function text(_text) {
	    return this.put(new Text()).text(_text);
	  },
	  plain: function plain(text) {
	    return this.put(new Text()).plain(text);
	  }
	});

	var Tspan = function (_Shape2) {
	  _inherits(Tspan, _Shape2);

	  function Tspan() {
	    _classCallCheck(this, Tspan);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tspan).call(this, (0, _svg.create)('tspan')));
	  }

	  _createClass(Tspan, [{
	    key: 'text',
	    value: function text(_text2) {
	      if (_text2 == null) return this.node.textContent + (this.dom.newLined ? '\n' : '');

	      typeof _text2 === 'function' ? _text2.call(this, this) : this.plain(_text2);

	      return this;
	    }
	  }, {
	    key: 'dx',
	    value: function dx(_dx) {
	      return this.attr('dx', _dx);
	    }
	  }, {
	    key: 'dy',
	    value: function dy(_dy) {
	      return this.attr('dy', _dy);
	    }
	  }, {
	    key: 'newLine',
	    value: function newLine() {
	      var t = this.parent(Text);

	      this.dom.newLined = !0;

	      return this.dy(t.dom.leading * t.attr('font-size')).attr('x', t.x());
	    }
	  }]);

	  return Tspan;
	}(_shape2.default);

	exports.Tspan = Tspan;


	(0, _svg.extend)(Text, Tspan, {
	  plain: function plain(text) {
	    if (this._build === !1) this.clear();

	    this.node.appendChild(document.createTextNode(text));

	    return this;
	  },
	  tspan: function tspan(text) {
	    var node = (this.textPath && this.textPath() || this).node,
	        tspan = new Tspan();

	    if (this._build === !1) this.clear();

	    node.appendChild(tspan.node);

	    return tspan.text(text);
	  },
	  clear: function clear() {
	    var node = (this.textPath && this.textPath() || this).node;

	    while (node.hasChildNodes()) {
	      node.removeChild(node.lastChild);
	    }return this;
	  },
	  length: function length() {
	    return this.node.getComputedTextLength();
	  }
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _fx = __webpack_require__(26),
	    _fx2 = _interopRequireDefault(_fx),
	    _shape = __webpack_require__(18),
	    _shape2 = _interopRequireDefault(_shape),
	    _boxes = __webpack_require__(30),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Set = function () {
	  function Set(members) {
	    _classCallCheck(this, Set);

	    Array.isArray(members) ? this.members = members : this.clear();
	  }

	  _createClass(Set, [{
	    key: 'add',
	    value: function add() {
	      var i,
	          il,
	          elements = [].slice.call(arguments);

	      for (i = 0, il = elements.length; i < il; i++) {
	        this.members.push(elements[i]);
	      }return this;
	    }
	  }, {
	    key: 'remove',
	    value: function remove(element) {
	      var i = this.index(element);

	      if (i > -1) this.members.splice(i, 1);

	      return this;
	    }
	  }, {
	    key: 'each',
	    value: function each(block) {
	      for (var i = 0, il = this.members.length; i < il; i++) {
	        block.apply(this.members[i], [i, this.members]);
	      }return this;
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.members = [];

	      return this;
	    }
	  }, {
	    key: 'length',
	    value: function length() {
	      return this.members.length;
	    }
	  }, {
	    key: 'has',
	    value: function has(element) {
	      return this.index(element) >= 0;
	    }
	  }, {
	    key: 'index',
	    value: function index(element) {
	      return this.members.indexOf(element);
	    }
	  }, {
	    key: 'get',
	    value: function get(i) {
	      return this.members[i];
	    }
	  }, {
	    key: 'first',
	    value: function first() {
	      return this.get(0);
	    }
	  }, {
	    key: 'last',
	    value: function last() {
	      return this.get(this.members.length - 1);
	    }
	  }, {
	    key: 'valueOf',
	    value: function valueOf() {
	      return this.members;
	    }
	  }, {
	    key: 'bbox',
	    value: function bbox() {
	      var box = new _boxes.BBox();

	      if (this.members.length == 0) return box;

	      var rbox = this.members[0].rbox();
	      box.x = rbox.x;
	      box.y = rbox.y;
	      box.width = rbox.width;
	      box.height = rbox.height;

	      this.each(function () {
	        box = box.merge(this.rbox());
	      });

	      return box;
	    }
	  }]);

	  return Set;
	}();

	exports.default = Set;


	(0, _svg.extend)(_container2.default, {
	  set: function set(members) {
	    return new Set(members);
	  }
	});

	Set.inherit = function () {
	  var m,
	      methods = [];

	  for (var m in _shape2.default.prototype) {
	    if (typeof _shape2.default.prototype[m] == 'function' && typeof Set.prototype[m] != 'function') methods.push(m);
	  }
	  methods.forEach(function (method) {
	    Set.prototype[method] = function () {
	      for (var i = 0, il = this.members.length; i < il; i++) {
	        if (this.members[i] && typeof this.members[i][method] == 'function') this.members[i][method].apply(this.members[i], arguments);
	      }return method == 'animate' ? this.fx || (this.fx = new _fx2.default.Set(this)) : this;
	    };
	  });

	  methods = [];

	  for (var m in _fx2.default.prototype) {
	    if (typeof _fx2.default.prototype[m] == 'function' && typeof _fx2.default.Set.prototype[m] != 'function') methods.push(m);
	  }
	  methods.forEach(function (method) {
	    _fx2.default.Set.prototype[method] = function () {
	      for (var i = 0, il = this.set.members.length; i < il; i++) {
	        this.set.members[i].fx[method].apply(this.set.members[i].fx, arguments);
	      }return this;
	    };
	  });
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	exports.RBox = exports.TBox = exports.BBox = undefined;

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _shape = __webpack_require__(18),
	    _shape2 = _interopRequireDefault(_shape),
	    _svg = __webpack_require__(3),
	    _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BBox = exports.BBox = function BBox(element) {
	  _classCallCheck(this, BBox);

	  if (element) {
	    var box;

	    try {
	      box = element.node.getBBox();
	    } catch (e) {
	      if (element instanceof _shape2.default) {
	        var clone = element.clone().addTo(SVG.parser.draw);
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

	    this.x = box.x;
	    this.y = box.y;

	    this.width = box.width;
	    this.height = box.height;
	  }

	  (0, _helpers.fullBox)(this);
	};

	(0, _svg.extend)(_element2.default, {
	  bbox: function bbox() {
	    return new BBox(this);
	  }
	});

	var TBox = exports.TBox = function TBox(element) {
	  _classCallCheck(this, TBox);

	  if (element) {
	    var t = element.ctm().extract(),
	        box = element.bbox();

	    this.width = box.width * t.scaleX;
	    this.height = box.height * t.scaleY;

	    this.x = box.x + t.x;
	    this.y = box.y + t.y;
	  }

	  (0, _helpers.fullBox)(this);
	};

	(0, _svg.extend)(_element2.default, {
	  tbox: function tbox() {
	    return new TBox(this);
	  }
	});

	var RBox = exports.RBox = function RBox(element) {
	  _classCallCheck(this, RBox);

	  if (element) {
	    var e = element.doc().parent(),
	        box = element.node.getBoundingClientRect(),
	        zoom = 1;

	    this.x = box.left;
	    this.y = box.top;

	    this.x -= e.offsetLeft;
	    this.y -= e.offsetTop;

	    while (e = e.offsetParent) {
	      this.x -= e.offsetLeft;
	      this.y -= e.offsetTop;
	    }

	    e = element;
	    while (e.parent && (e = e.parent())) {
	      if (e.viewbox) {
	        zoom *= e.viewbox().zoom;
	        this.x -= e.x() || 0;
	        this.y -= e.y() || 0;
	      }
	    }

	    this.width = box.width / zoom;
	    this.height = box.height / zoom;
	  }

	  (0, _helpers.fullBox)(this);

	  this.x += window.pageXOffset;
	  this.y += window.pageYOffset;
	};

	(0, _svg.extend)(_element2.default, {
	  rbox: function rbox() {
	    return new RBox(this);
	  }
	});[BBox, TBox, RBox].forEach(function (c) {
	  (0, _svg.extend)(c, {
	    merge: function merge(box) {
	      var b = new c();

	      b.x = Math.min(this.x, box.x);
	      b.y = Math.min(this.y, box.y);
	      b.width = Math.max(this.x + this.width, box.x + box.width) - b.x;
	      b.height = Math.max(this.y + this.height, box.y + box.height) - b.y;

	      return (0, _helpers.fullBox)(b);
	    }

	  });
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _fx = __webpack_require__(26),
	    _fx2 = _interopRequireDefault(_fx),
	    _parent = __webpack_require__(13),
	    _parent2 = _interopRequireDefault(_parent),
	    _rect = __webpack_require__(32),
	    _rect2 = _interopRequireDefault(_rect),
	    _ellipse = __webpack_require__(33),
	    _text = __webpack_require__(28),
	    _text2 = _interopRequireDefault(_text),
	    _path = __webpack_require__(34),
	    _path2 = _interopRequireDefault(_path),
	    _gradient = __webpack_require__(36),
	    _gradient2 = _interopRequireDefault(_gradient),
	    _color = __webpack_require__(20),
	    _color2 = _interopRequireDefault(_color),
	    _matrix = __webpack_require__(22),
	    _matrix2 = _interopRequireDefault(_matrix),
	    _number = __webpack_require__(7),
	    _number2 = _interopRequireDefault(_number),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sugar = {
	  stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset'],
	  fill: ['color', 'opacity', 'rule'],
	  prefix: function prefix(t, a) {
	    return a == 'color' ? t : t + '-' + a;
	  }
	};['fill', 'stroke'].forEach(function (m) {
	  var i,
	      extension = {};

	  extension[m] = function (o) {
	    if (typeof o == 'string' || _color2.default.isRgb(o) || o && typeof o.fill === 'function') this.attr(m, o);else for (i = sugar[m].length - 1; i >= 0; i--) {
	        if (o[sugar[m][i]] != null) this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]]);
	      }return this;
	  };

	  (0, _svg.extend)(_element2.default, _fx2.default, extension);
	});

	(0, _svg.extend)(_element2.default, _fx2.default, {
	  rotate: function rotate(d, cx, cy) {
	    return this.transform({ rotation: d, cx: cx, cy: cy });
	  },
	  skew: function skew(x, y, cx, cy) {
	    return this.transform({ skewX: x, skewY: y, cx: cx, cy: cy });
	  },
	  scale: function scale(x, y, cx, cy) {
	    return arguments.length == 1 || arguments.length == 3 ? this.transform({ scale: x, cx: y, cy: cx }) : this.transform({ scaleX: x, scaleY: y, cx: cx, cy: cy });
	  },
	  translate: function translate(x, y) {
	    return this.transform({ x: x, y: y });
	  },
	  flip: function flip(a, o) {
	    return this.transform({ flip: a, offset: o });
	  },
	  matrix: function matrix(m) {
	    return this.attr('transform', new _matrix2.default(m));
	  },
	  opacity: function opacity(value) {
	    return this.attr('opacity', value);
	  },
	  dx: function dx(x) {
	    return this.x((this instanceof _fx2.default ? 0 : this.x()) + x, !0);
	  },
	  dy: function dy(y) {
	    return this.y((this instanceof _fx2.default ? 0 : this.y()) + y, !0);
	  },
	  dmove: function dmove(x, y) {
	    return this.dx(x).dy(y);
	  }
	});

	(0, _svg.extend)(_rect2.default, _ellipse.Ellipse, _ellipse.Circle, _gradient2.default, _fx2.default, {
	  radius: function radius(x, y) {
	    var type = (this.target || this).type;
	    return type == 'radial' || type == 'circle' ? this.attr({ 'r': new _number2.default(x) }) : this.rx(x).ry(y == null ? x : y);
	  }
	});

	(0, _svg.extend)(_path2.default, {
	  length: function length() {
	    return this.node.getTotalLength();
	  },
	  pointAt: function pointAt(length) {
	    return this.node.getPointAtLength(length);
	  }
	});

	(0, _svg.extend)(_parent2.default, _text2.default, _fx2.default, {
	  font: function font(o) {
	    for (var k in o) {
	      k == 'leading' ? this.leading(o[k]) : k == 'anchor' ? this.attr('text-anchor', o[k]) : k == 'size' || k == 'family' || k == 'weight' || k == 'stretch' || k == 'variant' || k == 'style' ? this.attr('font-' + k, o[k]) : this.attr(k, o[k]);
	    }return this;
	  }
	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _shape = __webpack_require__(18),
	    _shape2 = _interopRequireDefault(_shape),
	    _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Rect = function (_Shape) {
	  _inherits(Rect, _Shape);

	  function Rect() {
	    _classCallCheck(this, Rect);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Rect).call(this, (0, _svg.create)('rect')));
	  }

	  return Rect;
	}(_shape2.default);

	exports.default = Rect;

	(0, _svg.extend)(_container2.default, {
	  rect: function rect(width, height) {
	    return this.put(new Rect()).size(width, height);
	  }
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	exports.Ellipse = exports.Circle = undefined;

	var _shape = __webpack_require__(18),
	    _shape2 = _interopRequireDefault(_shape),
	    _fx = __webpack_require__(26),
	    _fx2 = _interopRequireDefault(_fx),
	    _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _number = __webpack_require__(7),
	    _number2 = _interopRequireDefault(_number),
	    _rect = __webpack_require__(32),
	    _rect2 = _interopRequireDefault(_rect),
	    _svg = __webpack_require__(3),
	    _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Circle = exports.Circle = function (_Shape) {
	  _inherits(Circle, _Shape);

	  function Circle() {
	    _classCallCheck(this, Circle);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Circle).call(this, (0, _svg.create)('circle')));
	  }

	  return Circle;
	}(_shape2.default);

	(0, _svg.extend)(_container2.default, {
	  circle: function circle(size) {
	    return this.put(new Circle()).rx(new _number2.default(size).divide(2)).move(0, 0);
	  }
	});

	(0, _svg.extend)(Circle, _fx2.default, {
	  rx: function rx(_rx) {
	    return this.attr('r', _rx);
	  },
	  ry: function ry(_ry) {
	    return this.rx(_ry);
	  }
	});

	var Ellipse = exports.Ellipse = function (_Shape2) {
	  _inherits(Ellipse, _Shape2);

	  function Ellipse() {
	    _classCallCheck(this, Ellipse);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Ellipse).call(this, (0, _svg.create)('ellipse')));
	  }

	  return Ellipse;
	}(_shape2.default);

	(0, _svg.extend)(_container2.default, {
	  ellipse: function ellipse(width, height) {
	    return this.put(new Ellipse()).size(width, height).move(0, 0);
	  }
	});

	(0, _svg.extend)(Ellipse, _rect2.default, _fx2.default, {
	  rx: function rx(_rx2) {
	    return this.attr('rx', _rx2);
	  },
	  ry: function ry(_ry2) {
	    return this.attr('ry', _ry2);
	  }
	});

	(0, _svg.extend)(Circle, Ellipse, {
	  x: function x(_x) {
	    return _x == null ? this.cx() - this.rx() : this.cx(_x + this.rx());
	  },
	  y: function y(_y) {
	    return _y == null ? this.cy() - this.ry() : this.cy(_y + this.ry());
	  },
	  cx: function cx(x) {
	    return x == null ? this.attr('cx') : this.attr('cx', x);
	  },
	  cy: function cy(y) {
	    return y == null ? this.attr('cy') : this.attr('cy', y);
	  },
	  width: function width(_width) {
	    return _width == null ? this.rx() * 2 : this.rx(new _number2.default(_width).divide(2));
	  },
	  height: function height(_height) {
	    return _height == null ? this.ry() * 2 : this.ry(new _number2.default(_height).divide(2));
	  },
	  size: function size(width, height) {
	    var p = (0, _helpers.proportionalSize)(this.bbox(), width, height);

	    return this.rx(new _number2.default(p.width).divide(2)).ry(new _number2.default(p.height).divide(2));
	  }
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _shape = __webpack_require__(18),
	    _shape2 = _interopRequireDefault(_shape),
	    _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _patharray = __webpack_require__(35),
	    _patharray2 = _interopRequireDefault(_patharray),
	    _svg = __webpack_require__(3),
	    _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Path = function (_Shape) {
	  _inherits(Path, _Shape);

	  function Path() {
	    _classCallCheck(this, Path);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Path).call(this, (0, _svg.create)('path')));
	  }

	  _createClass(Path, [{
	    key: 'array',
	    value: function array() {
	      return this._array || (this._array = new _patharray2.default(this.attr('d')));
	    }
	  }, {
	    key: 'plot',
	    value: function plot(p) {
	      return this.attr('d', this._array = new _patharray2.default(p));
	    }
	  }, {
	    key: 'move',
	    value: function move(x, y) {
	      return this.attr('d', this.array().move(x, y));
	    }
	  }, {
	    key: 'x',
	    value: function x(_x) {
	      return _x == null ? this.bbox().x : this.move(_x, this.bbox().y);
	    }
	  }, {
	    key: 'y',
	    value: function y(_y) {
	      return _y == null ? this.bbox().y : this.move(this.bbox().x, _y);
	    }
	  }, {
	    key: 'size',
	    value: function size(width, height) {
	      var p = (0, _helpers.proportionalSize)(this.bbox(), width, height);

	      return this.attr('d', this.array().size(p.width, p.height));
	    }
	  }, {
	    key: 'width',
	    value: function width(_width) {
	      return _width == null ? this.bbox().width : this.size(_width, this.bbox().height);
	    }
	  }, {
	    key: 'height',
	    value: function height(_height) {
	      return _height == null ? this.bbox().height : this.size(this.bbox().width, _height);
	    }
	  }]);

	  return Path;
	}(_shape2.default);

	exports.default = Path;

	(0, _svg.extend)(Path, {
	  morphArray: _patharray2.default
	});

	(0, _svg.extend)(_container2.default, {
	  path: function path(d) {
	    return this.put(new Path()).plot(d);
	  }
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _array = __webpack_require__(21),
	    _array2 = _interopRequireDefault(_array),
	    _regex = __webpack_require__(8),
	    _regex2 = _interopRequireDefault(_regex),
	    _svg = __webpack_require__(3),
	    _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PathArray = function (_svg_Array) {
	  _inherits(PathArray, _svg_Array);

	  function PathArray(array, fallback) {
	    _classCallCheck(this, PathArray);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PathArray).call(this, array, fallback || [['M', 0, 0]]));
	  }

	  _createClass(PathArray, [{
	    key: 'toString',
	    value: function toString() {
	      return (0, _helpers.arrayToString)(this.value);
	    }
	  }, {
	    key: 'move',
	    value: function move(x, y) {
	      var box = this.bbox();

	      x -= box.x;
	      y -= box.y;

	      if (!isNaN(x) && !isNaN(y)) {
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
	    }
	  }, {
	    key: 'size',
	    value: function size(width, height) {
	      var i,
	          l,
	          box = this.bbox();

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
	          this.value[i][1] = this.value[i][1] * width / box.width;
	          this.value[i][2] = this.value[i][2] * height / box.height;

	          this.value[i][6] = (this.value[i][6] - box.x) * width / box.width + box.x;
	          this.value[i][7] = (this.value[i][7] - box.y) * height / box.height + box.y;
	        }
	      }

	      return this;
	    }
	  }, {
	    key: 'parse',
	    value: function parse(array) {
	      if (array instanceof PathArray) return array.valueOf();

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

	        array = array.replace(_regex2.default.negExp, 'X').replace(_regex2.default.pathLetters, ' $& ').replace(_regex2.default.hyphen, ' -').replace(_regex2.default.comma, ' ').replace(_regex2.default.X, 'e-').trim().split(_regex2.default.whitespaces);
	        for (i = array.length; --i;) {
	          if (array[i].indexOf('.') != array[i].lastIndexOf('.')) {
	            var split = array[i].split('.'),
	                first = [split.shift(), split.shift()].join('.');
	            array.splice.apply(array, [i, 1].concat(first, split.map(function (el) {
	              return '.' + el;
	            })));
	          }
	        }
	      } else {
	          array = array.reduce(function (prev, curr) {
	            return [].concat.apply(prev, curr);
	          }, []);
	        }

	      var arr = [];

	      do {
	        if (_regex2.default.isPathLetter.test(array[0])) {
	          s = array[0];
	          array.shift();
	        } else if (s == 'M') {
	            s = 'L';
	          } else if (s == 'm') {
	            s = 'l';
	          }

	        seg = [s.toUpperCase()];

	        for (i = 0; i < paramCnt[seg[0]]; ++i) {
	          seg.push(parseFloat(array.shift()));
	        }

	        if (s == seg[0]) {

	          if (s == 'M' || s == 'L' || s == 'C' || s == 'Q') {
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
	        } else {
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
	    }
	  }, {
	    key: 'bbox',
	    value: function bbox() {
	      SVG.parser.path.setAttribute('d', this.toString());

	      return SVG.parser.path.getBBox();
	    }
	  }]);

	  return PathArray;
	}(_array2.default);

	exports.default = PathArray;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	exports.Stop = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _defs = __webpack_require__(15),
	    _defs2 = _interopRequireDefault(_defs),
	    _number = __webpack_require__(7),
	    _number2 = _interopRequireDefault(_number),
	    _svg = __webpack_require__(3),
	    _fx = __webpack_require__(26),
	    _fx2 = _interopRequireDefault(_fx);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Gradient = function (_Container) {
	  _inherits(Gradient, _Container);

	  function Gradient(type) {
	    _classCallCheck(this, Gradient);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Gradient).call(this, (0, _svg.create)(type + 'Gradient')));

	    _this.type = type;
	    return _this;
	  }

	  _createClass(Gradient, [{
	    key: 'at',
	    value: function at(offset, color, opacity) {
	      return this.put(new Stop()).update(offset, color, opacity);
	    }
	  }, {
	    key: 'update',
	    value: function update(block) {
	      this.clear();

	      if (typeof block == 'function') block.call(this, this);

	      return this;
	    }
	  }, {
	    key: 'fill',
	    value: function fill() {
	      return 'url(#' + this.id() + ')';
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.fill();
	    }
	  }, {
	    key: 'attr',
	    value: function attr(a, b, c) {
	      if (a == 'transform') a = 'gradientTransform';
	      return _container2.default.prototype.attr.call(this, a, b, c);
	    }
	  }]);

	  return Gradient;
	}(_container2.default);

	exports.default = Gradient;


	(0, _svg.extend)(_container2.default, {
	  gradient: function gradient(type, block) {
	    return this.defs().gradient(type, block);
	  }
	});

	(0, _svg.extend)(_defs2.default, {
	  gradient: function gradient(type, block) {
	    return this.put(new Gradient(type)).update(block);
	  }
	});

	(0, _svg.extend)(Gradient, _fx2.default, {
	  from: function from(x, y) {
	    return (this.target || this).type == 'radial' ? this.attr({ fx: new _number2.default(x), fy: new _number2.default(y) }) : this.attr({ x1: new _number2.default(x), y1: new _number2.default(y) });
	  },
	  to: function to(x, y) {
	    return (this.target || this).type == 'radial' ? this.attr({ cx: new _number2.default(x), cy: new _number2.default(y) }) : this.attr({ x2: new _number2.default(x), y2: new _number2.default(y) });
	  }
	});

	var Stop = exports.Stop = function (_Element) {
	  _inherits(Stop, _Element);

	  function Stop() {
	    _classCallCheck(this, Stop);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Stop).call(this, (0, _svg.create)('stop')));
	  }

	  _createClass(Stop, [{
	    key: 'update',
	    value: function update(o) {
	      if (typeof o == 'number' || o instanceof _number2.default) {
	        o = {
	          offset: arguments[0],
	          color: arguments[1],
	          opacity: arguments[2]
	        };
	      }

	      if (o.opacity != null) this.attr('stop-opacity', o.opacity);
	      if (o.color != null) this.attr('stop-color', o.color);
	      if (o.offset != null) this.attr('offset', new _number2.default(o.offset));

	      return this;
	    }
	  }]);

	  return Stop;
	}(_element2.default);

	(0, _svg.extend)(_fx2.default, {
	  update: function update(o) {
	    if (this.target() instanceof Stop) {
	      if (typeof o == 'number' || o instanceof _number2.default) {
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	exports.Skew = exports.Scale = exports.Rotate = exports.Translate = exports.Transformation = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(),
	    _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _fx = __webpack_require__(26),
	    _fx2 = _interopRequireDefault(_fx),
	    _matrix = __webpack_require__(22),
	    _matrix2 = _interopRequireDefault(_matrix),
	    _regex = __webpack_require__(8),
	    _regex2 = _interopRequireDefault(_regex),
	    _number = __webpack_require__(7),
	    _number2 = _interopRequireDefault(_number),
	    _svg = __webpack_require__(3),
	    _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(0, _svg.extend)(_element2.default, {
	  transform: function transform(o, relative) {
	    var target = this,
	        matrix;

	    if ((typeof o === 'undefined' ? 'undefined' : _typeof(o)) !== 'object') {
	      matrix = new _matrix2.default(target).extract();

	      return typeof o === 'string' ? matrix[o] : matrix;
	    }

	    matrix = new _matrix2.default(target);

	    relative = !!relative || !!o.relative;

	    if (o.a != null) {
	      matrix = relative ? matrix.multiply(new _matrix2.default(o)) : new _matrix2.default(o);
	    } else if (o.rotation != null) {
	        (0, _helpers.ensureCentre)(o, target);

	        matrix = relative ? matrix.rotate(o.rotation, o.cx, o.cy) : matrix.rotate(o.rotation - matrix.extract().rotation, o.cx, o.cy);
	      } else if (o.scale != null || o.scaleX != null || o.scaleY != null) {
	          (0, _helpers.ensureCentre)(o, target);

	          o.scaleX = o.scale != null ? o.scale : o.scaleX != null ? o.scaleX : 1;
	          o.scaleY = o.scale != null ? o.scale : o.scaleY != null ? o.scaleY : 1;

	          if (!relative) {
	            var e = matrix.extract();
	            o.scaleX = o.scaleX * 1 / e.scaleX;
	            o.scaleY = o.scaleY * 1 / e.scaleY;
	          }

	          matrix = matrix.scale(o.scaleX, o.scaleY, o.cx, o.cy);
	        } else if (o.skewX != null || o.skewY != null) {
	            (0, _helpers.ensureCentre)(o, target);

	            o.skewX = o.skewX != null ? o.skewX : 0;
	            o.skewY = o.skewY != null ? o.skewY : 0;

	            if (!relative) {
	              var e = matrix.extract();
	              matrix = matrix.multiply(new _matrix2.default().skew(e.skewX, e.skewY, o.cx, o.cy).inverse());
	            }

	            matrix = matrix.skew(o.skewX, o.skewY, o.cx, o.cy);
	          } else if (o.flip) {
	              matrix = matrix.flip(o.flip, o.offset == null ? target.bbox()['c' + o.flip] : o.offset);
	            } else if (o.x != null || o.y != null) {
	                if (relative) {
	                  matrix = matrix.translate(o.x, o.y);
	                } else {
	                  if (o.x != null) matrix.e = o.x;
	                  if (o.y != null) matrix.f = o.y;
	                }
	              }

	    return this.attr('transform', matrix);
	  }
	});

	(0, _svg.extend)(_fx2.default, {
	  transform: function transform(o, relative) {
	    var target = this.target(),
	        matrix;

	    if ((typeof o === 'undefined' ? 'undefined' : _typeof(o)) !== 'object') {
	      matrix = new _matrix2.default(target).extract();

	      return typeof o === 'string' ? matrix[o] : matrix;
	    }

	    relative = !!relative || !!o.relative;

	    if (o.a != null) {
	      matrix = new _matrix2.default(o);
	    } else if (o.rotation != null) {
	        (0, _helpers.ensureCentre)(o, target);

	        matrix = new Rotate(o.rotation, o.cx, o.cy);
	      } else if (o.scale != null || o.scaleX != null || o.scaleY != null) {
	          (0, _helpers.ensureCentre)(o, target);

	          o.scaleX = o.scale != null ? o.scale : o.scaleX != null ? o.scaleX : 1;
	          o.scaleY = o.scale != null ? o.scale : o.scaleY != null ? o.scaleY : 1;

	          matrix = new Scale(o.scaleX, o.scaleY, o.cx, o.cy);
	        } else if (o.skewX != null || o.skewY != null) {
	            (0, _helpers.ensureCentre)(o, target);

	            o.skewX = o.skewX != null ? o.skewX : 0;
	            o.skewY = o.skewY != null ? o.skewY : 0;

	            matrix = new Skew(o.skewX, o.skewY, o.cx, o.cy);
	          } else if (o.flip) {
	              matrix = new _matrix2.default().morph(new _matrix2.default().flip(o.flip, o.offset == null ? target.bbox()['c' + o.flip] : o.offset));
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

	(0, _svg.extend)(_element2.default, {
	  untransform: function untransform() {
	    return this.attr('transform', null);
	  },

	  matrixify: function matrixify() {

	    var matrix = (this.attr('transform') || '').split(/\)\s*/).slice(0, -1).map(function (str) {
	      var kv = str.trim().split('(');
	      return [kv[0], kv[1].split(_regex2.default.matrixElements).map(function (str) {
	        return parseFloat(str);
	      })];
	    }).reduce(function (matrix, transform) {

	      if (transform[0] == 'matrix') return matrix.multiply((0, _helpers.arrayToMatrix)(transform[1]));
	      return matrix[transform[0]].apply(matrix, transform[1]);
	    }, new _matrix2.default());

	    return matrix;
	  },

	  toParent: function toParent(parent) {
	    if (this == parent) return this;
	    var ctm = this.screenCTM(),
	        temp = parent.rect(1, 1),
	        pCtm = temp.screenCTM().inverse();

	    temp.remove();

	    this.addTo(parent).untransform().transform(pCtm.multiply(ctm));

	    return this;
	  },

	  toDoc: function toDoc() {
	    return this.toParent(this.doc());
	  }

	});

	var Transformation = exports.Transformation = function () {
	  function Transformation(source, inversed) {
	    _classCallCheck(this, Transformation);

	    if (arguments.length > 1 && typeof inversed != 'boolean') {
	      return this.create([].slice.call(arguments));
	    }

	    if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) == 'object') {
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

	  _createClass(Transformation, [{
	    key: 'at',
	    value: function at(pos) {

	      var params = [];

	      for (var i = 0, len = this.arguments.length; i < len; ++i) {
	        params.push(this[this.arguments[i]]);
	      }

	      var m = this._undo || new _matrix2.default();

	      m = new _matrix2.default().morph(_matrix2.default.prototype[this.method].apply(m, params)).at(pos);

	      return this.inversed ? m.inverse() : m;
	    }
	  }, {
	    key: 'undo',
	    value: function undo(o) {
	      this._undo = new SVG[capitalize(this.method)](o, !0).at(1);
	      return this;
	    }
	  }]);

	  return Transformation;
	}();

	var Translate = exports.Translate = function (_Transformation) {
	  _inherits(Translate, _Transformation);

	  function Translate(source, inversed) {
	    _classCallCheck(this, Translate);

	    if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) == 'object') {
	      ;

	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Translate).call(this, source, inversed));
	    } else {
	      ;

	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Translate).call(this, [].slice.call(arguments)));
	    }return _possibleConstructorReturn(_this);
	  }

	  return Translate;
	}(Transformation);

	(0, _svg.extend)(Translate, {
	  arguments: ['transformedX', 'transformedY'],
	  method: 'translate'
	});

	var Rotate = exports.Rotate = function (_Transformation2) {
	  _inherits(Rotate, _Transformation2);

	  function Rotate(source, inversed) {
	    _classCallCheck(this, Rotate);

	    if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) == 'object') {
	      ;

	      var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Rotate).call(this, source, inversed));
	    } else {
	      ;

	      var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Rotate).call(this, [].slice.call(arguments)));
	    }return _possibleConstructorReturn(_this2);
	  }

	  _createClass(Rotate, [{
	    key: 'at',
	    value: function at(pos) {
	      var m = new _matrix2.default().rotate(new _number2.default().morph(this.rotation - (this._undo ? this._undo.rotation : 0)).at(pos), this.cx, this.cy);
	      return this.inversed ? m.inverse() : m;
	    }
	  }, {
	    key: 'undo',
	    value: function undo(o) {
	      this._undo = o;
	    }
	  }]);

	  return Rotate;
	}(Transformation);

	(0, _svg.extend)(Rotate, {
	  arguments: ['rotation', 'cx', 'cy'],
	  method: 'rotate'
	});

	var Scale = exports.Scale = function (_Transformation3) {
	  _inherits(Scale, _Transformation3);

	  function Scale(source, inversed) {
	    _classCallCheck(this, Scale);

	    if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) == 'object') {
	      ;

	      var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Scale).call(this, source, inversed));
	    } else {
	      ;

	      var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Scale).call(this, [].slice.call(arguments)));
	    }return _possibleConstructorReturn(_this3);
	  }

	  return Scale;
	}(Transformation);

	(0, _svg.extend)(Scale, {
	  arguments: ['scaleX', 'scaleY', 'cx', 'cy'],
	  method: 'scale'
	});

	var Skew = exports.Skew = function (_Transformation4) {
	  _inherits(Skew, _Transformation4);

	  function Skew(source, inversed) {
	    _classCallCheck(this, Skew);

	    if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) == 'object') {
	      ;

	      var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Skew).call(this, source, inversed));
	    } else {
	      ;

	      var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Skew).call(this, [].slice.call(arguments)));
	    }return _possibleConstructorReturn(_this4);
	  }

	  return Skew;
	}(Transformation);

	(0, _svg.extend)(Skew, {
	  arguments: ['skewX', 'skewY', 'cx', 'cy'],
	  method: 'skew'
	});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _element2 = __webpack_require__(6),
	    _element3 = _interopRequireDefault(_element2),
	    _parent = __webpack_require__(13),
	    _parent2 = _interopRequireDefault(_parent),
	    _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Bare = function (_Element) {
	  _inherits(Bare, _Element);

	  function Bare(element, inherit) {
	    _classCallCheck(this, Bare);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bare).call(this, (0, _svg.create)(element)));

	    if (inherit) for (var method in inherit.prototype) {
	      if (typeof inherit.prototype[method] === 'function') _this[method] = inherit.prototype[method];
	    }return _this;
	  }

	  _createClass(Bare, [{
	    key: 'words',
	    value: function words(text) {
	      while (this.node.hasChildNodes()) {
	        this.node.removeChild(this.node.lastChild);
	      }
	      this.node.appendChild(document.createTextNode(text));

	      return this;
	    }
	  }]);

	  return Bare;
	}(_element3.default);

	exports.default = Bare;


	(0, _svg.extend)(_parent2.default, {
	  element: function element(_element, inherit) {
	    return this.put(new Bare(_element, inherit));
	  },
	  symbol: function symbol() {
	    return this.defs().element('symbol', _container2.default);
	  }

	});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ClipPath = function (_Container) {
	  _inherits(ClipPath, _Container);

	  function ClipPath() {
	    _classCallCheck(this, ClipPath);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClipPath).call(this, (0, _svg.create)('clipPath')));

	    _this.targets = [];
	    return _this;
	  }

	  _createClass(ClipPath, [{
	    key: 'remove',
	    value: function remove() {
	      for (var i = this.targets.length - 1; i >= 0; i--) {
	        if (this.targets[i]) this.targets[i].unclip();
	      }this.targets = [];

	      this.parent().removeElement(this);

	      return this;
	    }
	  }]);

	  return ClipPath;
	}(_container2.default);

	exports.default = ClipPath;

	(0, _svg.extend)(_container2.default, {
	  clip: function clip() {
	    return this.defs().put(new ClipPath());
	  }
	});

	(0, _svg.extend)(_element2.default, {
	  clipWith: function clipWith(element) {
	    this.clipper = element instanceof ClipPath ? element : this.parent().clip().add(element);

	    this.clipper.targets.push(this);

	    return this.attr('clip-path', 'url("#' + this.clipper.attr('id') + '")');
	  },
	  unclip: function unclip() {
	    delete this.clipper;
	    return this.attr('clip-path', null);
	  }
	});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	exports.off = exports.on = exports.listenerId = exports.handlerMap = exports.listeners = undefined;

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }); } else { obj[key] = value; } return obj; }

	;['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'touchstart', 'touchmove', 'touchleave', 'touchend', 'touchcancel'].forEach(function (event) {
	  (0, _svg.extend)(_element2.default, _defineProperty({}, event, function (f) {
	    var self = this;

	    this.node['on' + event] = typeof f == 'function' ? function () {
	      return f.apply(self, arguments);
	    } : null;

	    return this;
	  }));
	});

	var listeners = exports.listeners = [];
	var handlerMap = exports.handlerMap = [];
	var listenerId = exports.listenerId = 0;

	function _on(node, event, listener, binding) {
	  var l = listener.bind(binding || node.instance || node),
	      index = (handlerMap.indexOf(node) + 1 || handlerMap.push(node)) - 1,
	      ev = event.split('.')[0],
	      ns = event.split('.')[1] || '*';

	  listeners[index] = listeners[index] || {};
	  listeners[index][ev] = listeners[index][ev] || {};
	  listeners[index][ev][ns] = listeners[index][ev][ns] || {};

	  if (!listener._svgjsListenerId) listener._svgjsListenerId = exports.listenerId = listenerId += 1;

	  listeners[index][ev][ns][listener._svgjsListenerId] = l;

	  node.addEventListener(ev, l, !1);
	}

	exports.on = _on;
	function _off(node, event, listener) {
	  var index = handlerMap.indexOf(node),
	      ev = event && event.split('.')[0],
	      ns = event && event.split('.')[1];

	  if (index == -1) return;

	  if (listener) {
	    if (typeof listener == 'function') listener = listener._svgjsListenerId;
	    if (!listener) return;

	    if (listeners[index][ev] && listeners[index][ev][ns || '*']) {
	      node.removeEventListener(ev, listeners[index][ev][ns || '*'][listener], !1);

	      delete listeners[index][ev][ns || '*'][listener];
	    }
	  } else if (ns && ev) {
	    if (listeners[index][ev] && listeners[index][ev][ns]) {
	      for (listener in listeners[index][ev][ns]) {
	        _off(node, [ev, ns].join('.'), listener);
	      }delete listeners[index][ev][ns];
	    }
	  } else if (ns) {
	    for (event in listeners[index]) {
	      for (var namespace in listeners[index][event]) {
	        if (ns === namespace) {
	          _off(node, [event, ns].join('.'));
	        }
	      }
	    }
	  } else if (ev) {
	    if (listeners[index][ev]) {
	      for (var _namespace in listeners[index][ev]) {
	        _off(node, [ev, _namespace].join('.'));
	      }delete listeners[index][ev];
	    }
	  } else {
	    for (event in listeners[index]) {
	      _off(node, event);
	    }delete listeners[index];
	  }
	}

	exports.off = _off;
	(0, _svg.extend)(_element2.default, {
	  on: function on(event, listener, binding) {
	    _on(this.node, event, listener, binding);

	    return this;
	  },
	  off: function off(event, listener) {
	    _off(this.node, event, listener);

	    return this;
	  },
	  fire: function fire(event, data) {
	    if (event instanceof Event) {
	      this.node.dispatchEvent(event);
	    } else {
	      this.node.dispatchEvent(new CustomEvent(event, { detail: data }));
	    }

	    return this;
	  }
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var A = function (_Container) {
	  _inherits(A, _Container);

	  function A() {
	    _classCallCheck(this, A);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(A).call(this, (0, _svg.create)('a')));
	  }

	  _createClass(A, [{
	    key: 'to',
	    value: function to(url) {
	      return this.attr('href', url, _svg.xlink);
	    }
	  }, {
	    key: 'show',
	    value: function show(target) {
	      return this.attr('show', target, _svg.xlink);
	    }
	  }, {
	    key: 'target',
	    value: function target(_target) {
	      return this.attr('target', _target);
	    }
	  }]);

	  return A;
	}(_container2.default);

	exports.default = A;


	(0, _svg.extend)(_container2.default, {
	  link: function link(url) {
	    return this.put(new A()).to(url);
	  }
	});

	(0, _svg.extend)(_element2.default, {
	  linkTo: function linkTo(url) {
	    var link = new A();

	    if (typeof url == 'function') url.call(link, link);else link.to(url);

	    return this.parent().put(link).put(this);
	  }

	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _shape = __webpack_require__(18),
	    _shape2 = _interopRequireDefault(_shape),
	    _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _pointarray = __webpack_require__(43),
	    _pointarray2 = _interopRequireDefault(_pointarray),
	    _svg = __webpack_require__(3),
	    _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Line = function (_Shape) {
	  _inherits(Line, _Shape);

	  function Line() {
	    _classCallCheck(this, Line);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Line).call(this, (0, _svg.create)('line')));
	  }

	  _createClass(Line, [{
	    key: 'array',
	    value: function array() {
	      return new _pointarray2.default([[this.attr('x1'), this.attr('y1')], [this.attr('x2'), this.attr('y2')]]);
	    }
	  }, {
	    key: 'plot',
	    value: function plot(x1, y1, x2, y2) {
	      if (arguments.length == 4) x1 = { x1: x1, y1: y1, x2: x2, y2: y2 };else x1 = new _pointarray2.default(x1).toLine();

	      return this.attr(x1);
	    }
	  }, {
	    key: 'move',
	    value: function move(x, y) {
	      return this.attr(this.array().move(x, y).toLine());
	    }
	  }, {
	    key: 'size',
	    value: function size(width, height) {
	      var p = (0, _helpers.proportionalSize)(this.bbox(), width, height);

	      return this.attr(this.array().size(p.width, p.height).toLine());
	    }
	  }]);

	  return Line;
	}(_shape2.default);

	exports.default = Line;


	(0, _svg.extend)(_container2.default, {
	  line: function line(x1, y1, x2, y2) {
	    return this.put(new Line()).plot(x1, y1, x2, y2);
	  }
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _array = __webpack_require__(21),
	    _array2 = _interopRequireDefault(_array);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PointArray = function (_Array2) {
	  _inherits(PointArray, _Array2);

	  function PointArray(array, fallback) {
	    _classCallCheck(this, PointArray);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PointArray).call(this, array, fallback || [[0, 0]]));
	  }

	  _createClass(PointArray, [{
	    key: 'toString',
	    value: function toString() {
	      for (var i = 0, il = this.value.length, array = []; i < il; i++) {
	        array.push(this.value[i].join(','));
	      }return array.join(' ');
	    }
	  }, {
	    key: 'toLine',
	    value: function toLine() {
	      return {
	        x1: this.value[0][0],
	        y1: this.value[0][1],
	        x2: this.value[1][0],
	        y2: this.value[1][1]
	      };
	    }
	  }, {
	    key: 'at',
	    value: function at(pos) {
	      if (!this.destination) return this;

	      for (var i = 0, il = this.value.length, array = []; i < il; i++) {
	        array.push([this.value[i][0] + (this.destination[i][0] - this.value[i][0]) * pos, this.value[i][1] + (this.destination[i][1] - this.value[i][1]) * pos]);
	      }return new PointArray(array);
	    }
	  }, {
	    key: 'parse',
	    value: function parse(array) {
	      array = array.valueOf();

	      if (Array.isArray(array)) return array;

	      array = this.split(array);

	      for (var i = 0, il = array.length, p, points = []; i < il; i++) {
	        p = array[i].split(',');
	        points.push([parseFloat(p[0]), parseFloat(p[1])]);
	      }

	      return points;
	    }
	  }, {
	    key: 'move',
	    value: function move(x, y) {
	      var box = this.bbox();

	      x -= box.x;
	      y -= box.y;

	      if (!isNaN(x) && !isNaN(y)) for (var i = this.value.length - 1; i >= 0; i--) {
	        this.value[i] = [this.value[i][0] + x, this.value[i][1] + y];
	      }return this;
	    }
	  }, {
	    key: 'size',
	    value: function size(width, height) {
	      var i,
	          box = this.bbox();

	      for (i = this.value.length - 1; i >= 0; i--) {
	        this.value[i][0] = (this.value[i][0] - box.x) * width / box.width + box.x;
	        this.value[i][1] = (this.value[i][1] - box.y) * height / box.height + box.y;
	      }

	      return this;
	    }
	  }, {
	    key: 'bbox',
	    value: function bbox() {
	      SVG.parser.poly.setAttribute('points', this.toString());

	      return SVG.parser.poly.getBBox();
	    }
	  }]);

	  return PointArray;
	}(_array2.default);

	exports.default = PointArray;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _defs = __webpack_require__(15),
	    _defs2 = _interopRequireDefault(_defs),
	    _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _poly = __webpack_require__(45),
	    _line = __webpack_require__(42),
	    _line2 = _interopRequireDefault(_line),
	    _path = __webpack_require__(34),
	    _path2 = _interopRequireDefault(_path),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Marker = function (_Container) {
	  _inherits(Marker, _Container);

	  function Marker() {
	    _classCallCheck(this, Marker);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Marker).call(this, (0, _svg.create)('marker')));
	  }

	  _createClass(Marker, [{
	    key: 'width',
	    value: function width(_width) {
	      return this.attr('markerWidth', _width);
	    }
	  }, {
	    key: 'height',
	    value: function height(_height) {
	      return this.attr('markerHeight', _height);
	    }
	  }, {
	    key: 'ref',
	    value: function ref(x, y) {
	      return this.attr('refX', x).attr('refY', y);
	    }
	  }, {
	    key: 'update',
	    value: function update(block) {
	      this.clear();

	      if (typeof block == 'function') block.call(this, this);

	      return this;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return 'url(#' + this.id() + ')';
	    }
	  }]);

	  return Marker;
	}(_container2.default);

	exports.default = Marker;


	(0, _svg.extend)(_container2.default, {
	  marker: function marker(width, height, block) {
	    return this.defs().marker(width, height, block);
	  }
	});

	(0, _svg.extend)(_defs2.default, {
	  marker: function marker(width, height, block) {
	    return this.put(new Marker()).size(width, height).ref(width / 2, height / 2).viewbox(0, 0, width, height).attr('orient', 'auto').update(block);
	  }

	});

	(0, _svg.extend)(_line2.default, _poly.Polyline, _poly.Polygon, _path2.default, {
	  marker: function marker(_marker, width, height, block) {
	    var attr = ['marker'];

	    if (_marker != 'all') attr.push(_marker);
	    attr = attr.join('-');

	    _marker = arguments[1] instanceof Marker ? arguments[1] : this.doc().marker(width, height, block);

	    return this.attr(attr, _marker);
	  }

	});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	exports.Polygon = exports.Polyline = undefined;

	var _shape = __webpack_require__(18),
	    _shape2 = _interopRequireDefault(_shape),
	    _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _pointarray = __webpack_require__(43),
	    _pointarray2 = _interopRequireDefault(_pointarray),
	    _svg = __webpack_require__(3),
	    _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Polyline = exports.Polyline = function (_Shape) {
	  _inherits(Polyline, _Shape);

	  function Polyline() {
	    _classCallCheck(this, Polyline);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Polyline).call(this, (0, _svg.create)('polyline')));
	  }

	  return Polyline;
	}(_shape2.default);

	(0, _svg.extend)(_container2.default, {
	  polyline: function polyline(p) {
	    return this.put(new Polyline()).plot(p);
	  }
	});

	var Polygon = exports.Polygon = function (_Shape2) {
	  _inherits(Polygon, _Shape2);

	  function Polygon() {
	    _classCallCheck(this, Polygon);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Polygon).call(this, (0, _svg.create)('polygon')));
	  }

	  return Polygon;
	}(_shape2.default);

	(0, _svg.extend)(_container2.default, {
	  polygon: function polygon(p) {
	    return this.put(new Polygon()).plot(p);
	  }
	});

	(0, _svg.extend)(Polyline, Polygon, {
	  array: function array() {
	    return this._array || (this._array = new _pointarray2.default(this.attr('points')));
	  },
	  plot: function plot(p) {
	    return this.attr('points', this._array = new _pointarray2.default(p));
	  },
	  move: function move(x, y) {
	    return this.attr('points', this.array().move(x, y));
	  },
	  size: function size(width, height) {
	    var p = (0, _helpers.proportionalSize)(this.bbox(), width, height);

	    return this.attr('points', this.array().size(p.width, p.height));
	  }

	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Mask = function (_Container) {
	  _inherits(Mask, _Container);

	  function Mask() {
	    _classCallCheck(this, Mask);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Mask).call(this, (0, _svg.create)('mask')));

	    _this.targets = [];
	    return _this;
	  }

	  _createClass(Mask, [{
	    key: 'remove',
	    value: function remove() {
	      for (var i = this.targets.length - 1; i >= 0; i--) {
	        if (this.targets[i]) this.targets[i].unmask();
	      }this.targets = [];

	      this.parent().removeElement(this);

	      return this;
	    }
	  }]);

	  return Mask;
	}(_container2.default);

	exports.default = Mask;


	(0, _svg.extend)(_container2.default, {
	  mask: function mask() {
	    return this.defs().put(new Mask());
	  }
	});

	(0, _svg.extend)(_element2.default, {
	  maskWith: function maskWith(element) {
	    this.masker = element instanceof Mask ? element : this.parent().mask().add(element);

	    this.masker.targets.push(this);

	    return this.attr('mask', 'url("#' + this.masker.attr('id') + '")');
	  },
	  unmask: function unmask() {
	    delete this.masker;
	    return this.attr('mask', null);
	  }

	});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Nested = function (_Container) {
	  _inherits(Nested, _Container);

	  function Nested() {
	    _classCallCheck(this, Nested);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Nested).call(this, (0, _svg.create)('svg')));

	    _this.style('overflow', 'visible');
	    return _this;
	  }

	  return Nested;
	}(_container2.default);

	exports.default = Nested;

	(0, _svg.extend)(_container2.default, {
	  nested: function nested() {
	    return this.put(new Nested());
	  }
	});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _parent = __webpack_require__(13),
	    _parent2 = _interopRequireDefault(_parent),
	    _defs = __webpack_require__(15),
	    _defs2 = _interopRequireDefault(_defs),
	    _doc = __webpack_require__(11),
	    _doc2 = _interopRequireDefault(_doc),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _svg.extend)(_parent2.default, {

	  ungroup: function ungroup(parent, depth) {
	    if (depth === 0 || this instanceof _defs2.default) return this;

	    parent = parent || (this instanceof _doc2.default ? this : this.parent(_parent2.default));
	    depth = depth || Infinity;

	    this.each(function () {
	      if (this instanceof _defs2.default) return this;
	      if (this instanceof _parent2.default) return this.ungroup(parent, depth - 1);
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Point = function () {
	  function Point(x, y) {
	    _classCallCheck(this, Point);

	    var i,
	        source,
	        base = { x: 0, y: 0 };

	    source = Array.isArray(x) ? { x: x[0], y: x[1] } : (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' ? { x: x.x, y: x.y } : y != null ? { x: x, y: y } : base;

	    this.x = source.x;
	    this.y = source.y;
	  }

	  _createClass(Point, [{
	    key: 'clone',
	    value: function clone() {
	      return new Point(this);
	    }
	  }, {
	    key: 'morph',
	    value: function morph(point) {
	      this.destination = new Point(point);

	      return this;
	    }
	  }, {
	    key: 'at',
	    value: function at(pos) {
	      if (!this.destination) return this;

	      var point = new Point({
	        x: this.x + (this.destination.x - this.x) * pos,
	        y: this.y + (this.destination.y - this.y) * pos
	      });

	      return point;
	    }
	  }, {
	    key: 'native',
	    value: function native() {
	      var point = SVG.parser.draw.node.createSVGPoint();

	      point.x = this.x;
	      point.y = this.y;

	      return point;
	    }
	  }, {
	    key: 'transform',
	    value: function transform(matrix) {
	      return new Point(this.native().matrixTransform(matrix.native()));
	    }
	  }]);

	  return Point;
	}();

	exports.default = Point;


	(0, _svg.extend)(_element2.default, {
	  point: function point(x, y) {
	    return new Point(x, y).transform(this.screenCTM().inverse());
	  }
	});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _pointarray = __webpack_require__(43),
	    _pointarray2 = _interopRequireDefault(_pointarray),
	    _poly = __webpack_require__(45),
	    _line = __webpack_require__(42),
	    _line2 = _interopRequireDefault(_line),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _svg.extend)(_line2.default, _poly.Polyline, _poly.Polygon, {
	  morphArray: _pointarray2.default,
	  x: function x(_x) {
	    return _x == null ? this.bbox().x : this.move(_x, this.bbox().y);
	  },
	  y: function y(_y) {
	    return _y == null ? this.bbox().y : this.move(this.bbox().x, _y);
	  },
	  width: function width(_width) {
	    var b = this.bbox();

	    return _width == null ? b.width : this.size(_width, b.height);
	  },
	  height: function height(_height) {
	    var b = this.bbox();

	    return _height == null ? b.height : this.size(b.width, _height);
	  }
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});
	exports.select = undefined;
	exports.get = get;

	var _set = __webpack_require__(29),
	    _set2 = _interopRequireDefault(_set),
	    _svg = __webpack_require__(3),
	    _parent = __webpack_require__(13),
	    _parent2 = _interopRequireDefault(_parent),
	    _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _utilities = __webpack_require__(14),
	    _utilities2 = _interopRequireDefault(_utilities),
	    _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function get(id) {
	  var node = document.getElementById((0, _helpers.idFromReference)(id) || id);
	  return (0, _svg.adopt)(node);
	}

	function _select(query, parent) {
	  return new _set2.default(_utilities2.default.map((parent || document).querySelectorAll(query), function (node) {
	    return (0, _svg.adopt)(node);
	  }));
	}

	exports.select = _select;
	(0, _svg.extend)(_parent2.default, {
	  select: function select(query) {
	    return _select(query, this.node);
	  }
	});

	(0, _svg.extend)(_element2.default, {
	  reference: function reference(attr) {
	    return SVG.get(this.attr(attr));
	  }
	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _parent = __webpack_require__(13),
	    _parent2 = _interopRequireDefault(_parent),
	    _text = __webpack_require__(28),
	    _text2 = _interopRequireDefault(_text),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextPath = function (_Parent) {
	  _inherits(TextPath, _Parent);

	  function TextPath() {
	    _classCallCheck(this, TextPath);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextPath).call(this, (0, _svg.create)('textPath')));
	  }

	  return TextPath;
	}(_parent2.default);

	exports.default = TextPath;

	(0, _svg.extend)(_text2.default, {
	  path: function path(d) {
	    var path = new TextPath(),
	        track = this.doc().defs().path(d);

	    while (this.node.hasChildNodes()) {
	      path.node.appendChild(this.node.firstChild);
	    }
	    this.node.appendChild(path.node);

	    path.attr('href', '#' + track, _svg.xlink);

	    return this;
	  },

	  plot: function plot(d) {
	    var track = this.track();

	    if (track) track.plot(d);

	    return this;
	  },

	  track: function track() {
	    var path = this.textPath();

	    if (path) return path.reference('href');
	  },

	  textPath: function textPath() {
	    if (this.node.firstChild && this.node.firstChild.nodeName == 'textPath') return (0, _svg.adopt)(this.node.firstChild);
	  }
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _shape = __webpack_require__(18),
	    _shape2 = _interopRequireDefault(_shape),
	    _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Use = function (_Shape) {
	  _inherits(Use, _Shape);

	  function Use() {
	    _classCallCheck(this, Use);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Use).call(this, (0, _svg.create)('use')));
	  }

	  _createClass(Use, [{
	    key: 'element',
	    value: function element(_element, file) {
	      return this.attr('href', (file || '') + '#' + _element, SVG.xlink);
	    }
	  }]);

	  return Use;
	}(_shape2.default);

	exports.default = Use;


	(0, _svg.extend)(_container2.default, {
	  use: function use(element, file) {
	    return this.put(new SVG.Use()).element(element, file);
	  }
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: !0
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _element = __webpack_require__(6),
	    _element2 = _interopRequireDefault(_element),
	    _container = __webpack_require__(12),
	    _container2 = _interopRequireDefault(_container),
	    _doc = __webpack_require__(11),
	    _doc2 = _interopRequireDefault(_doc),
	    _number = __webpack_require__(7),
	    _number2 = _interopRequireDefault(_number),
	    _fx = __webpack_require__(26),
	    _fx2 = _interopRequireDefault(_fx),
	    _svg = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ViewBox = function () {
	  function ViewBox(source) {
	    _classCallCheck(this, ViewBox);

	    var i,
	        base = [1, 0, 0, 1],
	        x,
	        y,
	        width,
	        height,
	        box,
	        view,
	        we,
	        he,
	        wm = 1,
	        hm = 1,
	        reg = /-?[\d\.]+/g;

	    if (source instanceof _element2.default) {

	      we = source;
	      he = source;
	      view = (source.attr('viewBox') || '').match(reg);
	      box = source.bbox;

	      width = new _number2.default(source.width());
	      height = new _number2.default(source.height());

	      while (width.unit == '%') {
	        wm *= width.value;
	        width = new _number2.default(we instanceof _doc2.default ? we.parent().offsetWidth : we.parent().width());
	        we = we.parent();
	      }
	      while (height.unit == '%') {
	        hm *= height.value;
	        height = new _number2.default(he instanceof _doc2.default ? he.parent().offsetHeight : he.parent().height());
	        he = he.parent();
	      }

	      this.x = 0;
	      this.y = 0;
	      this.width = width * wm;
	      this.height = height * hm;
	      this.zoom = 1;

	      if (view) {
	        x = parseFloat(view[0]);
	        y = parseFloat(view[1]);
	        width = parseFloat(view[2]);
	        height = parseFloat(view[3]);

	        this.zoom = this.width / this.height > width / height ? this.height / height : this.width / width;

	        this.x = x;
	        this.y = y;
	        this.width = width;
	        this.height = height;
	      }
	    } else {
	      source = typeof source === 'string' ? source.match(reg).map(function (el) {
	        return parseFloat(el);
	      }) : Array.isArray(source) ? source : (typeof source === 'undefined' ? 'undefined' : _typeof(source)) == 'object' ? [source.x, source.y, source.width, source.height] : arguments.length == 4 ? [].slice.call(arguments) : base;

	      this.x = source[0];
	      this.y = source[1];
	      this.width = source[2];
	      this.height = source[3];
	    }
	  }

	  _createClass(ViewBox, [{
	    key: 'toString',
	    value: function toString() {
	      return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height;
	    }
	  }, {
	    key: 'morph',
	    value: function morph(v) {
	      var v = arguments.length == 1 ? [v.x, v.y, v.width, v.height] : [].slice.call(arguments);

	      this.destination = new ViewBox(v);

	      return this;
	    }
	  }, {
	    key: 'at',
	    value: function at(pos) {
	      if (!this.destination) return this;

	      return new ViewBox([this.x + (this.destination.x - this.x) * pos, this.y + (this.destination.y - this.y) * pos, this.width + (this.destination.width - this.width) * pos, this.height + (this.destination.height - this.height) * pos]);
	    }
	  }]);

	  return ViewBox;
	}();

	exports.default = ViewBox;


	(0, _svg.extend)(_container2.default, {
	  viewbox: function viewbox(v) {
	    if (arguments.length == 0) return new ViewBox(this);

	    v = arguments.length == 1 ? [v.x, v.y, v.width, v.height] : [].slice.call(arguments);

	    return this.attr('viewBox', v);
	  }
	});

	(0, _svg.extend)(_fx2.default, {
	  viewbox: function viewbox(x, y, width, height) {
	    if (this.target() instanceof _container2.default) {
	      this.add('viewbox', new ViewBox(x, y, width, height));
	    }

	    return this;
	  }
	});

/***/ }
/******/ ])
});
;