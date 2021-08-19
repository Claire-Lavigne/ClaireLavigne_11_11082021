import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="text-right">
        <Link to={"/"} className="navLink">
          Home
        </Link>
        <Link to={"/about"} className="navLink">
          About
        </Link>
      </nav>
    );
  }
}

export default Nav;
