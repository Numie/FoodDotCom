export const loadAddress = () => {
  try {
    const address = sessionStorage.getItem('address');
    if (address === null) {
      return undefined;
    }
    return address;
  } catch (error) {
    return undefined;
  }
};

export const saveAddress = (address) => {
  try {
    const serializedAddress = JSON.stringify(address);
    sessionStorage.setItem('address', serializedAddress);
  } catch (error) {

  }
};

export const saveRestaurants = restaurants => {
  try {
    const serializedRestaurants = JSON.stringify(restaurants);
    sessionStorage.setItem('restaurants', serializedRestaurants);
  } catch (error) {

  }
};

export const saveOrder = order => {
  try {
    const serializedOrder = JSON.stringify(order);
    sessionStorage.setItem('order', serializedOrder);
  } catch (error) {

  }
};

export const deleteOrder = () => {
  try {
    sessionStorage.removeItem('order');
  } catch (error) {

  }
};

export const saveOrderItems = orderItems => {
  const orderItemsCopy = Object.assign({}, orderItems);
  try {
    for (let id in orderItemsCopy) {
      orderItemsCopy[id].options = [...orderItemsCopy[id].options];
    }
    const serializedOrderItems = JSON.stringify(orderItemsCopy);
    sessionStorage.setItem('orderItems', serializedOrderItems);
  } catch (error) {

  }
};

export const deleteOrderItems = () => {
  try {
    sessionStorage.removeItem('orderItems');
  } catch (error) {

  }
};
