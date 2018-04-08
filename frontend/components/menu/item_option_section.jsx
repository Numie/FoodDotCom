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
      return <ItemOption key={itemOption.id} itemId={this.props.itemId} itemOption={itemOption} sectionName={name} isRequired={isRequired} addOption={addOption}/>;
    });

    return(
      <li className={isRequired ? 'item-option-section item-option-section-required' : 'item-option-section'}>
        {isRequired ? <img src='https://assets.seamless.com/img-hashed/flag_vertical-19fe2093de277d769ec8e5eb2618abab.svg' /> : null}
        <h3>{name}</h3>
        <p>{description}</p>
        <h6>{isRequired ? 'Required — Choose 1.' : 'Optional — Choose as many as you like.'}</h6>
        <div className='item-option-container'>
          {itemOptions}
        </div>
      </li>
    );
  }
}
