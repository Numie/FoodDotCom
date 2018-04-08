import React from 'react';
import ItemOptionSection from '../menu/item_option_section';
import { receiveQuantityErrors, receiveItemInstructionsErrors, receiveRequiredOptionsErrors, clearErrors } from '../../actions/menu_item_actions';
import { clearCheckoutErrors } from '../../actions/checkout_actions';
import { addItem, deleteItem } from '../../actions/order_item_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  orderItems: state.entities.orderItems,
  quantityError: state.errors.menuItem.quantity,
  itemInstructionsError: state.errors.menuItem.itemInstructions,
  requiredOptionsError: state.errors.menuItem.requiredOptions
});

const mapDispatchToProps = dispatch => ({
  receiveQuantityErrors: () => dispatch(receiveQuantityErrors()),
  receiveItemInstructionsErrors: () => dispatch(receiveItemInstructionsErrors()),
  receiveRequiredOptionsErrors: () => dispatch(receiveRequiredOptionsErrors()),
  clearErrors: () => dispatch(clearErrors()),
  clearCheckoutErrors: () => dispatch(clearCheckoutErrors()),
  addItem: (id, name, price, quantity, itemInstructions, restaurantId, restaurantName, deliveryMinimum, deliveryFee, item_option_sections, options) => dispatch(addItem(id, name, price, quantity, itemInstructions, restaurantId, restaurantName, deliveryMinimum, deliveryFee, item_option_sections, options)),
  deleteItem: (id, price, quantity) => dispatch(deleteItem(id, price, quantity))
});

class MenuItemModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: null,
      quantity: this.props.menuItem.quantity || 1,
      itemInstructions: this.props.menuItem.itemInstructions || "",
      options: new Map()
    };

    this.toggleMenuItemModal = this.toggleMenuItemModal.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.subtractQuantity = this.subtractQuantity.bind(this);
    this.addItem = this.addItem.bind(this);
    this.addOption = this.addOption.bind(this);
  }

  componentDidMount() {
    this.setState({price: parseFloat(this.props.menuItem.price).toFixed(2)});

    const orderItem = this.props.orderItems[this.props.menuItem.id];

    const options = new Map(this.state.options);
    this.props.menuItem.item_option_sections.forEach(itemOptionSection => {
      let option;
      if (orderItem && orderItem.options.get(itemOptionSection.id)) {
        option = orderItem.options.get(itemOptionSection.id);
      } else {
        option = itemOptionSection.props.isRequired ? null : [];
      }
      options.set(itemOptionSection.id, option);
    });

    this.setState({options});
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

  updateItemInstructions() {
    return(e) => {
      if (e.target.value.length > 255) {
        this.props.receiveItemInstructionsErrors();
      } else {
        this.setState({'itemInstructions': e.target.value});
      }
    };
  }

  addItem() {
    if (Array.from(this.state.options.values()).some(o => o === null)) {
      this.props.receiveRequiredOptionsErrors();
      return;
    }

    const id = this.props.menuItem.id;
    const name = this.props.menuItem.name;
    const price = this.state.price;
    const quantity = this.state.quantity;
    const itemInstructions = this.state.itemInstructions;
    const restaurantId = this.props.match.params.id;
    const restaurantName = this.props.restaurantName;
    const deliveryMinimum = this.props.deliveryMinimum;
    const deliveryFee = this.props.deliveryFee;
    const item_option_sections = this.props.menuItem.item_option_sections;
    const options = this.state.options;

    if (Object.keys(this.props.orderItems).includes(id.toString())) {
      const oldQuantity = this.props.orderItems[id].quantity;
      this.props.deleteItem(id, price, oldQuantity);
    }

    this.props.addItem(id, name, price, quantity, itemInstructions, restaurantId, restaurantName, deliveryMinimum, deliveryFee, item_option_sections, options);
    this.props.clearCheckoutErrors();
    this.props.toggleMenuItemModal();
  }

  addOption(optionSectionId, option) {
    const options = new Map(this.state.options);
    options.set(optionSectionId, option);
    this.setState({options});
  }

  render() {
    const { id, name, price, description, item_option_sections } = this.props.menuItem;
    const { quantityError, itemInstructionsError, requiredOptionsError, clearErrors } = this.props;

    const itemOptionSections = item_option_sections.map(itemOptionSection => {
      return <ItemOptionSection key={itemOptionSection.id} itemId={id} itemOptionSection={itemOptionSection} addOption={this.addOption}/>;
    });

    return(
      <div className='modal-container' onClick={this.toggleMenuItemModal}>
        <div className='menu-item-modal' onClick={quantityError || itemInstructionsError || requiredOptionsError ? clearErrors : null}>
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

            <ul>
              {itemOptionSections}
            </ul>

            <h4>Special Instructions</h4>
            <h5 className={`${this.state.itemInstructions === "" ? 'hidden' : null}`}>Special requests may result in additional charges.</h5>
            <textarea placeholder='Dressing on the side? No pickles? Let us know here.' value={this.state.itemInstructions} onChange={this.updateItemInstructions()}></textarea>

            <h6 className='errors'>{itemInstructionsError ? itemInstructionsError : null}</h6>
            <h6 className='errors'>{requiredOptionsError ? requiredOptionsError : null}</h6>

          </div>
          <button className={`${this.state.quantity === 0 ? 'submit-item-inactive' : 'submit-item'}`} onClick={this.addItem}>{`${this.props.menuItem.restaurant_id ? `Add to bag` : `Update`}: $${parseInt(this.state.quantity) ? (this.state.price * parseInt(this.state.quantity)).toFixed(2) : 0}`}</button>
          <button className="x-close" onClick={this.toggleMenuItemModal}>&times;</button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuItemModal));
