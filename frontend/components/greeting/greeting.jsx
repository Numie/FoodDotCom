import React from 'react';
import SessionModalContainer from '../modals/session_modal_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { currentUser, sessionModal, signupModal, logout, toggleSessionModal } = this.props;

    if (currentUser !== null) {
      return (
        <div>
          <h3>Welcome {currentUser.first_name}!</h3>
          <button className='session-button' onClick={this.handleLogout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <button className='session-button' onClick={toggleSessionModal}>Sign In</button>
          { sessionModal ? <SessionModalContainer /> : null }
        </div>
      );
    }
  }
}

export default Greeting;
