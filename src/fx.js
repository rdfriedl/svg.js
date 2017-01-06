import Element from './element.js';
import Group from './group.js';
import Text from './text.js';
import {extend, create} from './svg.js';
import svg_Number from './number.js';
import Color from 'color.js';
import ViewBox from './viewbox.js';
import Matrix from './matrix.js';
import regex from './regex.js';

export const easing = {
  '-': function(pos){return pos}
, '<>':function(pos){return -Math.cos(pos * Math.PI) / 2 + 0.5}
, '>': function(pos){return  Math.sin(pos * Math.PI / 2)}
, '<': function(pos){return -Math.cos(pos * Math.PI / 2) + 1}
}

export function morph(pos) {
  return function(from, to) {
    return new MorphObj(from, to).at(pos)
  }
}

export class Situation{
  constructor(o){
    this.init = false
    this.reversed = false
    this.reversing = false

    this.duration = new svg_Number(o.duration).valueOf()
    this.delay = new svg_Number(o.delay).valueOf()

    this.start = +new Date() + this.delay
    this.finish = this.start + this.duration
    this.ease = o.ease

    this.loop = false
    this.loops = false

    this.animations = {
      // functionToCall: [list of morphable objects]
      // e.g. move: [SVG.Number, SVG.Number]
    }

    this.attrs = {
      // holds all attributes which are not represented from a function svg.js provides
      // e.g. someAttr: SVG.Number
    }

    this.styles = {
      // holds all styles which should be animated
      // e.g. fill-color: SVG.Color
    }

    this.transforms = [
      // holds all transformations as transformation objects
      // e.g. [SVG.Rotate, SVG.Translate, SVG.Matrix]
    ]

    this.once = {
      // functions to fire at a specific position
      // e.g. "0.5": function foo(){}
    }
  }
}

export class Delay{
  constructor(dealy){
    this.delay = new svg_Number(delay).valueOf()
  }
}

export default class FX{
  constructor(element){
    this._target = element
    this.situations = []
    this.active = false
    this.situation = null
    this.paused = false
    this.lastPos = 0
    this.pos = 0
  }

  /**
   * sets or returns the target of this animation
   * @param o object || number In case of Object it holds all parameters. In case of number its the duration of the animation
   * @param ease function || string Function which should be used for easing or easing keyword
   * @param delay Number indicating the delay before the animation starts
   * @return target || this
   */
  animate(o, ease, delay){
    if(typeof o == 'object'){
      ease = o.ease
      delay = o.delay
      o = o.duration
    }

    var situation = new Situation({
      duration: o || 1000,
      delay: delay || 0,
      ease: easing[ease || '-'] || ease
    })

    this.queue(situation)

    return this
  }

  /**
   * sets a delay before the next element of the queue is called
   * @param delay Duration of delay in milliseconds
   * @return this.target()
   */
  delay(delay){
    var delay = new Delay(delay)

    return this.queue(delay)
  }

  /**
   * sets or returns the target of this animation
   * @param null || target SVG.Elemenet which should be set as new target
   * @return target || this
   */
  target(target){
    if(target && target instanceof Element){
      this._target = target
      return this
    }

    return this._target
  }

  // returns the position at a given time
  timeToPos(timestamp){
    return (timestamp - this.situation.start) / (this.situation.duration)
  }

  // returns the timestamp from a given positon
  posToTime(pos){
    return this.situation.duration * pos + this.situation.start
  }

  // starts the animationloop
  startAnimFrame(){
    this.stopAnimFrame()
    this.animationFrame = requestAnimationFrame(function(){ this.step() }.bind(this))
  }

  // cancels the animationframe
  stopAnimFrame(){
    cancelAnimationFrame(this.animationFrame)
  }

  // kicks off the animation - only does something when the queue is curretly not active and at least one situation is set
  start(){
    // dont start if already started
    if(!this.active && this.situation){
      this.situation.start = +new Date + this.situation.delay
      this.situation.finish = this.situation.start + this.situation.duration

      this.initAnimations()
      this.active = true
      this.startAnimFrame()
    }

    return this
  }

  /**
   * adds a function / Situation to the animation queue
   * @param fn function / situation to add
   * @return this
   */
  queue(fn){
    if(typeof fn == 'function' || fn instanceof Situation || fn instanceof Delay)
      this.situations.push(fn)

    if(!this.situation) this.situation = this.situations.shift()

    return this
  }

  /**
   * pulls next element from the queue and execute it
   * @return this
   */
  dequeue(){
    // stop current animation
    this.situation && this.situation.stop && this.situation.stop()

    // get next animation from queue
    this.situation = this.situations.shift()

    if(this.situation){

      var fn = function(){
        if(this.situation instanceof Situation)
          this.initAnimations().at(0)
        else if(this.situation instanceof Delay)
          this.dequeue()
        else
          this.situation.call(this)
      }.bind(this)

      // start next animation
      if(this.situation.delay){
        setTimeout(function(){fn()}, this.situation.delay)
      }else{
        fn()
      }

    }

    return this
  }

