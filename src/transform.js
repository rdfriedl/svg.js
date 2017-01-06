import Element from 'element.js';
import FX from 'fx.js';
import Matrix from 'matrix.js';
import regex from 'regex.js';
import svg_Number from 'number.js';
import {extend} from 'svg.js';
import {arrayToMatrix, ensureCentre} from 'helpers.js';

extend(Element, {
  // Add transformations
  transform: function(o, relative) {
    // get target in case of the fx module, otherwise reference this
    var target = this
      , matrix

    // act as a getter
    if (typeof o !== 'object') {
      // get current matrix
      matrix = new Matrix(target).extract()

      return typeof o === 'string' ? matrix[o] : matrix
    }

    // get current matrix
    matrix = new Matrix(target)

    // ensure relative flag
    relative = !!relative || !!o.relative

    // act on matrix
    if (o.a != null) {
      matrix = relative ?
        // relative
        matrix.multiply(new Matrix(o)) :
        // absolute
        new Matrix(o)

    // act on rotation
    } else if (o.rotation != null) {
      // ensure centre point
      ensureCentre(o, target)

      // apply transformation
      matrix = relative ?
        // relative
        matrix.rotate(o.rotation, o.cx, o.cy) :
        // absolute
        matrix.rotate(o.rotation - matrix.extract().rotation, o.cx, o.cy)

    // act on scale
    } else if (o.scale != null || o.scaleX != null || o.scaleY != null) {
      // ensure centre point
      ensureCentre(o, target)

      // ensure scale values on both axes
      o.scaleX = o.scale != null ? o.scale : o.scaleX != null ? o.scaleX : 1
      o.scaleY = o.scale != null ? o.scale : o.scaleY != null ? o.scaleY : 1

      if (!relative) {
        // absolute; multiply inversed values
        var e = matrix.extract()
        o.scaleX = o.scaleX * 1 / e.scaleX
        o.scaleY = o.scaleY * 1 / e.scaleY
      }

      matrix = matrix.scale(o.scaleX, o.scaleY, o.cx, o.cy)

    // act on skew
    } else if (o.skew != null || o.skewX != null || o.skewY != null) {
      // ensure centre point
      ensureCentre(o, target)

      // ensure skew values on both axes
      o.skewX = o.skew != null ? o.skew : o.skewX != null ? o.skewX : 0
      o.skewY = o.skew != null ? o.skew : o.skewY != null ? o.skewY : 0

      if (!relative) {
        // absolute; reset skew values
        var e = matrix.extract()
        matrix = matrix.multiply(new Matrix().skew(e.skewX, e.skewY, o.cx, o.cy).inverse())
      }

      matrix = matrix.skew(o.skewX, o.skewY, o.cx, o.cy)

    // act on flip
    } else if (o.flip) {
      matrix = matrix.flip(
        o.flip
      , o.offset == null ? target.bbox()['c' + o.flip] : o.offset
      )

    // act on translate
    } else if (o.x != null || o.y != null) {
      if (relative) {
        // relative
        matrix = matrix.translate(o.x, o.y)
      } else {
        // absolute
        if (o.x != null) matrix.e = o.x
        if (o.y != null) matrix.f = o.y
      }
    }

    return this.attr('transform', matrix)
  }
})

extend(FX, {
  transform: function(o, relative) {
    // get target in case of the fx module, otherwise reference this
    var target = this.target()
      , matrix

    // act as a getter
    if (typeof o !== 'object') {
      // get current matrix
      matrix = new Matrix(target).extract()

      return typeof o === 'string' ? matrix[o] : matrix
    }

    // ensure relative flag
    relative = !!relative || !!o.relative

    // act on matrix
    if (o.a != null) {
      matrix = new Matrix(o)

    // act on rotation
    } else if (o.rotation != null) {
      // ensure centre point
      ensureCentre(o, target)

      // apply transformation
      matrix = new Rotate(o.rotation, o.cx, o.cy)

    // act on scale
    } else if (o.scale != null || o.scaleX != null || o.scaleY != null) {
      // ensure centre point
      ensureCentre(o, target)

      // ensure scale values on both axes
      o.scaleX = o.scale != null ? o.scale : o.scaleX != null ? o.scaleX : 1
      o.scaleY = o.scale != null ? o.scale : o.scaleY != null ? o.scaleY : 1

      matrix = new Scale(o.scaleX, o.scaleY, o.cx, o.cy)

    // act on skew
    } else if (o.skewX != null || o.skewY != null) {
      // ensure centre point
      ensureCentre(o, target)

      // ensure skew values on both axes
      o.skewX = o.skewX != null ? o.skewX : 0
      o.skewY = o.skewY != null ? o.skewY : 0

      matrix = new Skew(o.skewX, o.skewY, o.cx, o.cy)

    // act on flip
    } else if (o.flip) {
      matrix = new Matrix().morph(new Matrix().flip(
        o.flip
      , o.offset == null ? target.bbox()['c' + o.flip] : o.offset
      ))

    // act on translate
    } else if (o.x != null || o.y != null) {
      matrix = new Translate(o.x, o.y)
    }

    if(!matrix) return this

    matrix.relative = relative

    this.last().transforms.push(matrix)

    setTimeout(function(){this.start()}.bind(this), 0)

    return this
  }
})

