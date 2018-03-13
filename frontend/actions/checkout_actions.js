export const RECEIVE_DELIVERY_MINIMUM_ERRORS = 'RECEIVE_DELIVERY_MINIMUM_ERRORS';
export const CLEAR_CHECKOUT_ERRORS = 'CLEAR_CHECKOUT_ERRORS';

export const receiveDeliveryMinimumErrors = () => ({
  type: RECEIVE_DELIVERY_MINIMUM_ERRORS,
  error: "Pony Up! You're order total is below this restaurant's delivery minimum!"
});

export const clearCheckoutErrors = () => ({
  type: CLEAR_CHECKOUT_ERRORS
});
