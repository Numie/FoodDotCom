import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrderItemUnit from './order_item_unit';
import { deleteAllItems } from '../../actions/order_item_actions';
import { toggleSessionModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  order: state.entities.order,
  orderItems: Object.values(state.entities.orderItems),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteAllItems: () => dispatch(deleteAllItems()),
  toggleSessionModal: () => dispatch(toggleSessionModal())
});

class Order extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtotal: this.props.order.subtotal || null,
      deliveryFee: this.props.order.deliveryFee || null,
      tax: this.props.order.tax || null,
      total: this.props.order.total || null,
      orderItems: this.props.orderItems
    };

    this.selectItem = this.selectItem.bind(this);
    this.deleteAllItems = this.deleteAllItems.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  selectItem(selectedItem) {
    this.props.toggleMenuItemModal();
    this.props.selectItem(selectedItem);
  }

  deleteAllItems() {
    this.props.deleteAllItems();
  }

  handleCheckout() {
    if (this.props.currentUser) {
      this.props.history.push('/checkout');
    } else {
      this.props.toggleSessionModal();
    }
  }

  handleClick() {
    this.props.history.push(`/restaurants/${this.props.order.restaurantId}`);
  }

  render() {
    const orderItemsUnits = this.state.orderItems.map(orderItem => {
      return <OrderItemUnit key={orderItem.id} orderItem={orderItem} selectItem={this.selectItem}/>;
    });

    return(
      <div className='inner-order-container'>
        <div className='order-header'>
          <h3>Your order <span className={this.props.location.pathname === '/checkout' ? 'order-restaurant-name' : 'hidden'}>from <span onClick={this.handleClick}>{this.props.order.restaurantName}</span></span></h3>
        </div>

        <div className={this.state.orderItems.length === 0 ? 'order-empty' : 'hidden'}>
          <div className='order-empty-background'>
          </div>
          <div className='order-empty-text'>
            <h1>Your bag is empty.</h1>
          </div>
        </div>

        <div className='main-order-container'>
          <ul>
            {orderItemsUnits}
          </ul>

          <div className={this.state.orderItems.length > 0 ? 'order-total-container' : 'hidden'}>
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
            <h6 className={this.props.location.pathname === '/checkout' ? 'hidden' : 'empty-bag'} onClick={this.deleteAllItems}>Empty bag</h6>
            </div>
        </div>
        <div className='spacer'>
        </div>

        <div className={(this.state.orderItems.length > 0 && this.props.location.pathname !== '/checkout') ? 'proceed-to-checkout-button-container' : 'hidden'}>
          <button className='proceed-to-checkout-button' onClick={this.handleCheckout}>Proceed to checkout: ${this.state.total ? this.state.total.toFixed(2) : null}</button>
        </div>

        <div className={this.props.location.pathname === '/checkout' ? 'only-on-checkout' : 'hidden'}>
          <button className='modify-order' onClick={this.handleClick}>&#10094; &nbsp;Modify your order</button>
          <div className='total-only-on-checkout'>
            <h1>TOTAL:</h1>
            <h1>${this.state.total ? this.state.total.toFixed(2) : null}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Order));
