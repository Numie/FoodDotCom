import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import FilterBar from './filter_bar';
import { deleteAllItems } from '../../actions/order_item_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  deleteAllItems: () => dispatch(deleteAllItems())
});

class RestaurantIndex extends React.Component {

  componentDidMount() {
    this.props.deleteAllItems();
  }

  render() {
    const { restaurants } = this.props;
    const restaurantList = restaurants.map(restaurant => {
      return <RestaurantIndexItem key={restaurant.id} restaurant={restaurant} />;
    });

    return (
      <div className='restaurant-index-full-page'>
        <FilterBar />
        <ul className='restaurant-index'>
          { restaurantList }
        </ul>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(RestaurantIndex);
