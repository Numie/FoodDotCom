import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, receiveCurrentUser } from '../actions/session_actions';

const _nullUser = { currentUser: null };

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { currentUser: action.user });
    default:
      return oldState;
  }
};

export default sessionReducer;
