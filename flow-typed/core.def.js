import hyperHTML from 'hyperhtml'

declare interface TableCore extends hyperHTML.Component {
  config: Object
  columns: Array<string>
  data: Array<mixed>
  events: EventEmitter
  html: hyperHTML.Wire
}
