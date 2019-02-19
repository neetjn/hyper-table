import { EventsEnum } from '../events'

// @flow
export default function(data: Array<mixed>) {
  const self = this

  self.data = data
  self.setPage({}, true)
  self.events.emit(EventsEnum.UPDATE)
  self.render()
}
