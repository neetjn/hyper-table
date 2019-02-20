import { EventsEnum } from '../events'

// @flow
/**
 *
 * @param {*} opts
 * @param {*} refresh
 */
export default function(opts: Object, refresh: boolean = false) {
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
}
