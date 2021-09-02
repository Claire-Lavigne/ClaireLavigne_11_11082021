import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    return (
      <Link to={"/"}>
        <img className="logo" src={this.props.src} alt="Logo Kasa" />
      </Link>
    );
  }
}

export default Logo;
