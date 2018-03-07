import React from "react";
import SignupModal from './signup_modal';
import { signup } from '../../actions/session_actions';
import { toggleModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(mapDispatchToProps, mapDispatchToProps)(SignupModal);
