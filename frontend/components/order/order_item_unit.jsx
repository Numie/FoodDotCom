import React from 'react';
import { connect } from 'react-redux';
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
    this.props.selectItem(this.props.orderItem);
  }

  render() {
    const { name, price, quantity, itemInstructions } = this.props.orderItem;

    return(
      <div className='order-item-unit'>
        <div className='material-icons' id='delete-item-button' onClick={this.deleteItem}>delete</div>
        <div className='order-item-quantity'>{quantity}</div>

        <div className='order-name-container'>
          <div className='order-item-name' onClick={this.handleClick}>
            {name}
            <div className='material-icons' id='edit-item-button'>create</div>
          </div>
          <div className='order-item-itemInstructions'>{itemInstructions}</div>
        </div>

        <div className='order-item-price'>${(price * quantity).toFixed(2)}</div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(OrderItemUnit);
