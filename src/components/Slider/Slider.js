import React, { Component } from "react";
import "./slider.css";
import datasProperty from "../../datas-property.json";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  next = () => {
    if (this.state.currentIndex >= 10) {
      return;
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  };

  prev = () => {
    if (this.state.currentIndex <= 0) {
      return;
    } else {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    }
  };

  render() {
    var obj = {};
    var pictures = datasProperty.map((item) => item.pictures);
    var imagebis = pictures.forEach((img) => img[0]);
    var image = pictures.forEach((img) => {
      obj[img[0]] = img[1];
    });
    console.log(pictures);
    console.log(image);
    console.log(imagebis);
    console.log(obj);
    return (
      <section className="slider">
        {datasProperty.map((item, index) => (
          <img
            index={index}
            key={"slide" + index}
            id={item.id}
            className="slide"
            // className={`${isActive} slide`}
            src={item.pictures[index]}
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
