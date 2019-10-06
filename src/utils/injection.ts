/**
 * Returns true if superfilter should be injected
 */
export const shouldInjectSuperfilter = () => {
  const conditions: ReadonlyArray<boolean> = [
    // URL should match regex
    !!window.location.href.match(/.*github\.com\/.*\/pull\/.*\/files.*/),
    // Superfilter should not already be in the page
    !document.querySelector('#superfilter')
  ]

  return conditions.every(Boolean)
}
