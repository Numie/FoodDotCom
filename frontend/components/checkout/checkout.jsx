import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Order from '../order/order';
import { pickBy } from 'lodash';
import { updateTip, addCheckoutInfo } from '../../actions/checkout_actions';
import { receiveItemInstructionsErrors, clearErrors } from '../../actions/menu_item_actions';
import { toggleOrderPlacedModal } from '../../actions/modal_actions';
import { createOrder } from '../../actions/order_item_actions';
import { merge } from 'lodash';
import Typed from 'typed.js';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentAddress: state.currentAddress,
  checkoutInfo: state.entities.checkoutInfo,
  orderSubtotal: state.entities.order.subtotal,
  order: state.entities.order,
  orderItems: Object.values(state.entities.orderItems),
  itemInstructionsError: state.errors.menuItem.itemInstructions
});

const mapDispatchToProps = dispatch => ({
  updateTip: amount => dispatch(updateTip(amount)),
  addCheckoutInfo: () => dispatch(addCheckoutInfo()),
  receiveItemInstructionsErrors: () => dispatch(receiveItemInstructionsErrors()),
  createOrder: payload => dispatch(createOrder(payload)),
  clearErrors: () => dispatch(clearErrors()),
  toggleOrderPlacedModal: () => dispatch(toggleOrderPlacedModal())
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
      payee: "",
      cardNumber: "",
      expiryDate: "",
      securityCode: "",
      postalCode: "",
      tip: ".2",
      customTip: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCustomTipClick = this.handleCustomTipClick.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidUpdate() {
    if (this.props.checkoutInfo === false && this.props.location.pathname === '/checkout/payment') {
      this.props.history.push('/checkout');
    }
  }

  componentDidMount() {
    this.props.updateTip(0.2);

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

    const TAs = [
      "Mike Boan",
      "Patrick Kovach-Long",
      "Maurice Roach",
      "Oscar Alvarez",
      "Mashu Duek",
      "Matthias Jenny",
      "Abby Hersh",
      "Brian Scott"
    ];

    const randomTA = TAs[Math.floor(Math.random() * TAs.length)];

    const typedPayee = new Typed('#payee', {
      strings: [randomTA],
      typeSpeed: 50,
      startDelay: 2000,
      showCursor: true
    });

    const typedCardNumber = new Typed('#card-number', {
      strings: ["4593 0372 1922 4663"],
      typeSpeed: 50,
      startDelay: 4000,
      showCursor: true
    });

    const typedExpiry = new Typed('#expiry', {
      strings: ["11/20"],
      typeSpeed: 30,
      startDelay: 6000,
      showCursor: true
    });

    const typedSecurityCode = new Typed('#security-code', {
      strings: ["018"],
      typeSpeed: 30,
      startDelay: 6500,
      showCursor: true
    });

    const typedPostalCode = new Typed('#postal-code', {
      strings: ["10018"],
      typeSpeed: 30,
      startDelay: 7000,
      showCursor: true
    });
  }

  update(field) {
    return(e) => {
      if (field === 'tip') {
        this.setState({[field]: e.target.value});
        this.setState({'customTip': ""});
        this.props.updateTip(parseFloat(e.target.value));
      } else if (field === 'customTip') {

        if (!parseFloat(e.target.value) && e.target.value !== "" && e.target.value[e.target.value.length - 1] !== '.') {
          return;
        }

        this.setState({[field]: e.target.value});
        this.setState({'tip': ""});
        const newTip = (e.target.value === "" ? 0 : parseFloat(e.target.value) / this.props.orderSubtotal);
        this.props.updateTip(newTip);
      } else {
        this.setState({[field]: e.target.value});
      }
    };
  }

  updateDeliveryInstructions() {
    return(e) => {
      if (e.target.value.length > 255) {
        this.props.receiveItemInstructionsErrors();
      } else {
        this.setState({'deliveryInstructions': e.target.value});
      }
    };
  }

  handleCustomTipClick() {
    this.setState({'customTip': (parseFloat(this.state.tip) * this.props.orderSubtotal).toFixed(2)});
    this.setState({'tip': ""});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCheckoutInfo();
    this.props.history.push('/checkout/payment');
  }

  placeOrder(e) {
    e.preventDefault();

    const payload = merge({}, this.props.order);

    const toUnderscore = (string) => {
    	return string.replace(/([A-Z])/g, ($1) => {return "_"+$1.toLowerCase();});
    };

    this.props.orderItems.forEach(obj => {
      obj.item_instructions = obj.itemInstructions;
      obj.menu_item_id = obj.id;
    });

    payload.order_items_attributes = this.props.orderItems;

    this.props.createOrder(payload)
    .then(() => {
      this.props.history.push('/');
      this.props.toggleOrderPlacedModal();
    });
  }

  render() {
    if (!this.props.checkoutInfo || !this.props.location.pathname.includes('payment')) {

      return(
        <div className='checkout-container' onClick={this.props.itemInstructionsError ? this.props.clearErrors : null}>
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

              <textarea className='deliveryInstructions' placeholder='Delivery instructions (e.g. Check in with doorman.)' value={this.state.deliveryInstructions} onChange={this.updateDeliveryInstructions()}></textarea>

              <h6 className='errors'>{this.props.itemInstructionsError ? this.props.itemInstructionsError : null}</h6>

              <button className='continue-to-payment' onClick={this.handleSubmit}>Continue to payment method</button>
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

            <div className='payee-container'>
              <h6>Payee</h6>
              <input id='payee' type='text' value={this.state.payee} onChange={this.update('payee')}/>
            </div>

            <form className='payment-input-form'>

              <div className='card-number-container'>
                <h6>Card number</h6>
                <input id='card-number' type='text' value={this.state.cardNumber} onChange={this.update('cardNumber')}/>
              </div>

              <div className='expires-on-container'>
                <h6>Expires On</h6>
                <input id='expiry' type='text' placeholder='MM/YY' value={this.state.expiryDate} onChange={this.update('expiryDate')}/>
              </div>

              <div className='security-code-container'>
                <h6>Security Code</h6>
                <input id='security-code' type='text' value={this.state.securityCode} onChange={this.update('securityCode')}/>
              </div>

              <div className='postal-code-container'>
                <h6>Postal Code</h6>
                <input id='postal-code' type='text' value={this.state.postalCode} onChange={this.update('postalCode')}/>
              </div>

            </form>

            <div className='tip-entry-container'>

              <div className='preset-tip-container'>
                <h3>Add a tip</h3>
                <button className={this.state.tip === '.15' ? 'tip-selected' : 'tip'} value='.15' onClick={this.update('tip')}>15%</button>
                <button className={this.state.tip === '.2' ? 'tip-selected' : 'tip'} value='.2' onClick={this.update('tip')}>20%</button>
                <button className={this.state.tip === '.25' ? 'tip-selected' : 'tip'} value='.25' onClick={this.update('tip')}>25%</button>
                <button className={this.state.tip === '.3' ? 'tip-selected' : 'tip'} value='.3' onClick={this.update('tip')}>30%</button>
              </div>

              <div className='custom-tip-container'>
                <button className={this.state.tip === '' ? 'tip-selected' : 'tip'} onClick={this.handleCustomTipClick}>Custom tip</button>
                <input id='custom-tip-input' placeholder='Custom tip amount' value={this.state.customTip} onChange={this.update('customTip')}/>
              </div>
            </div>


            <button className='place-your-order' onClick={this.placeOrder}>Place Your Order</button>

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
