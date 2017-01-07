import Element from './element.js';
import Container from './container.js';
import {create, extend} from './svg.js';

export default class Mask extends Container{
  constructor(){
    super(create('mask'))

    // keep references to masked elements
    this.targets = []
  }

  // Unmask all masked elements and remove itself
  remove() {
    // unmask all targets
    for (var i = this.targets.length - 1; i >= 0; i--)
      if (this.targets[i])
        this.targets[i].unmask()
    this.targets = []

    // remove mask from parent
    this.parent().removeElement(this)

    return this
  }
}

extend(Container, {
  // Create masking element
  mask: function() {
    return this.defs().put(new Mask)
  }
})

extend(Element, {
  // Distribute mask to svg element
  maskWith: function(element) {
    // use given mask or create a new one
    this.masker = element instanceof Mask ? element : this.parent().mask().add(element)

    // store reverence on self in mask
    this.masker.targets.push(this)

    // apply mask
    return this.attr('mask', 'url("#' + this.masker.attr('id') + '")')
  }
  // Unmask element
, unmask: function() {
    delete this.masker
    return this.attr('mask', null)
  }

})
