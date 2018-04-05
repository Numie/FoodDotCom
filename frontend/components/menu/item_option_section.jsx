import React from 'react';

export default class ItemOptionSection extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { id, name, description, isRequired, minAllowed, maxAllowed } = this.props.itemOptionSection;

    return(
      <div>
        <h6>{name}</h6>
        <h6>{description}</h6>
        <h6>{isRequired.toString()}</h6>
        <h6>{minAllowed}</h6>
        <h6>{maxAllowed}</h6>
      </div>
    );
  }
}
