import { merge } from 'lodash';
import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, oldState, action.errors);
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, []);
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
