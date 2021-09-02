import React, { Component } from "react";
import "./tag.css";

class Tag extends Component {
  render() {
    return <div className="tag text-center">{this.props.children}</div>;
  }
}

export default Tag;
