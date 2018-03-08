import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import addressErrorsReducer from './address_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  address: addressErrorsReducer
});

export default errorsReducer;
