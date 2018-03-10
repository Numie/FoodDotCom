import * as MenuUtil from '../util/menu_util';

export const MENU_ITEMS = 'MENU_ITEMS';

export const receiveMenuItems = menuItems => {
  return ({
    type: MENU_ITEMS,
    menuItems
  });
};

export const fetchMenuItems = restaurantId => dispatch => {
  return (
    MenuUtil.fetchMenuItems(restaurantId)
    .then((menuItems) => dispatch(receiveMenuItems(menuItems)))
  );
};
