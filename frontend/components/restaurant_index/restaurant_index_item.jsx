import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = props => {

  const { id, name, address, phone, img_url, cuisine, delivery_minimum, delivery_fee, distance } = props.restaurant;

  return (
    <li className='restaurant-index-item'>
      <div className='index-left-side'>
        <img className='small-restaurant-image' src={img_url} alt={name}/>
        <div className='index-restaurant-cuisine-container'>
          <Link to={`/restaurants/${id}`}><h3>{name}</h3></Link>
          <h5>{cuisine}</h5>
        </div>
      </div>
      <div className='index-right-side'>
        <div className='stars-container'>
          <div className='stars'>
            <div className='star-icon'></div>
            <div className='star-icon'></div>
            <div className='star-icon'></div>
            <div className='star-icon'></div>
            <div className='star-icon'></div>
          </div>
          <h6>347 ratings</h6>
        </div>
        <div className='price-container'>
          <div className='price-base'>$$$$$</div>
          <div className='price-rating'>$$$</div>
        </div>
        <div className='minimum-container'>
          <h3>
            ${ Math.round(delivery_minimum) === delivery_minimum ? Math.round(delivery_minimum) : delivery_minimum }
          </h3>
          <h6>Minimum</h6>
        </div>
        <div className='fee-container'>
          <h3>
            { delivery_fee ? '$' + delivery_fee.toFixed(2) : 'Free' }
          </h3>
          <h6>{ delivery_fee ? 'Delivery Fee' : 'Delivery' }</h6>
          <h6>{distance.toFixed(2)} mi</h6>
        </div>
      </div>
    </li>
  );
};

export default RestaurantIndexItem;
