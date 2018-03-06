import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './header';
import SessionModal from './modals/session_modal';

const App = () => {
  return (
    <div>
      <Header />
      <h1>What up world!</h1>
      <SessionModal />
    </div>
  );
};

export default App;
