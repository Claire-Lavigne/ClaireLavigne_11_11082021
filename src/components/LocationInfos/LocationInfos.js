import React, { Component } from "react";
import "./locationInfos.css";

class LocationInfos extends Component {
  render() {
    return (
      <>
        <h1 className="propertyTitle">{this.props.locationTitle}</h1>
        <p className="propertyLocation">{this.props.locationAddress}</p>
      </>
    );
  }
}

export default LocationInfos;
