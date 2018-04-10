export const sendOrderConfirmation = (email, order) => {
  debugger
  return $.ajax({
    method: 'GET',
    url: '/api/order_confirmation_email',
    data: {order, email}
  });
};
