import React, { Component } from "react";
import "./tags.css";

class Tags extends Component {
  render() {
    return (
      <div className="tags">
        {this.props.tags.map((tag, index) => (
          <div className="tag" key={`tag${index}`}>
            {tag}
          </div>
        ))}
      </div>
    );
  }
}

export default Tags;
