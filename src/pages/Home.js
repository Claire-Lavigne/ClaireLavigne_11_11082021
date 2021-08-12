import React, { Component } from "react";
import AccordionLarge from "../components/AccordionLarge";
import Accordion from "../components/Accordion";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Thumbnail from "../components/Thumbnail";

class Home extends Component {
  render() {
    return (
      <div>
        <AccordionLarge />
        <Accordion />
        <Carrousel />
        <Tag />
        <Thumbnail />
      </div>
    );
  }
}

export default Home;
