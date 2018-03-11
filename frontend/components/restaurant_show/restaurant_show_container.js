import React from 'react';
import RestaurantShow from './restaurant_show';
import { fetchMenuItems } from '../../actions/menu_item_actions';
import { toggleMenuItemModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  restaurant: state.entities.restaurants[ownProps.match.params.id],
  menuItems: Object.values(state.entities.menu_items),
  menuItemModal: state.ui.modals.menuItemModal
});

const mapDispatchToProps = dispatch => ({
  fetchMenuItems: restaurantId => dispatch(fetchMenuItems(restaurantId)),
  toggleMenuItemModal: () => dispatch(toggleMenuItemModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantShow));
