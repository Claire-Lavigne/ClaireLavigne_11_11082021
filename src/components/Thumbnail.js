import React, { Component } from "react";
import "../styles/thumbnail.css";

class Thumbnail extends Component {
  render() {
    return (
      <div className="thumbnail">
        <img src={this.props.cover} alt={this.props.title} />
        <p className="thumbnail-text">{this.props.title}</p>
      </div>
    );
  }
}

export default Thumbnail;