extend(Element, {
  // Reset all transformations
  untransform: function() {
    return this.attr('transform', null)
  },
  // merge the whole transformation chain into one matrix and returns it
  matrixify: function() {

    var matrix = (this.attr('transform') || '')
      // split transformations
      .split(/\)\s*,?\s*/).slice(0,-1).map(function(str){
        // generate key => value pairs
        var kv = str.trim().split('(')
        return [kv[0], kv[1].split(regex.matrixElements).map(function(str){ return parseFloat(str) })]
      })
      // calculate every transformation into one matrix
      .reduce(function(matrix, transform){

        if(transform[0] == 'matrix') return matrix.multiply(arrayToMatrix(transform[1]))
        return matrix[transform[0]].apply(matrix, transform[1])

      }, new Matrix())

    return matrix
  },
  // add an element to another parent without changing the visual representation on the screen
  toParent: function(parent) {
    if(this == parent) return this
    var ctm = this.screenCTM()
    var temp = parent.rect(1,1)
    var pCtm = temp.screenCTM().inverse()
    temp.remove()

    this.addTo(parent).untransform().transform(pCtm.multiply(ctm))

    return this
  },
  // same as above with parent equals root-svg
  toDoc: function() {
    return this.toParent(this.doc())
  }

})
export class Transformation{
  constructor(source, inversed){
    if(arguments.length > 1 && typeof inversed != 'boolean'){
      return this.create([].slice.call(arguments))
    }

    if(typeof source == 'object'){
      for(var i = 0, len = this.arguments.length; i < len; ++i){
        this[this.arguments[i]] = source[this.arguments[i]]
      }
    }

    if(Array.isArray(source)){
      for(var i = 0, len = this.arguments.length; i < len; ++i){
        this[this.arguments[i]] = source[i]
      }
    }

    this.inversed = false

    if(inversed === true){
      this.inversed = true
    }
  }

  at(pos){
    var params = []

    for(var i = 0, len = this.arguments.length; i < len; ++i){
      params.push(this[this.arguments[i]])
    }

    var m = this._undo || new Matrix()

    m = new Matrix().morph(Matrix.prototype[this.method].apply(m, params)).at(pos)

    return this.inversed ? m.inverse() : m
  }

  undo(o){
    for(var i = 0, len = this.arguments.length; i < len; ++i){
      o[this.arguments[i]] = typeof this[this.arguments[i]] == 'undefined' ? 0 : o[this.arguments[i]]
    }

    // The method SVG.Matrix.extract which was used before calling this
    // method to obtain a value for the parameter o doesn't return a cx and
    // a cy so we use the ones that were provided to this object at its creation
    o.cx = this.cx
    o.cy = this.cy

    this._undo = new SVG[capitalize(this.method)](o, true).at(1)

    return this
  }
}

export class Translate extends Transformation{
  constructor(source, inversed){
    if(typeof source == 'object') super(source, inversed)
    else super([].slice.call(arguments))
  }
}
extend(Translate,{
  arguments: ['transformedX', 'transformedY']
, method: 'translate'
})

export class Rotate extends Transformation{
  constructor(source, inversed){
    if(typeof source == 'object') super(source, inversed)
    else super([].slice.call(arguments))
  }
  at(pos){
    var m = new Matrix().rotate(new svg_Number().morph(this.rotation - (this._undo ? this._undo.rotation : 0)).at(pos), this.cx, this.cy)
    return this.inversed ? m.inverse() : m
  }
  undo(o){
    this._undo = o
  }
}
extend(Rotate, {
  arguments: ['rotation', 'cx', 'cy']
, method: 'rotate'
})

export class Scale extends Transformation{
  constructor(source, inversed){
    if(typeof source == 'object') super(source, inversed)
    else super([].slice.call(arguments))
  }
}
extend(Scale, {
  arguments: ['scaleX', 'scaleY', 'cx', 'cy']
, method: 'scale'
})

export class Skew extends Transformation{
  constructor(source, inversed){
    if(typeof source == 'object') super(source, inversed)
    else super([].slice.call(arguments))
  }
}
extend(Skew, {
  arguments: ['skewX', 'skewY', 'cx', 'cy']
, method: 'skew'
})
