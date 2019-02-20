import EventEmitter from 'events'

import { EventsEnum } from './events'
import { TableCore } from '../flow-typed/core.def'
import { DefaultConfig } from './default.config'

import { Paginate, Render, Update } from './table'

/**
 * hyperTable component instance generator.
 * @param {hyperHTML} hyperHTML - hyperHTML instance to target for components and wiring.
 */
function hyperTable(hyperHTML) {
  // @flow
  class Table extends hyperHTML.Component implements TableCore {
    constructor(props: Object) {
      super()

      // # init scope variables
      this.config = Object.assign(DefaultConfig, props.config || {})
      this.columns = props.columns || []
      this.data = props.data || []
      this.events = new EventEmitter()

      // # init instance variables
      this.hyper = hyperHTML
      this.html = this.hyper.wire(this)

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

  return Table
}

module.exports = hyperTable
