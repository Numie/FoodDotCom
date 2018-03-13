import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants_reducer';
import menuItemsReducer from './menu_items_reducer';
import orderReducer from './order_reducer';
import orderItemsReducer from './order_items_reducer';
import checkoutInfoReducer from './checkout_info_reducer';

const entitiesReducer = combineReducers({
  restaurants: restaurantsReducer,
  menuItems: menuItemsReducer,
  order: orderReducer,
  orderItems: orderItemsReducer,
  checkoutInfo: checkoutInfoReducer
});

export default entitiesReducer;
