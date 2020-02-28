import inputHandler from '../handlers/input'

/**
 * Returns the superfilter input element
 */

const input = document.createElement('input')

const options: Record<string, any> = {
  autocomplete: 'off',
  autofocus: true,
  className: 'form-control',
  oninput: inputHandler,
  placeholder: 'Try searching for ".js" or filtering out "!test"',
  type: 'text'
}

// tslint:disable-next-line:no-expression-statement no-object-mutation
Object.keys(options).map(key => ((input as any)[key] = options[key]))

export default input
