import { EventsEnum } from '../events'

// @flow
/**
 *
 * @param {*} data
 */
export default function(data: Array<mixed>) {
  const self = this

  self.data = data
  self.paginate({}, true)
  self.events.emit(EventsEnum.UPDATE)
  self.render()
}
