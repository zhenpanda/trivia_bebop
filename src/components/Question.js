import React from "react";

import '../css/Game.css';
import * as MusicActions from "../actions/MusicActions";

import beatlesImg from '../images/artists/beatles.png';
import bowieImg from '../images/artists/bowie.png';
import madonnaImg from '../images/artists/madonna.png';
import michaelImg from '../images/artists/michael.png';
import nirvanaImg from '../images/artists/nirvana.png';
import landingImg from '../images/landingImg.png';

import MusicStore from "../stores/MusicStore";

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
    // depending on the stage of the game render different info
    switch (this.props.id) {
      case 1:
        // console.log(this.props.id, "is current id");
        var displayImg = beatlesImg;
        var bg = "beatle-style shared-bg";
        var questionColor = "beatle-color";
        break;
      case 2:
        // console.log(this.props.id, "is current id");
        var displayImg = bowieImg;
        var bg = "bowie-style shared-bg"
        break;
      case 3:
        // console.log(this.props.id, "is current id");
        var displayImg = madonnaImg;
        var bg = "madonna-style shared-bg"
        break;
      case 4:
        // console.log(this.props.id, "is current id");
        var displayImg = michaelImg;
        var bg = "michael-style shared-bg"
        break;
      case 5:
        // console.log(this.props.id, "is current id");
        var displayImg = nirvanaImg;
        var bg = "nirvana-style shared-bg"
        break;
      case 6:
        var displayImg = landingImg;
        var bg = "nirvana-style shared-bg"
        var answers = MusicStore.getAnswer();
        var playerChoices = MusicStore.getChoice();
        // console.log(answers, playerChoices);
        // check player score
        var score = 0;
        for (let c = 0; c < answers.length; c++) {
          if (answers[c] == playerChoices[c]) { score++ }
        }
        break;
      default:
        break;
    }

    if (this.props.id < 6) {
      return (
        <div className={bg}>
        <img className="img-shadow" src={displayImg} alt={"beatles"}/>
        <h4 className={questionColor}>Question {id}/5</h4>
        <div className="beatle-question"> {question} </div>
        <div className="questions-top">
        <button className="waves-effect waves-light btn choice" onClick={this.playerButtonActionOne.bind(this)}>{this.props.answers[0]}</button>
        <button className="waves-effect waves-light btn choice" onClick={this.playerButtonActionTwo.bind(this)}>{this.props.answers[1]}</button>
        <button className="waves-effect waves-light btn choice" onClick={this.playerButtonActionThree.bind(this)}>{this.props.answers[2]}</button>
        <button className="waves-effect waves-light btn choice" onClick={this.playerButtonActionFour.bind(this)}>{this.props.answers[3]}</button>
        </div>
        </div>
      );
    }else{
      return (
        <div className={bg}>
          <img className="img-shadow" src={displayImg} alt={"beatles"}/>
          <h4 className={questionColor}>Your Score is {score}</h4>
          <div className="beatle-question"> {question} </div>
          <div className="questions-top"></div>
        </div>
      )
    }

  }
}
