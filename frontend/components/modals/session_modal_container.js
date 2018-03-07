import React from "react";
import SessionModal from './session_modal';
import { login } from '../../actions/session_actions';
import { toggleSessionModal } from '../../actions/modal_actions';
import { toggleSignupModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  formType: 'session',
  sessionModal: state.ui.modals.sessionModal,
  signupModal: state.ui.modals.signupModal
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  toggleSessionModal: () => dispatch(toggleSessionModal()),
  toggleSignupModal: () => dispatch(toggleSignupModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionModal);
