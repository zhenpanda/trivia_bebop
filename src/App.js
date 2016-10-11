import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import landing from './images/landingImg.png' // relative path to image

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="fitted" src={landing} alt={"logo"}/>
      </div>
    );
  }
}

export default App;
