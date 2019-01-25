import EventEmitter from 'events'
import hyperHTML from 'hyperhtml'

import TableCore from '../flow-typed/core.def'
import Config from './default.config'

import {
  Render,
  SetPage,
  Update,
} from './table'

//@flow
class Table implements TableCore {

  constructor(props: Object) {
    super()
    // set defaults
    this.config = Object.assign(props.config || { }, Config)
    this.columns = props.columns || [ ]
    this.data = props.data || [ ]
    this.events = new EventEmitter()
    this.html = hyperHTML.wire(this)
  }

}

Table.prototype.render = Render
Table.prototype.setPage = SetPage
Table.prototype.update = Update
