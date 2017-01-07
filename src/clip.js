import Container from './container.js';
import Element from './element.js';
import {extend, create} from './svg.js';

export default class ClipPath extends Container{
  constructor(){
    super(create('clipPath'))

    // keep references to clipped elements
    this.targets = []
  }

  // Unclip all clipped elements and remove itself
  remove() {
    // unclip all targets
    for (var i = this.targets.length - 1; i >= 0; i--)
      if (this.targets[i])
        this.targets[i].unclip()
    this.targets = []

    // remove clipPath from parent
    this.parent().removeElement(this)

    return this
  }
}
extend(Container, {
  // Create clipping element
  clip: function() {
    return this.defs().put(new ClipPath)
  }
})

extend(Element, {
  // Distribute clipPath to svg element
  clipWith: function(element) {
    // use given clip or create a new one
    this.clipper = element instanceof ClipPath ? element : this.parent().clip().add(element)

    // store reverence on self in mask
    this.clipper.targets.push(this)

    // apply mask
    return this.attr('clip-path', 'url("#' + this.clipper.attr('id') + '")')
  }
  // Unclip element
, unclip: function() {
    delete this.clipper
    return this.attr('clip-path', null)
  }
})
