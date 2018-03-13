import { ADD_CHECKOUT_INFO, REMOVE_CHECKOUT_INFO } from '../actions/checkout_actions';

const checkoutInfoReducer = (oldState = false, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case ADD_CHECKOUT_INFO:
      return true;
    case REMOVE_CHECKOUT_INFO:
      return false;
    default:
      return oldState;
  }
};

export default checkoutInfoReducer;
