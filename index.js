const { createStore } = require('redux')
const morph = require('morphdom')

const template = require('./templates')
const reducer = require('./reducer')

const initState = {
  counterValues: [0]
}
const store = createStore(reducer, initState)
const { dispatch, subscribe, getState } = store

const updateView = () => {
  const newView = template(getState(), dispatch)
  morph(initView, newView)
}

const main = document.querySelector('main')
const initView = main.appendChild(template(initState, dispatch))

subscribe(updateView)
