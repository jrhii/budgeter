import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleBudgetList from './containers/SingleBudgetList';

class App extends Component {
  // constructor() {
  //   super(props);

  //   this.state = {
  //     currentBudgetId : null,
  //   }
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SingleBudgetList/>
      </div>
    );
  }
}

export default App;
