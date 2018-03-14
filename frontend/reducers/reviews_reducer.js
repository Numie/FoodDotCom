import { merge } from 'lodash';
import { RECEIVE_REVIEWS } from '../actions/review_actions';

const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return oldState;
  }
};

export default reviewsReducer;
