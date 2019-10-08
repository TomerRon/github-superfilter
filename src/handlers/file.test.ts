// tslint:disable:no-expression-statement
import * as elementUtilsModule from '../utils/element'
import fileHandler from './file'

const FILE: any = {
  name: 'foobar-name',
  node: { foo: 'bar' }
}

describe('file handler', () => {
  const hideElementSpy = jest
    .spyOn(elementUtilsModule, 'hideElement')
    .mockImplementation(null)
  const showElementSpy = jest
    .spyOn(elementUtilsModule, 'showElement')
    .mockImplementation(null)

  beforeEach(jest.clearAllMocks)

  describe('when given a filter value', () => {
    it('should hide a file if it matches', () => {
      const value = '!foobar'

      fileHandler(FILE, value)

      expect(hideElementSpy).toHaveBeenCalledWith(FILE.node)
      expect(showElementSpy).not.toHaveBeenCalled()
    })

    it('should show a file if it does not match', () => {
      const value = '!nope'

      fileHandler({ ...FILE, name: 'foobar-name' }, value)

      expect(hideElementSpy).not.toHaveBeenCalled()
      expect(showElementSpy).toHaveBeenCalledWith(FILE.node)
    })
  })

  describe('when given a search value', () => {
    it('should show a file if it matches', () => {
      const value = 'foobar'

      fileHandler(FILE, value)

      expect(hideElementSpy).not.toHaveBeenCalled()
      expect(showElementSpy).toHaveBeenCalledWith(FILE.node)
    })

    it('should hide a file if it does not match', () => {
      const value = 'nope'

      fileHandler(FILE, value)

      expect(hideElementSpy).toHaveBeenCalledWith(FILE.node)
      expect(showElementSpy).not.toHaveBeenCalled()
    })
  })
})
