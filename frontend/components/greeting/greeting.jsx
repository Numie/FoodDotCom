import React from 'react';

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
    const { currentUser, logout } = this.props;

    if (currentUser !== null) {
      return (
        <div>
          <h3>Welcome {currentUser.username}!</h3>
          <button className='session-button' onClick={this.handleLogout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <button className='session-button' onClick={this.handleLogin}>Sign In</button>
        </div>
      );
    }
  }
}

export default Greeting;
