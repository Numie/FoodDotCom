import { merge } from 'lodash';
import { RESTAURANTS, FILTER_RATING, FILTER_PRICE, FILTER_DELIVERY_FEE } from '../actions/restaurant_actions';
import { saveRestaurants } from '../local_storage/local_storage';

const restaurantsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RESTAURANTS:
      saveRestaurants(action.restaurants);
      return action.restaurants;
    case FILTER_RATING:
      const newRatingState = {};
      const filteredRatingKeys = Object.keys(oldState).filter(key => parseInt(oldState[key].rating_avg) >= action.rating);
      filteredRatingKeys.forEach(key => newRatingState[key] = oldState[key]);
      return newRatingState;
    case FILTER_PRICE:
      const newPriceState = {};
      const filteredPriceKeys = Object.keys(oldState).filter(key => parseInt(oldState[key].delivery_minimum) <= action.price);
      filteredPriceKeys.forEach(key => newPriceState[key] = oldState[key]);
      return newPriceState;
    case FILTER_DELIVERY_FEE:
      const newDeliveryFeeState = {};
      const filteredDeliveryFeeKeys = Object.keys(oldState).filter(key => parseFloat(oldState[key].delivery_fee) <= action.deliveryFee);
      filteredDeliveryFeeKeys.forEach(key => newDeliveryFeeState[key] = oldState[key]);
      return newDeliveryFeeState;
    default:
      return oldState;
  }
};

export default restaurantsReducer;
