import React from 'react';

export default class RestaurantShow extends React.Component {
  render() {
    const { name, address, phone, img_url } = this.props.restaurant;
    return (
      <div className='restaurant-show-container'>
        <div className='restaurant-show-main'>
          <div className='top-info-container'>
            <img src='https://res.cloudinary.com/grubhub/image/upload/w_100,h_100,f_auto,fl_lossy,q_80,c_fit/nqihfqjjva8orpbtaftz' />
            <div className='top-restaurant-info'>
              <h1>{name}</h1>
              <div className='address-phone-container'>
                <h6>{address}</h6>
                <h6>{phone}</h6>
              </div>
              <div className='stars-container'>
                <div className='star-icon'></div>
                <div className='star-icon'></div>
                <div className='star-icon'></div>
                <div className='star-icon'></div>
                <div className='star-icon'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='order-container'>
        </div>
      </div>
    );
  }
}
