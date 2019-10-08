// tslint:disable:no-expression-statement
import * as elementUtilsModule from './element'
import { getFiles, sanitizeValue, showAllFiles } from './file'

const FILENAMES: ReadonlyArray<string> = [
  'foobar-filename-1',
  'foobar-filename-2'
]

const NODES = FILENAMES.map(filename => ({
  querySelector: (_0: string) => ({
    querySelector: (_1: string) => ({
      text: filename
    })
  })
}))

const getElementsByClassNameSpy = jest
  .spyOn(document, 'getElementsByClassName')
  .mockImplementation(() => NODES as any)

describe('file utils', () => {
  beforeEach(jest.clearAllMocks)

  it('getFiles should return a formatted list of files', () => {
    const actual = getFiles()
    const expected = FILENAMES.map((filename, i) => ({
      name: filename,
      node: NODES[i]
    }))

    expect(actual).toStrictEqual(expected)
    expect(getElementsByClassNameSpy).toHaveBeenCalledWith('file')
  })

  it('showAllFiles should call showElement for each file', () => {
    const showElementSpy = jest
      .spyOn(elementUtilsModule, 'showElement')
      .mockImplementation(null)

    showAllFiles()

    getFiles().map((file, i) =>
      expect(showElementSpy).toHaveBeenNthCalledWith(i + 1, file.node)
    )
  })

  describe('sanitizeValue', () => {
    const TEST_STRING = 'foobar'

    it('should remove leading exclamation mark in a given value', () => {
      expect(sanitizeValue(`!${TEST_STRING}`)).toEqual(TEST_STRING)
    })

    it('should return given value by default', () => {
      expect(sanitizeValue(`${TEST_STRING}`)).toEqual(TEST_STRING)
    })
  })
})
