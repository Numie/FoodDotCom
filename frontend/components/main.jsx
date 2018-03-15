import React from 'react';
import RestaurantSearchFormContainer from './restaurant_search/restaurant_search_form_container';
import OrderPlacedModal from './modals/order_placed_modal';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  orderPlacedModal: state.ui.modals.orderPlacedModal
});

const Main = (props) => {
  return (
    <div>
      <div className='main'>
        <div className='main-inner-container'>
          <h1>Who delivers in your neighborhood?</h1>
          <div><h6>Start your order now.</h6></div>
          <RestaurantSearchFormContainer />
          { props.orderPlacedModal ? <OrderPlacedModal /> : null }
        </div>
      </div>

      <div className='bottom'>
        <div className='bottom-header'>
          <h1>How to Use Food.com</h1>
          <h4>Ordering from your favorite restaurant is even easier than eating.</h4>
        </div>
        <div className='bottom-body'>

          <div className='bottom-body-main'>
            <div className='image-container'>
              <div id='image-1' className='bottom-image'></div>
            </div>
            <div className='bottom-text-container'>
              <h4>The where</h4>
              <h6>Browse menus from your favorite local restaurants.</h6>
            </div>
          </div>

          <div className='bottom-arrow'>&#10095;</div>

          <div className='bottom-body-main'>
            <div className='image-container'>
              <div id='image-2' className='bottom-image'></div>
            </div>
            <div className='bottom-text-container'>
              <h4>The what</h4>
              <h6>Select what you want to eat. Submit your order.</h6>
            </div>
          </div>

          <div className='bottom-arrow'>&#10095;</div>

          <div className='bottom-body-main'>
            <div className='image-container'>
              <div id='image-3' className='bottom-image'></div>
            </div>
            <div className='bottom-text-container'>
              <h4>The delivery</h4>
              <h6>Get the door and enjoy your food!</h6>
            </div>
          </div>

        </div>
      </div>

      <div className='footer'>
        <div className='footer-content'>
          <div className='footer-section'>
            <img src='https://www.seamless.com/assets/img/seamless/static-hp-value-01.svg' />
            <h4>Free Online Ordering</h4>
            <h6>No need to pick up the phone. Quick and accurate ordering is here!</h6>
          </div>

          <div className='footer-section'>
            <img src='https://www.seamless.com/assets/img/seamless/static-hp-value-02.svg' />
            <h4>Thousands Of Menus</h4>
            <h6>Discover new places, order your usual and recycle those paper menus.</h6>
          </div>

          <div className='footer-section'>
            <img src='https://www.seamless.com/assets/img/seamless/static-hp-value-03.svg' />
            <h4>Discounts And Deals</h4>
            <h6>Get exclusive offers and save on your delivery favorites.</h6>
          </div>

          <div className='footer-section'>
            <img src='https://www.seamless.com/assets/img/seamless/static-hp-value-04.svg' />
            <h4>Anytime, Anywhere</h4>
            <h6>On-the-go? Check out our convenient apps for iPhone®, iPad®, and Android devices.</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(Main);
