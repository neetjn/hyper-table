import { EventEnum } from '../events'

export default function() {
  const self = this

  self.events.emit(EventEnum.UPDATE)
  self.render()
}
