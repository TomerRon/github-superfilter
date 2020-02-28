/**
 * Returns the superfilter diffbar button
 */

const item = document.createElement('details')

const options: Record<string, string> = {
  className:
    'details-reset details-overlay diffbar-item toc-select select-menu',
  id: 'superfilter',
  innerHTML:
    '<summary class="btn-link muted-link select-menu-button" data-hotkey="f" role="button">\
      <strong>Superfilter</strong>\
    </summary>\
    <details-menu class="select-menu-modal position-absolute" style="z-index: 99;">\
      <div class="select-menu-header">\
        <span class="select-menu-title">\
          Filter or search files\
        </span>\
      </div>\
      <div class="select-menu-filters">\
        <div class="select-menu-text-filter">\
        </div>\
      </div>\
    </details-menu>'
}

// tslint:disable-next-line:no-expression-statement no-object-mutation
Object.keys(options).map(key => ((item as any)[key] = options[key]))

export default item
