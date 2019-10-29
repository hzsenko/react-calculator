import React from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

class InvestConfigSum extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      min: 50000,
      max: 3000000,
      value: 50000
    }
  }

  handleChange = (value) => {
    this.props.handleChange(value);
  };

  render() {
    const marks = {
      50000: '50 т',
      500000: '500 т',
      1000000: '1000 т',
      2000000: '2000 т',
      3000000: '3000 т',
    };

    const { min, max } = this.state;
    const { investSum } = this.props;

    return (
      <div className="invest-config__sum">
        <div className="invest-sum">
          <label htmlFor="investSum">Сумма для инвестирования</label>
          <input
            readOnly={ true }
            type="text"
            id="investSum"
            value={ investSum }/>
        </div>
        <div className="invest-slider">
          <Slider
            min={ min }
            max={ max }
            marks={ marks }
            value={ investSum }
            onChange={ this.handleChange }
            step={ null }/>
        </div>
      </div>
    )
  }
}

export default InvestConfigSum;
