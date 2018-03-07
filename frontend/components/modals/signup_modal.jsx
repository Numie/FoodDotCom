import React from 'react';

export default class SignupModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };

    this.handleSignup = this.handleSignup.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <div className='modal'>
        <img className='logo' src={window.staticImages.name} alt='FoodDotCom' />
        <h2 className='heading'>Sign UP with your Food.com account</h2>

        <form className='session-form'>
          <input type='text' placeholder='First Name' value={this.state.first_name} onChange={this.update('first_name')}/>
          <input type='text' placeholder='Last Name' value={this.state.last_name} onChange={this.update('last_name')}/>
          <input type='email' placeholder='Email' value={this.state.email} onChange={this.update('email')}/>
          <input type='password' placeholder='Password' value={this.state.password} onChange={this.update('password')}/>
          <input type='submit' value='Sign Up' onClick={this.handleSignup}/>
          <h6>Don't have an account? <a>Create your account</a></h6>
        </form>

        <button className="x-close" onClick={this.props.toggleModal}>x</button>
      </div>
    );
  }
}
