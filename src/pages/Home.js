import React, { Component } from "react";
import Accordion from "../components/Accordion/Accordion";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Thumbnail from "../components/Thumbnail";

class Home extends Component {
  render() {
    return (
      <div>
        <Accordion size="half"><h1>Hello</h1></Accordion>
        <Carrousel />
        <Tag />
        <Thumbnail />
      </div>
    );
  }
}

export default Home;
