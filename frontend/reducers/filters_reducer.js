import { merge } from 'lodash';
import { FILTER_RATING, FILTER_PRICE, FILTER_DELIVERY_FEE, FILTER_ALL, CLEAR_FILTERS } from '../actions/restaurant_actions';

const filteredRestaurantsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case FILTER_RATING:
      const newRatingState = merge({}, oldState, {selectedRating: action.rating});
      return newRatingState;
    case FILTER_PRICE:
      const newPriceState = merge({}, oldState, {selectedPrice: action.price});
      return newPriceState;
    case FILTER_DELIVERY_FEE:
      const newDeliveryFeeState = merge({}, oldState, {selectedDeliveryFee: action.deliveryFee});
      return newDeliveryFeeState;
    case FILTER_ALL:
      const ratingState = action.rating || oldState.selectedRating;
      const ratingObject = ratingState ? {selectedRating: ratingState} : {};
      const priceState = action.price || oldState.selectedPrice;
      const priceObject = priceState ? {selectedPrice: priceState} : {};
      const deliveryFeeState = action.deliveryFee || oldState.selectedDeliveryFee;
      const deliveryFeeObject = deliveryFeeState ? {selectedDeliveryFee: deliveryFeeState} : {};
      const newState = merge({}, ratingObject, priceObject, deliveryFeeObject);
      return newState;
    case CLEAR_FILTERS:
      return {};
    default:
      return oldState;
  }
};

export default filteredRestaurantsReducer;
