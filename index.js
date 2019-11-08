import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Notification from "./Notification";

class App extends Component {
  constructor() {
    this.state = {
      notification: 5,
      name: "Only Fullstack"
    };
  }

  render() {
    return (
      <div>
        <Notification notification={this.state.notification} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
