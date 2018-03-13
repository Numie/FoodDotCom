export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ALL_ITEMS = 'DELETE_ALL_ITEMS';

export const addItem = (id, name, price, quantity, itemInstructions, restaurantId, restaurantName, deliveryMinimum, deliveryFee) => {
  return({
    type: ADD_ITEM,
    id,
    name,
    price,
    quantity,
    itemInstructions,
    restaurantId,
    restaurantName,
    deliveryMinimum,
    deliveryFee
  });
};

export const deleteItem = (id, price, quantity) => ({
  type: DELETE_ITEM,
  id,
  price,
  quantity
});

export const deleteAllItems = () => ({
  type: DELETE_ALL_ITEMS
});
