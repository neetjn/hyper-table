import hyperHTML from 'hyperhtml'
import { Config } from './default.config'

export class Table extends hyperHTML.Component {
  constructor(props) {
    super()
    this.config = Object.assign(props.config || { }, Config)
    this.columns = props.columns || [ ]
    this.data = props.data || [ ]
    this.html = hyperHTML.wire(this)

    this.setPage({ page: 1 })
  }

  //
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

  // invoked when wired, returns table based on component
  render() {
    const columns = this.columns.map((column, index) =>
      Object.assign(column, { index })
    )
    const data = this.data.map(vector => {
      const units = []
      for (var key in vector) {
        units.push([
          vector[key],
          columns.find(column => column.accessor === key).index
        ])
      }
      return units
    })
    data.forEach((unit, index) => {
      data[index] = unit.sort((a, b) => a[1] > b[1])
    })
    return this.html`
      <div class="ht-wrapper">
        <div class="ht-pagination">
          <ul class="ht-pagination-list">
            <!-- <li class="ht-pagination-item">
              <button class="ht-pagination-btn">First</button>
            </li> -->
            <li class="ht-pagination-item">
              <button class="ht-pagination-btn">1</button>
            </li>
            <li class="ht-pagination-item">
              <button class="ht-pagination-btn">2</button>
            </li>
            <li class="ht-pagination-item">
              <button class="ht-pagination-btn">Next</button>
            </li>
            <!-- <li class="ht-pagination-item">
              <button class="ht-pagination-btn">Last</button>
            </li> -->
          </ul>
        </div>
        <div class="ht-container">
          <table class="ht-table">
            <thead>
              <tr>
                ${columns.map(
                  column => hyperHTML.wire()`<th>${column.Header}</th>`
                )}
              </tr>
            </thead>
            <tbody>
              ${data.map(unit => {
                return hyperHTML.wire()`<tr>${unit.map(item => {
                  return hyperHTML.wire()`<td>${item[0]}</td>`
                })}</tr>`
              })}
            </tbody>
          </table>
        </div>
      </div>
    `
  }
}
