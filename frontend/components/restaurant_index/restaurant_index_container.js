import React from 'react';
import RestaurantIndex from './restaurant_index';
import { logout, clearErrors } from '../../actions/session_actions';
import { toggleSessionModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  restaurants: Object.values(state.entities.restaurants)
});

export default connect(mapStateToProps, null)(RestaurantIndex);
