import React, { Component } from "react";
import "./slider.css";
import datasProperty from "../../datas-property.json";

class Slider extends Component {
  constructor(props) {
    super(props);

    const id = window.location.href.split("property:")[1];
    this.filterDatas = datasProperty.filter((item) => item.id === id);
    this.filterPix = this.filterDatas.map((item) => item.pictures.length);
    this.totalSlides = this.filterPix[0];

    this.state = {
      activeSlide: 0,
    };
  }

  next = () => {
    if (this.state.activeSlide < this.totalSlides - 1) {
      this.setState({ activeSlide: this.state.activeSlide + 1 });
    } else {
      this.setState({ activeSlide: 0 });
    }
  };

  prev = () => {
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
