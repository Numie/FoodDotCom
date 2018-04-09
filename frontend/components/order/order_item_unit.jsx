import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteItem } from '../../actions/order_item_actions';
import { toggleMenuItemModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => ({
  deleteItem: (id, price, quantity) => dispatch(deleteItem(id, price, quantity)),
  toggleMenuItemModal: () => dispatch(toggleMenuItemModal())
});

class OrderItemUnit extends React.Component {
  constructor(props) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  deleteItem() {
    const id = this.props.orderItem.id;
    const price = this.props.orderItem.price;
    const quantity = this.props.orderItem.quantity;

    this.props.deleteItem(id, price, quantity);
  }

  handleClick() {
    if (this.props.location.pathname === './checkout') {
      return;
    }

    this.props.selectItem(this.props.orderItem);
  }

  render() {
    const { name, price, quantity, itemInstructions, options } = this.props.orderItem;

    const optionsList = new Array();
    Array.from(options.values()).forEach(option => {
      if (option === null) return null;
      if (option instanceof Array) {
        option.forEach(item => {
          optionsList.push(<li key={item.id} className='order-item-options'><span>{item.name}</span></li>);
        });
      } else {
        optionsList.push(<li key={option.id} className='order-item-options'><span>{option.name}</span></li>);
      }
    });

    return(
      <div className={this.props.location.pathname.includes('checkout') ? 'order-item-unit-checkout' : 'order-item-unit'}>
        <div className={this.props.location.pathname.includes('checkout') ? 'hidden' : 'material-icons'} id='delete-item-button' onClick={this.deleteItem}>delete</div>
        <div className='order-item-quantity'>{quantity}</div>

        <div className='order-name-container'>
          <div className={this.props.location.pathname.includes('checkout') ? 'order-item-name-checkout' : 'order-item-name'} onClick={this.handleClick}>
            {name}
            <div className={this.props.location.pathname.includes('checkout') ? 'hidden' : 'material-icons'} id='edit-item-button'>create</div>
          </div>
          <ul>
            {optionsList}
          </ul>
          <div className='order-item-itemInstructions'>"{itemInstructions}"</div>
        </div>

        <div className='order-item-price'>${(price * quantity).toFixed(2)}</div>
      </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(OrderItemUnit));
