import * as MenuUtil from '../util/menu_util';

export const MENU_ITEMS = 'MENU_ITEMS';
export const RECEIVE_QUANTITY_ERRORS = 'RECEIVE_MENU_ITEM_ERRORS';
export const RECEIVE_ITEM_INSTRUCTIONS_ERRORS = 'RECEIVE_ITEM_INSTRUCTIONS_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveMenuItems = menuItems => {
  return ({
    type: MENU_ITEMS,
    menuItems
  });
};

export const receiveQuantityErrors = () => ({
  type: RECEIVE_QUANTITY_ERRORS,
  error: "Easy big fella! The maximum quantity is 99!"
});

export const receiveItemInstructionsErrors = () => ({
  type: RECEIVE_ITEM_INSTRUCTIONS_ERRORS,
  error: "The maximum length of item instructions is 255 characters!"
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchMenuItems = restaurantId => dispatch => {
  return (
    MenuUtil.fetchMenuItems(restaurantId)
    .then((menuItems) => dispatch(receiveMenuItems(menuItems)))
  );
};
