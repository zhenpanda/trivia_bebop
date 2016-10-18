import dispatcher from "../dispatcher";

export function playerAct(choice) {
  console.log("action has been dispatched")
  dispatcher.dispatch({
    type: "ACTION",
    choice,
  });
}
