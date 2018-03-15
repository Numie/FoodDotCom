import { merge } from 'lodash';
import { SESSION_MODAL, SIGNUP_MODAL, MENU_ITEM_MODAL, ORDER_PLACED_MODAL, REVIEW_MODAL} from '../actions/modal_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const defaultModalsUI = {
  sessionModal: false,
  signupModal: false,
  menuItemModal: false,
  orderPlacedModal: false,
  reviewModal: false
};

const modalsReducer = (oldState = defaultModalsUI, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case SESSION_MODAL:
      return merge({}, oldState, {sessionModal: !oldState.sessionModal});
    case SIGNUP_MODAL:
     return merge({}, oldState, {signupModal: !oldState.signupModal});
    case MENU_ITEM_MODAL:
      return merge({}, oldState, {menuItemModal: !oldState.menuItemModal});
    case ORDER_PLACED_MODAL:
      return merge({}, oldState, {orderPlacedModal: !oldState.orderPlacedModal});
    case REVIEW_MODAL:
      return merge({}, oldState, {reviewModal: !oldState.reviewModal});
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
