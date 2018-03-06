import React from 'react';

export default class SessionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handlelogin = this.handlelogin.bind(this);
  }

  handlelogin(e) {
    e.preventDefault();
    this.props.login();
  }

  render() {
    return (
      <div className='modal'>
        <img className='logo' src={window.staticImages.name} alt='FoodDotCom' />
        <h2 className='heading'>Sign in with your Food.com account</h2>

        <form className='session-form'>
          <input type='email' placeholder='Email' value={this.state.email}/>
          <input type='password' placeholder='Password' value={this.state.password}/>
          <input type='submit' value='Sign In' onClick={this.handlelogin}/>
          <input id='guest-login' type='submit' value='Guest Sign In'/>
          <h6>Don't have an account? <a>Create your account</a></h6>
        </form>

        <button className="x-close" onClick={this.props.toggleModal}>x</button>
      </div>
    );
  }
}
