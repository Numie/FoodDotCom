import React from 'react';
import { fetchRestaurants, filterRating, filterPrice, filterDeliveryFee, filterAll, clearFilters } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  restaurants: state.entities.restaurants,
  filteredRestaurants: state.entities.filteredRestaurants,
  filters: state.entities.filters
});

const mapDispatchToProps = dispatch => ({
  filterRating: (rating, restaurants) => dispatch(filterRating(rating, restaurants)),
  filterPrice: (price, restaurants) => dispatch(filterPrice(price, restaurants)),
  filterDeliveryFee: (deliveryFee, restaurants) => dispatch(filterDeliveryFee(deliveryFee, restaurants)),
  filterAll: (rating, price, deliveryFee, restaurants) => dispatch(filterAll(rating, price, deliveryFee, restaurants)),
  clearFilters: () => dispatch(clearFilters())
});

class FilterBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRating: 0,
      selectedPrice: 0,
      selectedDeliveryFee: null
    };

    this.clearFilters = this.clearFilters.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.setState({'selectedRating': newProps.filters.selectedRating || 0});
      this.setState({'selectedPrice': newProps.filters.selectedPrice || 0});
      this.setState({'selectedDeliveryFee': newProps.filters.selectedDeliveryFee || null});
    }
  }

  handleMouseOver(property, value) {
    return() => {
      if (!this.props.filters[property]) {
        this.setState({[property]: value});
      }
    };
  }

  updateRating(rating) {
    if (rating === 0 && this.props.filters.selectedRating) {
      return;
    }
    return(e) => {
      this.setState({'selectedRating': rating});
    };
  }

  updatePrice(price) {
    if (price === 0 && this.props.filters.selectedPrice) {
      return;
    }
    return(e) => {
      this.setState({'selectedPrice': price});
    };
  }

  updateDeliveryFee(deliveryFee) {
    if (deliveryFee === null && this.props.filters.selectedDeliveryFee) {
      return;
    }
    return(e) => {
      this.setState({'selectedDeliveryFee': deliveryFee});
    };
  }

  filterRating(rating) {
    return(e) => {
      let restaurants;
      if (Object.values(this.props.filteredRestaurants).length === 0 || this.props.filters.selectedRating) {
        restaurants = this.props.restaurants;
      } else {
        restaurants = this.props.filteredRestaurants;
      }
      if (this.props.filters.selectedRating) {
        this.setState({'selectedRating': rating}, () => {
          this.filterAll();
        });
      } else {
        this.props.filterRating(rating, restaurants);
      }
    };
  }

  filterPrice(price) {
    return(e) => {
      let restaurants;
      if (Object.values(this.props.filteredRestaurants).length === 0 || this.props.filters.selectedPrice) {
        restaurants = this.props.restaurants;
      } else {
        restaurants = this.props.filteredRestaurants;
      }
      if (this.props.filters.selectedPrice) {
        this.setState({'selectedPrice': price}, () => {
          this.filterAll();
        });
      } else {
        this.props.filterPrice(price, restaurants);
      }
    };
  }

  filterDeliveryFee(deliveryFee) {
    return(e) => {
      let restaurants;
      if (Object.values(this.props.filteredRestaurants).length === 0 || this.props.filters.selectedDeliveryFee) {
        restaurants = this.props.restaurants;
      } else {
        restaurants = this.props.filteredRestaurants;
      }
      if (this.props.filters.selectedDeliveryFee) {
        this.setState({'selectedDeliveryFee': deliveryFee}, () => {
          this.filterAll();
        });
      } else {
        this.props.filterDeliveryFee(deliveryFee, restaurants);
      }
    };
  }

  filterAll() {
    const restaurants = this.props.restaurants;
    const rating = (this.state.selectedRating === 0 ? null : this.state.selectedRating);
    const price = (this.state.selectedPrice === 0 ? null : this.state.selectedPrice);
    const deliveryFee = (this.state.selectedDeliveryFee === 0 ? null : this.state.selectedDeliveryFee);
    this.props.filterAll(rating, price, deliveryFee, restaurants);
  }

  clearFilters() {
    this.props.clearFilters();
  }

  render() {
    return (
      <div className='filter-bar'>
        <div className='filter-header'>
          <h1>Filters</h1>
          <h5 onClick={this.clearFilters}>Clear all</h5>
        </div>

        <div className='ratings-filter'>
          <h3>Rating</h3>
          <ul className='ratings-options' onMouseLeave={this.updateRating(0)}>
            <li onMouseOver={this.handleMouseOver('selectedRating', 1)} onClick={this.filterRating(1)} className={this.state.selectedRating > 0 ? 'star-icon-white' : 'star-icon-teal'}></li>
            <li onMouseOver={this.handleMouseOver('selectedRating', 2)} onClick={this.filterRating(2)} className={this.state.selectedRating > 1 ? 'star-icon-white' : 'star-icon-teal'}></li>
            <li onMouseOver={this.handleMouseOver('selectedRating', 3)} onClick={this.filterRating(3)} className={this.state.selectedRating > 2 ? 'star-icon-white' : 'star-icon-teal'}></li>
            <li onMouseOver={this.handleMouseOver('selectedRating', 4)} onClick={this.filterRating(4)} className={this.state.selectedRating > 3 ? 'star-icon-white' : 'star-icon-teal'}></li>
            <li onMouseOver={this.handleMouseOver('selectedRating', 5)} onClick={this.filterRating(5)} className={this.state.selectedRating > 4 ? 'star-icon-white' : 'star-icon-teal'}></li>
          </ul>
        </div>

        <div className='ratings-filter'>
          <h3>Price</h3>
          <ul id='dollars' className='ratings-options' onMouseLeave={this.updatePrice(0)}>
            <li onMouseOver={this.handleMouseOver('selectedPrice', 5)} onClick={this.filterPrice(5)} className={this.state.selectedPrice >= 5 ? 'prices-white' : 'prices-teal'}>$</li>
            <li onMouseOver={this.handleMouseOver('selectedPrice', 8)} onClick={this.filterPrice(8)} className={this.state.selectedPrice >= 8 ? 'prices-white' : 'prices-teal'}>$$</li>
            <li onMouseOver={this.handleMouseOver('selectedPrice', 10)} onClick={this.filterPrice(10)} className={this.state.selectedPrice >= 10 ? 'prices-white' : 'prices-teal'}>$$$</li>
            <li onMouseOver={this.handleMouseOver('selectedPrice', 12)} onClick={this.filterPrice(12)} className={this.state.selectedPrice >= 12 ? 'prices-white' : 'prices-teal'}>$$$$</li>
            <li onMouseOver={this.handleMouseOver('selectedPrice', 15)} onClick={this.filterPrice(15)} className={this.state.selectedPrice >= 15 ? 'prices-white' : 'prices-teal'}>$$$$$</li>
          </ul>
        </div>

        <div className='ratings-filter'>
          <h3>Delivery Fee</h3>
          <ul className='ratings-options' onMouseLeave={this.updateDeliveryFee(null)}>
            <li onMouseOver={this.handleMouseOver('selectedDeliveryFee', 'free')} onClick={this.filterDeliveryFee('free')} className={this.state.selectedDeliveryFee === 'free' || this.state.selectedDeliveryFee >= 1 ? 'prices-white' : 'prices-teal'}>Free</li>
            <li onMouseOver={this.handleMouseOver('selectedDeliveryFee', 1)} onClick={this.filterDeliveryFee(1)} className={this.state.selectedDeliveryFee >= 1 ? 'prices-white' : 'prices-teal'}>$1</li>
            <li onMouseOver={this.handleMouseOver('selectedDeliveryFee', 2)} onClick={this.filterDeliveryFee(2)} className={this.state.selectedDeliveryFee >= 2 ? 'prices-white' : 'prices-teal'}>$2</li>
            <li onMouseOver={this.handleMouseOver('selectedDeliveryFee', 3)} onClick={this.filterDeliveryFee(3)} className={this.state.selectedDeliveryFee >= 3 ? 'prices-white' : 'prices-teal'}>$3</li>
            <li onMouseOver={this.handleMouseOver('selectedDeliveryFee', 4)} onClick={this.filterDeliveryFee(4)} className={this.state.selectedDeliveryFee >= 4 ? 'prices-white' : 'prices-teal'}>$4</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
