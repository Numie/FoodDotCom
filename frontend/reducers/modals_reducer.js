import { merge } from 'lodash';
import { SESSION_MODAL } from '../actions/modal_actions';

const defaultModalsUI = {
  sessionModal: false
};

const modalsReducer = (oldState = defaultModalsUI, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case SESSION_MODAL:
      return merge({}, oldState, {sessionModal: !oldState.sessionModal});
    default:
      return oldState;
  }
};

export default modalsReducer;
