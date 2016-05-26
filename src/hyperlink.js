import Container from 'container.js';
import Element from 'element.js';
import {create, extend, xlink} from 'svg.js';
export default class A extends Container{
  constructor(){
    super(create('a'));
  }

  // Link url
  to(url) {
    return this.attr('href', url, xlink)
  }
  // Link show attribute
  show(target) {
    return this.attr('show', target, xlink)
  }
  // Link target attribute
  target(target) {
    return this.attr('target', target)
  }
}

extend(Container, {
  // Create a hyperlink element
  link: function(url) {
    return this.put(new A).to(url)
  }
})

extend(Element, {
  // Create a hyperlink element
  linkTo: function(url) {
    var link = new A

    if (typeof url == 'function')
      url.call(link, link)
    else
      link.to(url)

    return this.parent().put(link).put(this)
  }

})
