import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants_reducer.js';

const entitiesReducer = combineReducers({
  restaurants: restaurantsReducer
});

export default entitiesReducer;
