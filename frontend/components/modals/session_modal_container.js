import React from "react";
import SessionModal from './session_modal';
import { login } from '../../actions/session_actions';
import { toggleModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(null, mapDispatchToProps)(SessionModal);
