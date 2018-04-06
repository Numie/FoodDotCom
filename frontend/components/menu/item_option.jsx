import React from 'react';

export default class ItemOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addOption(this.props.itemOption.item_option_section_id,
      {id: this.props.itemOption.id, name: this.props.itemOption.name}
    );
  }

  render() {
    const { id, name, description, price, item_option_section_id } = this.props.itemOption;
    const self = this.props.itemOption;

    return(
      <div className='item-option'>
        <input type='radio' name={this.props.sectionName} onClick={this.handleClick}/>
        <label id={name}>{name}</label>
      </div>
    );
  }
}
