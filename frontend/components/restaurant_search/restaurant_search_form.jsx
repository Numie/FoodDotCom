import React from 'react';

export default class RestaurantSearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ""
    };
    this.clearAddress = this.clearAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchGeocode(this.state.address);
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
    const { error } = this.props;

    return(
      <form className='address-search-form' onSubmit={this.handleSubmit}>
        <input id='address-search-field' type='text' placeholder='Enter your address (NYC only!)' value={this.state.address} onChange={this.update('address')} onClick={this.props.clearErrors}/>
        {this.state.address? <button className="x-close" onClick={this.clearAddress}>&times;</button> : null }
        <input type='submit' value='Find food' />
        {error ? <div className='address-error-box'>{error}</div> : null}
      </form>
    );
  }
}
