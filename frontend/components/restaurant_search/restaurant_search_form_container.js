import React from "react";
import RestaurantSearchForm from './restaurant_search_form';
import { fetchGeocode, receiveErrors, clearErrors } from '../../actions/address_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  address: state.currentAddress,
  restaurants: Object.values(state.entities.restaurants),
  error: state.errors.address
});

const mapDispatchToProps = dispatch => ({
  fetchGeocode: address => dispatch(fetchGeocode(address)),
  receiveErrors: errors => dispatch(receiveErrors(errors)),
  clearErrors: () => dispatch(clearErrors()),
  fetchRestaurants: address => dispatch(fetchRestaurants(address))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantSearchForm));
