import React, { Component } from "react";
import "../styles/thumbnail.css";
import datas from "../datas.json";

class Thumbnail extends Component {
  render() {
    // iterate through json
    var arr = [];
    Object.keys(datas).forEach(function (key) {
      arr.push(datas[key]);
    });
    arr = arr.filter((x, i, a) => a.indexOf(x) === i); // remove duplicate entries
    console.log(arr);

    return (
      <div className="thumbnail">
        <img src="" alt={datas[0].title} />
        <p className="thumbnail-text">Bottom Left</p>
      </div>
    );
  }
}

export default Thumbnail;
