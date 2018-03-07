import { merge } from 'lodash';
import { SESSION_MODAL } from '../actions/modal_actions';
import { SIGNUP_MODAL } from '../actions/modal_actions';


const defaultModalsUI = {
  sessionModal: false,
  signupModal: true
};

const modalsReducer = (oldState = defaultModalsUI, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case SESSION_MODAL:
      return merge({}, oldState, {sessionModal: !oldState.sessionModal});
    case SIGNUP_MODAL:
     return merge({}, oldState, {signupModal: !oldState.signupModal});
    default:
      return oldState;
  }
};

export default modalsReducer;
