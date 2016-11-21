const clone = require('clone')

module.exports = (state, action) => {
  const { type, payload } = action
  const newState = clone(state)
  const { counterValues } = newState
  switch (type) {
    case 'ADD_COUNTER':
      counterValues.push(0)
      return newState
    case 'INCREMENT':
      counterValues[payload] +=  1
      return newState
    case 'DECREMENT':
      counterValues[payload] -=  1
      return newState
    default:
      return newState
  }
}
