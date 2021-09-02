import React, { Component } from "react";
import "./banner.css";

class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <img src={this.props.src} alt="" loading="auto" />
        <div className="banner-box d-flex">
          <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
        </div>
      </section>
    );
  }
}

export default Banner;
