import Shape from './shape.js';
import Container from './container.js';
import PointArray from './pointarray.js';
import {create, extend} from './svg.js';
import {proportionalSize} from './helpers.js';

export default class Line extends Shape{
  constructor(){
    super(create('line'))
  }

  // Get array
  array() {
    return new PointArray([
      [ this.attr('x1'), this.attr('y1') ]
    , [ this.attr('x2'), this.attr('y2') ]
    ])
  }
  // Overwrite native plot() method
  plot(x1, y1, x2, y2) {
    if (typeof y1 !== 'undefined')
      x1 = { x1: x1, y1: y1, x2: x2, y2: y2 }
    else
      x1 = new PointArray(x1).toLine()

    return this.attr(x1)
  }
  // Move by left top corner
  move(x, y) {
    return this.attr(this.array().move(x, y).toLine())
  }
  // Set element size to given width and height
  size(width, height) {
    var p = proportionalSize(this, width, height)

    return this.attr(this.array().size(p.width, p.height).toLine())
  }
}

extend(Container, {
  // Create a line element
  line: function(x1, y1, x2, y2) {
    return this.put(new Line).plot(x1, y1, x2, y2)
  }
})
