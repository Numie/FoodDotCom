import React from "react";
import SessionModal from './session_modal';
import { login, signup, clearErrors } from '../../actions/session_actions';
import { toggleSessionModal } from '../../actions/modal_actions';
import { toggleSignupModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

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
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionModal);
