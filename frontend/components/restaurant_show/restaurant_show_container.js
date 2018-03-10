import React from 'react';
import RestaurantShow from './restaurant_show';
import { fetchMenuItems } from '../../actions/menu_item_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  restaurant: state.entities.restaurants[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  fetchMenuItems: restaurantId => dispatch(fetchMenuItems(restaurantId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantShow));
