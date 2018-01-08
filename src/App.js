import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Toggle from './Toggle'

import {Calculator,TemperatureInput} from './Calculator'

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li>{number}</li>
);

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> React 演示</h1>
        </header>
        <p className="App-intro">
          编辑 <code>src/App.js</code>
        </p>
          <Clock Name={'Clock1'}/>
          <Toggle/>
          <ul>{listItems}</ul>
          <Calculator/>
      </div>
    );
  }
}

export default App;
