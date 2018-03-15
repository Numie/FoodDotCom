import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const Review = props => {
  const { first_name, rating, review } = props.review;

  return(
    <div className='review-container'>
      <div className='review-name-container'>
        <div className='initial-circle'>{first_name ? first_name[0] : props.currentUser.first_name[0]}</div>
        <h3 className='review-name'>{first_name || props.currentUser.first_name}</h3>
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

export default connect(mapStateToProps, null)(Review);
