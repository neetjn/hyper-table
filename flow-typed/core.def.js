import hyperHTML from 'hyperhtml'
import { TableConfig } from './config.def'

declare interface TableCore {

  config: TableConfig,
  columns: Array<string>,
  data: Array<mixed>,
  events: EventEmitter,
  html: hyperHTML.Wire,

  constructor(props: Object): void,
  render(): void,
  update(): void,
  setPage(): void

}
