import React, { Component } from "react";
import Header from "../components/Header/Header";
import Accordion from "../components/Accordion/Accordion";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Thumbnail from "../components/Thumbnail";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Accordion size="half">
          <h1> Hello </h1>
        </Accordion>
        <Accordion size="half">
          <h1> Truc </h1>
        </Accordion>
        <Carrousel />
        <Tag />
        <Thumbnail />
      </div>
    );
  }
}

export default Home;
