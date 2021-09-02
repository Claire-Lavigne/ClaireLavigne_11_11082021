import React, { Component } from "react";
import Logo from "../Logo/Logo";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="text-center">
        <Logo src="/assets/logo-white.png" />
        <div>© 2020 Kasa. All rights reserved</div>
      </footer>
    );
  }
}

export default Footer;
