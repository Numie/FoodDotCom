import React from "react";
import RestaurantSearchForm from './restaurant_search_form';
import { fetchGeocode, receiveErrors, clearErrors } from '../../actions/address_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  error: state.errors.address
});

const mapDispatchToProps = dispatch => ({
  fetchGeocode: address => dispatch(fetchGeocode(address)),
  receiveErrors: errors => dispatch(receiveErrors(errors)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSearchForm);
