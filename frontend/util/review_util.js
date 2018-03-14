export const fetchReviews = restaurantId => {
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/${restaurantId}/reviews`
  });
};
