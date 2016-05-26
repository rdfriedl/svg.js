import Container from 'container.js';
import Parent from 'parent.js';
import Text from 'text.js';
import {extend, create, adopt, xlink} from 'svg.js';

export default class TextPath extends Parent{
  constructor(){
    super(create('textPath'))
  }
}
extend(Text, {
  // Create path for text to run on
  path: function(d) {
    // create textPath element
    var path  = new TextPath
      , track = this.doc().defs().path(d)

    // move lines to textpath
    while (this.node.hasChildNodes())
      path.node.appendChild(this.node.firstChild)

    // add textPath element as child node
    this.node.appendChild(path.node)

    // link textPath to path and add content
    path.attr('href', '#' + track, xlink)

    return this
  },
  // Plot path if any
  plot: function(d) {
    var track = this.track()

    if (track)
      track.plot(d)

    return this
  },
  // Get the path track element
  track: function() {
    var path = this.textPath()

    if (path)
      return path.reference('href')
  },
  // Get the textPath child
  textPath: function() {
    if (this.node.firstChild && this.node.firstChild.nodeName == 'textPath')
      return adopt(this.node.firstChild)
  }
})
