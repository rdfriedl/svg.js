import Container from './container.js';
import FX from './fx.js';
import Shape from './shape.js';
import {BBox} from './boxes.js';
import {create, extend} from './svg.js';

export default class Set{
  constructor(members){
    // Set initial state
    Array.isArray(members) ? this.members = members : this.clear()
  }

  // Add element to set
  add() {
    var i, il, elements = [].slice.call(arguments)

    for (i = 0, il = elements.length; i < il; i++)
      this.members.push(elements[i])

    return this
  }
  // Remove element from set
  remove(element) {
    var i = this.index(element)

    // remove given child
    if (i > -1)
      this.members.splice(i, 1)

    return this
  }
  // Iterate over all members
  each(block) {
    for (var i = 0, il = this.members.length; i < il; i++)
      block.apply(this.members[i], [i, this.members])

    return this
  }
  // Restore to defaults
  clear() {
    // initialize store
    this.members = []

    return this
  }
  // Get the length of a set
  length() {
    return this.members.length
  }
  // Checks if a given element is present in set
  has(element) {
    return this.index(element) >= 0
  }
  // retuns index of given element in set
  index(element) {
    return this.members.indexOf(element)
  }
  // Get member at given index
  get(i) {
    return this.members[i]
  }
  // Get first member
  first() {
    return this.get(0)
  }
  // Get last member
  last() {
    return this.get(this.members.length - 1)
  }
  // Default value
  valueOf() {
    return this.members
  }
  // Get the bounding box of all members included or empty box if set has no items
  bbox(){
    var box = new BBox()

    // return an empty box of there are no members
    if (this.members.length == 0)
      return box

    // get the first rbox and update the target bbox
    var rbox = this.members[0].rbox()
    box.x      = rbox.x
    box.y      = rbox.y
    box.width  = rbox.width
    box.height = rbox.height

    this.each(function() {
      // user rbox for correct position and visual representation
      box = box.merge(this.rbox())
    })

    return box
  }
}

extend(Container, {
  // Create a new set
  set: function(members) {
    return new Set(members)
  }
})

// FX.Set = class FX_Set{
//   // Initialize node
//   constructor(set) {
//     // store reference to set
//     this.set = set
//   }
// }

// Alias methods
Set.inherit = function() {
  var m
    , methods = []

  // gather shape methods
  for(var m in Shape.prototype)
    if (typeof Shape.prototype[m] == 'function' && typeof Set.prototype[m] != 'function')
      methods.push(m)

  // apply shape aliasses
  methods.forEach(function(method) {
    Set.prototype[method] = function() {
      for (var i = 0, il = this.members.length; i < il; i++)
        if (this.members[i] && typeof this.members[i][method] == 'function')
          this.members[i][method].apply(this.members[i], arguments)

      return method == 'animate' ? (this.fx || (this.fx = new FX.Set(this))) : this
    }
  })

  // clear methods for the next round
  methods = []

  // gather fx methods
  for(var m in FX.prototype)
    if (typeof FX.prototype[m] == 'function' && typeof FX.Set.prototype[m] != 'function')
      methods.push(m)

  // apply fx aliasses
  methods.forEach(function(method) {
    FX.Set.prototype[method] = function() {
      for (var i = 0, il = this.set.members.length; i < il; i++)
        this.set.members[i].fx[method].apply(this.set.members[i].fx, arguments)

      return this
    }
  })
}


