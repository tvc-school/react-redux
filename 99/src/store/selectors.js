/* Dev */
// eslint-disable-next-line
import { yellow } from 'logger'

export const getEvents = (state) => {
  return state.events
}

const noStatus = {
  status: 'none',
  error: null,
}
export const getRequest = (state, key) => {
  const req = state.requests[key]
  return req === undefined
    ? noStatus
    : req
}



