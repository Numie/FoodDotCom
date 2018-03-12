import { merge } from 'lodash';
import { ADD_ITEM } from '../actions/order_item_actions';

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
      return merge({}, oldState);
    default:
      return oldState;
  }
};

export default orderReducer;
