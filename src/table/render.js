import { EventsEnum } from '../events'

// @flow
/**
 *
 */
export default function() {
  const self = this

  if (self.config.showPagination && !self.pagination.page)
    self.paginate({ page: 1 })

  const columns = self.columns.map((column, index) =>
    Object.assign(column, { index })
  )

  const data = (self.config.showPagination ? self.pagination.data : self.data).map(vector => {
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

  self.events.emit(EventsEnum.RENDER)

  return self.html`
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
                column => self.hyper.wire()`<th>${column.Header}</th>`
              )}
            </tr>
          </thead>
          <tbody>
            ${data.map(unit => {
              return self.hyper.wire()`<tr>${unit.map(item => {
                return self.hyper.wire()`<td>${item[0]}</td>`
              })}</tr>`
            })}
          </tbody>
        </table>
      </div>
    </div>
  `
}
