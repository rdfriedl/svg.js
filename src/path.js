import Shape from 'shape.js';
import Container from 'container.js';
import PathArray from 'patharray.js';
import {extend, create} from 'svg.js';
import {proportionalSize} from 'helpers.js';

export default class Path extends Shape{
  constructor(){
    super(create('path'))
  }

  // Get array
  array() {
    return this._array || (this._array = new PathArray(this.attr('d')))
  }
  // Plot new poly points
  plot(p) {
    return this.attr('d', (this._array = new PathArray(p)))
  }
  // Move by left top corner
  move(x, y) {
    return this.attr('d', this.array().move(x, y))
  }
  // Move by left top corner over x-axis
  x(x) {
    return x == null ? this.bbox().x : this.move(x, this.bbox().y)
  }
  // Move by left top corner over y-axis
  y(y) {
    return y == null ? this.bbox().y : this.move(this.bbox().x, y)
  }
  // Set element size to given width and height
  size(width, height) {
    var p = proportionalSize(this, width, height)

    return this.attr('d', this.array().size(p.width, p.height))
  }
  // Set width of element
  width(width) {
    return width == null ? this.bbox().width : this.size(width, this.bbox().height)
  }
  // Set height of element
  height(height) {
    return height == null ? this.bbox().height : this.size(this.bbox().width, height)
  }
}
extend(Path, {
  // Define morphable array
  morphArray: PathArray
})

extend(Container, {
  // Create a wrapped path element
  path: function(d) {
    return this.put(new Path).plot(d)
  }
})
