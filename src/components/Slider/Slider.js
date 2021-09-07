import React, { Component } from "react";
import "./slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0,
      translateValue: 0,
      opacityValue: "",
    };
  }

  next = () => {
    // animation
    this.setState({ translateValue: 300 });
    setTimeout(() => {
      this.setState({ translateValue: 0 });
    }, 1);
    // if last img get first img else get next img
    if (this.state.activeSlide === this.props.totalSlides - 1) {
      this.setState({ activeSlide: 0 });
    } else {
      this.setState({ activeSlide: this.state.activeSlide + 1 });
    }
  };

  prev = () => {
    // animation
    this.setState({ translateValue: -300 });
    setTimeout(() => {
      this.setState({ translateValue: 0, opacityValue: 1 });
    }, 1);
    // if img[0] get last img else get prev img
    if (this.state.activeSlide === 0) {
      this.setState({ activeSlide: this.props.totalSlides - 1 });
    } else {
      this.setState({ activeSlide: this.state.activeSlide - 1 });
    }
  };

  render() {
    return (
      <section className="slider">
        {this.props.slides.map((img, index) => (
          <img
            key={`slide${index}`}
            className={index === this.state.activeSlide ? "isActive" : ""}
            src={img}
            alt=""
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              opacity: this.state.opacityValue,
            }}
          />
        ))}
        {this.props.totalSlides > 1 && (
          <>
            <button className="prev" onClick={this.prev}>
              <img src="./assets/arrow-left.png" alt="go to previous slide" />
            </button>
            <button className="next" onClick={this.next}>
              <img src="./assets/arrow-right.png" alt="go to next slide" />
            </button>
            <div className="slidesNumber">
              {this.state.activeSlide + 1}/{this.props.totalSlides}
            </div>
          </>
        )}
      </section>
    );
  }
}

export default Slider;
