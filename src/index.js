import hyperHTML from 'hyperhtml'

export class hyperTable extends hyperHTML.Component {
  constructor(props) {
    this.props = props
    this.html = hyperHTML.wire(this)
  }
  render() {
    const columns = this.props.columns.map((column, index) =>
      Object.assign(column, { index: index })
    )
    const data = this.props.data.map(vector => {
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
      <table>
        <thead>
          <tr>${columns.map(
            column => hyperHTML.wire()`<th>${column.Header}</th>`
          )}</tr>
        </thead>
        <tbody>
          ${data.map(unit => {
            return hyperHTML.wire()`<tr>${unit.map(item => {
              return hyperHTML.wire()`<td>${item[0]}</td>`
            })}</tr>`
          })}
        </tbody>
      </table>
    `
  }
}
