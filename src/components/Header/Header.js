import React, { Component } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <Logo src="/assets/logo-color.png" />
        <Nav />
      </header>
    );
  }
}

export default Header;
