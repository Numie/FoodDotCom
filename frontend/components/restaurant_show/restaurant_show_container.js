import React from 'react';
import RestaurantShow from './restaurant_show';
import { fetchMenuItems } from '../../actions/menu_item_actions';
import { fetchReviews, fetchReviewable } from '../../actions/review_actions';
import { toggleMenuItemModal, toggleReviewModal } from '../../actions/modal_actions';
import { deleteAllItems } from '../../actions/order_item_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  restaurant: state.entities.restaurants[ownProps.match.params.id],
  menuItems: Object.values(state.entities.menuItems),
  menuItemModal: state.ui.modals.menuItemModal,
  orderRestaurantId: state.entities.order.restaurantId,
  reviews: state.entities.reviews,
  reviewModal: state.ui.modals.reviewModal,
  currentUser: state.session.currentUser,
  reviewable: state.session.reviewable
});

const mapDispatchToProps = dispatch => ({
  fetchMenuItems: restaurantId => dispatch(fetchMenuItems(restaurantId)),
  fetchReviews: restaurantId => dispatch(fetchReviews(restaurantId)),
  fetchReviewable: restaurantId => dispatch(fetchReviewable(restaurantId)),
  toggleMenuItemModal: () => dispatch(toggleMenuItemModal()),
  toggleReviewModal: () => dispatch(toggleReviewModal()),
  deleteAllItems: () => dispatch(deleteAllItems())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantShow));
