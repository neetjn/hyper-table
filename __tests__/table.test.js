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
        age: 23,
      },
      {
        age: 26,
        name: 'Jane Doe',
      }
    ]

    hyperHTML.bind(document.querySelector('#table'))`
    ${new Table({
      columns,
      data
    })}
    `
    expect
  })
})
