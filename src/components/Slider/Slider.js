import React, { Component } from "react";
import "./slider.css";
import datasProperty from "../../datas-property.json";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  next = () => {
    const getTotalSlides = document.querySelector("img[data-totalslides]");
    if (this.state.activeSlide >= getTotalSlides) {
      return;
    } else {
      this.setState({ activeSlide: this.state.activeSlide + 1 });
    }
  };

  prev = () => {
    if (this.state.activeSlide <= 0) {
      return;
    } else {
      this.setState({ activeSlide: this.state.activeSlide - 1 });
    }
  };

  render() {
    const id = window.location.href.split("property:")[1];
    const filterDatas = datasProperty.filter((item) => item.id === id);
    const totalSlides = filterDatas.map((item) => item.pictures.length);

    return (
      <section className="slider">
        {filterDatas.map((item) => (
          <img
            key={"slide" + this.state.activeSlide}
            id={`${item.id}-${this.state.activeSlide}`}
            data-totalslides={totalSlides}
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
