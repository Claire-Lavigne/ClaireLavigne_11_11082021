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
      translate: 0,
    };
  }

  next = () => {
    // animation
    this.setState({ translate: 300 });
    setTimeout(() => {
      this.setState({ translate: 0 });
    }, 1);
    // if not last img reduce index else get first img
    if (this.state.activeSlide < this.totalSlides - 1) {
      this.setState({ activeSlide: this.state.activeSlide + 1 });
    } else {
      this.setState({ activeSlide: 0 });
    }
  };

  prev = () => {
    // animation
    this.setState({ translate: -300 });
    setTimeout(() => {
      this.setState({ translate: 0 });
    }, 1);
    // if not img[0] reduce index else get last img
    if (this.state.activeSlide > 0) {
      this.setState({ activeSlide: this.state.activeSlide - 1 });
    } else {
      this.setState({ activeSlide: this.totalSlides - 1 });
    }
  };

  render() {
    return (
      <section className="slider">
        {this.filterDatas.map((item) => (
          <img
            key={"slide" + this.state.activeSlide}
            id={`${item.id}-${this.state.activeSlide}`}
            data-totalslides={this.totalSlides}
            className="slide"
            src={item.pictures[this.state.activeSlide]}
            alt=""
            loading="eager"
            style={{
              transform: `translateX(${this.state.translate}px)`,
            }}
          />
        ))}
        <button className="prev" onClick={this.prev}>
          <img src="./assets/arrow-left.png" alt="previous slide" />
        </button>
        <button className="next" onClick={this.next}>
          <img src="./assets/arrow-right.png" alt="next slide" />
        </button>
      </section>
    );
  }
}

export default Slider;
