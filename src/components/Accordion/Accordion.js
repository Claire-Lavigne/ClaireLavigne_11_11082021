import React, { Component } from "react";
import styles from "./accordion.module.css";

class Accordion extends Component {
  state = { active: false, rotationValue: 0 };

  toggleClass = () => {
    this.setState({
      active: !this.state.active,
    });
    this.state.active
      ? this.setState({ rotationValue: 0 })
      : this.setState({ rotationValue: 180 });
  };

  render() {
    const size = this.props.size;
    const isActive = this.state.active && styles.active;
    const sizeAccordion = size === "half" && styles.accordionHalf;
    const sizeBTN = size === "half" && styles.accordionBtnSmall;
    const sizeContent = size === "half" && styles.accordionPanelSmall;

    return (
      <div className={`${styles.accordion} ${sizeAccordion}`}>
        <button
          className={`${styles.accordionBtn} ${isActive} ${sizeBTN}`}
          onClick={this.toggleClass}
        >
          <h2>{this.props.children[0]}</h2>
          <img
            style={{
              transform: `rotate(${this.state.rotationValue}deg)`,
            }}
            src="./assets/arrow-down.png"
            alt=""
          />
        </button>
        <div className={`${styles.accordionPanel} ${isActive} ${sizeContent}`}>
          {this.props.children[1]}
        </div>
      </div>
    );
  }
}

export default Accordion;
