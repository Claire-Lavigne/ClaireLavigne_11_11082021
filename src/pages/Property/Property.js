import React, { Component } from "react";
import { withRouter } from "react-router";
import Header from "../../components/Header/Header";
import Accordion from "../../components/Accordion/Accordion";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag";
import datasProperty from "../../datas-property.json";

class Property extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchData(id);
  }

  fetchData = (id) => {
    return id.replaceAll(":", "");
  };

  render() {
    return (
      <div>
        <Header />
        {datasProperty.filter((item) => item.id === this.fetchData)}
        <Carrousel />
        <Tag />
        <Accordion size="half">
          <h1> Hello </h1>
        </Accordion>
      </div>
    );
  }
}

export default withRouter(Property);
