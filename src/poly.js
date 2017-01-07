import Shape from './shape.js';
import Container from './container.js';
import PointArray from './pointarray.js';
import {extend, create} from './svg.js';
import {proportionalSize} from './helpers.js';

export class Polyline extends Shape{
  constructor(){
    super(create('polyline'))
  }
}
extend(Container, {
  // Create a wrapped polyline element
  polyline: function(p) {
    return this.put(new Polyline).plot(p)
  }
})

export class Polygon extends Shape{
  constructor(){
    super(create('polygon'))
  }
}
extend(Container, {
  // Create a wrapped polygon element
  polygon: function(p) {
    return this.put(new Polygon).plot(p)
  }
})

// Add polygon-specific functions
extend(Polyline, Polygon, {
  // Get array
  array: function() {
    return this._array || (this._array = new PointArray(this.attr('points')))
  }
  // Plot new path
, plot: function(p) {
    return this.attr('points', (this._array = new PointArray(p)))
  }
  // Move by left top corner
, move: function(x, y) {
    return this.attr('points', this.array().move(x, y))
  }
  // Set element size to given width and height
, size: function(width, height) {
    var p = proportionalSize(this, width, height)

    return this.attr('points', this.array().size(p.width, p.height))
  }

})
