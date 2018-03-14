export const loadAddress = () => {
  try {
    const address = localStorage.getItem('address');
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
    localStorage.setItem('address', serializedAddress);
  } catch (error) {

  }
};

export const saveRestaurants = restaurants => {
  try {
    const serializedRestaurants = JSON.stringify(restaurants);
    localStorage.setItem('restaurants', serializedRestaurants);
  } catch (error) {

  }
};

export const saveOrder = order => {
  try {
    const serializedOrder = JSON.stringify(order);
    localStorage.setItem('order', serializedOrder);
  } catch (error) {

  }
};

export const deleteOrder = () => {
  try {
    localStorage.removeItem('order');
  } catch (error) {

  }
};

export const saveOrderItems = orderItems => {
  try {
    const serializedOrderItems = JSON.stringify(orderItems);
    localStorage.setItem('orderItems', serializedOrderItems);
  } catch (error) {

  }
};

export const deleteOrderItems = () => {
  try {
    localStorage.removeItem('orderItems');
  } catch (error) {

  }
};
