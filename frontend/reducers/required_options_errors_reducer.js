import { merge } from 'lodash';
import {RECEIVE_REQUIRED_OPTIONS_ERRORS, CLEAR_ERRORS} from '../actions/menu_item_actions';

const requiredOptionsErrorsReducer = (oldState = "", action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_REQUIRED_OPTIONS_ERRORS:
      return action.error;
    case CLEAR_ERRORS:
      return "";
    default:
      return oldState;
  }
};

export default requiredOptionsErrorsReducer;
