// tslint:disable:no-expression-statement
import { hideElement, showElement } from './element'

describe('element utils', () => {
  it('showElement should set node style to display:block', () => {
    const mockNode = {
      style: {
        display: 'foobar'
      }
    }

    expect(mockNode.style.display).toEqual('foobar')

    showElement(mockNode as HTMLElement)

    expect(mockNode.style.display).toEqual('block')
  })

  it('hideElement should set node style to display:none', () => {
    const mockNode = {
      style: {
        display: 'foobar'
      }
    }

    expect(mockNode.style.display).toEqual('foobar')

    hideElement(mockNode as HTMLElement)

    expect(mockNode.style.display).toEqual('none')
  })
})
