import React from 'react';

export default class RestaurantSearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ""
    };
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return(
      <form>
        <input id='address-search-field' type='text' placeholder='Enter your address' onChange={this.update('address')} />
        <input type='submit' value='Find food' />
      </form>
    );
  }
}
