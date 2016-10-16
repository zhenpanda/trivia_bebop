// objects and data
import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class MusicStore extends EventEmitter {
  // MusicStore Obj
  constructor(){
    super()
    this.musicInfo = [
      {
        id: 1,
        artist:"The Beatles",
        answers:["Abbey Road", "Walk about","The White Album","Come Together"],
        question:"What is the name of the album where this picture is featured as it's cover?"
      }
    ]
  }

  getAll() {
    return this.musicInfo;
  }

}

const musicStore = new MusicStore;
export default musicStore;
