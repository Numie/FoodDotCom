import React from 'react';

const Review = props => {
  const { first_name, rating, review } = props.review;

  return(
    <div className='review-container'>
      <div className='review-name-container'>
        <div className='initial-circle'>{first_name ? first_name[0] : props.currentUserFirstName[0]}</div>
        <h3 className='review-name'>{first_name || props.currentUserFirstName}</h3>
      </div>
      <div className='review-rating-container'>
        <div className={rating > 0 ? 'star-icon-yellow' : 'star-icon-gray'}></div>
        <div className={rating > 1 ? 'star-icon-yellow' : 'star-icon-gray'}></div>
        <div className={rating > 2 ? 'star-icon-yellow' : 'star-icon-gray'}></div>
        <div className={rating > 3 ? 'star-icon-yellow' : 'star-icon-gray'}></div>
        <div className={rating > 4 ? 'star-icon-yellow' : 'star-icon-gray'}></div>
      </div>
      <div className='review-review-container'>{review}</div>
    </div>
  );
};

export default Review;
