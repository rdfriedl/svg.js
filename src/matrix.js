import Element from 'element.js';
import utils from 'utilities.js';
import {extend} from 'svg.js';
import {arrayToMatrix, abcdef, deltaTransformPoint, parseMatrix, stringToMatrix} from 'helpers.js';

export default class Matrix{
  constructor(source){
    var i, base = arrayToMatrix([1, 0, 0, 1, 0, 0])

    // ensure source as object
    source = source instanceof Element ?
      source.matrixify() :
    typeof source === 'string' ?
      stringToMatrix(source) :
    arguments.length == 6 ?
      arrayToMatrix([].slice.call(arguments)) :
    typeof source === 'object' ?
      source : base

    // merge source
    for (i = abcdef.length - 1; i >= 0; --i)
      this[abcdef[i]] = source && typeof source[abcdef[i]] === 'number' ?
        source[abcdef[i]] : base[abcdef[i]]
  }

  // Extract individual transformations
  extract() {
    // find delta transform points
    var px    = deltaTransformPoint(this, 0, 1)
      , py    = deltaTransformPoint(this, 1, 0)
      , skewX = 180 / Math.PI * Math.atan2(px.y, px.x) - 90

    return {
      // translation
      x:        this.e
    , y:        this.f
    , transformedX:(this.e * Math.cos(skewX * Math.PI / 180) + this.f * Math.sin(skewX * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b)
    , transformedY:(this.f * Math.cos(skewX * Math.PI / 180) + this.e * Math.sin(-skewX * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d)
      // skew
    , skewX:    -skewX
    , skewY:    180 / Math.PI * Math.atan2(py.y, py.x)
      // scale
    , scaleX:   Math.sqrt(this.a * this.a + this.b * this.b)
    , scaleY:   Math.sqrt(this.c * this.c + this.d * this.d)
      // rotation
    , rotation: skewX
    , a: this.a
    , b: this.b
    , c: this.c
    , d: this.d
    , e: this.e
    , f: this.f
    , matrix: new Matrix(this)
    }
  }
  // Clone matrix
  clone() {
    return new Matrix(this)
  }
  // Morph one matrix into another
  morph(matrix) {
    // store new destination
    this.destination = new Matrix(matrix)

    return this
  }
  // Get morphed matrix at a given position
  at(pos) {
    // make sure a destination is defined
    if (!this.destination) return this

    // calculate morphed matrix at a given position
    var matrix = new Matrix({
      a: this.a + (this.destination.a - this.a) * pos
    , b: this.b + (this.destination.b - this.b) * pos
    , c: this.c + (this.destination.c - this.c) * pos
    , d: this.d + (this.destination.d - this.d) * pos
    , e: this.e + (this.destination.e - this.e) * pos
    , f: this.f + (this.destination.f - this.f) * pos
    })

    // process parametric rotation if present
    if (this.param && this.param.to) {
      // calculate current parametric position
      var param = {
        rotation: this.param.from.rotation + (this.param.to.rotation - this.param.from.rotation) * pos
      , cx:       this.param.from.cx
      , cy:       this.param.from.cy
      }

      // rotate matrix
      matrix = matrix.rotate(
        (this.param.to.rotation - this.param.from.rotation * 2) * pos
      , param.cx
      , param.cy
      )

      // store current parametric values
      matrix.param = param
    }

    return matrix
  }
  // Multiplies by given matrix
  multiply(matrix) {
    return new Matrix(this.native().multiply(parseMatrix(matrix).native()))
  }
  // Inverses matrix
  inverse() {
    return new Matrix(this.native().inverse())
  }
  // Translate matrix
  translate(x, y) {
    return new Matrix(this.native().translate(x || 0, y || 0))
  }
  // Scale matrix
  scale(x, y, cx, cy) {
    // support universal scale
    if (arguments.length == 1 || arguments.length == 3)
      y = x
    if (arguments.length == 3) {
      cy = cx
      cx = y
    }

    return this.around(cx, cy, new Matrix(x, 0, 0, y, 0, 0))
  }
  // Rotate matrix
  rotate(r, cx, cy) {
    // convert degrees to radians
    r = utils.radians(r)

    return this.around(cx, cy, new Matrix(Math.cos(r), Math.sin(r), -Math.sin(r), Math.cos(r), 0, 0))
  }
  // Flip matrix on x or y, at a given offset
  flip(a, o) {
    return a == 'x' ? this.scale(-1, 1, o, 0) : this.scale(1, -1, 0, o)
  }
  // Skew
  skew(x, y, cx, cy) {
    return this.around(cx, cy, this.native().skewX(x || 0).skewY(y || 0))
  }
  // SkewX
  skewX(x, cx, cy) {
    return this.around(cx, cy, this.native().skewX(x || 0))
  }
  // SkewY
  skewY(y, cx, cy) {
    return this.around(cx, cy, this.native().skewY(y || 0))
  }
  // Transform around a center point
  around(cx, cy, matrix) {
    return this
      .multiply(new Matrix(1, 0, 0, 1, cx || 0, cy || 0))
      .multiply(matrix)
      .multiply(new Matrix(1, 0, 0, 1, -cx || 0, -cy || 0))
  }
  // Convert to native SVGMatrix
  native() {
    // create new matrix
    var matrix = SVG.parser.draw.node.createSVGMatrix()

    // update with current values
    for (var i = abcdef.length - 1; i >= 0; i--)
      matrix[abcdef[i]] = this[abcdef[i]]

    return matrix
  }
  // Convert matrix to string
  toString() {
    return 'matrix(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ')'
  }
}

// add methods to element
extend(Element, {
  // Get current matrix
  ctm: function() {
    return new Matrix(this.node.getCTM())
  },
  // Get current screen matrix
  screenCTM: function() {
    return new Matrix(this.node.getScreenCTM())
  }
})
