import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

// Render wrapped component if not logged in, otherwise redirect
const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        !loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )}
    />
  )
}

// Render component if logged in, otherwise redirect
const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )}
    />
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  }
};

// Need withRouter because Auth and Protected aren't actual routes
// withRouter passes route props to non-Route components
export const AuthRoute = withRouter(
  connect(mapStateToProps)(Auth)
)

export const ProtectedRoute = withRouter(
  connect(mapStateToProps)(Protected)
)
