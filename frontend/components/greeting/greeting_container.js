import React from "react";
import Greeting from './greeting';
import { logout, clearErrors } from '../../actions/session_actions';
import { toggleSessionModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  sessionModal: state.ui.modals.sessionModal,
  signupModal: state.ui.modals.signupModal
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  toggleSessionModal: () => dispatch(toggleSessionModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
