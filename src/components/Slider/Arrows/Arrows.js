import React, { Component } from "react";
import "./arrows.css";

class Arrows extends Component {
  next = () => {
    // animation
    this.setState({ translateValue: 300 });
    setTimeout(() => {
      this.setState({ translateValue: 0 });
    }, 1);
    // if last img get first img else get next img
    if (this.state.activeSlide === this.totalSlides - 1) {
      this.setState({ activeSlide: 0 });
    } else {
      this.setState({ activeSlide: this.state.activeSlide + 1 });
    }
  };

  prev = () => {
    // animation
    this.setState({ translateValue: -300 });
    setTimeout(() => {
      this.setState({ translateValue: 0 });
    }, 1);
    // if img[0] get last img else get prev img
    if (this.state.activeSlide === 0) {
      this.setState({ activeSlide: this.totalSlides - 1 });
    } else {
      this.setState({ activeSlide: this.state.activeSlide - 1 });
    }
  };

  render() {
    return (
      <>
        <button className="prev" onClick={this.prev}>
          <img src="./assets/arrow-left.png" alt="previous slide" />
        </button>
        <button className="next" onClick={this.next}>
          <img src="./assets/arrow-right.png" alt="next slide" />
        </button>
        <div className="slidesNumber">
          {this.state.activeSlide + 1}/{this.totalSlides}
        </div>
      </>
    );
  }
}

export default Arrows;
