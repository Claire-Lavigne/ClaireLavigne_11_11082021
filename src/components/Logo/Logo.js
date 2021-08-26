import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    const clr = this.props.clr === "clr" ? "logo-clr" : "";
    const url =
      this.props.url === "clr"
        ? "/assets/logo-color.png"
        : "/assets/logo-white.png";
    return (
      <Link to={"/"}>
        <img className={`logo ${clr}`} src={url} alt="Logo Kasa" />
      </Link>
    );
  }
}

export default Logo;
