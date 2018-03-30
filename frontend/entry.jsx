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

  if (sessionStorage.address) {
    preloadedState = merge(preloadedState, { currentAddress: JSON.parse(sessionStorage.address) });
  }

  if (sessionStorage.restaurants) {
    preloadedState = merge(preloadedState, {entities: {restaurants: JSON.parse(sessionStorage.restaurants)}});
  }

  if (sessionStorage.order) {
    preloadedState = merge(preloadedState, {entities: {order: JSON.parse(sessionStorage.order)}});
  }

  if (sessionStorage.orderItems) {
    preloadedState = merge(preloadedState, {entities: {orderItems: JSON.parse(sessionStorage.orderItems)}});
  }

  store = preloadedState ? configureStore(preloadedState) : configureStore();

  ReactDOM.render(<Root store={store}/>, root);
});
