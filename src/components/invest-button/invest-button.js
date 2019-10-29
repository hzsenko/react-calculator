import React from 'react';

class InvestButton extends React.Component {
  render() {
    const { name, value, activeName, onClick, label } = this.props;
    return (
      <button
        name={ name }
        className={ activeName === name ? 'active' : null }
        value={ value }
        onClick={ onClick }>
        { label }
      </button>
    )
  }
}

export default InvestButton;