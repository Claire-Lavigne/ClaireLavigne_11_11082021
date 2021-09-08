import React, { Component } from "react";
import "./rightArrow.css";

class RightArrow extends Component {
  render() {
    return (
      <button className="next" onClick={this.props.onClick}>
        <img src="./assets/arrow-right.png" alt="go to next slide" />
      </button>
    );
  }
}

export default RightArrow;
