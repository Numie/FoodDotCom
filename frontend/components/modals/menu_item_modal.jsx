import React from 'react';

export default class MenuItemModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: null,
      quantity: 1
    };

    this.toggleMenuItemModal = this.toggleMenuItemModal.bind(this);
  }

  componentDidMount() {
    this.setState({price: this.props.menuItem.props.menuItem.price.toFixed(2)});
  }

  toggleMenuItemModal(e) {
    if (e.target === e.currentTarget) {
      this.props.toggleMenuItemModal();
    }
  }

  render() {
    const { name, price, description } = this.props.menuItem.props.menuItem;

    return(
      <div className='modal-container' onClick={this.toggleMenuItemModal}>
        <div className='menu-item-modal'>
          <div className='menu-item-modal-info'>
            <h1>{name}</h1>
            <h1>${this.state.price}</h1>
            <p>{description}</p>
            <div className='quantity-toggle'>
              <button className='plus-minus'>-</button>
              <input className='quantity' value={this.state.quantity} />
              <button className='plus-minus'>+</button>
            </div>
            <h4>Special Instructions</h4>
            <textarea placeholder='Dressing on the side? No pickles? Let us know here.'></textarea>
          </div>
          <button className='submit-item'>{`Add to bag: ${this.state.price}`}</button>
          <button className="x-close">&times;</button>
        </div>
      </div>
    );
  }
}
