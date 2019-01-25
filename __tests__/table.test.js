import 'jest-dom/extend-expect'
import hyperHTML from 'hyperhtml'

import { Table } from '../src'

describe('Table', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="table">
    `
  })

  it('should be generated', () => {
    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Age',
        accessor: 'age'
      }
    ]

    const data = [
      {
        name: 'John Doe',
        age: 23
      },
      {
        name: 'Jane Doe',
        age: 26
      }
    ]

    hyperHTML.bind(document.querySelector('#table'))`
    ${new Table({
      columns,
      data
    })}
    `

    expect(document.querySelector('#table > table')).toBeDefined()

    const tableHeaders = document.querySelectorAll('thead > tr > th')
    expect(tableHeaders.length).toEqual(columns.length)
    tableHeaders.forEach((header, index) => {
      expect(header.textContent).toEqual(columns[index].Header)
    })

    const tableRows = document.querySelectorAll('tbody > tr')
    expect(tableRows.length).toEqual(data.length)
    tableRows.forEach((row, index) => {
      const cells = row.querySelectorAll('td')
      expect(cells.length).toEqual(2)
      Object.keys(data[index]).forEach((key, jindex) => {
        expect(data[index][key].toString()).toEqual(cells[jindex].textContent)
      })
    })
  })

  it('pagination should work', () => {
    const columns = [{ Header: 'Number', accessor: 'number' }]
    const data = []
    const config = {
      data,
      showPagination: true,
      showPaginationTop: false,
      showPaginationBottom: false,
      showPageSizeOptions: true,
      pageSizeOptions: [],
      defaultPageSize: 20,
      pageSize: 20,
      showPageJump: true
    }

    hyperHTML.bind(document.querySelector('#table'))`
    ${new Table({
      columns,
      config
    })}
    `

    expect(document.querySelector('#table > table')).toBeDefined()
  })
})
