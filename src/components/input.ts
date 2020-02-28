import inputHandler from '../handlers/input'

/**
 * Returns the superfilter input element
 */

const input = document.createElement('input')

const options = {
  autocomplete: 'off',
  autofocus: true,
  className: 'form-control',
  oninput: inputHandler,
  placeholder: 'Try searching for ".js" or filtering out "!test"',
  type: 'text'
}

export default Object.assign(input, options) // tslint:disable-line no-object-mutation prefer-object-spread
