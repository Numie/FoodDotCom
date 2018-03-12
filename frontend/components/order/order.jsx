import React from 'react';
import { connect } from 'react-redux';
import OrderItemUnit from './order_item_unit';
import { deleteAllItems } from '../../actions/order_item_actions';

const mapStateToProps = state => ({
  order: state.entities.order,
  orderItems: Object.values(state.entities.orderItems)
});

const mapDispatchToProps = dispatch => ({
  deleteAllItems: () => dispatch(deleteAllItems())
});

class Order extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtotal: null,
      deliveryFee: null,
      tax: null,
      total: null,
      orderItems: this.props.orderItems
    };

    this.deleteAllItems = this.deleteAllItems.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      'subtotal': newProps.order.subtotal,
      'deliveryFee': newProps.order.deliveryFee,
      'tax': newProps.order.tax,
      'total': newProps.order.total,
      'orderItems': newProps.orderItems
    });
  }

  deleteAllItems() {
    this.props.deleteAllItems();
  }

  render() {
    const orderItemsUnits = this.state.orderItems.map(orderItem => {
      return <OrderItemUnit key={orderItem.id} orderItem={orderItem}/>;
    });

    return(
      <div>
        <div className='order-header'>
          <h3>Your order</h3>
        </div>

        <div className={this.props.order.restaurantId === null ? 'order-empty' : 'hidden'}>
          <div className='order-empty-background'>
          </div>
          <div className='order-empty-text'>
            <h1>Your bag is empty.</h1>
          </div>
        </div>

        <ul>
          {orderItemsUnits}
        </ul>

        <div className={this.props.order.restaurantId ? 'order-total-container' : 'hidden'}>
          <div className='order-total'>
            <h6>Items Subtotal:</h6>
            <h6>${this.state.subtotal ? this.state.subtotal.toFixed(2) : null}</h6>
          </div>
          <div className={this.state.deliveryFee ? 'order-total' : 'hidden'}>
            <h6>Delivery Fee:</h6>
            <h6>${this.state.deliveryFee ? this.state.deliveryFee.toFixed(2) : null}</h6>
          </div>
          <div className='order-total'>
            <h6>Sales Tax:</h6>
            <h6>${this.state.tax ? this.state.tax.toFixed(2) : null}</h6>
          </div>
          <div className='order-total'>
            <h6>Total:</h6>
            <h6>${this.state.total ? this.state.total.toFixed(2) : null}</h6>
          </div>
          <h6 className='empty-bag' onClick={this.deleteAllItems}>Empty bag</h6>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);