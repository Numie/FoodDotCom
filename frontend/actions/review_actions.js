import * as ReviewUtil from '../util/review_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REVIEWABLE = 'REVIEWABLE';

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviewable = bool => ({
  type: REVIEWABLE,
  bool
});

export const fetchReviews = restaurantId => dispatch => {
  return(
    ReviewUtil.fetchReviews(restaurantId)
    .then(reviews => dispatch(receiveReviews(reviews)))
  );
};

export const createReview = review => dispatch => {
  return(
    ReviewUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
  );
};

export const fetchReviewable = restaurantId => dispatch => {
  return(
    ReviewUtil.fetchReviewable(restaurantId)
    .then(bool => dispatch(receiveReviewable(bool)))
  );
};
