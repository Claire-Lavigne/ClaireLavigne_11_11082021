import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Accordion from "../../components/Accordion/Accordion";
import Carrousel from "../../components/Carrousel";
import Tag from "../../components/Tag";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import datasProperty from "../../datas-property.json";

class Property extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carrousel />
        <Accordion size="half">
          <h1> Hello </h1>
        </Accordion>
        <Accordion size="half">
          <h1> Truc </h1>
        </Accordion>
        <Tag />
        {datasProperty.map((item, index) => (
          <Thumbnail key={"thumbnail" + index} property={item} />
        ))}
      </div>
    );
  }
}

export default Property;
