import React, { Component } from 'react';
import { Link } from "react-router";
import './App.css';

import landing from '../images/landingImg.png'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <img id="top-space" src={landing} alt={"logo"}/>
        </div>
        <div id="start-area">
          <a className="waves-effect waves-light btn" id="start-btn">Start Game</a>
        </div>
      </div>
    );
  }
}

export default App;
