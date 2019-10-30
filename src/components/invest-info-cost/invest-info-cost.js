import React from 'react';
import './style.scss';

class InvestInfoCost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      invest: null
    }
  }

  handleClick = (sum, gain) => {
    this.setState({
      invest: +sum + +gain
    })
  };

  render() {
    const formatter = new Intl.NumberFormat("ru");
    const { investGain, investSum } = this.props;
    const { invest } = this.state;

    return (
      <div className="invest-info__cost">
        <p>Стоимость паев</p>
        <div className="invest-cost">{ formatter.format(invest) }
          <span className="rub">&#8381;</span>
        </div>
        <button className="info-cost__button"
                onClick={ () => this.handleClick(investSum, investGain) }>
          Получить
        </button>
      </div>
    )
  }
}

export default InvestInfoCost;
