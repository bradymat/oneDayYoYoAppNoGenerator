const test = require('tape')
const reducer = require('../reducer')

test('removes test', (t) => {
  const state = { counterValues: [0]}
  const expected = { counterValues: [-1]}
  const actual = reducer(state, {type: 'DECREMENT', payload: 0})
  t.deepEquals(actual, expected, 'removes one')
  t.end()
})

test('removes test', (t) => {
  const state = { counterValues: [3]}
  const expected = { counterValues: [2]}
  const actual = reducer(state, {type: 'DECREMENT', payload: 0})
  t.deepEquals(actual, expected, 'removes one when init state isnt 0')
  t.end()
})
