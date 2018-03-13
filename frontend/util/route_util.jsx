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

// Render component if address is present in, otherwise redirect
const AddressRequired = ({ component: Component, path, address, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        address ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )}
    />
  )
}

const Checkout = ({ component: Component, path, loggedIn, address, order, deliveryMinimumReached, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        loggedIn && address && order && deliveryMinimumReached ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )}
    />
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    address: Boolean(Object.keys(state.entities.restaurants).length !== 0),
    order: Boolean(Object.keys(state.entities.orderItems).length !== 0),
    deliveryMinimumReached: Boolean(state.entities.order.total >= state.entities.order.deliveryMinimum)
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

export const AddressRequiredRoute = withRouter(
  connect(mapStateToProps)(AddressRequired)
)

export const CheckoutRoute = withRouter(
  connect(mapStateToProps)(Checkout)
)
