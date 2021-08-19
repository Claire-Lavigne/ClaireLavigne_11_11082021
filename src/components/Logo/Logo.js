import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    return (
      <Link to={"/"} className="nav-link">
        <img src="/assets/logo-color.png" alt="" />
      </Link>
    );
  }
}

export default Logo;
