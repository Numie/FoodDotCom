export const fetchReviews = restaurantId => {
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/${restaurantId}/reviews`
  });
};

export const createReview = review => {
  return $.ajax({
    method: 'POST',
    url: `/api/restaurants/${review.restaurant_id}/reviews`,
    data: { review }
  });
};
