import React, { Component } from "react";
import "./rating.css";

class Rating extends Component {
  render() {
    return <span className="rating">{this.props.rating}</span>;
  }
}

export default Rating;
