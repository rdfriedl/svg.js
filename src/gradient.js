import Element from 'element.js';
import Container from 'container.js';
import Defs from 'defs.js';
import svg_Number from 'number.js';
import {create, extend} from 'svg.js';
import FX from 'fx.js';

export default class Gradient extends Container{
  constructor(type){
    super(create(type + 'Gradient'))

    // store type
    this.type = type
  }

  // Add a color stop
  at(offset, color, opacity) {
    return this.put(new Stop).update(offset, color, opacity)
  }
  // Update gradient
  update(block) {
    // remove all stops
    this.clear()

    // invoke passed block
    if (typeof block == 'function')
      block.call(this, this)

    return this
  }
  // Return the fill id
  fill() {
    return 'url(#' + this.id() + ')'
  }
  // Alias string convertion to fill
  toString() {
    return this.fill()
  }
  // custom attr to handle transform
  attr(a, b, c) {
    if(a == 'transform') a = 'gradientTransform'
    return Container.prototype.attr.call(this, a, b, c)
  }
}

extend(Container, {
  // Create gradient element in defs
  gradient: function(type, block) {
    return this.defs().gradient(type, block)
  }
})

// Base gradient generation
extend(Defs, {
  // define gradient
  gradient: function(type, block) {
    return this.put(new Gradient(type)).update(block)
  }
})

// Add animatable methods to both gradient and fx module
extend(Gradient, FX, {
  // From position
  from: function(x, y) {
    return (this.target || this).type == 'radial' ?
      this.attr({ fx: new svg_Number(x), fy: new svg_Number(y) }) :
      this.attr({ x1: new svg_Number(x), y1: new svg_Number(y) })
  }
  // To position
, to: function(x, y) {
    return (this.target || this).type == 'radial' ?
      this.attr({ cx: new svg_Number(x), cy: new svg_Number(y) }) :
      this.attr({ x2: new svg_Number(x), y2: new svg_Number(y) })
  }
})

export class Stop extends Element{
  constructor(){
    super(create('stop'))
  }
  // add color stops
  update(o) {
    if (typeof o == 'number' || o instanceof svg_Number) {
      o = {
        offset:  arguments[0]
      , color:   arguments[1]
      , opacity: arguments[2]
      }
    }

    // set attributes
    if (o.opacity != null) this.attr('stop-opacity', o.opacity)
    if (o.color   != null) this.attr('stop-color', o.color)
    if (o.offset  != null) this.attr('offset', new svg_Number(o.offset))

    return this
  }
}

extend(FX, {
  update: function(o) {
    if (this.target() instanceof Stop) {
      if (typeof o == 'number' || o instanceof svg_Number) {
        return this.update({
          offset:  arguments[0]
        , color:   arguments[1]
        , opacity: arguments[2]
        })
      }

      if (o.opacity != null) this.attr('stop-opacity', o.opacity)
      if (o.color   != null) this.attr('stop-color', o.color)
      if (o.offset  != null) this.attr('offset', o.offset)
    }

    return this
  }
})
