import React, { Component } from "react";
import "./rating.css";

class Rating extends Component {
  rating = () => {
    let rate = parseInt(this.props.rating);
    let emptyStars = "";
    let fullStars = "";
    let maxRate = 5;
    let minRate = 0;

    while (minRate < rate) {
      fullStars += "★";
      minRate++;
    }

    while (maxRate > rate) {
      emptyStars += "★";
      maxRate--;
    }

    let full = React.createElement(
      "span",
      { className: "fullStars", key: "starFull" },
      fullStars
    );
    let empty = React.createElement(
      "span",
      { className: "emptyStars", key: "starEmpty" },
      emptyStars
    );
    return [full, empty];
  };

  render() {
    return <span className="rating">{this.rating()}</span>;
  }
}

export default Rating;
