import React from "react";
import SessionModal from './session_modal';
import { login, signup, clearErrors } from '../../actions/session_actions';
import { toggleSessionModal, toggleSignupModal } from '../../actions/modal_actions';
import { fetchReviewable } from '../../actions/review_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  sessionModal: state.ui.modals.sessionModal,
  signupModal: state.ui.modals.signupModal,
  errors: state.errors.session.responseJSON
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  toggleSessionModal: () => dispatch(toggleSessionModal()),
  toggleSignupModal: () => dispatch(toggleSignupModal()),
  clearErrors: () => dispatch(clearErrors()),
  fetchReviewable: restaurantId => dispatch(fetchReviewable(restaurantId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionModal));
