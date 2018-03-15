import { merge } from 'lodash';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      const newState = oldState.slice();
      newState.unshift(action.review);
      return newState;
    default:
      return oldState;
  }
};

export default reviewsReducer;
