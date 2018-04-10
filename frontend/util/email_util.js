export const sendOrderConfirmation = (email, order, items) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: '/api/order_confirmation_email',
    data: {order, email, items}
  });
};
