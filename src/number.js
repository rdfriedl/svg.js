import regex from 'regex.js';

export default class Number{
  constructor(value, unit){
    // initialize defaults
    this.value = 0
    this.unit  = unit || ''

    // parse value
    if (typeof value === 'number') {
      // ensure a valid numeric value
      this.value = isNaN(value) ? 0 : !isFinite(value) ? (value < 0 ? -3.4e+38 : +3.4e+38) : value

    } else if (typeof value === 'string') {
      unit = value.match(regex.numberAndUnit)

      if (unit) {
        // make value numeric
        this.value = parseFloat(unit[1])

        // normalize
        if (unit[5] == '%')
          this.value /= 100
        else if (unit[5] == 's')
          this.value *= 1000

        // store unit
        this.unit = unit[5]
      }

    } else {
      if (value instanceof Number) {
        this.value = value.valueOf()
        this.unit  = value.unit
      }
    }
  }

  // Stringalize
  toString() {
    return (
      this.unit == '%' ?
        ~~(this.value * 1e8) / 1e6:
      this.unit == 's' ?
        this.value / 1e3 :
        this.value
    ) + this.unit
  }
  toJSON() {
    return this.toString()
  }
  // Convert to primitive
  valueOf() {
    return this.value
  }
  // Add number
  plus(number) {
    return new Number(this + new Number(number), this.unit)
  }
  // Subtract number
  minus(number) {
    return this.plus(-new Number(number))
  }
  // Multiply number
  times(number) {
    return new Number(this * new Number(number), this.unit)
  }
  // Divide number
  divide(number) {
    return new Number(this / new Number(number), this.unit)
  }
  // Convert to different unit
  to(unit) {
    var number = new Number(this)

    if (typeof unit === 'string')
      number.unit = unit

    return number
  }
  // Make number morphable
  morph(number) {
    this.destination = new Number(number)

    return this
  }
  // Get morphed number at given position
  at(pos) {
    // Make sure a destination is defined
    if (!this.destination) return this

    // Generate new morphed number
    return new Number(this.destination)
        .minus(this)
        .times(pos)
        .plus(this)
  }
}
