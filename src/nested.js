import Container from './container.js';
import {create, extend} from './svg.js';

export default class Nested extends Container{
  constructor(){
    super(create('svg'))
    this.style('overflow', 'visible')
  }
}
extend(Container,{
  // Create nested svg document
  nested(){
    return this.put(new Nested)
  }
})
