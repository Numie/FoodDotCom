import { merge } from 'lodash';
import { ADD_ITEM, DELETE_ITEM, DELETE_ALL_ITEMS } from '../actions/order_item_actions';
import { saveOrderItems } from '../session_storage/session_storage';


const orderItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case ADD_ITEM:
      const newState = merge({}, oldState, {[action.id]: {id: action.id, name: action.name, price: action.price, quantity: action.quantity,
        itemInstructions: action.itemInstructions, item_option_sections: action.item_option_sections, options: action.options}});
      saveOrderItems(newState);
      return newState;
    case DELETE_ITEM:
      const modifiedState = merge({}, oldState);
      delete modifiedState[action.id];
      saveOrderItems(modifiedState);
      return modifiedState;
    case DELETE_ALL_ITEMS:
      saveOrderItems({});
      return {};
    default:
      return oldState;
  }
};

export default orderItemsReducer;
