import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Order from '../order/order';
import { pickBy } from 'lodash';
import { addCheckoutInfo } from '../../actions/checkout_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentAddress: state.currentAddress,
  checkoutInfo: state.entities.checkoutInfo
});

const mapDispatchToProps = dispatch => ({
  addCheckoutInfo: () => dispatch(addCheckoutInfo())
});

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      apt: "",
      crossStreet: "",
      city: "",
      state: "",
      zip: "",
      deliveryInstructions: "",
      cardNumber: "",
      expiryDate: "",
      securityCode: "",
      postalCode: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    if (this.props.checkoutInfo === false && this.props.location.pathname === '/checkout/payment') {
      this.props.history.push('/checkout');
    }
  }

  componentDidMount() {
    const data = this.props.currentAddress.addressComponents;

    const numberObj = pickBy(data, (obj) => {
      return obj.types.includes('street_number');
    });
    const number = Object.values(numberObj)[0].long_name;

    const streetObj = pickBy(data, (obj) => {
      return obj.types.includes('route');
    });
    const street = Object.values(streetObj)[0].long_name;

    const address = `${number} ${street}`;

    const cityObj = pickBy(data, (obj) => {
      return obj.types.includes('locality');
    });
    const city = Object.values(cityObj)[0].long_name;

    const stateObj = pickBy(data, (obj) => {
      return obj.types.includes('administrative_area_level_1');
    });
    const state= Object.values(stateObj)[0].short_name;

    const zipObj = pickBy(data, (obj) => {
      return obj.types.includes('postal_code');
    });
    const zip = Object.values(zipObj)[0].long_name;


    this.setState({
      firstName: this.props.currentUser.first_name,
      lastName: this.props.currentUser.last_name,
      email: this.props.currentUser.email,
      address,
      city,
      state,
      zip
    });
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addCheckoutInfo();
    this.props.history.push('/checkout/payment');
  }

  render() {
    if (this.props.checkoutInfo) {

      return(
        <div className='checkout-container'>
          <div className='checkout-main'>
            <form className='checkout-form'>
              <h1>You've entered a new address</h1>
              <h5>Does everything below look correct?</h5>

              <h3>Contact</h3>
              <input className='contact-input' type='text' placeholder='First Name' value={this.state.firstName} onChange={this.update('firstName')}/>
              <input className='contact-input' type='text' placeholder='Last Name' value={this.state.lastName} onChange={this.update('lastName')}/>
              <input className='contact-input' type='email' value={this.state.email} readOnly/>
              <input className='contact-input' type='text' placeholder='e.g. 555 555 1212' value={this.state.phone} onChange={this.update('phone')}/>

              <h3>Address</h3>
              <div className='address-input-container'>
                <input className='address-input' type='text' value={this.state.address} readOnly/>
                <input className='address-input' type='text' placeholder='Apt, suite, floor, etc.' value={this.state.apt} onChange={this.update('apt')}/>
                <input className='address-input' type='text' placeholder='Cross street' value={this.state.crossStreet} onChange={this.update('crossStreet')}/>
              </div>
              <div className='address-input-container'>
                <input className='address-input' type='text' value={this.state.city} readOnly/>
                <input className='address-input' type='text' value={this.state.state} readOnly/>
                <input className='address-input' type='text' value={this.state.zip} readOnly/>
              </div>

              <textarea className='deliveryInstructions' placeholder='Delivery instructions (e.g. Check in with doorman.)' value={this.state.deliveryInstructions} onChange={this.update('deliveryInstructions')}></textarea>

              <button className='continue-to-payment' onClick={this.handleClick}>Continue to payment method</button>
            </form>
          </div>

          <div className='order-container'>
            <Order />
          </div>
        </div>
      );

    } else {

      return (
        <div className='checkout-container'>
          <div className='checkout-main'>
            <h1>Review and place order</h1>
            <h5>Review address, payments, and tip to complete your purchase</h5>

            <h3>Your order settings</h3>
            <ul>
              <li>{this.state.firstName} {this.state.lastName}</li>
              <li>{this.state.address}, {this.state.city}, {this.state.state} {this.state.zip}</li>
              <li>{this.state.phone}</li>
            </ul>

            <h3>Payment information</h3>
            <form className='payment-input-form'>

              <div className='card-number-container'>
                <h6>Card number</h6>
                <input className='' type='text' value={this.state.cardNumber} onChange={this.update('expiryDate')}/>
              </div>

              <div className='expires-on-container'>
                <h6>Expires On</h6>
                <input className='' type='text' placeholder='MM/YY' value={this.state.expiryDate} onChange={this.update('expiryDate')}/>
              </div>

              <div className='security-code-container'>
                <h6>Security Code</h6>
                <input className='' type='text' value={this.state.securityCode} onChange={this.update('securityCode')}/>
              </div>

              <div className='postal-code-container'>
                <h6>Postal Code</h6>
                <input className='' type='text' value={this.state.postalCode} onChange={this.update('postalCode')}/>
              </div>

            </form>

            <button className='place-your-order'>Place Your Order</button>
          </div>

          <div className='order-container'>
            <Order />
          </div>
        </div>
      );

    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout));
