export const sendOrderConfirmation = (email, order, items) => {
  return $.ajax({
    method: 'POST',
    url: '/api/order_confirmation_email',
    data: {order, email, items}
  });
};
