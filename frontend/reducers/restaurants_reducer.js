import { merge } from 'lodash';
import { RESTAURANTS } from '../actions/restaurant_actions';
import { saveRestaurants } from '../local_storage/local_storage';

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
