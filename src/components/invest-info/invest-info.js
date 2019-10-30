import React from 'react';
import InvestInfoGrowth from "../invest-info-growth";
import InvestInfoCost from "../invest-info-cost";
import './style.scss';

class InvestInfo extends React.Component {

  render() {
    const { investSum, investTime, investGain } = this.props;
    return (
      <div className="invest-info">
        <InvestInfoGrowth
          investGain={ investGain }
          investSum={ investSum }
          investTime={ investTime }/>
        <InvestInfoCost
          investGain={ investGain }
          investSum={ investSum }/>
      </div>
    )
  }
}

export default InvestInfo;
