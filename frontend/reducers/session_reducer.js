import { combineReducers } from 'redux';
import currentUserReducer from './current_user_reducer';
import reviewableReducer from './reviewable_reducer';

const sessionReducer = combineReducers({
  currentUser: currentUserReducer,
  reviewable: reviewableReducer
});

export default sessionReducer;
