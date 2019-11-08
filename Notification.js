import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

export default class Notification extends Component {
  constructor() {
    console.log("Component Constructor");
    this.state = {
      component: "Notification"
    };
  }
  componentWillMount() {
    console.log("Component WILL MOUNT!");
  }
  componentDidMount() {
    console.log("Component DID MOUNT!");
  }
  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECIEVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("Component shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
  }

  render() {
    var message;
    var displayMessage =
      this.props.notification > 0
        ? "You have " + this.props.notification + " new notifications"
        : "You dont have new notifications";

    message = (
      <div>
        <h3 className="notification">{displayMessage}</h3>
        <h4 className="notification-component">
          I am coming from {this.state.component} Component
        </h4>
      </div>
    );

    return message;
  }
}
