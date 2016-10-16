import React from "react";

import '../css/Game.css';
import beatlesImg from '../images/artists/beatles.png'

export default class Question extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const quiz = this.props.id;
    const {question} = this.props;

    if (quiz == 1) {
      return (
        <div className="beatle-style">
          <img className="img-shadow" src={beatlesImg} alt={"beatles"}/>
          <h4>Questions 1</h4>
          <div className="beatle-question"> {question} </div>
          <div className="questions-top">
            <a className="waves-effect waves-light btn choice">{this.props.answers[0]}</a>
            <a className="waves-effect waves-light btn choice">{this.props.answers[1]}</a>
            <a className="waves-effect waves-light btn choice">{this.props.answers[2]}</a>
            <a className="waves-effect waves-light btn choice">{this.props.answers[3]}</a>
          </div>
        </div>
      );
    }


  }
}
