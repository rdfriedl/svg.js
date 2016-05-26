import svg_Set from 'set.js';
import {extend, adopt} from 'svg.js';
import Parent from 'parent.js';
import Element from 'element';
import utils from 'utilities.js';
import {idFromReference} from 'helpers.js';

// Method for getting an element by id
export function get(id) {
  var node = document.getElementById(idFromReference(id) || id)
  return adopt(node)
}

// Select elements by query string
export function select(query, parent) {
  return new svg_Set(
    utils.map((parent || document).querySelectorAll(query), function(node) {
      return adopt(node)
    })
  )
}

extend(Parent, {
  // Scoped select method
  select: function(query) {
    return select(query, this.node)
  }
})

extend(Element, {
  // Get referenced element form attribute value
  reference(attr) {
    return SVG.get(this.attr(attr))
  }
})
