import React, { Component } from "react";
import "../styles/thumbnail.css";

class Thumbnail extends Component {
  render() {
    const { property } = this.props;
    return (
      <div className="thumbnail">
        <img src={property.cover} alt={property.title} />
        <p className="thumbnail-text">{property.title}</p>
      </div>
    );
  }
}

export default Thumbnail;
