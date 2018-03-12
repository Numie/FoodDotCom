import React from 'react';

export default class OrderItemUnit extends React.Component {

  render() {
    const { name, price, quantity, itemInstructions } = this.props;

    return(
      <div>
        <ul>
          <li>{name}</li>
          <li>{price}</li>
          <li>{quantity}</li>
          <li>{itemInstructions}</li>
        </ul>
      </div>
    );
  }
}
