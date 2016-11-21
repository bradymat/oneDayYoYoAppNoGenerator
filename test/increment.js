const test = require('tape')
const reducer = require('../reducer')

test('adds test', (t) => {
  const state = { counterValues: [0]}
  const expected = { counterValues: [1]}
  const actual = reducer(state, {type: 'INCREMENT', payload: 0})
  t.deepEquals(actual, expected, 'adds one')
  t.end()
})

test('adds test', (t) => {
  const state = { counterValues: [3]}
  const expected = { counterValues: [4]}
  const actual = reducer(state, {type: 'INCREMENT', payload: 0})
  t.deepEquals(actual, expected, 'adds one when init state isnt 0')
  t.end()
})
