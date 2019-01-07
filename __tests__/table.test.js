import hyperHTML from 'hyperhtml'
import hyperTable from '../src'

hyperHTML.define('Table', Table)

describe('Table', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="app">
    `
  })

  it('should be generated', () => {
    hyperHTML.bind(document.querySelector('#table'))`
    <h1>Table Test</h1>
    ${new hyperTable({
      columns,
      data
    })}
    `
  })
})
