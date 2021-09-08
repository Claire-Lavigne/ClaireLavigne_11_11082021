import React, { Component } from "react";
import "./leftArrow.css";

class LeftArrow extends Component {
  render() {
    return (
      <button className="prev" onClick={this.props.onClick}>
        <img src="./assets/arrow-left.png" alt="go to previous slide" />
      </button>
    );
  }
}

export default LeftArrow;
