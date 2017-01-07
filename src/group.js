import Container from './container.js';
import {create, extend} from './svg.js';
export default class Group extends Container{
  constructor(){
    super(create('g'));
  }
  // Move over x-axis
  x(x) {
    return x == null ? this.transform('x') : this.transform({ x: x - this.x() }, true)
  }
  // Move over y-axis
  y(y) {
    return y == null ? this.transform('y') : this.transform({ y: y - this.y() }, true)
  }
  // Move by center over x-axis
  cx(x) {
    return x == null ? this.gbox().cx : this.x(x - this.gbox().width / 2)
  }
  // Move by center over y-axis
  cy(y) {
    return y == null ? this.gbox().cy : this.y(y - this.gbox().height / 2)
  }
  gbox() {
    var bbox  = this.bbox()
      , trans = this.transform()

    bbox.x  += trans.x
    bbox.x2 += trans.x
    bbox.cx += trans.x

    bbox.y  += trans.y
    bbox.y2 += trans.y
    bbox.cy += trans.y

    return bbox
  }
}
extend(Container, {
  // Create a group element
  group: function() {
    return this.put(new Group)
  }
})
