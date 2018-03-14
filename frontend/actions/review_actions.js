import * as ReviewUtil from '../util/review_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const fetchReviews = restaurantId => dispatch => {
  return(
    ReviewUtil.fetchReviews(restaurantId)
    .then(reviews => dispatch(receiveReviews(reviews)))
  );
};
