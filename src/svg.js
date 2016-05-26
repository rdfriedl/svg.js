import {capitalize} from 'helpers.js';
import {eid} from 'ids.js';

// Default namespaces
export const ns    = 'http://www.w3.org/2000/svg'
export const xmlns = 'http://www.w3.org/2000/xmlns/'
export const xlink = 'http://www.w3.org/1999/xlink'
export const svgjs = 'http://svgjs.com/svgjs'

// Svg support test
export const supported = (function() {
  return !! document.createElementNS &&
         !! document.createElementNS(ns,'svg').createSVGRect
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
export function extend() {
  var modules, methods, key, i

  // Get list of modules
  modules = [].slice.call(arguments)

  // Get object with extensions
  methods = modules.pop()

  for (i = modules.length - 1; i >= 0; i--)
    if (modules[i])
      for (key in methods)
        modules[i].prototype[key] = methods[key]

  // Make sure SVG.Set inherits any newly added methods
  // if (SVG.Set && SVG.Set.inherit)
  //   SVG.Set.inherit()
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
    extend(config.parent || SVG.Container, config.construct)

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
    element = node.parentNode instanceof SVGElement ? new SVG.Nested : new SVG.Doc
  else if (node.nodeName == 'linearGradient')
    element = new SVG.Gradient('linear')
  else if (node.nodeName == 'radialGradient')
    element = new SVG.Gradient('radial')
  else if (SVG[capitalize(node.nodeName)])
    element = new SVG[capitalize(node.nodeName)]
  else
    element = new SVG.Element(node)

  // ensure references
  element.type  = node.nodeName
  element.node  = node
  node.instance = element

  // SVG.Class specific preparations
  if (element instanceof SVG.Doc)
    element.namespace().defs()

  // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
  element.setData(JSON.parse(node.getAttribute('svgjs:data')) || {})

  return element
}

// Initialize parsing element
export function prepare(element) {
  // Select document body and create invisible svg element
  var body = document.getElementsByTagName('body')[0]
    , draw = (body ? new SVG.Doc(body) : element.nested()).size(2, 0)
    , path = SVG.create('path')

  // Insert parsers
  draw.node.appendChild(path)

  // Create parser object
  SVG.parser = {
    body: body || element.parent()
  , draw: draw.style('opacity:0;position:fixed;left:100%;top:100%;overflow:hidden')
  , poly: draw.polyline().node
  , path: path
  }
}
