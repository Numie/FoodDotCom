import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './header';
import Main from './main';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
