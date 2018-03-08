import React from 'react';
import RestaurantSearchFormContainer from './restaurant_search/restaurant_search_form_container';

const Main = () => {
  return (
    <div className='main'>
      <div className='main-inner-container'>
        <h1>Who delivers in your neighborhood?</h1>
        <div><h6>Start your order now.</h6></div>
        <RestaurantSearchFormContainer />
      </div>
    </div>
  );
};

export default Main;
