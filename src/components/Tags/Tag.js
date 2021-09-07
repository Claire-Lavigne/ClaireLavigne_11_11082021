import React, { Component } from "react";
import "./tag.css";

class Tag extends Component {
  render() {
    return <div className="tags">{this.props.tag}</div>;
  }
}

export default Tag;
