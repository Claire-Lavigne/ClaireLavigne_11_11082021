import React, { Component } from "react";
import Logo from "../Logo/Logo";

class Footer extends Component {
  render() {
    return (
      <footer className="text-center">
        <Logo clr="b&w" url="b&w" />
        <div>© 2020 Kasa. All rights reserved</div>
      </footer>
    );
  }
}

export default Footer;
