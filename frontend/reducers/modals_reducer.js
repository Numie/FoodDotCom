import { merge } from 'lodash';
import { SESSION_MODAL, SIGNUP_MODAL } from '../actions/modal_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const defaultModalsUI = {
  sessionModal: false,
  signupModal: false
};

const modalsReducer = (oldState = defaultModalsUI, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case SESSION_MODAL:
      return merge({}, oldState, {sessionModal: !oldState.sessionModal});
    case SIGNUP_MODAL:
     return merge({}, oldState, {signupModal: !oldState.signupModal});
    case RECEIVE_CURRENT_USER:
      if (action.user) {
        return merge({}, oldState, {sessionModal: !oldState.sessionModal});
      } else {
        return oldState;
      }
      break;
    default:
      return oldState;
  }
};

export default modalsReducer;
