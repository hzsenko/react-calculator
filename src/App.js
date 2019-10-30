import React from 'react';
import './App.scss';
import InvestConfig from "./components/invest-config";
import InvestInfo from "./components/invest-info";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investSum: 50000,
      investTime: null,
      activeName: null,
      investGain: null,
    };
  }

  calcInvestGain = (sum, time) => {
    if (sum !== null && time !== null) {
      this.setState({
        investGain: (sum * time) / 100
      });
    }
  };

  handleChange = (value) => {
    this.setState({
      investSum: value
    }, () => {
      this.calcInvestGain(this.state.investSum, this.state.investTime);
    });

  };

  handleClick = (item) => {
    if (this.state.investTime === item.value) {
      return false;
    }

    this.setState({
      investTime: item.value,
      activeName: item.name
    }, () => {
      this.calcInvestGain(this.state.investSum, this.state.investTime);
    });

  };

  render() {
    const { investSum, activeName, investTime, investGain } = this.state;
    return (
      <div className="app">
        <div className="app-title">
          Калькулятор
        </div>
        <div className="app-calculator">
          <InvestConfig
            investSum={ investSum }
            activeName={ activeName }
            handleClick={ this.handleClick }
            handleChange={ this.handleChange }/>
          <InvestInfo
            investSum={ investSum }
            investTime={ investTime }
            investGain={ investGain }/>
        </div>

      </div>
    );
  }
}

export default App;
