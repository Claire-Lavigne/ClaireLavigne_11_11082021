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
  getDatas = () => {
    const id = this.props.match.params.id;
    const filteredItem = datas.filter((item) => item.id === id);
    return filteredItem[0];
  };

  render() {
    const datas = this.getDatas();

    return datas ? (
      <div className="wrapper">
        <Header />
        <Slider pix={datas.pictures} />
        <section className="infos">
          <div className="infos-left">
            <LocationInfos
              locationTitle={datas.title}
              locationAddress={datas.location}
            />
            <Tags tags={datas.tags} />
          </div>
          <div className="infos-right">
            <UserProfile
              userName={datas.host.name}
              userImg={datas.host.picture}
            />
            <Rating rating={datas.rating} />
          </div>
        </section>

        <section className="accordions">
          <Accordion size="half">
            Description
            {datas.description}
          </Accordion>
          <Accordion size="half">
            Équipements
            <ul>
              {datas.equipments.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </Accordion>
        </section>
        <Footer />
      </div>
    ) : (
      <Redirect to="/404" />
    );
  }
}

export default Property;
