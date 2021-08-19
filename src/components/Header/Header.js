import React, { Component } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

class Header extends Component {
  render() {
    return (
      <header className="d-flex justify-between">
        <Logo clr="clr" url="clr" />
        <Nav />
      </header>
    );
  }
}

export default Header;
