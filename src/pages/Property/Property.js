import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Accordion from "../../components/Accordion/Accordion";
import Slider from "../../components/Slider/Slider";
import Tag from "../../components/Tags/Tag";

class Property extends Component {
  render() {
    return (
      <>
        <Header />
        <Slider />
        <Tag />
        <Accordion size="half">
          <h1> Hello </h1>
        </Accordion>
      </>
    );
  }
}

export default Property;
