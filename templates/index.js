const html = require('yo-yo')
const Counter = require('./counter')

module.exports = (state, dispatch) => {
  const { counterValues } = state
  return html`
  <div>
  <button onclick=${() => dispatch({type: 'ADD_COUNTER'})}>Add counter</buton>
    ${counterValues.map((value, index) => {
      return Counter(state, dispatch, index)
    })}
  </div>
`
}
