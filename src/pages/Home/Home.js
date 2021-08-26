import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import Footer from "../../components/Footer/Footer";
import datasProperty from "../../datas-property.json";

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Banner img="assets/landscape-forest.png" />
        <section className="thumbnails d-flex">
          {datasProperty.map((item, index) => (
            <a key={"thumbnail" + index} href={`/property:${item.id}`}>
              <Thumbnail property={item} />
            </a>
          ))}
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
