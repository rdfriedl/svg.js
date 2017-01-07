import Element from './element.js';
import {extend, parser} from './svg.js';

export default class Point{
  constructor(x,y){
    var i, source, base = {x:0, y:0}

    // ensure source as object
    source = Array.isArray(x) ?
      {x:x[0], y:x[1]} :
    typeof x === 'object' ?
      {x:x.x, y:x.y} :
    x != null ?
      {x:x, y:(y != null ? y : x)} : base // If y has no value, then x is used has its value

    // merge source
    this.x = source.x
    this.y = source.y
  }

  // Clone point
  clone() {
    return new Point(this)
  }
  // Morph one point into another
  morph(x, y) {
    // store new destination
    this.destination = new Point(x, y)

    return this
  }
  // Get morphed point at a given position
  at(pos) {
    // make sure a destination is defined
    if (!this.destination) return this

    // calculate morphed matrix at a given position
    var point = new Point({
      x: this.x + (this.destination.x - this.x) * pos
    , y: this.y + (this.destination.y - this.y) * pos
    })

    return point
  }
  // Convert to native SVGPoint
  native() {
    // create new point
    var point = SVG.parser.draw.node.createSVGPoint()

    // update with current values
    point.x = this.x
    point.y = this.y

    return point
  }
  // transform point with matrix
  transform(matrix) {
    return new Point(this.native().matrixTransform(matrix.native()))
  }
}

extend(Element, {
  // Get point
  point: function(x, y) {
    return new Point(x,y).transform(this.screenCTM().inverse());
  }
})
