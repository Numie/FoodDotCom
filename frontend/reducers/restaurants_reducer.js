import { merge } from 'lodash';
import { RESTAURANTS, FILTER_RATING, FILTER_PRICE, FILTER_DELIVERY_FEE } from '../actions/restaurant_actions';
import { saveRestaurants } from '../session_storage/session_storage';

const restaurantsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RESTAURANTS:
      saveRestaurants(action.restaurants);
      return action.restaurants;
    default:
      return oldState;
  }
};

export default restaurantsReducer;
