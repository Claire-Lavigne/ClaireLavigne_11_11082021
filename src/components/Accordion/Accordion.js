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
    const activeAccordionBTN = this.state.active
      ? `${styles.accordionBtn} ${styles.active}`
      : styles.accordionBtn;
    const activeAccordionContent = this.state.active
      ? `${styles.accordionPanel} ${styles.active}`
      : styles.accordionPanel;
    const size =
      this.props.size === "half"
        ? `${styles.accordion} ${styles.half}`
        : styles.accordion;
    const sizeBTN = this.props.size === "half" ? styles.accordionBtnSmall : "";
    const sizeContent =
      this.props.size === "half" ? styles.accordionPanelSmall : "";

    return (
      <div className={size}>
        <button
          className={`${activeAccordionBTN} ${sizeBTN}`}
          onClick={this.toggleClass}
        >
          {this.props.children[0]}
        </button>
        <div className={`${activeAccordionContent} ${sizeContent}`}>
          {this.props.children[1]}
        </div>
      </div>
    );
  }
}

export default Accordion;
