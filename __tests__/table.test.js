import hyperHTML from 'hyperhtml'
import { Table } from '../src'

describe('Table', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="app">
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
    <h1>Table Test</h1>
    ${new Table({
      columns,
      data
    })}
    `
  })
})
