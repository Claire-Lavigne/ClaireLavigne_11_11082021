import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div>
          <Link to={"/"} className="nav-link">
            <img src="/assets/logo-color.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to={"/"} className="nav-link">
            Home
          </Link>
          <Link to={"/about"} className="nav-link">
            About
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
