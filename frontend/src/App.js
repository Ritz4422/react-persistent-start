import React, { Component } from 'react';

import client from './api/Client';
import './App.css';

class App extends Component {
handleClick() {
  client.service('employees').create({
    name: "Nathan"
  });
}

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Add employee</button>
      </div>
    );
  }
}

export default App;
