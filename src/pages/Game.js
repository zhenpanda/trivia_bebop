import React from "react";

import MusicStore from "../stores/MusicStore";
import Question from "../components/Question";

export default class Featured extends React.Component {
  // init when Feature is run
  constructor() {
    super();
    // pointing getData to this obj
    this.getData = this.getData.bind(this);
    // grabbing the data from store
    this.state = {
      info: MusicStore.getAll(),
      stage: MusicStore.getStage()
    };
    // count the turns which player is currently at
    console.log(this.state, "this is starting state");
  }
  // loading in things the first time the componet is being loaded
  componentWillMount() {
    MusicStore.on("change", this.getData)
  }
  // grab all the data from store
  getData() {
    this.setState({
      stage: MusicStore.getStage()
    })
    let c = MusicStore.getChoice();
    console.log("player choice is", c);
    console.log("new state is", this.state);
  }

  // render automaticlly when state is changed
  render() {
    let parts = [];
    let cStage= this.state.stage;
    console.log("Stage is now at", cStage+1);
    parts.push(this.state.info[cStage]);
    const QuestionComponent = parts.map((music) => {
        return <Question key={music.id} {...music}/>;
    });

    return (
      <div>
        <div>{QuestionComponent}</div>
      </div>
    );

  }

}
