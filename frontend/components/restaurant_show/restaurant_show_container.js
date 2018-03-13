import React from 'react';
import RestaurantShow from './restaurant_show';
import { fetchMenuItems } from '../../actions/menu_item_actions';
import { toggleMenuItemModal } from '../../actions/modal_actions';
import { deleteAllItems } from '../../actions/order_item_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  restaurant: state.entities.restaurants[ownProps.match.params.id],
  menuItems: Object.values(state.entities.menuItems),
  menuItemModal: state.ui.modals.menuItemModal,
  orderRestaurantId: state.entities.order.restaurantId
});

const mapDispatchToProps = dispatch => ({
  fetchMenuItems: restaurantId => dispatch(fetchMenuItems(restaurantId)),
  toggleMenuItemModal: () => dispatch(toggleMenuItemModal()),
  deleteAllItems: () => dispatch(deleteAllItems())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantShow));
