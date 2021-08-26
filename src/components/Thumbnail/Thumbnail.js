import React, { Component } from "react";
import "./thumbnail.css";

class Thumbnail extends Component {
  render() {
    const { property } = this.props;
    return (
      <div className="thumbnail">
        <img src={property.cover} alt={property.title} loading="eager" />
        <div class="thumbnail-box">
          <p className="thumbnail-text">{property.title}</p>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
