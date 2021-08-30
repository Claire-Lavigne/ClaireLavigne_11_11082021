import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Accordion from "../../components/Accordion/Accordion";
import Footer from "../../components/Footer/Footer";
import datasPrinciples from "../../datas-principles.json";

class About extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Banner img="assets/landscape-mountains.png" />
        <section className="accordions">
          {datasPrinciples.map((item, index) => (
            <Accordion key={`accordion-${index}`}>
              {item.title}
              {item.description}
            </Accordion>
          ))}
        </section>
        <Footer />
      </div>
    );
  }
}

export default About;
