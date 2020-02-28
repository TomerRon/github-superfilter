// tslint:disable:no-expression-statement
import { shouldInjectSuperfilter } from './injection'

const SET_LOCATION = (href: string) => {
  delete window.location // tslint:disable-line
  ;(window as any).location = { href } // tslint:disable-line
}

describe('injection utils', () => {
  beforeEach(jest.clearAllMocks)

  describe('shouldInjectSuperfilter', () => {
    it('should return true if all conditions match', () => {
      // Superfilter is not already in the page
      jest.spyOn(document, 'querySelector').mockImplementationOnce(() => null)

      // URL matches regex
      SET_LOCATION('https://github.com/foobar/foobar/pull/1337/files')

      expect(shouldInjectSuperfilter()).toBe(true)
    })

    it('should return false if window url does not match regex', () => {
      jest.spyOn(document, 'querySelector').mockImplementationOnce(() => null)

      const invalidUrls: readonly string[] = [
        'https://github.com/foobar/foobar/pull/1337',
        'https://github.com/foobar/foobar/',
        'https://www.google.com'
      ]

      invalidUrls.map(url => {
        SET_LOCATION(url)
        expect(shouldInjectSuperfilter()).toBe(false)
      })
    })

    it('should return false if document.querySelector returns truthy', () => {
      jest
        .spyOn(document, 'querySelector')
        .mockImplementationOnce(() => ({ foo: 'bar' } as any))

      SET_LOCATION('https://github.com/foobar/foobar/pull/1337/files')

      expect(shouldInjectSuperfilter()).toBe(false)
    })
  })
})
