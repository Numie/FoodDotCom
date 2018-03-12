import { merge } from 'lodash';
import { ADD_ITEM } from '../actions/order_item_actions';

const orderItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case ADD_ITEM:
      return merge({}, oldState, {[action.id]: {id: action.id, name: action.name, price: action.price, quantity: action.quantity, itemInstructions: action.itemInstructions}});
    default:
      return oldState;
  }
};

export default orderItemsReducer;
