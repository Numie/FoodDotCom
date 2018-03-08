import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import addressReducer from './address_reducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  entities: entitiesReducer,
  session: sessionReducer,
  currentAddress: addressReducer,
  errors: errorsReducer
});

export default rootReducer;
