import EventEmitter from 'events'
import hyperHTML from 'hyperhtml'

import { EventsEnum } from './events'
import { TableCore } from '../flow-typed/core.def'
import { Config } from './default.config'

import { Paginate, Render, Update } from './table'

//@flow
class Table extends hyperHTML.Component implements TableCore {
  constructor(props: Object) {
    super()

    // # init scope variables
    this.config = Object.assign(props.config || {}, Config)
    this.columns = props.columns || []
    this.data = props.data || []
    this.events = new EventEmitter()
    this.html = hyperHTML.wire(this)

    // # init pagination details
    this.pagination = {
      page: 0,
      data: []
    }

    // # emit init event
    this.events.emit(EventsEnum.INIT)
  }
}

// # define interface methods
Table.prototype.paginate = Paginate
Table.prototype.render = Render
Table.prototype.update = Update

module.exports = Table
