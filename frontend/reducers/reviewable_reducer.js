import { merge } from 'lodash';
import { REVIEWABLE, RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const reviewableReducer = (oldState = null, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case REVIEWABLE:
      return action.bool;
    case RECEIVE_CURRENT_USER:
      if (action.user === null) {
        return null;
      } else {
        return oldState;
      }
    case RECEIVE_REVIEW:
      return false;
    default:
      return oldState;
  }
};

export default reviewableReducer;
