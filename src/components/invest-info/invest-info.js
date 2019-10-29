import React from 'react';
import InvestInfoGrowth from "../invest-info-growth";
import InvestInfoCost from "../invest-info-cost";

class InvestInfo extends React.Component {

  render() {
    return (
      <div className="invest-info">
        <InvestInfoGrowth/>
        <InvestInfoCost/>
      </div>
    )
  }
}

export default InvestInfo;
