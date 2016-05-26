import Element from 'element.js';
import Parent from 'parent.js';
import Container from 'container.js';
import {extend, create} from 'svg.js';
export default class Bare extends Element{
  constructor(element, inherit){
    // construct element
    super(create(element))

    // inherit custom methods
    if (inherit)
      for (var method in inherit.prototype)
        if (typeof inherit.prototype[method] === 'function')
          this[method] = inherit.prototype[method]
  }

  // Insert some plain text
  words(text) {
    // remove contents
    while (this.node.hasChildNodes())
      this.node.removeChild(this.node.lastChild)

    // create text node
    this.node.appendChild(document.createTextNode(text))

    return this
  }
}

extend(Parent, {
  // Create an element that is not described by SVG.js
  element: function(element, inherit) {
    return this.put(new Bare(element, inherit))
  }
  // Add symbol element
, symbol: function() {
    return this.defs().element('symbol', Container)
  }

})