  // updates all animations to the current state of the element
  // this is important when one property could be changed from another property
  initAnimations() {
    var i
    var s = this.situation

    if(s.init) return this

    for(i in s.animations){

      if(i == 'viewbox'){
        s.animations[i] = this.target().viewbox().morph(s.animations[i])
      }else{

        // TODO: this is not a clean clone of the array. We may have some unchecked references
        s.animations[i].value = (i == 'plot' ? this.target().array().value : this.target()[i]())

        // sometimes we get back an object and not the real value, fix this
        if(s.animations[i].value.value){
          s.animations[i].value = s.animations[i].value.value
        }

        if(s.animations[i].relative)
          s.animations[i].destination.value = s.animations[i].destination.value + s.animations[i].value

      }

    }

    for(i in s.attrs){
      if(s.attrs[i] instanceof Color){
        var color = new Color(this.target().attr(i))
        s.attrs[i].r = color.r
        s.attrs[i].g = color.g
        s.attrs[i].b = color.b
      }else{
        s.attrs[i].value = this.target().attr(i)// + s.attrs[i].value
      }
    }

    for(i in s.styles){
      s.styles[i].value = this.target().style(i)
    }

    s.initialTransformation = this.target().matrixify()

    s.init = true
    return this
  }
  clearQueue(){
    this.situations = []
    return this
  }
  clearCurrent(){
    this.situation = null
    return this
  }
  /** stops the animation immediately
   * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately.
   * @param clearQueue A Boolean indicating whether to remove queued animation as well.
   * @return this
   */
  stop(jumpToEnd, clearQueue){
    if(!this.active) this.start()

    if(clearQueue){
      this.clearQueue()
    }

    this.active = false

    if(jumpToEnd && this.situation){

      this.situation.loop = false

      if(this.situation.loops % 2 == 0 && this.situation.reversing){
        this.situation.reversed = true
      }

      this.at(1)

    }

    this.stopAnimFrame()
    clearTimeout(this.timeout)

    return this.clearCurrent()
  }

  /** resets the element to the state where the current element has started
   * @return this
   */
  reset(){
    if(this.situation){
      var temp = this.situation
      this.stop()
      this.situation = temp
      this.at(0)
    }
    return this
  }

  // Stop the currently-running animation, remove all queued animations, and complete all animations for the element.
  finish(){
    this.stop(true, false)

    while(this.dequeue().situation && this.stop(true, false));

    this.clearQueue().clearCurrent()

    return this
  }

  // set the internal animation pointer to the specified position and updates the visualisation
  at(pos){
    this.pos = pos
    this.situation.start = +new Date - pos * this.situation.duration
    this.situation.finish = this.situation.start + this.situation.duration
    return this.step(true)
  }

  // speeds up the animation by the given factor
  // this changes the duration of the animation
  speed(speed){
    this.situation.duration = this.situation.duration * this.pos + (1-this.pos) * this.situation.duration / speed
    this.situation.finish = this.situation.start + this.situation.duration
    return this.at(this.pos)
  }
  // Make loopable
  loop(times, reverse) {
    // store current loop and total loops
    this.situation.loop = this.situation.loops = times || true

    if(reverse) this.last().reversing = true
    return this
  }

  // pauses the animation
  pause(){
    this.paused = true
    this.stopAnimFrame()
    clearTimeout(this.timeout)
    return this
  }

  // unpause the animation
  play(){
    if(!this.paused) return this
    this.paused = false
    return this.at(this.pos)
  }

  /**
   * toggle or set the direction of the animation
   * true sets direction to backwards while false sets it to forwards
   * @param reversed Boolean indicating whether to reverse the animation or not (default: toggle the reverse status)
   * @return this
   */
  reverse(reversed){
    var c = this.last()

    if(typeof reversed == 'undefined') c.reversed = !c.reversed
    else c.reversed = reversed

    return this
  }


  /**
   * returns a float from 0-1 indicating the progress of the current animation
   * @param eased Boolean indicating whether the returned position should be eased or not
   * @return number
   */
  progress(easeIt){
    return easeIt ? this.situation.ease(this.pos) : this.pos
  }

  /**
   * adds a callback function which is called when the current animation is finished
   * @param fn Function which should be executed as callback
   * @return number
   */
  after(fn){
    var c = this.last()
      , wrapper = function wrapper(e){
          if(e.detail.situation == c){
            fn.call(this, c)
            this.off('finished.fx', wrapper) // prevent memory leak
          }
        }

    this.target().on('finished.fx', wrapper)
    return this
  }

