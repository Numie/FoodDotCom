import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { merge } from 'lodash';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = merge(preloadedState, { session: { currentUser: window.currentUser } });
    delete window.currentUser;
  }

  if (localStorage.address) {
    preloadedState = merge(preloadedState, { currentAddress: JSON.parse(localStorage.address) });
  }

  if (localStorage.restaurants) {
    preloadedState = merge(preloadedState, {entities: {restaurants: JSON.parse(localStorage.restaurants)}});
  }

  store = preloadedState ? configureStore(preloadedState) : configureStore();

  window.getState = store.getState;

  ReactDOM.render(<Root store={store}/>, root);
});
