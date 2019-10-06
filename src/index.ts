// tslint:disable:no-expression-statement
import injectionHandler from './handlers/injection'

/**
 * When this script loads, try to inject it
 */
injectionHandler()

/**
 * Github internal navigation events do not re-load the script,
 * so we also need to listen to pjax:end events
 */
document.addEventListener('pjax:end', injectionHandler)
