export const SESSION_MODAL = 'SESSION_MODAL';
export const SIGNUP_MODAL = 'SIGNUP_MODAL';
export const MENU_ITEM_MODAL = 'MENU_ITEM_MODAL';

export const toggleSessionModal = () => ({
  type: SESSION_MODAL
});

export const toggleSignupModal = () => ({
  type: SIGNUP_MODAL
});

export const toggleMenuItemModal = () => ({
  type: MENU_ITEM_MODAL
});
