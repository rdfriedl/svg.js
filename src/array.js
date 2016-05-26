export default class svg_Array{
  constructor(array, fallback) {
    array = (array || []).valueOf()

    // if array is empty and fallback is provided, use fallback
    if (array.length == 0 && fallback)
      array = fallback.valueOf()

    // parse array
    this.value = this.parse(array)
  }

  // Make array morphable
  morph(array) {
    this.destination = this.parse(array)

    // normalize length of arrays
    if (this.value.length != this.destination.length) {
      var lastValue       = this.value[this.value.length - 1]
        , lastDestination = this.destination[this.destination.length - 1]

      while(this.value.length > this.destination.length)
        this.destination.push(lastDestination)
      while(this.value.length < this.destination.length)
        this.value.push(lastValue)
    }

    return this
  }
  // Clean up any duplicate points
  settle() {
    // find all unique values
    for (var i = 0, il = this.value.length, seen = []; i < il; i++)
      if (seen.indexOf(this.value[i]) == -1)
        seen.push(this.value[i])

    // set new value
    return this.value = seen
  }
  // Get morphed array at given position
  at(pos) {
    // make sure a destination is defined
    if (!this.destination) return this

    // generate morphed array
    for (var i = 0, il = this.value.length, array = []; i < il; i++)
      array.push(this.value[i] + (this.destination[i] - this.value[i]) * pos)

    return new svg_Array(array)
  }
  // Convert array to string
  toString() {
    return this.value.join(' ')
  }
  // Real value
  valueOf() {
    return this.value
  }
  // Parse whitespace separated string
  parse(array) {
    array = array.valueOf()

    // if already is an array, no need to parse it
    if (Array.isArray(array)) return array

    return this.split(array)
  }
  // Strip unnecessary whitespace
  split(string) {
    return string.trim().split(/\s+/)
  }
  // Reverse array
  reverse() {
    this.value.reverse()

    return this
  }

}
