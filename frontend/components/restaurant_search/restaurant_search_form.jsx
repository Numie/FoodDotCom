import React from 'react';

export default class RestaurantSearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ""
    };
    this.clearAddress = this.clearAddress.bind(this);
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    };
  }

  clearAddress() {
    this.setState({address: ""});
  }

  render() {
    return(
      <form className='address-search-form'>
        <input id='address-search-field' type='text' placeholder='Enter your address' value={this.state.address} onChange={this.update('address')} />
        {this.state.address? <button className="x-close" onClick={this.clearAddress}>&times;</button> : null }
        <input type='submit' value='Find food' />
      </form>
    );
  }
}
