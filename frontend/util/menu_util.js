export const fetchMenuItems = restaurantId => {
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/${restaurantId}/menu_items`
  });
};
