import jsdom from 'jsdom'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'

const doc = jsdom.jsdom('<!doctype html><html><body><div id="chess-timer-app"></div></body></html>')
const win = doc.defaultView

global.document = doc
global.window = win

Object.keys(window).forEach(function(key){
  if (!(key in global)) {
    global[key] = window[key]
  }
})

chai.use(chaiImmutable)