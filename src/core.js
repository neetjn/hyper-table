import hyperHTML from 'hyperhtml'

export function hyperTable (selectorDOM, columns, data) {
  const el = typeof selectorDOM === 'object' ? selectorDOM : document.querySelector(selectorDOM)
  const render = hyperHTML(el)
  let index = {}
  columns = columns.map((column, index) => Object.assign(column, {index: index}))
  data = data.map(vector => {
  	let units = []
    for (var key in vector) {
    	units.push([vector[key], columns.find(column => column.accessor === key).index])
    }
    return units
  })
	data.forEach((unit, index) => {
  	data[index] = unit.sort((a, b) => a[1] > b[1])
  })
  render`
    <table>
      <thead>
        <tr>${columns.map(column => hyperHTML.wire()`<th>${column.Header}</th>`)}</tr>
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
