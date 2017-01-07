import regex from './regex.js';
import {fullHex, compToHex} from './helpers.js';
export default class Color{
  constructor(color){
    var match

    // initialize defaults
    this.r = 0
    this.g = 0
    this.b = 0

    if(!color) return

    // parse color
    if (typeof color === 'string') {
      if (regex.isRgb.test(color)) {
        // get rgb values
        match = regex.rgb.exec(color.replace(/\s/g,''))

        // parse numeric values
        this.r = parseInt(match[1])
        this.g = parseInt(match[2])
        this.b = parseInt(match[3])

      } else if (regex.isHex.test(color)) {
        // get hex values
        match = regex.hex.exec(fullHex(color))

        // parse numeric values
        this.r = parseInt(match[1], 16)
        this.g = parseInt(match[2], 16)
        this.b = parseInt(match[3], 16)

      }

    } else if (typeof color === 'object') {
      this.r = color.r
      this.g = color.g
      this.b = color.b

    }
  }

  // Default to hex conversion
  toString() {
    return this.toHex()
  }
  // Build hex value
  toHex() {
    return '#'
      + compToHex(this.r)
      + compToHex(this.g)
      + compToHex(this.b)
  }
  // Build rgb value
  toRgb() {
    return 'rgb(' + [this.r, this.g, this.b].join() + ')'
  }
  // Calculate true brightness
  brightness() {
    return (this.r / 255 * 0.30)
         + (this.g / 255 * 0.59)
         + (this.b / 255 * 0.11)
  }
  // Make color morphable
  morph(color) {
    this.destination = new Color(color)

    return this
  }
  // Get morphed color at given position
  at(pos) {
    // make sure a destination is defined
    if (!this.destination) return this

    // normalise pos
    pos = pos < 0 ? 0 : pos > 1 ? 1 : pos

    // generate morphed color
    return new Color({
      r: ~~(this.r + (this.destination.r - this.r) * pos)
    , g: ~~(this.g + (this.destination.g - this.g) * pos)
    , b: ~~(this.b + (this.destination.b - this.b) * pos)
    })
  }
}
// Testers

// Test if given value is a color string
Color.test = function(color) {
  color += ''
  return regex.isHex.test(color)
      || regex.isRgb.test(color)
}

// Test if given value is a rgb object
Color.isRgb = function(color) {
  return color && typeof color.r == 'number'
               && typeof color.g == 'number'
               && typeof color.b == 'number'
}

// Test if given value is a color
Color.isColor = function(color) {
  return Color.isRgb(color) || Color.test(color)
}
