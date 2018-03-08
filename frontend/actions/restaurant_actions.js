import * as AddressSearchUtil from '../util/address_search_util';

export const RESTAURANTS = 'RESTAURANTS';

export const receiveRestaurants = restaurants => {
  return ({
    type: RESTAURANTS,
    restaurants
  });
};

export const fetchRestaurants = address => dispatch => {
  return (
    AddressSearchUtil.fetchRestaurants(address)
    .then((restaurants) => dispatch(receiveRestaurants(restaurants)))
  );
};
