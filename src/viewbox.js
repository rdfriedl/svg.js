import Element from './element.js';
import Container from './container.js';
import Doc from './doc.js';
import svg_Number from './number.js';
import FX from './fx.js';
import {extend} from './svg.js';

export default class ViewBox{
  constructor(source) {
    var i, base = [0, 0, 0, 0]

    var x, y, width, height, box, view, we, he
      , wm   = 1 // width multiplier
      , hm   = 1 // height multiplier
      , reg  = /[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi

    if(source instanceof Element){

      we = source
      he = source
      view = (source.attr('viewBox') || '').match(reg)
      box = source.bbox

      // get dimensions of current node
      width  = new svg_Number(source.width())
      height = new svg_Number(source.height())

      // find nearest non-percentual dimensions
      while (width.unit == '%') {
        wm *= width.value
        width = new svg_Number(we instanceof Doc ? we.parent().offsetWidth : we.parent().width())
        we = we.parent()
      }
      while (height.unit == '%') {
        hm *= height.value
        height = new svg_Number(he instanceof Doc ? he.parent().offsetHeight : he.parent().height())
        he = he.parent()
      }

      // ensure defaults
      this.x      = 0
      this.y      = 0
      this.width  = width  * wm
      this.height = height * hm
      this.zoom   = 1

      if (view) {
        // get width and height from viewbox
        x      = parseFloat(view[0])
        y      = parseFloat(view[1])
        width  = parseFloat(view[2])
        height = parseFloat(view[3])

        // calculate zoom accoring to viewbox
        this.zoom = ((this.width / this.height) > (width / height)) ?
          this.height / height :
          this.width  / width

        // calculate real pixel dimensions on parent SVG.Doc element
        this.x      = x
        this.y      = y
        this.width  = width
        this.height = height

      }

    }
    else{
      // ensure source as object
      source = typeof source === 'string' ?
        source.match(reg).map(function(el){ return parseFloat(el) }) :
      Array.isArray(source) ?
        source :
      typeof source == 'object' ?
        [source.x, source.y, source.width, source.height] :
      arguments.length == 4 ?
        [].slice.call(arguments) :
        base

      this.x = source[0]
      this.y = source[1]
      this.width = source[2]
      this.height = source[3]
    }
  }

  toString() {
    return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height
  }
  morph(v){
      var v = arguments.length == 1 ?
        [v.x, v.y, v.width, v.height] :
        [].slice.call(arguments)

      this.destination = new ViewBox(v)

      return this
    }

  at(pos) {
    if(!this.destination) return this

    return new ViewBox([
        this.x + (this.destination.x - this.x) * pos
      , this.y + (this.destination.y - this.y) * pos
      , this.width + (this.destination.width - this.width) * pos
      , this.height + (this.destination.height - this.height) * pos
    ])
  }
}

extend(Container, {
  // Get the viewBox and calculate the zoom value
  viewbox(v) {
    if (arguments.length == 0)
      // act as a getter if there are no arguments
      return new ViewBox(this)

    // otherwise act as a setter
    v = arguments.length == 1 ?
      [v.x, v.y, v.width, v.height] :
      [].slice.call(arguments)

    return this.attr('viewBox', v)
  }
})

extend(FX, {
  // Add animatable viewbox
  viewbox: function(x, y, width, height) {
    if (this.target() instanceof Container) {
      this.add('viewbox', new ViewBox(x, y, width, height))
    }

    return this
  }
})
