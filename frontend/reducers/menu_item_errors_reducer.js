import { combineReducers } from 'redux';
import quantityErrorsReducer from './quantity_errors_reducer';
import itemInstructionsErrorsReducer from './item_instructions_errors_reducer';
import requiredOptionsErrorsReducer from './required_options_errors_reducer';

const menuItemErrorsReducer = combineReducers({
  quantity: quantityErrorsReducer,
  itemInstructions: itemInstructionsErrorsReducer,
  requiredOptions: requiredOptionsErrorsReducer
});

export default menuItemErrorsReducer;
