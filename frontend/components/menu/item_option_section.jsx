import React from 'react';
import ItemOption from './item_option';

export default class ItemOptionSection extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { id, name, description, isRequired, minAllowed, maxAllowed, item_options } = this.props.itemOptionSection;
    const addOption = this.props.addOption;

    const itemOptions = item_options.map(itemOption => {
      return <ItemOption key={itemOption.id} itemOption={itemOption} sectionName={name} addOption={addOption}/>;
    });

    return(
      <li className='item-option-section'>
        <h3>{name}</h3>
        <h6>{description}</h6>
        <div className='item-option-container'>
          {itemOptions}
        </div>
      </li>
    );
  }
}
