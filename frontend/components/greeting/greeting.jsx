import React from 'react';
import SessionModalContainer from '../modals/session_modal_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.toggleSessionModal = this.toggleSessionModal.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  toggleSessionModal() {
    this.props.clearErrors();
    this.props.toggleSessionModal();
  }

  render() {
    const { currentUser, sessionModal } = this.props;

    if (currentUser !== null) {
      return (
        <div className='logged-in-section'>
          <h3 className='welcome-message'>Welcome, {currentUser.first_name}!</h3>
          <button className='session-button' onClick={this.handleLogout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <button className='session-button' onClick={this.toggleSessionModal}>Sign In</button>
          { sessionModal ? <SessionModalContainer /> : null }
        </div>
      );
    }
  }
}

export default Greeting;
