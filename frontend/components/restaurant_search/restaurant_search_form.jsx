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

  componentDidMount() {
    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(40.704759, -74.038335),
      new google.maps.LatLng(40.791704, -73.931882));

    const options = {
      types: ['address'],
      bounds: defaultBounds,
      strictBounds: true
    };
    const autocomplete = new google.maps.places.Autocomplete(this.searchBar, options);
    autocomplete.addListener('place_changed', (arg) => {
      this.setState({address: autocomplete.getPlace().formatted_address});
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchGeocode(this.state.address);
    this.props.fetchRestaurants(this.state.address);
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
        <input ref={(input) => { this.searchBar = input; }} id='address-search-field' type='text' placeholder='Enter your address (NYC only!)' value={this.state.address} onChange={this.update('address')} onClick={this.props.error !== "" ? this.props.clearErrors : null} />
        {this.state.address? <button className="x-close" onClick={this.clearAddress}>&times;</button> : null }
        <input type='submit' value='Find food' />
        {error ? <div className='address-error-box'>{error}</div> : null}
      </form>
    );
  }
}
