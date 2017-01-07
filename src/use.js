import Shape from './shape.js';
import Container from './container.js';
import {create, extend, xlink} from './svg.js';

export default class Use extends Shape{
  constructor(){
    super(create('use'))
  }

  // Use element as a reference
  element(element, file) {
    // Set lined element
    return this.attr('href', (file || '') + '#' + element, SVG.xlink)
  }
}

extend(Container, {
  // Create a use element
  use: function(element, file) {
    return this.put(new Use).element(element, file)
  }
})
