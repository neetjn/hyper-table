import EventEmitter from 'events'
import hyperHTML from 'hyperhtml'

import Config from './default.config'

import {
  render,
  update,
  setPage
} from './table'

//@flow
class Table extends hyperHTML.Component {

  config: Object
  columns: Array<string>
  data: Array<mixed>
  events: EventEmitter
  html: hyperHTML.Wire

  constructor(props: Object) {
    super()

    this.config = Object.assign(props.config || { }, Config)
    this.columns = props.columns || [ ]
    this.data = props.data || [ ]
    this.events = new EventEmitter()
    this.html = hyperHTML.wire(this)
  }
}

Table.prototype.render = render
Table.prototype.update = update
Table.prototype.setPage = setPage
