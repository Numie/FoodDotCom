import React from 'react';
import { fetchRestaurants, filterRating, filterPrice, filterDeliveryFee } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentAddress: state.currentAddress.formattedAddress
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: address => dispatch(fetchRestaurants(address)),
  filterRating: rating => dispatch(filterRating(rating)),
  filterPrice: price => dispatch(filterPrice(price)),
  filterDeliveryFee: deliveryFee => dispatch(filterDeliveryFee(deliveryFee))

});

class FilterBar extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      selectedRating: 0,
      selectedPrice: 0,
      selectedDeliveryFee: -1
    };

    this.filterRating = this.filterRating.bind(this);
    this.filterPrice = this.filterPrice.bind(this);
    this.filterDeliveryFee = this.filterDeliveryFee.bind(this);
  }

  updateRating(number) {
    return(e) => {
      this.setState({'selectedRating': number});
    };
  }

  updatePrice(price) {
    return(e) => {
      this.setState({'selectedPrice': price});
    };
  }

  updateDeliveryFee(fee) {
    return(e) => {
      this.setState({'selectedDeliveryFee': fee});
    };
  }

  filterRating() {
    this.props.fetchRestaurants(this.props.currentAddress)
    .then(() => this.props.filterRating(this.state.selectedRating));
  }

  filterPrice() {
    this.props.fetchRestaurants(this.props.currentAddress)
    .then(() => this.props.filterPrice(this.state.selectedPrice));
  }

  filterDeliveryFee() {
    this.props.fetchRestaurants(this.props.currentAddress)
    .then(() => this.props.filterDeliveryFee(this.state.selectedDeliveryFee));
  }

  render() {
    return (
      <div className='filter-bar'>
        <div className='filter-header'>
          <h1>Filters</h1>
          <h5>Clear all</h5>
        </div>

        <div className='ratings-filter'>
          <h3>Rating</h3>
          <ul className='ratings-options' onMouseLeave={this.updateRating(0)}>
            <li onMouseOver={this.updateRating(1)} onClick={this.filterRating} className={this.state.selectedRating > 0 ? 'star-icon-white' : 'star-icon-teal'}></li>
            <li onMouseOver={this.updateRating(2)} onClick={this.filterRating} className={this.state.selectedRating > 1 ? 'star-icon-white' : 'star-icon-teal'}></li>
            <li onMouseOver={this.updateRating(3)} onClick={this.filterRating} className={this.state.selectedRating > 2 ? 'star-icon-white' : 'star-icon-teal'}></li>
            <li onMouseOver={this.updateRating(4)} onClick={this.filterRating} className={this.state.selectedRating > 3 ? 'star-icon-white' : 'star-icon-teal'}></li>
            <li onMouseOver={this.updateRating(5)} onClick={this.filterRating} className={this.state.selectedRating > 4 ? 'star-icon-white' : 'star-icon-teal'}></li>
          </ul>
        </div>

        <div className='ratings-filter'>
          <h3>Price</h3>
          <ul className='ratings-options' onMouseLeave={this.updatePrice(0)}>
            <li onMouseOver={this.updatePrice(5)} onClick={this.filterPrice} className={this.state.selectedPrice >= 5 ? 'prices-white' : 'prices-teal'}>$</li>
            <li onMouseOver={this.updatePrice(8)} onClick={this.filterPrice} className={this.state.selectedPrice >= 8 ? 'prices-white' : 'prices-teal'}>$$</li>
            <li onMouseOver={this.updatePrice(10)} onClick={this.filterPrice} className={this.state.selectedPrice >= 10 ? 'prices-white' : 'prices-teal'}>$$$</li>
            <li onMouseOver={this.updatePrice(12)} onClick={this.filterPrice} className={this.state.selectedPrice >= 12 ? 'prices-white' : 'prices-teal'}>$$$$</li>
            <li onMouseOver={this.updatePrice(15)} onClick={this.filterPrice} className={this.state.selectedPrice >= 15 ? 'prices-white' : 'prices-teal'}>$$$$$</li>
          </ul>
        </div>

        <div className='ratings-filter'>
          <h3>Delivery Fee</h3>
          <ul className='ratings-options' onMouseLeave={this.updateDeliveryFee(-1)}>
            <li onMouseOver={this.updateDeliveryFee(0)} onClick={this.filterDeliveryFee} className={this.state.selectedDeliveryFeeDeliveryFee >= 0 ? 'prices-white' : 'prices-teal'}>Free</li>
            <li onMouseOver={this.updateDeliveryFee(1)} onClick={this.filterDeliveryFee} className={this.state.selectedDeliveryFee >= 1 ? 'prices-white' : 'prices-teal'}>$1</li>
            <li onMouseOver={this.updateDeliveryFee(2)} onClick={this.filterDeliveryFee} className={this.state.selectedDeliveryFee >= 2 ? 'prices-white' : 'prices-teal'}>$2</li>
            <li onMouseOver={this.updateDeliveryFee(3)} onClick={this.filterDeliveryFee} className={this.state.selectedDeliveryFee >= 3 ? 'prices-white' : 'prices-teal'}>$3</li>
            <li onMouseOver={this.updateDeliveryFee(4)} onClick={this.filterDeliveryFee} className={this.state.selectedDeliveryFee >= 4 ? 'prices-white' : 'prices-teal'}>$4</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
