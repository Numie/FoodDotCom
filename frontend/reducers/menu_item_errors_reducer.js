import { combineReducers } from 'redux';
import quantityErrorsReducer from './quantity_errors_reducer';
import itemInstructionsErrorsReducer from './item_instructions_errors_reducer';

const menuItemErrorsReducer = combineReducers({
  quantity: quantityErrorsReducer,
  itemInstructions: itemInstructionsErrorsReducer
});

export default menuItemErrorsReducer;
