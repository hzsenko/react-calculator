import React from 'react';

class InvestInfoGrowth extends React.Component {
  render() {
    const { investTime, investSum, investGain } = this.props;
    return (
      <div className="invest-info__growth">
        <div className="info-growth">
          <div className="info-item">
            <p className="info-item-title">Инвестиции</p>
            <p className="info-item-value">{ investSum }</p>
          </div>
          <div className="info-item">
            <p className="info-item-title">Прирост стоимости паев</p>
            <p className="info-item-value">{ investGain ? investGain.toFixed(2) : '' }</p>
          </div>
        </div>
        <div className="info-growth__main">
          Прирост стоимости паев { investTime }%
        </div>
      </div>
    )
  }
}

export default InvestInfoGrowth;
