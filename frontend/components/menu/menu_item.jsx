import React from 'react';

export default class MenuItem extends React.Component {

  render() {
    return(
      <div className='menu-item-container'>
        <div className='item-name-and-price'>
          <h5>{this.props.menuItem.name}</h5>
          <h5>${this.props.menuItem.price.toFixed(2)}</h5>
        </div>
        <div className='item-description'>
          {this.props.menuItem.description}
        </div>
      </div>
    );
  }
}
