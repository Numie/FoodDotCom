import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  order: state.entities.order
});

const mapDispatchToProps = dispatch => ({

});

class Order extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtotal: null,
      deliveryFee: null,
      tax: null,
      total: null
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      'subtotal': newProps.order.subtotal,
      'deliveryFee': newProps.order.deliveryFee,
      'tax': newProps.order.tax,
      'total': newProps.order.total
    });
  }

  render() {
    const { subtotal, deliveryFee, tax, total } = this.props;

    return(
      <div>
        <div className='order-header'>
          <h3>Your order</h3>
        </div>

        <div className={this.props.order.restaurantId == null ? 'order-empty' : 'hidden'}>
          <div className='order-empty-background'>
          </div>
          <div className='order-empty-text'>
            <h1>Your bag is empty.</h1>
          </div>
        </div>

        <div className='order-total-container'>
          <div className='subtotal'>
            <h6>Items Subtotal:</h6>
            <h6>{this.state.subtotal}</h6>
          </div>
          <div className='delivery-fee'>
            <h6>Delivery Fee:</h6>
            <h6>{this.state.deliveryFee}</h6>
          </div>
          <div className='tax'>
            <h6>Sales Tax:</h6>
            <h6>{this.state.tax}</h6>
          </div>
          <div className='total'>
            <h6>Total:</h6>
            <h6>{this.state.total}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