  // adds a callback which is called whenever one animation step is performed
  during(fn){
    var c = this.last()
      , wrapper = function(e){
          if(e.detail.situation == c){
            fn.call(this, e.detail.pos, morph(e.detail.pos), e.detail.eased, c)
          }
        }

    // see above
    this.target().off('during.fx', wrapper).on('during.fx', wrapper)

    return this.after(function(){
      this.off('during.fx', wrapper)
    })
  }

  // calls after ALL animations in the queue are finished
  afterAll(fn){
    var wrapper = function wrapper(e){
          fn.call(this)
          this.off('allfinished.fx', wrapper)
        }

    // see above
    this.target().off('allfinished.fx', wrapper).on('allfinished.fx', wrapper)
    return this
  }

  // calls on every animation step for all animations
  duringAll(fn){
    var wrapper = function(e){
          fn.call(this, e.detail.pos, morph, e.detail.eased, e.detail.situation)
        }

    this.target().off('during.fx', wrapper).on('during.fx', wrapper)

    return this.afterAll(function(){
      this.off('during.fx', wrapper)
    })
  }

  last(){
    return this.situations.length ? this.situations[this.situations.length-1] : this.situation
  }

  // adds one property to the animations
  add(method, args, type){
    this.last()[type || 'animations'][method] = args
    setTimeout(function(){this.start()}.bind(this), 0)
    return this
  }

  /** perform one step of the animation
   *  @param ignoreTime Boolean indicating whether to ignore time and use position directly or recalculate position based on time
   *  @return this
   */
  step(ignoreTime){
    // convert current time to position
    if(!ignoreTime) this.pos = this.timeToPos(+new Date)

    if(this.pos >= 1 && (this.situation.loop === true || (typeof this.situation.loop == 'number' && --this.situation.loop))){

      if(this.situation.reversing){
        this.situation.reversed = !this.situation.reversed
      }
      return this.at(this.pos-1)
    }

    if(this.situation.reversed) this.pos = 1 - this.pos

    // correct position
    if(this.pos > 1)this.pos = 1
    if(this.pos < 0)this.pos = 0

    // apply easing
    var eased = this.situation.ease(this.pos)

    // call once-callbacks
    for(var i in this.situation.once){
      if(i > this.lastPos && i <= eased){
        this.situation.once[i].call(this.target(), this.pos, eased)
        delete this.situation.once[i]
      }
    }

    // fire during callback with position, eased position and current situation as parameter
    if(this.active) this.target().fire('during', {pos: this.pos, eased: eased, fx: this, situation: this.situation})

    // the user may call stop or finish in the during callback
    // so make sure that we still have a valid situation
    if(!this.situation){
      return this
    }

    // apply the actual animation to every property
    this.eachAt()

    // do final code when situation is finished
    if((this.pos == 1 && !this.situation.reversed) || (this.situation.reversed && this.pos == 0)){

      // stop animation callback
      this.stopAnimFrame()

      // fire finished callback with current situation as parameter
      this.target().fire('finished', {fx:this, situation: this.situation})

      if(!this.situations.length){
        this.target().fire('allfinished')
        this.target().off('.fx') // there shouldnt be any binding left, but to make sure...
        this.active = false
      }

      // start next animation
      if(this.active) this.dequeue()
      else this.clearCurrent()

    }else if(!this.paused && this.active){
      // we continue animating when we are not at the end
      this.startAnimFrame()
    }

    // save last eased position for once callback triggering
    this.lastPos = eased
    return this
  }

  // calculates the step for every property and calls block with it
  eachAt(){
    var i, at, self = this, target = this.target(), s = this.situation

    // apply animations which can be called trough a method
    for(i in s.animations){
      at = [].concat(s.animations[i]).map(function(el){
        return el.at ? el.at(s.ease(self.pos), self.pos) : el
      })

      target[i].apply(target, at)
    }

    // apply animation which has to be applied with attr()
    for(i in s.attrs){
      at = [i].concat(s.attrs[i]).map(function(el){
        return el.at ? el.at(s.ease(self.pos), self.pos) : el
      })

      target.attr.apply(target, at)
    }

    // apply animation which has to be applied with style()
    for(i in s.styles){
      at = [i].concat(s.styles[i]).map(function(el){
        return el.at ? el.at(s.ease(self.pos), self.pos) : el
      })

      target.style.apply(target, at)
    }

    // animate initialTransformation which has to be chained
    if(s.transforms.length){

      // get inital initialTransformation
      at = s.initialTransformation
      for(i in s.transforms){

        // get next transformation in chain
        var a = s.transforms[i]

        // multiply matrix directly
        if(a instanceof Matrix){

          if(a.relative){
            at = at.multiply(a.at(s.ease(this.pos)))
          }else{
            at = at.morph(a).at(s.ease(this.pos))
          }
          continue
        }

        // when transformation is absolute we have to reset the needed transformation first
        if(!a.relative)
          a.undo(at.extract())

        // and reapply it after
        at = at.multiply(a.at(s.ease(this.pos)))

      }

      // set new matrix on element
      target.matrix(at)
    }

    return this
  }


