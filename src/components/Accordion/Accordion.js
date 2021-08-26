import React, { Component } from "react";
import styles from "./accordion.module.css";

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
    const isActive = this.state.active ? "active" : "";
    const size = this.props.size === "half" ? styles.half : "";
    const sizeBTN = this.props.size === "half" ? styles.accordionBtnSmall : "";
    const sizeContent =
      this.props.size === "half" ? styles.accordionPanelSmall : "";

    return (
      <div className={`${styles.accordion} ${size} d-flex`}>
        <button
          className={`${styles.accordionBtn} ${isActive} ${sizeBTN} text-left`}
          onClick={this.toggleClass}
        >
          {this.props.children[0]}
        </button>
        <div className={`${styles.accordionPanel} ${isActive} ${sizeContent}`}>
          {this.props.children[1]}
        </div>
      </div>
    );
  }
}

export default Accordion;
