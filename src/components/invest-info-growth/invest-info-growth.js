import React from 'react';
import './style.scss';

class InvestInfoGrowth extends React.Component {
  render() {
    const { investTime, investSum, investGain } = this.props;
    const formatter = new Intl.NumberFormat("ru");

    return (
      <div className="invest-info__growth">
        <div className="growth-wrapper">
          <div className="info-growth">
            <div className="info-item">
              <div className="info-wrapper">
                <p className="info-item-title">Инвестиции</p>
                <p className="info-item-value">{ formatter.format(investSum) }
                  <span className="rub">&#8381;</span>
                </p>
              </div>

            </div>
            <div className="info-item">
              <div className="info-wrapper growth">
                <p className="info-item-title">Прирост стоимости паев</p>
                <p className="info-item-value">{ formatter.format(Math.round(investGain)) }
                  <span className="rub">&#8381;</span>
                </p>
              </div>
            </div>
          </div>
          <div className="info-growth__main">
            Прирост стоимости паев <span>{ formatter.format(investTime) }%</span>
          </div>
        </div>
      </div>
    )
  }
}

export default InvestInfoGrowth;
