import React, { Component } from 'react';
import logo from './twitter_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Twitter Search</h1>
        </header>
        <p className="App-intro">
          Search results will be displayed here.
          {/* results here */}
        </p>
      </div>
    );
  }
}

export default SearchApp;
