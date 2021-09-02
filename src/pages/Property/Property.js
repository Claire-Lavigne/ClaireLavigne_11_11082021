import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Accordion from "../../components/Accordion/Accordion";
import Slider from "../../components/Slider/Slider";
import Tag from "../../components/Tags/Tag";
import datasProperty from "../../datas-property.json";
import "./property.css";

class Property extends Component {
  getDatas = () => {
    const id = window.location.href.split("property:")[1];
    const filteredItem = datasProperty
      .filter((item) => item.id === id)
      .map((item) => item);
    const pix = filteredItem[0].pictures.map((p) => p);
    const title = filteredItem[0].title;
    const tag = filteredItem[0].tags.map((t, i) => (
      <Tag key={`${t}-${i}`}>{t}</Tag>
    ));
    const location = filteredItem[0].location;
    const name = filteredItem[0].host.name;
    const profile = filteredItem[0].host.picture;
    const rating = filteredItem[0].rating;
    const desc = filteredItem[0].description;
    const stuff = filteredItem[0].equipments.map((e, i) => (
      <li key={`${e}-${i}`}>{e}</li>
    ));
    return {
      pix,
      title,
      tag,
      location,
      name,
      profile,
      rating,
      desc,
      stuff,
    };
  };

  rating = (rate) => {
    rate = parseInt(this.getDatas().rating);
    let emptyStars = "";
    let fullStars = "";
    this.maxRate = 5;
    let n = 0;

    while (n < rate) {
      fullStars += "★";
      n++;
    }

    while (this.maxRate > rate) {
      emptyStars += "★";
      this.maxRate--;
    }

    let full = React.createElement(
      "span",
      { className: "fullStars" },
      fullStars
    );
    let empty = React.createElement(
      "span",
      { className: "emptyStars" },
      emptyStars
    );
    return [full, empty];
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Slider />

        <section className="infos d-flex justify-between">
          <div className="text-left">
            <h1 className="propertyTitle">{this.getDatas().title}</h1>
            <p className="propertyLocation">{this.getDatas().location}</p>
            <div className="tags d-flex justify-start">
              {this.getDatas().tag}
            </div>
          </div>
          <div className="text-right">
            <div className="d-flex justify-end">
              <p className="host-name">{this.getDatas().name}</p>
              <div className="host-profile">
                <img src={this.getDatas().profile} alt="" />
              </div>
            </div>
            <span className="rating">{this.rating()}</span>
          </div>
        </section>

        <section className="accordions">
          <Accordion size="half">
            Description
            {this.getDatas().desc}
          </Accordion>
          <Accordion size="half">
            Équipements
            <ul>{this.getDatas().stuff}</ul>
          </Accordion>
        </section>
      </div>
    );
  }
}

export default Property;
