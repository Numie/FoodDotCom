import { merge } from 'lodash';
import { RESTAURANTS } from '../actions/restaurant_actions';

const restaurantsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RESTAURANTS:
      return action.restaurants;
    default:
      return oldState;
  }
};

export default restaurantsReducer;
