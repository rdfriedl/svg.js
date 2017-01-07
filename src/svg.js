import {capitalize} from './helpers.js';
import {eid} from './ids.js';

var svg_Set, Doc, Nested, Container, Gradient, Element, SVG;
require('./circularReferenceFix.js').callbacks.push(() => {
  svg_Set = require('./set.js').default
  Doc = require('./doc.js').default
  Nested = require('./nested.js').default
  Container = require('./container.js').default
  Gradient = require('./gradient.js').default
  Element = require('./element.js').default

  // NOTE: dont import the whole library, maybe have a hash array of element types
  SVG = require('./index.js')

  // when the document loads, prepare the parser
  document.addEventListener('DOMContentLoaded', function() {
    if(!parser.draw)
      prepare()
  }, false)
})

// Default namespaces
export const ns    = 'http://www.w3.org/2000/svg'
export const xmlns = 'http://www.w3.org/2000/xmlns/'
export const xlink = 'http://www.w3.org/1999/xlink'
export const svgjs = 'http://svgjs.com/svgjs'

// Svg support test
export const supported = (function() {
  return !! document.createElementNS &&
         !! document.createElementNS(ns,'svg')
})()

// Method for element creation
export function create(name) {
  // create element
  var element = document.createElementNS(ns, name)

  // apply unique id
  element.setAttribute('id', eid(name))

  return element
}

// Method for extending objects
export function extend(...modules) {
  var methods, key, i

  // Get object with extensions
  methods = modules.pop()

  for (i = modules.length - 1; i >= 0; i--)
    if (modules[i])
      for (key in methods)
        modules[i].prototype[key] = methods[key]

  // Make sure SVG.Set inherits any newly added methods
  if (svg_Set && svg_Set.inherit)
    svg_Set.inherit()
}

// Invent new element
export function invent(config) {
  // Create element initializer
  var initializer = typeof config.create == 'function' ?
    config.create :
    function() {
      this.constructor.call(this, create(config.create))
    }

  // Inherit prototype
  if (config.inherit)
    initializer.prototype = new config.inherit

  // Extend with methods
  if (config.extend)
    extend(initializer, config.extend)

  // Attach construct method to parent
  if (config.construct)
    extend(config.parent || Container, config.construct)

  return initializer
}

// Adopt existing svg elements
export function adopt(node) {
  // check for presence of node
  if (!node) return null

  // make sure a node isn't already adopted
  if (node.instance) return node.instance

  // initialize variables
  var element

  // adopt with element-specific settings
  if (node.nodeName == 'svg')
    element = node.parentNode instanceof SVGElement ? new Nested : new Doc
  else if (node.nodeName == 'linearGradient')
    element = new Gradient('linear')
  else if (node.nodeName == 'radialGradient')
    element = new Gradient('radial')
  else if (SVG[capitalize(node.nodeName)])
    element = new SVG[capitalize(node.nodeName)]
  else
    element = new Element(node)

  // ensure references
  element.type  = node.nodeName
  element.node  = node
  node.instance = element

  // SVG.Class specific preparations
  if (element instanceof Doc)
    element.namespace().defs()

  // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
  element.setData(JSON.parse(node.getAttribute('svgjs:data')) || {})

  return element
}

export var parser = {}

// Initialize parsing element
export function prepare(element) {
  // Select document body and create invisible svg element
  var body = document.getElementsByTagName('body')[0]
    , draw = (body ? new Doc(body) :  new Doc(document.documentElement).nested()).size(2, 0)

  // Create parser object
  Object.assign(parser, {
    body: body || document.documentElement,
    draw: draw.style('opacity:0;position:fixed;left:100%;top:100%;overflow:hidden'),
    poly: draw.polyline().node,
    path: draw.path().node,
    native: create('svg')
  })
}
