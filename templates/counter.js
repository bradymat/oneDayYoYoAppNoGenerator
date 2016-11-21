const html = require('yo-yo')

module.exports = (state, dispatch, index) => {
  return html`
    <div>
      <p>${state.counterValues[index]}</p>
      ${Button({type: 'INCREMENT', payload: index}, 'add')}
      ${Button({type: 'DECREMENT', payload: index}, 'remove')}
    </div>
  `
    function Button(action, label){
      return html`
      <button onclick=${() => dispatch(action)}>${ label }</buton>
      `
    }
}
