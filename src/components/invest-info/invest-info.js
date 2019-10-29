import React from 'react';
import InvestInfoGrowth from "../invest-info-growth";
import InvestInfoCost from "../invest-info-cost";

class InvestInfo extends React.Component {

  render() {
    const { investSum, investTime, investGain } = this.props;
    return (
      <div className="invest-info">
        <InvestInfoGrowth
          investGain={ investGain }
          investSum={ investSum }
          investTime={ investTime }/>
        <InvestInfoCost/>
      </div>
    )
  }
}

export default InvestInfo;
