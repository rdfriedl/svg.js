import Element from './element.js';
import {extend} from './svg.js';

// Add events to elements
;[  'click'
  , 'dblclick'
  , 'mousedown'
  , 'mouseup'
  , 'mouseover'
  , 'mouseout'
  , 'mousemove'
  // , 'mouseenter' -> not supported by IE
  // , 'mouseleave' -> not supported by IE
  , 'touchstart'
  , 'touchmove'
  , 'touchleave'
  , 'touchend'
  , 'touchcancel' ].forEach(function(event) {

  // add event to Element
  extend(Element, {
    [event]: function(f){
      var self = this

      // bind event to element rather than element node
      this.node['on' + event] = typeof f == 'function' ?
        function() { return f.apply(self, arguments) } : null

      return this
    }
  })
})

// Initialize listeners stack
export let listeners = []
export let handlerMap = []
export let listenerId = 0

// Add event binder in the SVG namespace
export function on(node, event, listener, binding) {
  // create listener, get object-index
  var l     = listener.bind(binding || node.instance || node)
    , index = (handlerMap.indexOf(node) + 1 || handlerMap.push(node)) - 1
    , ev    = event.split('.')[0]
    , ns    = event.split('.')[1] || '*'


  // ensure valid object
  listeners[index]         = listeners[index]         || {}
  listeners[index][ev]     = listeners[index][ev]     || {}
  listeners[index][ev][ns] = listeners[index][ev][ns] || {}

  if(!listener._svgjsListenerId)
    listener._svgjsListenerId = ++listenerId

  // reference listener
  listeners[index][ev][ns][listener._svgjsListenerId] = l

  // add listener
  node.addEventListener(ev, l, false)
}

// Add event unbinder in the SVG namespace
export function off(node, event, listener) {
  var index = handlerMap.indexOf(node)
    , ev    = event && event.split('.')[0]
    , ns    = event && event.split('.')[1]

  if(index == -1) return

  if (listener) {
    if(typeof listener == 'function') listener = listener._svgjsListenerId
    if(!listener) return

    // remove listener reference
    if (listeners[index][ev] && listeners[index][ev][ns || '*']) {
      // remove listener
      node.removeEventListener(ev, listeners[index][ev][ns || '*'][listener], false)

      delete listeners[index][ev][ns || '*'][listener]
    }

  } else if (ns && ev) {
    // remove all listeners for a namespaced event
    if (listeners[index][ev] && listeners[index][ev][ns]) {
      for (listener in listeners[index][ev][ns])
        off(node, [ev, ns].join('.'), listener)

      delete listeners[index][ev][ns]
    }

  } else if (ns){
    // remove all listeners for a specific namespace
    for(event in listeners[index]){
        for(let namespace in listeners[index][event]){
            if(ns === namespace){
                off(node, [event, ns].join('.'))
            }
        }
    }

  } else if (ev) {
    // remove all listeners for the event
    if (listeners[index][ev]) {
      for (let namespace in listeners[index][ev])
        off(node, [ev, namespace].join('.'))

      delete listeners[index][ev]
    }

  } else {
    // remove all listeners on a given node
    for (event in listeners[index])
      off(node, event)

    delete listeners[index]

  }
}

extend(Element, {
  // Bind given event to listener
  on: function(event, listener, binding) {
    on(this.node, event, listener, binding)

    return this
  }
  // Unbind event from listener
, off: function(event, listener) {
    off(this.node, event, listener)

    return this
  }
  // Fire given event
, fire: function(event, data) {

    // Dispatch event
    if(event instanceof Event){
        this.node.dispatchEvent(event)
    }else{
        this.node.dispatchEvent(new CustomEvent(event, {detail:data}))
    }

    return this
  }
})
