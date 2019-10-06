import { getFiles, showAllFiles } from '../utils/file'
import fileHandler from './file'

/**
 * Handles an input event
 * If the value is empty, show all files
 * Otherwise, handle the files according to the event value
 */
const inputHandler = (e: Event) => {
  const { value } = e.target as HTMLInputElement
  const shouldShowAllFiles = !value || value === '!'

  return shouldShowAllFiles
    ? showAllFiles()
    : getFiles().map(file => fileHandler(file, value))
}

export default inputHandler
