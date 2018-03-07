import React from 'react';

export default class SessionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.swapModals = this.swapModals.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    };
  }

  swapModals(e) {
    e.preventDefault();
    this.props.toggleSessionModal();
    this.props.toggleSignupModal();
  }

  render() {
    const { formType, sessionModal, signupModal, toggleSessionModal, toggleSignupModal, login } = this.props;

    let extraFields;
    if (signupModal) {
      extraFields = (
        <div>
          <input type='text' placeholder='First Name' value={this.state.first_name} onChange={this.update('first_name')}/>
          <input type='text' placeholder='Last Name' value={this.state.last_name} onChange={this.update('last_name')}/>
        </div>
      );
    } else {
      extraFields = null;
    }

    return (
      <div className='modal'>
        <img className='logo' src={window.staticImages.name} alt='FoodDotCom' />
        <h2 className='heading'>Sign in with your Food.com account</h2>

        <form className='session-form'>
          {extraFields}
          <input type='email' placeholder='Email' value={this.state.email} onChange={this.update('email')}/>
          <input type='password' placeholder='Password' value={this.state.password} onChange={this.update('password')}/>
          <input type='submit' value='Sign In' onClick={this.handleLogin}/>
          <input id='guest-login' type='submit' value='Guest Sign In'/>
          <h6>Don't have an account? <a onClick={this.swapModals}>Create your account</a></h6>
        </form>

        <button className="x-close" onClick={toggleSessionModal}>x</button>
      </div>
    );
  }
}
