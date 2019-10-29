import React from 'react';
import './App.scss';
import InvestConfig from "./components/invest-config";
import InvestInfo from "./components/invest-info";

function App() {
  return (
    <div className="app">
      <div className="app-title">
        Калькулятор
      </div>
      <div className="app-calculator">
        <InvestConfig/>
        <InvestInfo/>
      </div>

    </div>
  );
}

export default App;
