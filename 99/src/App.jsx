import React, { Fragment } from 'react'
// User
// import * as authActions from '../store/actions/auth-actions.js'
import AppBar from './AppBar'
import Events from './Events'
// import RegisterForm from './Auth/RegisterForm'
// import LoginForm from './Auth/LoginForm'
import User from './User'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <AppBar />
        <User />
        <Events />
      </Fragment>
    )
  }
}

export default App
