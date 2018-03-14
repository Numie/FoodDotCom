export const createOrder = payload => {
  return $.ajax({
    method: 'POST',
    url: '/api/orders',
    data: {order: payload}
  });
};
