import React from "react";
import RestaurantSearchForm from './restaurant_search_form';
import { fetchGeocode } from '../../actions/address_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  fetchGeocode: address => dispatch(fetchGeocode(address))
});

export default connect(null, mapDispatchToProps)(RestaurantSearchForm);
