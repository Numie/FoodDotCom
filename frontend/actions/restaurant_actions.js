import * as AddressSearchUtil from '../util/address_search_util';

export const RESTAURANTS = 'RESTAURANTS';
export const FILTER_RATING = 'FILTER_RATING';
export const FILTER_PRICE = 'FILTER_PRICE';
export const FILTER_DELIVERY_FEE = 'FILTER_DELIVERY_FEE';
export const CHANGE_FILTER_RATING = 'CHANGE_FILTER_RATING';
export const CHANGE_FILTER_PRICE = 'CHANGE_FILTER_PRICE';
export const CHANGE_FILTER_DELIVERY_FEE = 'CHANGE_FILTER_DELIVERY_FEE';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const RECEIVE_FILTER_ERRORS = 'RECEIVE_FILTER_ERRORS';

export const receiveRestaurants = restaurants => {
  return ({
    type: RESTAURANTS,
    restaurants
  });
};

export const filterRating = (rating, restaurants) => {
  return ({
    type: FILTER_RATING,
    rating,
    restaurants
  });
};

export const filterPrice = (price, restaurants) => {
  return ({
    type: FILTER_PRICE,
    price,
    restaurants
  });
};

export const filterDeliveryFee = (deliveryFee, restaurants) => {
  return ({
    type: FILTER_DELIVERY_FEE,
    deliveryFee,
    restaurants
  });
};

export const changeFilterRating = rating => {
  return ({
    type: CHANGE_FILTER_RATING,
    rating
  });
};

export const changeFilterPrice = price => {
  return ({
    type: CHANGE_FILTER_PRICE,
    price
  });
};

export const changeFilterDeliveryFee = deliveryFee => {
  return ({
    type: CHANGE_FILTER_DELIVERY_FEE,
    deliveryFee
  });
};

export const clearFilters = () => {
  return ({
    type: CLEAR_FILTERS
  });
};

export const receiveFilterErrors = (filterCategory) => {
  return({
    type: RECEIVE_FILTER_ERRORS,
    filterCategory,
    error: "No restaurants match that filter!"
  });
};

export const fetchRestaurants = address => dispatch => {
  return (
    AddressSearchUtil.fetchRestaurants(address)
    .then((restaurants) => dispatch(receiveRestaurants(restaurants)))
  );
};
