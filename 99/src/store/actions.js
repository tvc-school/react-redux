import { createRequestThunk, logError } from './action-helpers'
import api from 'api'
/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'

// Create
export const eventCreateKey = 'reventCreateKey'
export const eventCreateRequestKey = 'eventCreateRequestKey'

export const eventCreate = (event) => {
  return ({
    type: eventCreateKey,
    payload: { event },
  })
}

export const eventCreateRequest = createRequestThunk({
  request: api.events.create,
  key: eventCreateRequestKey,
  success: [eventCreate],
  failure: [() => logError('Couldn\'t add note', 'warn')],
})

// Read
export const eventsReadKey = 'eventsReadKey'
export const eventsReadRequestKey = 'eventsReadRequestKey'

export const eventsRead = (events) => {
  orange('events', events)
  return ({
    type: eventsReadKey,
    payload: { events },
  })
}

export const eventsReadRequest = createRequestThunk({
  request: api.events.read,
  key: eventsReadRequestKey,
  success: [eventsRead],
  failure: [(error) => logError('Could not get events', 'error')]
})


