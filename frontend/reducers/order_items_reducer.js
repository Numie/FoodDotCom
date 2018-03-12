import { merge } from 'lodash';
import { ADD_ITEM } from '../actions/order_item_actions';
import { DELETE_ITEM } from '../actions/order_item_actions';


const orderItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case ADD_ITEM:
      return merge({}, oldState, {[action.id]: {id: action.id, name: action.name, price: action.price, quantity: action.quantity, itemInstructions: action.itemInstructions}});
    case DELETE_ITEM:
      const newState = merge({}, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};

export default orderItemsReducer;
