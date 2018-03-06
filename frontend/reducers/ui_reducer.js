import { combineReducers } from 'redux';
import modalsReducer from './modals_reducer';

const uiReducer = combineReducers({
  modals: modalsReducer
});

export default uiReducer;
