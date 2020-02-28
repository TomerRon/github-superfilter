// tslint:disable:no-expression-statement
import button from '../components/button'
import input from '../components/input'
import * as injectionUtilsModule from '../utils/injection'
import injectionHandler from './injection'

describe('injection handler', () => {
  const buttonAppendChildSpy = jest.fn()
  const lastItemInsertBeforeSpy = jest.fn()
  const nextSiblingMock = jest.fn()

  jest.spyOn(button, 'querySelector').mockImplementation(
    () =>
      ({
        appendChild: buttonAppendChildSpy
      } as any)
  )

  jest.spyOn(document, 'querySelector').mockImplementation(
    () =>
      ({
        nextSibling: nextSiblingMock,
        parentNode: {
          insertBefore: lastItemInsertBeforeSpy
        }
      } as any)
  )

  it('should do nothing if shouldInjectSuperfilter returns false', () => {
    jest
      .spyOn(injectionUtilsModule, 'shouldInjectSuperfilter')
      .mockImplementationOnce(() => false)

    injectionHandler()

    expect(buttonAppendChildSpy).not.toHaveBeenCalled()
    expect(lastItemInsertBeforeSpy).not.toHaveBeenCalled()
  })

  it('should inject superfilter if shouldInjectSuperfilter returns true', () => {
    jest
      .spyOn(injectionUtilsModule, 'shouldInjectSuperfilter')
      .mockImplementationOnce(() => true)

    injectionHandler()

    expect(buttonAppendChildSpy).toHaveBeenCalledWith(input)
    expect(lastItemInsertBeforeSpy).toHaveBeenCalledWith(
      button,
      nextSiblingMock
    )
  })
})
