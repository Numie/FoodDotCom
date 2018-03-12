import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Order from '../order/order';
import { pickBy } from 'lodash';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentAddress: state.currentAddress
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
      zip: ""
    };

  }

  componentDidMount() {
    const data = this.props.currentAddress.addressComponents;
    const zipObj = pickBy(data, (item) => {
      return item.types.includes('postal_code');
    });
    const zip = Object.values(zipObj)[0].long_name;

    debugger
    this.setState({
      firstName: this.props.currentUser.first_name,
      lastName: this.props.currentUser.last_name,
      email: this.props.currentUser.email,
      phone: ""
    });
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
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
            <input className='address-input' type='text' value={this.state.address} onChange={this.update('address')} readOnly/>
            <input className='address-input' type='text' placeholder='Apt, suite, floor, etc.' value={this.state.apt} onChange={this.update('apt')}/>
            <input className='address-input' type='text' placeholder='Cross street' value={this.state.crossStreet} onChange={this.update('crossStreet')}/>
            <input className='address-input' type='text' value={this.state.city} onChange={this.update('city')} readOnly/>
            <input className='address-input' type='text' value={this.state.state} onChange={this.update('state')} readOnly/>
            <input className='address-input' type='text' value={this.state.zip} onChange={this.update('zip')} readOnly/>
          </form>
        </div>

        <div className='order-container'>
          <Order />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, null)(Checkout));
