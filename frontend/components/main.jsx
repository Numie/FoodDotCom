import React from 'react';
import RestaurantSearchFormContainer from './restaurant_search/restaurant_search_form_container';
import OrderPlacedModal from './modals/order_placed_modal';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  orderPlacedModal: state.ui.modals.orderPlacedModal
});

const Main = (props) => {
  return (
    <div className='main'>
      <div className='main-inner-container'>
        <h1>Who delivers in your neighborhood?</h1>
        <div><h6>Start your order now.</h6></div>
        <RestaurantSearchFormContainer />
        { props.orderPlacedModal ? <OrderPlacedModal /> : null }
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(Main);
