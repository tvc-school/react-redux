import React from 'react'
import { connect } from 'react-redux'
import * as selectors from 'store/selectors'
import * as eventActions from 'store/actions'
import { green } from 'logger'

class Events extends React.Component {
  componentDidMount() {
    this.props.eventsReadRequest()
  }
  render() {
    const { events, eventsReadRequestStatus } = this.props
    green('events', events)
    if (eventsReadRequestStatus.status !== 'success') {
      return null
    }
    return (
      <div>
        {events.map(e => <p key={e.name}>{e.name}</p>)}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    events: selectors.getEvents(state),
    eventsReadRequestStatus: selectors.getRequest(state, 'eventsReadRequestKey'),
  }
}

export default connect(mapStateToProps, eventActions)(Events)