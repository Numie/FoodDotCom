export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ALL_ITEMS = 'DELETE_ALL_ITEMS';

export const addItem = (id, name, price, quantity, itemInstructions, restaurantId, deliveryFee) => {
  return({
    type: ADD_ITEM,
    id,
    name,
    price,
    quantity,
    itemInstructions,
    restaurantId,
    deliveryFee
  });
};

export const deleteItem = id => ({
  type: DELETE_ITEM,
  id
});

export const deleteAllItems = () => ({
  type: DELETE_ALL_ITEMS
});
