import React from 'react';
import { toggleOrderPlacedModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  order: state.entities.order,
  orderItems: state.entities.orderItems
});

const mapDispatchToProps = dispatch => ({
  toggleOrderPlacedModal: () => dispatch(toggleOrderPlacedModal())
});

class OrderPlacedModal extends React.Component {
  constructor(props) {
    super(props);

    this.toggleOrderPlacedModal = this.toggleOrderPlacedModal.bind(this);
  }

  componentDidMount() {
  }

  toggleOrderPlacedModal(e) {
    if (e.target === e.currentTarget) {
      this.props.toggleOrderPlacedModal();
    }
  }

  render() {
    const { restaurantName, subtotal, deliveryFee, tax, tip, total } = this.props.order;

    const orderList = Object.values(this.props.orderItems).map(itemObj => {
      return <li key={itemObj.id}>
        <div id='modal-quantity'>{itemObj.quantity}</div>
        <div id='modal-item-name'>{itemObj.name}</div>
        <div id='modal-price'>${(itemObj.price * itemObj.quantity).toFixed(2)}</div>
      </li>;
    });

    return (
      <div className='modal-container' onClick={this.toggleOrderPlacedModal}>
        <div className='order-placed-modal'>
          <img className='logo' src={window.staticImages.logo} alt='FoodDotCom' />
          <h2 className='heading'>Your order has NOT been placed!</h2>
          <h5>(Although it would have been if this was a real website)</h5>

          <div className='modal-order-info'>
            <h5>Your order from <span id='modal-restaurant-name'>{restaurantName}</span> was:</h5>

            <ul>
              {orderList}
            </ul>

            <div className='totals'>
              <li><div>Subtotal:</div><div>${subtotal.toFixed(2)}</div></li>
              <li><div>Delivery Fee:</div><div>{`$${deliveryFee ? deliveryFee : null}`}</div></li>
              <li><div>Tax:</div><div>${tax.toFixed(2)}</div></li>
              <li><div>Tip:</div><div>${(parseFloat(tip) * subtotal).toFixed(2)}</div></li>
              <li><div>Total:</div><div>${total.toFixed(2)}</div></li>
            </div>
          </div>

          <div className='modal-footer-container'>
            <h5>If you're actually hungry, git checkout master...I mean go check out <span><a href='www.seamless.com'>seamless.com</a></span>.</h5>

            <h5>Made with the help of the staff and students at <span>App Academy.</span></h5>
          </div>

          <button className="x-close" onClick={this.toggleOrderPlacedModal}>&times;</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPlacedModal);
