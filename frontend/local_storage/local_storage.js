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
