import { IFile } from '../types'
import { hideElement, showElement } from '../utils/element'
import { sanitizeValue } from '../utils/file'

/**
 * If the given value matches the file's name, show it
 * Otherwise, hide it
 */
const showFileIfMatches = (file: IFile, value: string) =>
  (file.name.includes(value) ? showElement : hideElement)(file.node)

/**
 * If the given value matches the file's name, hide it
 * Otherwise, show it
 */
const hideFileIfMatches = (file: IFile, value: string) =>
  (file.name.includes(value) ? hideElement : showElement)(file.node)

/**
 * Handles a file based on the given value
 * Makes a decision to either show or hide the file
 */
const fileHandler = (file: IFile, value: string) => {
  const sanitizedValue = sanitizeValue(value)

  const handler = value[0] === '!' ? hideFileIfMatches : showFileIfMatches

  return handler(file, sanitizedValue)
}

export default fileHandler
