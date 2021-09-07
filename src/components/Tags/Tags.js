import React, { Component } from "react";
import "./tags.css";

class Tags extends Component {
  render() {
    return <div className="tag">{this.props.tag}</div>;
  }
}

export default Tags;
