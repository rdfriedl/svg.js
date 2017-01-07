import Container from './container.js';
import Defs from './defs.js';
import {create, extend} from './svg.js';

export default class Pattern extends Container{
  constructor(){
    super(create('pattern'))
  }

  // Return the fill id
  fill() {
    return 'url(#' + this.id() + ')'
  }
  // Update pattern by rebuilding
  update(block) {
    // remove content
    this.clear()

    // invoke passed block
    if (typeof block == 'function')
      block.call(this, this)

    return this
  }
  // Alias string convertion to fill
  toString() {
    return this.fill()
  }
  // custom attr to handle transform
  attr(a, b, c) {
    if(a == 'transform') a = 'patternTransform'
    return Container.prototype.attr.call(this, a, b, c)
  }
}

extend(Container, {
  // Create pattern element in defs
  pattern: function(width, height, block) {
    return this.defs().pattern(width, height, block)
  }
})

extend(Defs, {
  // Define gradient
  pattern: function(width, height, block) {
    return this.put(new Pattern).update(block).attr({
      x:            0
    , y:            0
    , width:        width
    , height:       height
    , patternUnits: 'userSpaceOnUse'
    })
  }

})
