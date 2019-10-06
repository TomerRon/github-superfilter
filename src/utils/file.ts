import { IFile } from '../types'
import { showElement } from './element'

/**
 * Returns all files that are currently loaded into the page
 */
export const getFiles = (): ReadonlyArray<IFile> =>
  Array.from(document.getElementsByClassName('file')).map(node => ({
    name: node.querySelector('.file-info').querySelector('a').text,
    node: node as HTMLElement
  }))

export const showAllFiles = () => getFiles().map(file => showElement(file.node))

export const sanitizeValue = (value: string) =>
  value[0] === '!' ? value.substr(1) : value
