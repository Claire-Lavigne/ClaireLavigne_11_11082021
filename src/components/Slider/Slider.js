import React, { Component } from "react";
import LeftArrow from "./LeftArrow/LeftArrow";
import RightArrow from "./RightArrow/RightArrow";
import SlidesNumber from "./SlidesNumber/SlidesNumber";
import "./slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0,
    };
  }

  nextSlide = () => {
    // if last img get first img else get next img
    if (this.state.activeSlide === this.props.pix.length - 1) {
      this.setState({ activeSlide: 0 });
    } else {
      this.setState({
        activeSlide: this.state.activeSlide + 1,
      });
    }
  };

  prevSlide = () => {
    // if img[0] get last img else get prev img
    if (this.state.activeSlide === 0) {
      this.setState({ activeSlide: this.props.pix.length - 1 });
    } else {
      this.setState({ activeSlide: this.state.activeSlide - 1 });
    }
  };

  render() {
    const pix = this.props.pix;
    return (
      <section className="slider">
        {pix.map((img, index) => (
          <img
            key={`slide${index}`}
            className={
              index === this.state.activeSlide ? "slide isActive" : "slide"
            }
            src={img}
            alt=""
          />
        ))}
        {pix.length > 1 && (
          <>
            <LeftArrow onClick={this.prevSlide} />
            <RightArrow onClick={this.nextSlide} />
            <SlidesNumber
              currentSlide={this.state.activeSlide + 1}
              totalSlides={pix.length}
            />
          </>
        )}
      </section>
    );
  }
}

export default Slider;
