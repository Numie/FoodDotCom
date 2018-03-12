import { merge } from 'lodash';
import { ADD_ITEM } from '../actions/order_item_actions';
import { DELETE_ITEM } from '../actions/order_item_actions';
import { saveOrderItems } from '../local_storage/local_storage';


const orderItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case ADD_ITEM:
      const newState = merge({}, oldState, {[action.id]: {id: action.id, name: action.name, price: action.price, quantity: action.quantity, itemInstructions: action.itemInstructions}});
      saveOrderItems(newState);
      return newState;
    case DELETE_ITEM:
      const modifiedState = merge({}, oldState);
      delete modifiedState[action.id];
      saveOrderItems(modifiedState);
      return modifiedState;
    default:
      return oldState;
  }
};

export default orderItemsReducer;
