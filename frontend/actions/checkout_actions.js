export const RECEIVE_DELIVERY_MINIMUM_ERRORS = 'RECEIVE_DELIVERY_MINIMUM_ERRORS';
export const CLEAR_CHECKOUT_ERRORS = 'CLEAR_CHECKOUT_ERRORS';
export const ADD_CHECKOUT_INFO = 'ADD_CHECKOUT_INFO';
export const REMOVE_CHECKOUT_INFO = 'REMOVE_CHECKOUT_INFO';
export const UPDATE_TIP = 'UPDATE_TIP';

export const updateTip = amount => ({
  type: UPDATE_TIP,
  amount
});

export const addCheckoutInfo = () => ({
  type: ADD_CHECKOUT_INFO
});

export const removeCheckoutInfo = () => ({
  type: REMOVE_CHECKOUT_INFO
});

export const receiveDeliveryMinimumErrors = () => ({
  type: RECEIVE_DELIVERY_MINIMUM_ERRORS,
  error: "Pony Up! You're order total is below this restaurant's delivery minimum!"
});

export const clearCheckoutErrors = () => ({
  type: CLEAR_CHECKOUT_ERRORS
});
