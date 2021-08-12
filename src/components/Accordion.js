import React, { Component } from "react";
import "../styles/accordion.css";

class Accordion extends Component {
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
          className={
            this.state.active ? "accordion-btn active" : "accordion-btn"
          }
          onClick={this.toggleClass}
        >
          Text btn
        </button>
        <div
          className={
            this.state.active ? "accordion-panel active" : "accordion-panel"
          }
        >
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Accordion;
