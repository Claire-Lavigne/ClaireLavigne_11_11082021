import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Accordion from "../../components/Accordion/Accordion";
import Slider from "../../components/Slider/Slider";
import Tags from "../../components/Tags/Tag";
import UserProfile from "../../components/UserProfile/UserProfile";
import Rating from "../../components/Rating/Rating";
import datas from "../../datas-property.json";
import "./property.css";

class Property extends Component {
  state = {
    property: null,
    totalSlides: null,
  };

  componentDidMount() {
    let property = this.getDatas();
    let totalSlides = property.pix.length;
    this.setState({ property, totalSlides });
  }

  getDatas = () => {
    const id = window.location.href.split("property:")[1];
    const filteredItem = datas
      .filter((item) => item.id === id)
      .map((item) => item);
    const pix = filteredItem[0].pictures;
    const title = filteredItem[0].title;
    const tags = filteredItem[0].tags;
    const location = filteredItem[0].location;
    const userName = filteredItem[0].host.name;
    const userImg = filteredItem[0].host.picture;
    const rating = filteredItem[0].rating;
    const desc = filteredItem[0].description;
    const stuff = filteredItem[0].equipments.map((e) => <li key={e}>{e}</li>);
    return {
      pix,
      title,
      tags,
      location,
      userName,
      userImg,
      rating,
      desc,
      stuff,
    };
  };

  rating = (rate) => {
    // rate = parseInt(this.state.property.rating);
    rate = parseInt(3);
    let emptyStars = "";
    let fullStars = "";
    let maxRate = 5;
    let minRate = 0;

    while (minRate < rate) {
      fullStars += "★";
      minRate++;
    }

    while (maxRate > rate) {
      emptyStars += "★";
      maxRate--;
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
        <section className="slider">
          {this.state.property &&
            this.state.property.pix.map((p, index) => (
              <Slider
                key={"slide" + index}
                src={p}
                id={index}
                totalSlides={this.state.totalSlides}
              />
            ))}
        </section>
        <div>{this.state.property && this.state.property.title}</div>
        <section className="infos">
          <div className="infos-left">
            <h1 className="propertyTitle">
              {this.state.property && this.state.property.title}
            </h1>
            <p className="propertyLocation">
              {this.state.property && this.state.property.location}
            </p>
            {this.state.property &&
              this.state.property.tags.map((t, i) => (
                <div className="tag" key={t}>
                  <Tags tag={t} />
                </div>
              ))}
            ;
          </div>
          <div className="infos-right">
            <UserProfile
              userName={this.state.property && this.state.property.name}
              userImg={this.state.property && this.state.property.profile}
            />
            <Rating rating={this.rating()} />
          </div>
        </section>

        <section className="accordions">
          <Accordion size="half">
            Description
            {this.state.property && this.state.property.desc}
          </Accordion>
          <Accordion size="half">
            Équipements
            <ul>{this.state.property && this.state.property.stuff}</ul>
          </Accordion>
        </section>
      </div>
    );
  }
}

export default Property;
