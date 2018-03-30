import { merge } from 'lodash';
import { FILTER_RATING, FILTER_PRICE, FILTER_DELIVERY_FEE, CLEAR_FILTERS } from '../actions/restaurant_actions';

const filteredRestaurantsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case FILTER_RATING:
      const newRatingState = {};
      const filteredRatingKeys = Object.keys(action.restaurants).filter(key => parseInt(action.restaurants[key].rating_avg) >= action.rating);
      filteredRatingKeys.forEach(key => newRatingState[key] = action.restaurants[key]);
      return newRatingState;
    case FILTER_PRICE:
      const newPriceState = {};
      const filteredPriceKeys = Object.keys(action.restaurants).filter(key => parseInt(action.restaurants[key].delivery_minimum) <= action.price);
      filteredPriceKeys.forEach(key => newPriceState[key] = action.restaurants[key]);
      return newPriceState;
    case FILTER_DELIVERY_FEE:
      const newDeliveryFeeState = {};
      const referenceDeliveryFee = action.deliveryFee === 'free' ? 0 : action.deliveryFee;
      const filteredDeliveryFeeKeys = Object.keys(action.restaurants).filter(key => parseFloat(action.restaurants[key].delivery_fee) <= referenceDeliveryFee);
      filteredDeliveryFeeKeys.forEach(key => newDeliveryFeeState[key] = action.restaurants[key]);
      return newDeliveryFeeState;
    case CLEAR_FILTERS:
      return {};
    default:
      return oldState;
  }
};

export default filteredRestaurantsReducer;
