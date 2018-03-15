import React from 'react';
import { createReview } from '../../actions/review_actions';
import { toggleReviewModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  toggleReviewModal: () => dispatch(toggleReviewModal())
});

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      currentRating: 0,
      ratingSaved: false,
      review: ""
    };

    this.toggleReviewModal = this.toggleReviewModal.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.handleResetRatingClick = this.handleResetRatingClick.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  handleMouseMovement(number) {
    return(e) => {
      if (!this.state.ratingSaved) {
        this.setState({'currentRating': number});
      }
    };
  }

  handleRatingClick() {
    this.setState({'ratingSaved': true});
  }

  handleResetRatingClick() {
    this.setState({'ratingSaved': false});
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    };
  }

  toggleReviewModal(e) {
    if (e.target === e.currentTarget) {
      this.props.toggleReviewModal();
    }
  }

  submitReview(e) {
    e.preventDefault();

    const review = {
      user_id: this.props.currentUserId,
      restaurant_id: this.props.match.params.id,
      rating: this.state.currentRating,
      review: this.state.review
    };

    this.props.createReview(review)
    .then(() => this.props.toggleReviewModal());
  }

  render() {
    return (
      <div className='modal-container' onClick={this.toggleReviewModal}>
        <div className='review-modal'>
          <div>
            <h1>Rate and Review {this.props.restaurantName}</h1>
          </div>
          <div className='star-rating-container' onMouseLeave={this.handleMouseMovement(0)}>
            <div className={this.state.currentRating > 0 ? 'star-rating-red' : 'star-rating-gray'} onMouseEnter={this.handleMouseMovement(1)} onClick={this.handleRatingClick}></div>
            <div className={this.state.currentRating > 1 ? 'star-rating-red' : 'star-rating-gray'} onMouseEnter={this.handleMouseMovement(2)} onClick={this.handleRatingClick}></div>
            <div className={this.state.currentRating > 2 ? 'star-rating-red' : 'star-rating-gray'} onMouseEnter={this.handleMouseMovement(3)} onClick={this.handleRatingClick}></div>
            <div className={this.state.currentRating > 3 ? 'star-rating-red' : 'star-rating-gray'} onMouseEnter={this.handleMouseMovement(4)} onClick={this.handleRatingClick}></div>
            <div className={this.state.currentRating > 4 ? 'star-rating-red' : 'star-rating-gray'} onMouseEnter={this.handleMouseMovement(5)} onClick={this.handleRatingClick}></div>

          </div>
          <div className='rating-text-container'>
            <div className={this.state.currentRating === 0 ? 'rating-text' : 'hidden'}>Rate your overall experience</div>
            <div className={this.state.currentRating === 1 ? 'rating-text' : 'hidden'}>I won't order again</div>
            <div className={this.state.currentRating === 2 ? 'rating-text' : 'hidden'}>Eh, I've had better</div>
            <div className={this.state.currentRating === 3 ? 'rating-text' : 'hidden'}>It was alright</div>
            <div className={this.state.currentRating === 4 ? 'rating-text' : 'hidden'}>This hit the spot</div>
            <div className={this.state.currentRating === 5 ? 'rating-text' : 'hidden'}>I loved this place!</div>
          </div>

          <div className={this.state.ratingSaved ? 'write-review-container' : 'hidden'}>

            <div className='write-review-heading-container'>
              <h3>Write a review</h3>
              <h5 onClick={this.handleResetRatingClick}>Change Rating</h5>
            </div>

            <textarea className='write-review-field' placeholder='Writing this review gets you one step closer to earning Top Reviewer status. Tell us what you loved about this order.' value={this.state.review} onChange={this.update('review')}></textarea>
            <h6 className={this.state.review.length > 2000 ? 'chars-remaining-red' : 'chars-remaining-gray'}>{2000 - this.state.review.length} characters remaining.</h6>

            <button className={this.state.review.length <= 2000 ? 'review-submit-button' : 'review-submit-button-inactive'} onClick={this.submitReview}>Submit your Rating & Review</button>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewModal));
