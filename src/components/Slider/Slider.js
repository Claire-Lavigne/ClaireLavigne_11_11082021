import React, { Component } from "react";
import "./slider.css";
import datasProperty from "../../datas-property.json";

class Slider extends Component {
  constructor(props) {
    super(props);

    const id = window.location.href.split("property:")[1];
    this.filterDatas = datasProperty.filter((item) => item.id === id);
    const filterPix = this.filterDatas.map((item) => item.pictures.length);
    this.totalSlides = filterPix[0];

    this.state = {
      activeSlide: 0,
      translateValue: 0,
    };
  }

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
    const showArrows = () => {
      if (this.totalSlides > 1) {
        return (
          <>
            <button className="prev" onClick={this.prev}>
              <img src="./assets/arrow-left.png" alt="previous slide" />
            </button>
            <button className="next" onClick={this.next}>
              <img src="./assets/arrow-right.png" alt="next slide" />
            </button>
          </>
        );
      }
    };
    return (
      <section className="slider">
        {this.filterDatas.map((item) => (
          <img
            key={`slide-${this.state.activeSlide}`}
            id={`${item.id}-${this.state.activeSlide}`}
            // data-totalslides={this.totalSlides}
            src={item.pictures[this.state.activeSlide]}
            alt=""
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
            }}
          />
        ))}
        {showArrows()}
      </section>
    );
  }
}

export default Slider;
