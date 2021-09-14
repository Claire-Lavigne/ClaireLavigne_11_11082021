import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Accordion from "../../components/Accordion/Accordion";
import Slider from "../../components/Slider/Slider";
import LocationInfos from "../../components/LocationInfos/LocationInfos";
import Tags from "../../components/Tags/Tags";
import UserProfile from "../../components/UserProfile/UserProfile";
import Rating from "../../components/Rating/Rating";
import datas from "../../datas-property.json";
import "./property.css";

class Property extends Component {
  state = {
    property: null,
    slides: [],
    tags: [],
  };

  componentDidMount() {
    this.setState({
      property: this.getDatas(),
      slides: this.getDatas().pix,
      tags: this.getDatas().tags,
    });
  }

  getDatas = () => {
    const id = this.props.match.params.id;
    const filteredItem = datas
      .filter((item) => item.id === id)
      .map((item) => item);
    if (!filteredItem[0]) {
      return <Redirect to="/404" />;
    }
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

  render() {
    const datas = this.state.property;

    if (!this.state.slides) {
      return <Redirect to="/404" />;
    }

    return (
      <div className="wrapper">
        <Header />
        <Slider slides={this.state.slides} />
        <section className="infos">
          <div className="infos-left">
            <LocationInfos
              locationTitle={datas && datas.title}
              locationAddress={datas && datas.location}
            />
            <Tags tags={this.state.tags} />
          </div>
          <div className="infos-right">
            <UserProfile
              userName={datas && datas.userName}
              userImg={datas && datas.userImg}
            />
            <Rating rating={datas && datas.rating} />
          </div>
        </section>

        <section className="accordions">
          <Accordion size="half">
            Description
            {datas && datas.desc}
          </Accordion>
          <Accordion size="half">
            Équipements
            <ul>{datas && datas.stuff}</ul>
          </Accordion>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Property;
