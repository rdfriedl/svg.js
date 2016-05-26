import Shape from 'shape.js';
import Container from 'container.js';
import {extend, create} from 'svg.js';
export default class Rect extends Shape{
  constructor(){
    super(create('rect'));
  }
}
extend(Container, {
  // Create a rect element
  rect: function(width, height) {
    return this.put(new Rect()).size(width, height)
  }
})
