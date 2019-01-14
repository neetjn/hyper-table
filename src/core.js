import hyperHTML from 'hyperhtml'
import { Observable } from 'rxjs'

import { Config } from './default.config'

import {
  Render,
  Update,
  SetPage
} from './table'

export class Table extends hyperHTML.Component {
  constructor(props) {
    super()
    this.config = Object.assign(props.config || { }, Config)
    this.columns = props.columns || [ ]
    this.data = props.data || [ ]
    this.html = hyperHTML.wire(this)

    this.setPage({ page: 1 })
  }

  setPage(opts) {
    const self = this

    return new Promise((resolve, reject) => {
      if (opts.page)
        self.page = opts.page
      else {
        if (opts.previousPage)
          self.page -= 1
        else if (opts.nextPage)
          self.page += 1
        else
          reject({ msg: 'Page options were not provided as expected.' })
      }
      if (config.showPagination) {
        const pageSize = self.config.pageSize || self.config.defaultPageSize
        const numPages = Math.ceil(self.data.length / pageSize)
        const currentIndex = self.page * pageSize - self.page
        self.availablePages = []
        self.pageData = self.data.splice(, )
      }
    })
  }
}
