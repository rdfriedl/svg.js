import Container from 'container.js';
import Defs from 'defs.js';
import {create, adopt, xlink, ns, svgjs, xmlns} from 'svg.js';

export default class Doc extends Container{
  constructor(element){
    if (element) {
      // ensure the presence of a dom element
      element = typeof element == 'string' ?
        document.getElementById(element) :
        element

      // If the target is an svg element, use that element as the main wrapper.
      // This allows svg.js to work with svg documents as well.
      if (element.nodeName == 'svg') {
        super(element);
      }
      else {
        super(create('svg'));
        element.appendChild(this.node)
        this.size('100%', '100%')
      }

      // set svg element attributes and ensure defs node
      this.namespace().defs()
    }
    else{
      super(create('svg'))
    }

    // set svg element attributes and ensure defs node
    this.namespace().size('100%', '100%').defs()
  }

  // Add namespaces
  namespace() {
    return this
      .attr({ xmlns: ns, version: '1.1' })
      .attr('xmlns:xlink', xlink, xmlns)
      .attr('xmlns:svgjs', svgjs, xmlns)
  }

  // Creates and returns defs element
  defs() {
    if (!this._defs) {
      var defs

      // Find or create a defs element in this instance
      if (defs = this.node.getElementsByTagName('defs')[0])
        this._defs = adopt(defs)
      else
        this._defs = new Defs

      // Make sure the defs node is at the end of the stack
      this.node.appendChild(this._defs.node)
    }

    return this._defs
  }

  // custom parent method
  parent() {
    return this.node.parentNode.nodeName == '#document' ? null : this.node.parentNode
  }

  // Fix for possible sub-pixel offset. See:
  // https://bugzilla.mozilla.org/show_bug.cgi?id=608812
  spof(spof) {
    var pos = this.node.getScreenCTM()

    if (pos)
      this
        .style('left', (-pos.e % 1) + 'px')
        .style('top',  (-pos.f % 1) + 'px')

    return this
  }

  // Removes the doc from the DOM
  remove() {
    if(this.parent()) {
      this.parent().removeChild(this.node);
    }

    return this;
  }
}
