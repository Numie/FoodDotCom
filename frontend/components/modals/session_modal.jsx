import React from 'react';

const SessionModal = (props) => {
  return (
    <div className='modal'>
      <img className='logo' src={window.staticImages.name} alt='FoodDotCom' />
      <h2 className='heading'>Sign in with your Food.com account</h2>
      <form className='session-form'>
        <input type='email' placeholder='Email' value=''/>
        <input type='password' placeholder='Password' value=''/>
        <input type='submit' value='Sign In'/>
        <input id='guest-login' type='submit' value='Guest Sign In'/>
        <h6>Don't have an account? <a>Create your account</a></h6>
      </form>
    </div>
  );
};

export default SessionModal;
