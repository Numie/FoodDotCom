import React from 'react';
import { receiveQuantityErrors, receiveItemInstructionsErrors, clearErrors } from '../../actions/menu_item_actions';
import { addItem } from '../../actions/order_item_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  quantityError: state.errors.menuItem.quantity,
  itemInstructionsError: state.errors.menuItem.itemInstructions
});

const mapDispatchToProps = dispatch => ({
  receiveQuantityErrors: () => dispatch(receiveQuantityErrors()),
  receiveItemInstructionsErrors: () => dispatch(receiveItemInstructionsErrors()),
  clearErrors: () => dispatch(clearErrors()),
  addItem: (id, name, price, quantity, itemInstructions, restaurantId, deliveryFee) => dispatch(addItem(id, name, price, quantity, itemInstructions, restaurantId, deliveryFee))
});

class MenuItemModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: null,
      quantity: 1,
      itemInstructions: ""
    };

    this.toggleMenuItemModal = this.toggleMenuItemModal.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.subtractQuantity = this.subtractQuantity.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    this.setState({price: this.props.menuItem.props.menuItem.price.toFixed(2)});
  }

  componentDidUpdate() {
    if (this.state.quantity === "") {
      this.setState({'quantity': 0});
    }
  }

  toggleMenuItemModal(e) {
    if (e.target === e.currentTarget) {
      this.props.toggleMenuItemModal();
    }
  }

  addQuantity() {
    if (this.state.quantity < 99) {
      this.setState({'quantity': parseInt(this.state.quantity) + 1});
    } else {
      this.props.receiveQuantityErrors();
    }
  }

  subtractQuantity() {
    if (this.state.quantity > 1) {
      this.setState({'quantity': parseInt(this.state.quantity) - 1});
    }
  }

  updateQuantity() {
    return(e) => {
      const newVal = e.target.value;
      if (newVal === "") {
        this.setState({'quantity': newVal});
      } else if (parseInt(newVal) && (parseInt(newVal) > 0 && parseInt(newVal) < 100)) {
        this.setState({'quantity': parseInt(newVal)});
      } else if (parseInt(newVal) > 99) {
        this.props.receiveQuantityErrors();
        this.setState({'quantity': 99});
      }
    };
  }

  updateitemInstructions() {
    return(e) => {
      if (e.target.value.length > 255) {
        this.props.receiveItemInstructionsErrors();
      } else {
        this.setState({'itemInstructions': e.target.value});
      }
    };
  }

  addItem() {
    const id = this.props.menuItem.props.menuItem.id;
    const name = this.props.menuItem.props.menuItem.name;
    const price = this.state.price;
    const quantity = this.state.quantity;
    const itemInstructions = this.state.itemInstructions;
    const restaurantId = this.props.menuItem.props.menuItem.restaurant_id;
    const deliveryFee = this.props.deliveryFee;
    this.props.addItem(id, name, price, quantity, itemInstructions, restaurantId, deliveryFee);
    this.props.toggleMenuItemModal();
  }

  render() {
    const { menuItem } = this.props.menuItem.props;
    const { name, price, description } = this.props.menuItem.props.menuItem;
    const { quantityError, itemInstructionsError, clearErrors } = this.props;

    return(
      <div className='modal-container' onClick={this.toggleMenuItemModal}>
        <div className='menu-item-modal' onClick={quantityError || itemInstructionsError ? clearErrors : null}>
          <div className='menu-item-modal-info'>
            <h1>{name}</h1>
            <h1>${parseInt(this.state.quantity) ? (this.state.price * parseInt(this.state.quantity)).toFixed(2) : 0}</h1>
            <p>{description}</p>
            <div className='quantity-toggle'>
              <button className={`${parseInt(this.state.quantity) > 1 ? 'plus-minus-activate' : 'plus-minus-inactive'}`} onClick={this.subtractQuantity}>-</button>
              <input className='quantity' value={this.state.quantity} onChange={this.updateQuantity()}/>
              <button className={`${parseInt(this.state.quantity) < 99 ? 'plus-minus-activate' : 'plus-minus-inactive'}`} onClick={this.addQuantity}>+</button>
            </div>

            <h6 className='errors'>{quantityError ? quantityError : null}</h6>

            <h4>Special Instructions</h4>
            <h5 className={`${this.state.itemInstructions === "" ? 'hidden' : null}`}>Special requests may result in additional charges.</h5>
            <textarea placeholder='Dressing on the side? No pickles? Let us know here.' value={this.state.itemInstructions} onChange={this.updateitemInstructions()}></textarea>

            <h6 className='errors'>{itemInstructionsError ? itemInstructionsError : null}</h6>

          </div>
          <button className={`${this.state.quantity === 0 ? 'submit-item-inactive' : 'submit-item'}`} onClick={this.addItem}>{`Add to bag: $${parseInt(this.state.quantity) ? (this.state.price * parseInt(this.state.quantity)).toFixed(2) : 0}`}</button>
          <button className="x-close" onClick={this.toggleMenuItemModal}>&times;</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItemModal);