import EventEmitter from 'events'
import hyperHTML from 'hyperhtml'

import { EventsEnum } from './events'
import { TableCore } from '../flow-typed/core.def'
import { Config } from './default.config'

import { Render, SetPage, Update } from './table'

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

    // # emit init event
    this.events.emit(EventsEnum.INIT)
  }
}

// # define interface methods
Table.prototype.render = Render
Table.prototype.setPage = SetPage
Table.prototype.update = Update

module.exports = Table
