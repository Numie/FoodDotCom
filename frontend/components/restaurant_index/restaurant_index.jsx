import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import FilterBar from './filter_bar';
import { deleteAllItems } from '../../actions/order_item_actions';
import { clearFilters } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  restaurants: Object.values(state.entities.restaurants),
  filteredRestaurants: Object.values(state.entities.filteredRestaurants),
  activeFilters: Object.keys(state.entities.filters).length === 0 ? false : true
});

const mapDispatchToProps = dispatch => ({
  deleteAllItems: () => dispatch(deleteAllItems()),
  clearFilters: () => dispatch(clearFilters())
});

class RestaurantIndex extends React.Component {

  componentDidMount() {
    this.props.deleteAllItems();
    this.props.clearFilters();
  }

  render() {
    const restaurants = this.props.filteredRestaurants.length === 0 ? this.props.restaurants : this.props.filteredRestaurants;
    const restaurantList = restaurants.map(restaurant => {
      return <RestaurantIndexItem key={restaurant.id} restaurant={restaurant} />;
    });

    return (
      <div className='restaurant-index-full-page'>
        <FilterBar />
        {this.props.filteredRestaurants.length === 0 && this.props.activeFilters ?
          <div className='restaurant-index'><div className='no-filter-results'><div className='inner-no-filter-results'>
            <img src={window.staticImages.no_results} />
            <div>
              <h1>No matching results near you!</h1>
              <h5>We didn't find any restaurants in your area matching your search filters.</h5>
              <button onClick={this.props.clearFilters}>See all restaurants nearby</button>
            </div>
          </div></div></div> :
          <ul className='restaurant-index'>{ restaurantList }</ul>}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);
