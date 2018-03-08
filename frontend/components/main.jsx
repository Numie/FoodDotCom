import React from 'react';
import RestaurantSearchForm from './restaurant_search/restaurant_search_form';

const Main = () => {
  return (
    <div className='main'>
      <div className='main-inner-container'>
        <h1>Who delivers in your neighborhood?</h1>
        <div><h6>Start your order now.</h6></div>
        <RestaurantSearchForm />
      </div>
    </div>
  );
};

export default Main;
