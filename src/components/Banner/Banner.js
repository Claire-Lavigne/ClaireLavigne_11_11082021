import React, { Component } from "react";
import "./banner.css";

class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <img src={this.props.img} alt="" loading="lazy" />
        <div class="banner-box d-flex">
          <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
        </div>
      </section>
    );
  }
}

export default Banner;
