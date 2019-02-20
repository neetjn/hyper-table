import { EventsEnum } from '../events'

// @flow
/**
 * Paginate table data,
 * @param {*} opts - Options for pagination processor.
 * @param {*} refresh - If enabled, flag will ignore page options and simply re-define pagination data.
 * @param {*} render - If enabled, flag will trigger a re-render of the component.
 */
export default function(opts: Object, refresh: boolean = false, render: boolean = false) {
  const self = this

  if (!refresh)
    if (opts.page)
      self.pagination.page = opts.page
    else {
      if (opts.previousPage)
        self.pagination.page -= 1
      else if (opts.nextPage)
        self.pagination.page += 1
      else
        self.events.emit(EventsEnum.ERROR, 'Page options were not provided as expected.')
    }

  if (self.config.showPagination) {
    const pageSize = self.config.pageSize || self.config.defaultPageSize
    const base = pageSize * self.pagination.page - pageSize
    self.pagination.data = self.data.slice(base, base + pageSize)
  }

  if (render)
    self.render()
}
