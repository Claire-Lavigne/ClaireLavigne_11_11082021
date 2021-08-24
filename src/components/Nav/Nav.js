import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="text-right">
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
