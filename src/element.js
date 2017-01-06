import svg_Number from 'number.js';
import defaults from 'default.js';
import {adopt} from 'svg.js';
import {proportionalSize, assignNewId, matches} from 'helpers.js';

export default class Element{
  constructor(node){
    // make stroke value accessible dynamically
    this._stroke = defaults.attrs.stroke

    // initialize data object
    this.dom = {}

    // create circular reference
    if (this.node = node) {
      this.type = node.nodeName
      this.node.instance = this

      // store current attribute value
      this._stroke = node.getAttribute('stroke') || this._stroke
    }
  }

  // Move over x-axis
  x(x) {
    return this.attr('x', x)
  }
  // Move over y-axis
  y(y) {
     return this.attr('y', y)
  }
  // Move by center over x-axis
  cx(x) {
    return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2)
  }
  // Move by center over y-axis
  cy(y) {
    return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2)
  }
  // Move element to given x and y values
  move(x, y) {
    return this.x(x).y(y)
  }
  // Move element by its center
  center(x, y) {
    return this.cx(x).cy(y)
  }
  // Set width of element
  width(width) {
    return this.attr('width', width)
  }
  // Set height of element
  height(height) {
     return this.attr('height', height)
  }
  // Set element size to given width and height
  size(width, height) {
    var p = proportionalSize(this, width, height)

    return this
      .width(new svg_Number(p.width))
      .height(new svg_Number(p.height))
  }
  // Clone element
  clone() {
    // clone element and assign new id
    var clone = assignNewId(this.node.cloneNode(true))

    // insert the clone in the given parent or after myself
    if(parent) parent.add(clone)
    else this.after(clone)

    return clone
  }
  // Remove element
  remove() {
    if (this.parent())
      this.parent().removeElement(this)

    return this
  }
  // Replace element
  replace(element) {
    this.after(element).remove()

    return element
  }
  // Add element to given container and return self
  addTo(parent) {
    return parent.put(this)
  }
  // Add element to given container and return container
  putIn(parent) {
    return parent.add(this)
  }
  // Get / set id
  id(id) {
    return this.attr('id', id)
  }
  // Checks whether the given point inside the bounding box of the element
  inside(x, y) {
    var box = this.bbox()

    return x > box.x
        && y > box.y
        && x < box.x + box.width
        && y < box.y + box.height
  }
  // Show element
  show() {
    return this.style('display', '')
  }
  // Hide element
  hide() {
    return this.style('display', 'none')
  }
  // Is element visible?
  visible() {
    return this.style('display') != 'none'
  }
  // Return id on string conversion
  toString() {
    return this.attr('id')
  }
  // Return array of classes on the node
  classes() {
    var attr = this.attr('class')

    return attr == null ? [] : attr.trim().split(/\s+/)
  }
  // Return true if class exists on the node, false otherwise
  hasClass(name) {
    return this.classes().indexOf(name) != -1
  }
  // Add class to the node
  addClass(name) {
    if (!this.hasClass(name)) {
      var array = this.classes()
      array.push(name)
      this.attr('class', array.join(' '))
    }

    return this
  }
  // Remove class from the node
  removeClass(name) {
    if (this.hasClass(name)) {
      this.attr('class', this.classes().filter(function(c) {
        return c != name
      }).join(' '))
    }

    return this
  }
  // Toggle the presence of a class on the node
  toggleClass(name) {
    return this.hasClass(name) ? this.removeClass(name) : this.addClass(name)
  }
  // Returns the parent element instance
  parent(type) {
    var parent = this

    // check for parent
    if(!parent.node.parentNode) return null

    // get parent element
    parent = adopt(parent.node.parentNode)

    if(!type) return parent

    // loop trough ancestors if type is given
    while(parent && parent.node instanceof SVGElement){
      if(typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent
      parent = adopt(parent.node.parentNode)
    }
  }
  // Get parent document
  doc() {
    return this instanceof SVG.Doc ? this : this.parent(SVG.Doc)
  }
  // return array of all ancestors of given type up to the root svg
  parents(type) {
    var parents = [], parent = this

    do{
      parent = parent.parent(type)
      if(!parent || !parent.node) break

      parents.push(parent)
    } while(parent.parent)

    return parents
  }
  // matches the element vs a css selector
  matches(selector){
    return matches(this.node, selector)
  }
  // Returns the svg node to call native svg methods on it
  native() {
    return this.node
  }
  // Import raw svg
  svg(svg) {
    // create temporary holder
    var well = document.createElement('svg')

    // act as a setter if svg is given
    if (svg && this instanceof SVG.Parent) {
      // dump raw svg
      well.innerHTML = '<svg>' + svg.replace(/\n/, '').replace(/<(\w+)([^<]+?)\/>/g, '<$1$2></$1>') + '</svg>'

      // transplant nodes
      for (var i = 0, il = well.firstChild.childNodes.length; i < il; i++)
        this.node.appendChild(well.firstChild.firstChild)

    // otherwise act as a getter
    } else {
      // create a wrapping svg element in case of partial content
      well.appendChild(svg = document.createElement('svg'))

      // write svgjs data to the dom
      this.writeDataToDom()

      // insert a copy of this node
      svg.appendChild(this.node.cloneNode(true))

      // return target element
      return well.innerHTML.replace(/^<svg>/, '').replace(/<\/svg>$/, '')
    }

    return this
  }
  // write svgjs data to the dom
  writeDataToDom() {
    // dump variables recursively
    if(this.each || this.lines){
      var fn = this.each ? this : this.lines();
      fn.each(function(){
        this.writeDataToDom()
      })
    }

    // remove previously set data
    this.node.removeAttribute('svgjs:data')

    if(Object.keys(this.dom).length)
      this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)) // see #428

    return this
  }
  // set given data to the elements data property
  setData(o){
    this.dom = o
    return this
  }
  is(obj){
    return is(this, obj)
  }
}
