import React from "react";
import ClickCounter from "./ClickCounter";
import Welcome from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <Welcome name="Andrea" />
      </div>
    );
  }
}
