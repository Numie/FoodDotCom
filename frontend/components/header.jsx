import React from 'react';
import { AddressRequiredRoute } from '../util/route_util';
import { Link } from 'react-router-dom';
import RestaurantSearchFormContainer from './restaurant_search/restaurant_search_form_container';
import GreetingContainer from './greeting/greeting_container';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='header-left'>
        <Link to='/'>
          <div className='logo'><img src={window.staticImages.logo} alt='FoodDotCom' /></div>
        </Link>
        <AddressRequiredRoute path='/(.+)' component={RestaurantSearchFormContainer} />
      </div>
      <GreetingContainer />
    </header>
  );
};

export default Header;
