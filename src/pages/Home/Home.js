import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Accordion from "../../components/Accordion/Accordion";
import Carrousel from "../../components/Carrousel";
import Tag from "../../components/Tag";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import Footer from "../../components/Footer/Footer";
import datas from "../../datas.json";

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Banner />
        <section className="d-flex">
          {datas.map((item, index) => (
            <Thumbnail key={"thumbnail" + index} property={item} />
          ))}
        </section>
        <Footer />
        <Accordion size="half">
          <h1> Hello </h1>
        </Accordion>
        <Accordion size="half">
          <h1> Truc </h1>
        </Accordion>
        <Carrousel />
        <Tag />
      </div>
    );
  }
}

export default Home;
