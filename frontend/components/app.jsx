import React from 'react';
import { AuthRoute, ProtectedRoute, AddressRequiredRoute, CheckoutRoute } from '../util/route_util';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './header';
import Main from './main';
import RestaurantIndex from './restaurant_index/restaurant_index';
import RestaurantShowContainer from './restaurant_show/restaurant_show_container';
import Checkout from './checkout/checkout';
import ErrorPage from './error_page';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ Main } />
        <AddressRequiredRoute exact path='/restaurants' component={ RestaurantIndex }/>
        <AddressRequiredRoute exact path='/restaurants/:id' component={ RestaurantShowContainer }/>
        <CheckoutRoute path='/checkout' component={ Checkout } />
        <Route component={ ErrorPage } />
      </Switch>
    </div>
  );
};

export default App;
