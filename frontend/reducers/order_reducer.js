import { merge } from 'lodash';
import { ADD_ITEM, DELETE_ITEM } from '../actions/order_item_actions';

const defaultState = {
  restaurantId: null,
  subtotal: 0,
  deliveryFee: 0,
  tax: 0,
  total: 0,
  orderItemIds: []
};

const orderReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case ADD_ITEM:
      const newState = merge({}, oldState);

      if (newState.restaurantId  !== action.restaurantId) {
        newState.restaurantId = action.restaurantId;
        newState.deliveryFee = action.deliveryFee;
        newState.subtotal = 0;
        newState.orderItemIds = [];
      }

      newState.subtotal = newState.subtotal + (parseFloat(action.price) * action.quantity);
      newState.deliveryFee = (action.deliveryFee ? action.deliveryFee : 0);
      newState.tax = (newState.subtotal + newState.deliveryFee) * 0.08875;
      newState.total = newState.subtotal + newState.deliveryFee + newState.tax;
      newState.orderItemIds.push(action.id);

      return newState;
    case DELETE_ITEM:
      const modifiedState = merge({}, oldState);

      modifiedState.orderItemIds = modifiedState.orderItemIds.filter(e => e !== action.id);

      if (modifiedState.orderItemIds.length === 0) {
        return defaultState;
      } else {
        return modifiedState;
      }
      break;
    default:
      return oldState;
  }
};

export default orderReducer;
