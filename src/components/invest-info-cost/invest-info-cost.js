import React from 'react';
import './style.scss';

class InvestInfoCost extends React.Component {

  render() {
    return (
      <div className="invest-info__cost">
        Стоимость паев

        <button className="info-cost__button">Получить</button>
      </div>
    )
  }
}

export default InvestInfoCost;
