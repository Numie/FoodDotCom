import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants_reducer.js';
import menuItemsReducer from './menu_items_reducer.js';

const entitiesReducer = combineReducers({
  restaurants: restaurantsReducer,
  menu_items: menuItemsReducer
});

export default entitiesReducer;
