// objects and data
import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class MusicStore extends EventEmitter {
  // MusicStore Obj
  constructor(){
    super()
    this.stage = 0;
    this.musicInfo = [
      {
        id: 1,
        artist:"The Beatles",
        answers:["Abbey Road", "Walk about","The White Album","Come Together"],
        question:"What is the name of this album cover?"
      },
      {
        id: 2,
        artist:"Questions2",
        answers:["Abbey Road", "Walk about","The White Album","Come Together"],
        question:"This is questions 2?"
      }
    ];
    this.playerChoice = [];
  }

  getStage() {
    return this.stage;
  }
  getAll() {
    return this.musicInfo;
  }

  // player action
  playerAction(choice) {
    console.log("The game stage has been progressed");
    this.stage++;
    this.playerChoice.push(choice);
    this.emit("change");
  }

  //triggers when dispatcher is called
  handleActions(action) {
    // check watch action is called
    console.log("Received an action!", action)
    this.playerAction(action.choice)
  }

}

const musicStore = new MusicStore;
// create the listener of dispatcher and actions
dispatcher.register(musicStore.handleActions.bind(musicStore))
// expost dispatcher globally
window.dispatcher = dispatcher;

export default musicStore;
