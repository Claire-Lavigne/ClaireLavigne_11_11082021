import React, { Component } from "react";
import "./userprofile.css";

class UserProfile extends Component {
  render() {
    return (
      <div className="userProfile">
        <p className="userProfile_name">{this.props.userName}</p>
        <div className="userProfile_img">
          <img src={this.props.userImg} alt="" />
        </div>
      </div>
    );
  }
}

export default UserProfile;
