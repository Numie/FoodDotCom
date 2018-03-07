import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const Header = (props) => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='logo' src={window.staticImages.logo} alt='FoodDotCom' />
      </Link>
      <GreetingContainer />
    </header>
  );
};

export default Header;