  // adds an once-callback which is called at a specific position and never again
  once(pos, fn, isEased){
    if(!isEased)pos = this.situation.ease(pos)

    this.situation.once[pos] = fn

    return this
  }
}

extend(Element, {
  // Get fx module or create a new one, then animate with given duration and ease
  animate: function(o, ease, delay) {
    return (this.fx || (this.fx = new FX(this))).animate(o, ease, delay)
  }
, delay: function(delay){
    return (this.fx || (this.fx = new FX(this))).delay(delay)
  }
, stop: function(jumpToEnd, clearQueue) {
    if (this.fx)
      this.fx.stop(jumpToEnd, clearQueue)

    return this
  }
, finish: function() {
    if (this.fx)
      this.fx.finish()

    return this
  }
  // Pause current animation
, pause: function() {
    if (this.fx)
      this.fx.pause()

    return this
  }
  // Play paused current animation
, play: function() {
    if (this.fx)
      this.fx.play()

    return this
  }
})

// MorphObj is used whenever no morphable object is given
export class MorphObj{
  constructor(from, to){
    // prepare color for morphing
    if(Color.isColor(to)) return new Color(from).morph(to)
    // prepare number for morphing
    if(regex.numberAndUnit.test(to)) return new svg_Number(from).morph(to)

    // prepare for plain morphing
    this.value = 0
    this.destination = to
  }

  at(pos, real){
    return real < 1 ? this.value : this.destination
  }

  valueOf(){
    return this.value
  }
}

extend(FX, {
  // Add animatable attributes
  attr: function(a, v, relative) {
    // apply attributes individually
    if (typeof a == 'object') {
      for (var key in a)
        this.attr(key, a[key])

    } else {
      // the MorphObj takes care about the right function used
      this.add(a, new MorphObj(null, v), 'attrs')
    }

    return this
  }
  // Add animatable styles
, style: function(s, v) {
    if (typeof s == 'object')
      for (var key in s)
        this.style(key, s[key])

    else
      this.add(s, new MorphObj(null, v), 'styles')

    return this
  }
  // Animatable x-axis
, x: function(x, relative) {
    if(this.target() instanceof Group){
      this.transform({x:x}, relative)
      return this
    }

    var num = new svg_Number().morph(x)
    num.relative = relative
    return this.add('x', num)
  }
  // Animatable y-axis
, y: function(y, relative) {
    if(this.target() instanceof Group){
      this.transform({y:y}, relative)
      return this
    }

    var num = new svg_Number().morph(y)
    num.relative = relative
    return this.add('y', num)
  }
  // Animatable center x-axis
, cx: function(x) {
    return this.add('cx', new svg_Number().morph(x))
  }
  // Animatable center y-axis
, cy: function(y) {
    return this.add('cy', new svg_Number().morph(y))
  }
  // Add animatable move
, move: function(x, y) {
    return this.x(x).y(y)
  }
  // Add animatable center
, center: function(x, y) {
    return this.cx(x).cy(y)
  }
  // Add animatable size
, size: function(width, height) {
    if (this.target() instanceof Text) {
      // animate font size for Text elements
      this.attr('font-size', width)

    } else {
      // animate bbox based size for all other elements
      var box

      if(!width || !height){
        box = this.target().bbox()
      }

      if(!width){
        width = box.width / box.height  * height
      }

      if(!height){
        height = box.height / box.width  * width
      }

      this.add('width' , new svg_Number().morph(width))
          .add('height', new svg_Number().morph(height))

    }

    return this
  }
  // Add animatable plot
, plot: function(p) {
    return this.add('plot', this.target().array().morph(p))
  }
  // Add leading method
, leading: function(value) {
    return this.target().leading ?
      this.add('leading', new svg_Number().morph(value)) :
      this
  }
  // Add animatable viewbox
, viewbox: function(x, y, width, height) {
    if (this.target() instanceof Container) {
      this.add('viewbox', new ViewBox(x, y, width, height))
    }

    return this
  }
, update: function(o) {
    if (this.target() instanceof Stop) {
      if (typeof o == 'number' || o instanceof svg_Number) {
        return this.update({
          offset:  arguments[0]
        , color:   arguments[1]
        , opacity: arguments[2]
        })
      }

      if (o.opacity != null) this.attr('stop-opacity', o.opacity)
      if (o.color   != null) this.attr('stop-color', o.color)
      if (o.offset  != null) this.attr('offset', o.offset)
    }

    return this
  }
})
