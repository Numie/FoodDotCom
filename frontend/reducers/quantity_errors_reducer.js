import { merge } from 'lodash';
import {RECEIVE_QUANTITY_ERRORS, CLEAR_ERRORS} from '../actions/menu_item_actions';

const quantityErrorsReducer = (oldState = "", action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_QUANTITY_ERRORS:
      return action.error;
    case CLEAR_ERRORS:
      return "";
    default:
      return oldState;
  }
};

export default quantityErrorsReducer;
