import { merge } from 'lodash';
import {RECEIVE_ITEM_INSTRUCTIONS_ERRORS, CLEAR_ERRORS} from '../actions/menu_item_actions';

const itemInstructionsErrorsReducer = (oldState = "", action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ITEM_INSTRUCTIONS_ERRORS:
      return action.error;
    case CLEAR_ERRORS:
      return "";
    default:
      return oldState;
  }
};

export default itemInstructionsErrorsReducer;
