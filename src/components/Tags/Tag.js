import React, { Component } from "react";
import "./tag.css";
import datasProperty from "../../datas-property.json";

class Tag extends Component {
  render() {
    const id = window.location.href.split("property:")[1];

    return (
      <section className="tags">
        {datasProperty
          .filter((item) => item.id === id)
          .map((item) =>
            item.tags.map((tag, index) => (
              <span key={"tag" + index} className="tag">
                {tag}
              </span>
            ))
          )}
      </section>
    );
  }
}

export default Tag;
