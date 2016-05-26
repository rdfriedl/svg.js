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

    var self = this
      , img  = document.createElement('img')

    // preload image
    img.onload = function() {
      var p = self.parent(Pattern)

      if(p === null) return

      // ensure image size
      if (self.width() == 0 && self.height() == 0)
        self.size(img.width, img.height)

      // ensure pattern size if not set
      if (p && p.width() == 0 && p.height() == 0)
        p.size(self.width(), self.height())

      // callback
      if (typeof self._loaded === 'function')
        self._loaded.call(self, {
          width:  img.width
        , height: img.height
        , ratio:  img.width / img.height
        , url:    url
        })
    }

    return this.attr('href', (img.src = this.src = url), xlink)
  }
  // Add loaded callback
  loaded(loaded) {
    this._loaded = loaded
    return this
  }
}

extend(Container, {
    // create image element, load image and set its size
    image: function(source, width, height) {
      return this.put(new Image).load(source).size(width || 0, height || width || 0)
    }
})
