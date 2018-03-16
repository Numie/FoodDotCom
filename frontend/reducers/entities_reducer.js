import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants_reducer';
import filteredRestaurantsReducer from './filtered_restaurants_reducer';
import filtersReducer from './filters_reducer';
import menuItemsReducer from './menu_items_reducer';
import orderReducer from './order_reducer';
import orderItemsReducer from './order_items_reducer';
import checkoutInfoReducer from './checkout_info_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  restaurants: restaurantsReducer,
  filteredRestaurants: filteredRestaurantsReducer,
  filters: filtersReducer,
  menuItems: menuItemsReducer,
  order: orderReducer,
  orderItems: orderItemsReducer,
  checkoutInfo: checkoutInfoReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;
