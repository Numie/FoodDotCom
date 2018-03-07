import React from 'react';

export default class SessionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.props.signupModal) {
      this.props.signup(user);
    } else {
      this.props.login(user);
    }
  }

  handleGuestLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, {email: 'guest@food.com', password: 'guestdemo'});
    this.props.login(user);
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const { signupModal, toggleSessionModal, toggleSignupModal } = this.props;

    let extraFields;
    if (signupModal) {
      extraFields = (
        <div className='name-container'>
          <input type='text' placeholder='First Name' value={this.state.first_name} onChange={this.update('first_name')}/>
          <input type='text' placeholder='Last Name' value={this.state.last_name} onChange={this.update('last_name')}/>
        </div>
      );
    }

    let guestSignIn;
    if (!signupModal) {
      guestSignIn = <input id='guest-login' type='submit' value='Guest Sign In' onClick={this.handleGuestLogin}/>;
    }

    return (
      <div className='session-modal'>
        <img className='logo' src={window.staticImages.name} alt='FoodDotCom' />
        <h2 className='heading'>{signupModal ? 'Create your account' : 'Sign in with your Food.com account' }</h2>

        <form className='session-form'>
          {extraFields}
          <input type='email' placeholder='Email' value={this.state.email} onChange={this.update('email')}/>
          <input type='password' placeholder='Password' value={this.state.password} onChange={this.update('password')}/>
          <input type='submit' value={signupModal ? 'Create your account' : 'Sign In'} onClick={this.handleSubmit}/>
          {guestSignIn}
          <h6>{signupModal ? 'Have an account?' : 'Don\'t have an account?'} <a onClick={toggleSignupModal}>{signupModal ? 'Sign in' : 'Create your account'}</a></h6>
        </form>

        <button className="x-close" onClick={toggleSessionModal}>x</button>
      </div>
    );
  }
}
