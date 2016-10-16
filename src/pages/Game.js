import React from "react";

import MusicStore from "../stores/MusicStore";
import Question from "../components/Question";
// import * as TodoActions from "../actions/TodoActions";

export default class Featured extends React.Component {
  // init when Feature is run
  constructor() {
    super();
    // loading in the data
    this.state = {info: MusicStore.getAll()}
    console.log(this.state)
  }

  // render html
  render() {
    const { info } = this.state;
    // custom object to be render by DOM
    const QuestionComponent = info.map((music) => {
        return <Question key={music.id} {...music}/>;
    });

    return (
      <div>
        <div>{QuestionComponent}</div>
      </div>
    );
  }
}
