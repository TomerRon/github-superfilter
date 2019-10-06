import button from '../components/button'
import input from '../components/input'
import { shouldInjectSuperfilter } from '../utils/injection'

/**
 * Finds the last item in the diffbar,
 * and appends the button after it
 */
const inject = () => {
  const lastItem = document.querySelector(
    '.diffbar > .float-left > div:not(.show-if-stuck) > details:last-of-type'
  )

  // tslint:disable:no-expression-statement

  // append the input to the button
  button.querySelector('.select-menu-text-filter').appendChild(input)

  // append the button to the diffbar
  lastItem.parentNode.insertBefore(button, lastItem.nextSibling)

  // tslint:enable:no-expression-statement
}

const injectionHandler = () => shouldInjectSuperfilter() && inject()

export default injectionHandler
