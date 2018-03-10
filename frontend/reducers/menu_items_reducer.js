import { merge } from 'lodash';
import { MENU_ITEMS } from '../actions/menu_item_actions';

const menuItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case MENU_ITEMS:
      return action.menuItems;
    default:
      return oldState;
  }
};

export default menuItemsReducer;
