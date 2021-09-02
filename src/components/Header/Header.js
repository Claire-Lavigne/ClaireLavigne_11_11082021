import React, { Component } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header className="d-flex justify-between">
        <Logo src="/assets/logo-color.png" />
        <Nav />
      </header>
    );
  }
}

export default Header;
