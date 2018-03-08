import { merge } from 'lodash';
import { RECEIVE_ADDRESS_ERRORS, CLEAR_ERRORS } from '../actions/address_actions';

const addressErrorsReducer = (oldState = "", action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ADDRESS_ERRORS:
      return action.error;
    case CLEAR_ERRORS:
      return "";
    default:
      return oldState;
  }
};

export default addressErrorsReducer;
