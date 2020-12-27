import React, { Component } from "react";
import "./Applicant.css";

class Applicant extends Component {
  state = {};
  render() {
    return (
      <div className="applicantContainer comfortaa">
        <div className="userImageContainer">
          {/* <img src={this.props.userImage} className="userProfileImage" /> */}
        </div>
        <div className="textInfoContainer">
          <p className="mediumFontSize white">{this.props.username}</p>
          <p className="mediumFontSize white">{this.props.email}</p>
          <a className="mediumFontSize" href={this.props.resume}>
            resume
          </a>
        </div>
        <div className="acceptButtonsContainer">
          <button id="acceptButton" className="acceptUserButtons comfortaa">
            Accept
          </button>
          <button id="declineButton" className="acceptUserButtons comfortaa">
            Decline
          </button>
        </div>
      </div>
    );
  }
}

export default Applicant;
