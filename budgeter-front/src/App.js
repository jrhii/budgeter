import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './containers/Body';

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
        <Body />
      </div>
    );
  }
}

export default App;
