import React from 'react';
import InvestConfigSum from "../invest-config-sum";
import InvestConfigTime from "../invest-config-time";
import './style.scss';

class InvestConfig extends React.Component {

  render() {
    const { investSum, handleChange, handleClick, activeName } = this.props;

    return (
      <div className="invest-config">
        <InvestConfigSum
          investSum={ investSum }
          handleChange={ handleChange }/>
        <InvestConfigTime
          handleClick={ handleClick }
          activeName={ activeName }
        />
      </div>
    )
  }
}

export default InvestConfig;
