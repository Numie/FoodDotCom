import React from "react";
import SignUpModal from './session_modal';
import { signup } from '../../actions/session_actions';
import { toggleModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(null, mapDispatchToProps)(SignUpModal);
