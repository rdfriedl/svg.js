import Shape from 'shape.js';
import Container from 'container.js';
import Pattern from 'pattern.js';
import {extend, create, xlink} from 'svg.js';

export default class Image extends Shape{
  constructor(){
    super(create('image'))
  }
  // (re)load image
  load(url) {
    if (!url) return this

    var img = document.createElement('img')

    // preload image
    img.onload = () => {
      var p = this.parent(Pattern)

      if(p === null) return

      // ensure image size
      if (this.width() == 0 && this.height() == 0)
        this.size(img.width, img.height)

      // ensure pattern size if not set
      if (p && p.width() == 0 && p.height() == 0)
        p.size(this.width(), this.height())

      // callback
      if (typeof this._loaded === 'function')
        this._loaded.call(this, {
          width:  img.width
        , height: img.height
        , ratio:  img.width / img.height
        , url:    url
        })
    }

    img.onerror = e => {
      if (typeof this._error === 'function'){
          this._error.call(this, e)
      }
    }

    return this.attr('href', (img.src = this.src = url), xlink)
  }
  // Add loaded callback
  loaded(loaded) {
    this._loaded = loaded
    return this
  }
  // add an error callback
  error(error){
    this._error = error
    return this
  }
}

extend(Container, {
    // create image element, load image and set its size
    image: function(source, width, height) {
      return this.put(new Image).load(source).size(width || 0, height || width || 0)
    }
})
