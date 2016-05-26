import Shape from 'shape.js';
import FX from 'fx.js';
import Container from 'container.js';
import Number from 'number.js';
import Rect from 'rect.js';
import {extend, create} from 'svg.js';
import {proportionalSize} from 'helpers.js';

export class Circle extends Shape{
  constructor(){
    super(create('circle'))
  }
}
extend(Container, {
  // Create circle element, based on ellipse
  circle: function(size) {
    return this.put(new Circle).rx(new Number(size).divide(2)).move(0, 0)
  }
})

extend(Circle, FX, {
  // Radius x value
  rx: function(rx) {
    return this.attr('r', rx)
  }
  // Alias radius x value
, ry: function(ry) {
    return this.rx(ry)
  }
})

export class Ellipse extends Shape{
  constructor(){
    super(create('ellipse'))
  }
}
extend(Container, {
  // Create an ellipse
  ellipse: function(width, height) {
    return this.put(new Ellipse).size(width, height).move(0, 0)
  }
})

extend(Ellipse, Rect, FX, {
  // Radius x value
  rx: function(rx) {
    return this.attr('rx', rx)
  }
  // Radius y value
, ry: function(ry) {
    return this.attr('ry', ry)
  }
})

// Add common method
extend(Circle, Ellipse, {
    // Move over x-axis
    x: function(x) {
      return x == null ? this.cx() - this.rx() : this.cx(x + this.rx())
    }
    // Move over y-axis
  , y: function(y) {
      return y == null ? this.cy() - this.ry() : this.cy(y + this.ry())
    }
    // Move by center over x-axis
  , cx: function(x) {
      return x == null ? this.attr('cx') : this.attr('cx', x)
    }
    // Move by center over y-axis
  , cy: function(y) {
      return y == null ? this.attr('cy') : this.attr('cy', y)
    }
    // Set width of element
  , width: function(width) {
      return width == null ? this.rx() * 2 : this.rx(new Number(width).divide(2))
    }
    // Set height of element
  , height: function(height) {
      return height == null ? this.ry() * 2 : this.ry(new Number(height).divide(2))
    }
    // Custom size function
  , size: function(width, height) {
      var p = proportionalSize(this.bbox(), width, height)

      return this
        .rx(new Number(p.width).divide(2))
        .ry(new Number(p.height).divide(2))
    }
})
