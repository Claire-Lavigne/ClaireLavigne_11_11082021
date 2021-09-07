import React, { Component } from "react";
import Arrows from "./Arrows/Arrows";
import "./slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.totalSlides = this.props.totalSlides;

    this.state = {
      activeSlide: this.props.id === 0,
      translateValue: 0,
    };
  }

  render() {
    const isActive = this.state.activeSlide ? "active" : "";
    return (
      <>
        <img
          className={isActive}
          src={this.props.src}
          data-index={this.props.id}
          alt=""
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
          }}
        />
        {this.totalSlides > 1 && <Arrows onClick={this.handleClick()} />}
      </>
    );
  }
}

export default Slider;
