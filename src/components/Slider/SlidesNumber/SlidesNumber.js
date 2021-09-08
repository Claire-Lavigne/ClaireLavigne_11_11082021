import React, { Component } from "react";
import "./slidesNumber.css";

class RightArrow extends Component {
  render() {
    return (
      <div className="slidesNumber">
        {this.props.currentSlide}/{this.props.totalSlides}
      </div>
    );
  }
}

export default RightArrow;
