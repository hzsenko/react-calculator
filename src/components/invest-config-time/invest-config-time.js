import React from 'react';
import InvestButton from "../invest-button";
import './style.scss';

class InvestConfigTime extends React.Component {

  handleClick = (item) => {
    this.props.handleClick(item);
  };

  render() {
    const investButtonsConfig = [
      {
        value: 4.8,
        label: "3 месяца",
        name: 'first',
      },
      {
        value: 9.28,
        label: "6 месяцев",
        name: 'second',
      },
      {
        value: 13.72,
        label: "1 год",
        name: 'third',
      },
      {
        value: 14.35,
        label: "2 года",
        name: 'four',
      },
      {
        value: 25.69,
        label: "3 года",
        name: 'five',
      },
    ];
    const { activeName } = this.props;

    const buttons = investButtonsConfig.map((item, index) =>
      <InvestButton
        key={ index }
        name={ item.name }
        activeName={ activeName }
        label={ item.label }
        value={ item.value }
        onClick={ () => this.handleClick(item) }/>
    );

    return (
      <div className="invest-config__time">
        <div className="invest-time">
          <p>Срок инвестирования</p>
          <div className="invest-time__buttons">
            { buttons }
          </div>
        </div>
      </div>
    )
  }
}

export default InvestConfigTime;
