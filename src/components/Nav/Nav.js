import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to={"/"} className="nav-link">
          Home
        </Link>
        <Link to={"/about"} className="nav-link">
          About
        </Link>
      </nav>
    );
  }
}

export default Nav;
