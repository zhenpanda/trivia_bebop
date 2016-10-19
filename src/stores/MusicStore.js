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
        artist:"Bowie",
        answers:["Elvis Presley", "Ozzy Osbourne","David Bowie","Tom Jones"],
        question:"What is the name of this English-born pop artist?"
      },
      {
        id: 3,
        artist:"Madonna",
        answers:["Cher", "Pink","Britney Spears","Madonna"],
        question:"Who is this artist often refered to as Queen of Pop?"
      },
      {
        id: 4,
        artist:"Michael",
        answers:["Thriller", "Zombie", "Monsters", "Forever"],
        question:"What is the name of Michael Jackson's best selling 1982 album?"
      },
      {
        id: 5,
        artist:"Nirvana",
        answers:["Foo Fighters", "Nirvana","Red Hot Chili Peppers","The Smiths"],
        question:"Which band does this album cover belong to?"
      },
      {
        id: 6,
        artist:"End Game",
        answers:[""],
        question:"Thank you for Playing"
      }
    ];
    this.answers = [0,2,3,0,1];
    this.playerChoice = [];
  }

  getStage() {
    return this.stage;
  }
  getChoice() {
    return this.playerChoice;
  }
  getAnswer() {
    return this.answers;
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
