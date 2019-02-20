import { TableCore } from '../../flow-typed/core.def'
import { EventsEnum } from '../events'


// @flow
/**
 *
 * @param {*} table
 */
function pagination(table: TableCore) {

  const pageSize = table.config.pageSize || table.config.defaultPageSize
  const maxPages = Math.ceil(table.data.length / pageSize)
  const hasMultiplePages = maxPages > 1

  // TODO: left here, figure out how to re-render on paginate -- render calls paginate?
  return table.hyper.wire()`
    <div class="ht-pagination">
        <ul class="ht-pagination-list">
          ${hasMultiplePages ?
            table.hyper.wire()`
              <li class="ht-pagination-item">
                <button class="ht-pagination-btn" onclick="${() => table.paginate({ page: 1 })}">First</button>
              </li>
              ${[...Array(maxPages).keys()].map(p => table.hyper.wire()`
              <li class="ht-pagination-item">
                <button class="ht-pagination-btn" onclick="">${p + 1}</button>
              </li>
              `)}
              <li class="ht-pagination-item">
                <button class="ht-pagination-btn" onclick="${() => table.paginate({ page: maxPages })}">Last</button>
              </li>
            ` :
            null
          }
        </ul>
      </div>
  `
}

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
      ${self.config.showPagination && self.config.showPaginationTop ?
        pagination(self) :
        null
      }
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
      ${self.config.showPagination && self.config.showPaginationBottom ?
        pagination(self) :
        null
      }
    </div>
  `
}
