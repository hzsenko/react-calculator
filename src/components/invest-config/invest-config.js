import React from 'react';
import InvestConfigSum from "../invest-config-sum";
import InvestConfigTime from "../invest-config-time";

class InvestConfig extends React.Component {

  render() {
    return (
      <div className="invest-config">
        <InvestConfigSum/>
        <InvestConfigTime/>
      </div>
    )
  }
}

export default InvestConfig;
