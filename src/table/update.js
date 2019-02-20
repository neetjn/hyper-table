import { EventsEnum } from '../events'

// @flow
/**
 * Used for updating table data.
 * @param {Array} data - Data for table to visualize.
 */
export default function(data: Array<mixed>) {
  const self = this

  self.data = data
  self.paginate({}, true)
  self.events.emit(EventsEnum.UPDATE)
  self.render()
}
