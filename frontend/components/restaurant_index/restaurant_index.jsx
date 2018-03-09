import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import FilterBar from './filter_bar';

export default class RestaurantIndex extends React.Component {
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
