import React from 'react';

export default class ItemOption extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { id, name, description, price } = this.props.itemOption;

    return(
      <div className='item-option'>
        <input type='radio' name={name}/>
        <label id={name}>{name}</label>
      </div>
    );
  }
}
