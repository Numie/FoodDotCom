import React from "react";
import RestaurantIndex from './restaurant_index';
import { logout, clearErrors } from '../../actions/session_actions';
import { toggleSessionModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  restaurants: Object.values(state.entities.restaurants)
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);
