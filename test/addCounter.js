const test = require('tape')
const reducer = require('../reducer')

test('add counter test', (t) => {
  const state = {
    counterValues: [0]
  }
  const expected = {
    counterValues: [0, 0]
  }
  const actual = reducer(state, {type: 'ADD_COUNTER'})
  console.log(actual)
  t.deepEquals(actual, expected, 'adds a counter')
  t.end()
})
