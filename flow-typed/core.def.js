import { TableConfig } from './config.def'
import { Pagination } from './pagination.def'

declare interface TableCore {

  config: TableConfig,
  columns: Array<string>,
  data: Array<mixed>,
  pagination: Pagination,
  events: EventEmitter,
  hyper: Object,
  html: Object,

  constructor(props: Object): void,
  paginate(opts: ?Object, refresh: boolean): void,
  render(): void,
  update(data: Array<mixed>): void,

}
