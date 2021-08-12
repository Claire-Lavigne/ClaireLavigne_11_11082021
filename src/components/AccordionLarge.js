import React, { Component } from "react";
import "../styles/accordion.css";

class AccordionLarge extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <div className="accordion">
        <button
          className={this.state.active ? "accordion-btn active" : "accordion-btn"}
          onClick={this.toggleClass}
        >
          Text btn
        </button>
        <div className={this.state.active ? "accordion-panel active" : "accordion-panel"}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    );
  }
}

export default AccordionLarge;
