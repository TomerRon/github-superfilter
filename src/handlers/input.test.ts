// tslint:disable:no-expression-statement
import * as fileUtilsModule from '../utils/file'
import * as fileHandlerModule from './file'
import inputHandler from './input'

describe('input handler', () => {
  beforeEach(jest.clearAllMocks)

  it('should call showAllFiles when given an empty value', () => {
    const showAllFilesSpy = jest
      .spyOn(fileUtilsModule, 'showAllFiles')
      .mockImplementationOnce(null)

    const mockEvent = {
      target: {
        value: ''
      }
    } as any

    inputHandler(mockEvent)

    expect(showAllFilesSpy).toHaveBeenCalled()
  })

  it('should call getFiles and fileHandler when given a value', () => {
    const files: ReadonlyArray<string> = ['file-1', 'file-2']
    const value = 'foobar-value'

    jest
      .spyOn(fileUtilsModule, 'getFiles')
      .mockImplementationOnce(() => files as any)

    const fileHandlerSpy = jest
      .spyOn(fileHandlerModule, 'default')
      .mockImplementation(null)

    const mockEvent = {
      target: {
        value
      }
    } as any

    inputHandler(mockEvent)

    files.map((file, i) => {
      expect(fileHandlerSpy).toHaveBeenNthCalledWith(i + 1, file, value)
    })
  })
})
