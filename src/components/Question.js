import React from "react";

import '../css/Game.css';
import beatlesImg from '../images/artists/beatles.png'
import * as MusicActions from "../actions/MusicActions";

export default class Question extends React.Component {
  constructor(props) {
    super();
  }
  // create Todo buttons for player to click
  playerButtonActionOne() {MusicActions.playerAct(0)}
  playerButtonActionTwo() {MusicActions.playerAct(1)}
  playerButtonActionThree() {MusicActions.playerAct(2)}
  playerButtonActionFour() {MusicActions.playerAct(3)}

  render() {
    console.log(this.props, "this is what question comp gets")
    const {id} = this.props;
    const {question} = this.props;

    return (
      <div className="beatle-style">
        <img className="img-shadow" src={beatlesImg} alt={"beatles"}/>
        <h4>Question {id}</h4>
        <div className="beatle-question"> {question} </div>
        <div className="questions-top">
          <button className="waves-effect waves-light btn choice" onClick={this.playerButtonActionOne.bind(this)}>{this.props.answers[0]}</button>
          <button className="waves-effect waves-light btn choice" onClick={this.playerButtonActionTwo.bind(this)}>{this.props.answers[1]}</button>
          <button className="waves-effect waves-light btn choice" onClick={this.playerButtonActionThree.bind(this)}>{this.props.answers[2]}</button>
          <button className="waves-effect waves-light btn choice" onClick={this.playerButtonActionFour.bind(this)}>{this.props.answers[3]}</button>
        </div>
      </div>
    );

  }
}
