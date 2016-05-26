import Element from 'element.js';
import utils from 'utilities.js';
import {adopt} from 'svg.js';

export default class Parent extends Element{
  // Returns all child elements
  children() {
    return utils.map(utils.filterSVGElements(this.node.childNodes), function(node) {
      return adopt(node)
    })
  }
  // Add given element at a position
  add(element, i) {
    if (!this.has(element)) {
      // define insertion index if none given
      i = i == null ? this.children().length : i

      // add element references
      this.node.insertBefore(element.node, this.node.childNodes[i] || null)
    }

    return this
  }
  // Basically does the same as `add()` but returns the added element instead
  put(element, i) {
    this.add(element, i)
    return element
  }
  // Checks if the given element is a child
  has(element) {
    return this.index(element) >= 0
  }
  // Gets index of given element
  index(element) {
    return this.children().indexOf(element)
  }
  // Get a element at the given index
  get(i) {
    return this.children()[i]
  }
  // Get first child, skipping the defs node
  first() {
    return this.children()[0]
  }
  // Get the last child
  last() {
    return this.children()[this.children().length - 1]
  }
  // Iterates over all children and invokes a given block
  each(block, deep) {
    var i, il
      , children = this.children()

    for (i = 0, il = children.length; i < il; i++) {
      if (children[i] instanceof Element)
        block.apply(children[i], [i, children])

      if (deep && (children[i] instanceof Parent))
        children[i].each(block, deep)
    }

    return this
  }
  // Remove a given child
  removeElement(element) {
    this.node.removeChild(element.node)

    return this
  }
  // Remove all elements in this container
  clear() {
    // remove children
    while(this.node.hasChildNodes())
      this.node.removeChild(this.node.lastChild)

    // remove defs reference
    delete this._defs

    return this
  }
  // Get defs
  defs() {
    return this.doc().defs()
  }
}

// import Container from 'container.js';
