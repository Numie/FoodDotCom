import React from "react";
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { toggleModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  sessionModal: state.ui.modals.sessionModal
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
