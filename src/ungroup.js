import Parent from './parent.js';
import Defs from './defs.js';
import Doc from './doc.js';
import {extend} from './svg.js';

extend(Parent, {

  ungroup: function(parent, depth) {
    if(depth === 0 || this instanceof Defs) return this

    parent = parent || (this instanceof Doc ? this : this.parent(Parent))
    depth = depth || Infinity

    this.each(function(){
      if(this instanceof Defs) return this
      if(this instanceof Parent) return this.ungroup(parent, depth-1)
      return this.toParent(parent)
    })

    this.node.firstChild || this.remove()

    return this
  },

  flatten: function(parent, depth) {
    return this.ungroup(parent, depth)
  }

})
