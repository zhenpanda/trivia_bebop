import React from "react";
import { Link } from "react-router";

import '../css/Front.css';
import landing from '../images/landingImg.png'

export default class Front extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <img id="top-space" src={landing} alt={"logo"}/>
          <div id="start-area">
            {this.props.children}
            <Link to="game" className="waves-effect waves-light btn" id="start-btn">Start Game</Link>
          </div>
        </div>
      </div>
    );
  }}
