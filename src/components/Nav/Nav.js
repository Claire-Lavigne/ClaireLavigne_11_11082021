import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink
          exact={true}
          activeClassName="is-active"
          to={"/"}
          className="navLink"
        >
          Accueil
        </NavLink>
        <NavLink
          exact={true}
          activeClassName="is-active"
          to={"/about"}
          className="navLink"
        >
          A propos
        </NavLink>
      </nav>
    );
  }
}

export default Nav;
