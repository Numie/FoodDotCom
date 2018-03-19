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

  if (localStorage.order) {
    preloadedState = merge(preloadedState, {entities: {order: JSON.parse(localStorage.order)}});
  }

  if (localStorage.orderItems) {
    preloadedState = merge(preloadedState, {entities: {orderItems: JSON.parse(localStorage.orderItems)}});
  }

  store = preloadedState ? configureStore(preloadedState) : configureStore();

  ReactDOM.render(<Root store={store}/>, root);
});
