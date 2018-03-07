import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './header';

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
