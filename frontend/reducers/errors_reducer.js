import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import addressErrorsReducer from './address_errors_reducer';
import menuItemErrorsReducer from './menu_item_errors_reducer';
import checkoutErrorsReducer from './checkout_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  address: addressErrorsReducer,
  menuItem: menuItemErrorsReducer,
  checkout: checkoutErrorsReducer
});

export default errorsReducer;
