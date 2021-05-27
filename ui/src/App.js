import logo from './logo.svg';
import React, {Component} from 'react';

export default class App extends Component{
  render (){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href=""
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}
