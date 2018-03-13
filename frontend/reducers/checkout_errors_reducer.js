import { merge } from 'lodash';
import {RECEIVE_DELIVERY_MINIMUM_ERRORS, CLEAR_CHECKOUT_ERRORS} from '../actions/checkout_actions';

const checkoutErrorsReducer = (oldState = "", action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_DELIVERY_MINIMUM_ERRORS:
      return action.error;
    case CLEAR_CHECKOUT_ERRORS:
      return "";
    default:
      return oldState;
  }
};

export default checkoutErrorsReducer;
