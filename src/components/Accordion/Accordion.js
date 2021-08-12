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
    const activeAccordionBTN = this.state.active ? `${styles.accordionBtn} ${styles.active}` : `${styles.accordionBtn}`
    const activeAccordionContent = this.state.active ? `${styles.accordionPanel} ${styles.active}` : `${styles.accordionPanel}`
    
    return (
      <div className={styles.accordion}>
        <button
          className={
            activeAccordionBTN
          }
          onClick={this.toggleClass}
        >
          Text btn
        </button>
        <div
          className={activeAccordionContent}
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
