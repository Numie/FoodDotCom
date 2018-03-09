import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './header';
import Main from './main';
import RestaurantIndexContainer from './restaurant_index/restaurant_index_container';

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path='/' component={ Main } />
      <Route exact path='/restaurants' component={ RestaurantIndexContainer }/>
    </div>
  );
};

export default App;
