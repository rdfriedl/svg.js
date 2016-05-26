import Shape from 'shape.js';
import Container from 'container.js';
import svg_Set from 'set.js';
import svg_Number from 'number.js';
import defaults from 'default.js';
import utils from 'utilities.js';
import {create, extend, adopt} from 'svg.js';
import {assignNewId} from 'helpers.js';

export default class Text extends Shape{
  constructor(){
    super(create('text'))

    this.dom.leading = new svg_Number(1.3)    // store leading value for rebuilding
    this._rebuild = true                      // enable automatic updating of dy values
    this._build   = false                     // disable build mode for adding multiple lines

    // set default font
    this.attr('font-family', defaults.attrs['font-family'])
  }

  clone(){
    // clone element and assign new id
    var clone = assignNewId(this.node.cloneNode(true))

    // insert the clone after myself
    this.after(clone)

    return clone
  }
  // Move over x-axis
  x(x) {
    // act as getter
    if (x == null)
      return this.attr('x')

    // move lines as well if no textPath is present
    if (!this.textPath)
      this.lines().each(function() { if (this.dom.newLined) this.x(x) })

    return this.attr('x', x)
  }
  // Move over y-axis
  y(y) {
    var oy = this.attr('y')
      , o  = typeof oy === 'number' ? oy - this.bbox().y : 0

    // act as getter
    if (y == null)
      return typeof oy === 'number' ? oy - o : oy

    return this.attr('y', typeof y === 'number' ? y + o : y)
  }
  // Move center over x-axis
  cx(x) {
    return x == null ? this.bbox().cx : this.x(x - this.bbox().width / 2)
  }
  // Move center over y-axis
  cy(y) {
    return y == null ? this.bbox().cy : this.y(y - this.bbox().height / 2)
  }
  // Set the text content
  text(text) {
    // act as getter
    if (typeof text === 'undefined'){
      var text = ''
      var children = this.node.childNodes
      for(var i = 0, len = children.length; i < len; ++i){

        // add newline if its not the first child and newLined is set to true
        if(i != 0 && children[i].nodeType != 3 && adopt(children[i]).dom.newLined == true){
          text += '\n'
        }

        // add content of this node
        text += children[i].textContent
      }

      return text
    }

    // remove existing content
    this.clear().build(true)

    if (typeof text === 'function') {
      // call block
      text.call(this, this)

    } else {
      // store text and make sure text is not blank
      text = text.split('\n')

      // build new lines
      for (var i = 0, il = text.length; i < il; i++)
        this.tspan(text[i]).newLine()
    }

    // disable build mode and rebuild lines
    return this.build(false).rebuild()
  }
  // Set font size
  size(size) {
    return this.attr('font-size', size).rebuild()
  }
  // Set / get leading
  leading(value) {
    // act as getter
    if (value == null)
      return this.dom.leading

    // act as setter
    this.dom.leading = new svg_Number(value)

    return this.rebuild()
  }
  // Get all the first level lines
  lines() {
    var node = (this.textPath && this.textPath() || this).node

    // filter tspans and map them to SVG.js instances
    var lines = utils.map(utils.filterSVGElements(node.childNodes), function(el){
      return adopt(el)
    })

    // return an instance of SVG.set
    return new svg_Set(lines)
  }
  // Rebuild appearance type
  rebuild(rebuild) {
    // store new rebuild flag if given
    if (typeof rebuild == 'boolean')
      this._rebuild = rebuild

    // define position of all lines
    if (this._rebuild) {
      var self = this
        , blankLineOffset = 0
        , dy = this.dom.leading * new svg_Number(this.attr('font-size'))

      this.lines().each(function() {
        if (this.dom.newLined) {
          if (!this.textPath)
            this.attr('x', self.attr('x'))

          if(this.text() == '\n') {
            blankLineOffset += dy
          }else{
            this.attr('dy', dy + blankLineOffset)
            blankLineOffset = 0
          }
        }
      })

      this.fire('rebuild')
    }

    return this
  }
  // Enable / disable build mode
  build(build) {
    this._build = !!build
    return this
  }
  // overwrite method from parent to set data properly
  setData(o){
    this.dom = o
    this.dom.leading = new svg_Number(o.leading || 1.3)
    return this
  }
}

extend(Container, {
  // Create text element
  text: function(text) {
    return this.put(new Text).text(text)
  }
  // Create plain text element
, plain: function(text) {
    return this.put(new Text).plain(text)
  }
})

export class Tspan extends Shape{
  constructor(){
    super(create('tspan'))
  }
  // Set text content
  text(text) {
    if(text == null) return this.node.textContent + (this.dom.newLined ? '\n' : '')

    typeof text === 'function' ? text.call(this, this) : this.plain(text)

    return this
  }
  // Shortcut dx
  dx(dx) {
    return this.attr('dx', dx)
  }
  // Shortcut dy
  dy(dy) {
    return this.attr('dy', dy)
  }
  // Create new line
  newLine() {
    // fetch text parent
    var t = this.parent(Text)

    // mark new line
    this.dom.newLined = true

    // apply new hy¡n
    return this.dy(t.dom.leading * t.attr('font-size')).attr('x', t.x())
  }
}

extend(Text, Tspan, {
  // Create plain text node
  plain: function(text) {
    // clear if build mode is disabled
    if (this._build === false)
      this.clear()

    // create text node
    this.node.appendChild(document.createTextNode(text))

    return this
  }
  // Create a tspan
, tspan: function(text) {
    var node  = (this.textPath && this.textPath() || this).node
      , tspan = new Tspan

    // clear if build mode is disabled
    if (this._build === false)
      this.clear()

    // add new tspan
    node.appendChild(tspan.node)

    return tspan.text(text)
  }
  // Clear all lines
, clear: function() {
    var node = (this.textPath && this.textPath() || this).node

    // remove existing child nodes
    while (node.hasChildNodes())
      node.removeChild(node.lastChild)

    return this
  }
  // Get length of text element
, length: function() {
    return this.node.getComputedTextLength()
  }
})
