import React from 'react';
import  { connect } from 'react-redux';

const mapStateToProps = state => ({
  orderItems: state.entities.orderItems
});

class ItemOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addOption(this.props.itemOption.item_option_section_id,
      // {id: this.props.itemOption.id, name: this.props.itemOption.name}
      this.props.itemOption
    );
  }

  render() {
    const { id, name, description, price, item_option_section_id } = this.props.itemOption;
    const self = this.props.itemOption;
    const isRequired = this.props.isRequired;
    debugger
    return(
      <div className='item-option'>
      <input type={isRequired ? 'radio' : 'checkbox'} name={this.props.sectionName} onClick={this.handleClick}
        defaultChecked={this.props.orderItems[this.props.itemId] &&
        this.props.orderItems[this.props.itemId].options.get(item_option_section_id) &&
        (this.props.orderItems[this.props.itemId].options.get(item_option_section_id) instanceof Set ?
        Array.from(this.props.orderItems[this.props.itemId].options.get(item_option_section_id).values()).some(obj => obj.id === id) :
        this.props.orderItems[this.props.itemId].options.get(item_option_section_id).id === id)}/>
      <label id={name}>{name}</label>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ItemOption);
