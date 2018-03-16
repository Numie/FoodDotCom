import * as AddressSearchUtil from '../util/address_search_util';

export const RESTAURANTS = 'RESTAURANTS';
export const FILTER_RATING = 'FILTER_RATING';
export const FILTER_PRICE = 'FILTER_PRICE';
export const FILTER_DELIVERY_FEE = 'FILTER_DELIVERY_FEE';

export const receiveRestaurants = restaurants => {
  return ({
    type: RESTAURANTS,
    restaurants
  });
};

export const filterRating = rating => {
  return ({
    type: FILTER_RATING,
    rating
  });
};

export const filterPrice = price => {
  return ({
    type: FILTER_PRICE,
    price
  });
};

export const filterDeliveryFee = deliveryFee => {
  return ({
    type: FILTER_DELIVERY_FEE,
    deliveryFee
  });
};

export const fetchRestaurants = address => dispatch => {
  return (
    AddressSearchUtil.fetchRestaurants(address)
    .then((restaurants) => dispatch(receiveRestaurants(restaurants)))
  );
};
