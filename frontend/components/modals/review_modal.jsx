import React from 'react';
import { toggleReviewModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  toggleReviewModal: () => dispatch(toggleReviewModal())
});

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      currentRating: 0,
      ratingSaved: false
    };

    this.toggleReviewModal = this.toggleReviewModal.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
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

  // update(field) {
  //   return(e) => {
  //     this.setState({[field]: e.target.value});
  //   };
  // }

  toggleReviewModal(e) {
    if (e.target === e.currentTarget) {
      this.props.toggleReviewModal();
    }
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
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewModal);
