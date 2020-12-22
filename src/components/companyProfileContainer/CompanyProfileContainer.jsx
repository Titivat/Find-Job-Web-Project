import React, { Component } from "react";
import "./CompanyProfileContainer.css";

class CompanyProfileContainer extends Component {
  state = {};

  selectFile = (event) => {
    this.refs.profileSelector.click();
  };
  render() {
    const { profileImage, companyName, email } = this.props;
    return (
      <div className="companyProfileContainer">
        <div className="rowContainer">
          <span className="comfortaa mediumSize label">Profile:</span>
          <img src={profileImage} id="profileImage" onClick={this.selectFile} />
        </div>
        <div className="rowContainer">
          <span className="comfortaa mediumSize label">Company name:</span>
          <span className="comfortaa mediumSize white" id="companyText">
            {companyName}
          </span>
        </div>
        <div className="rowContainer">
          <span className="comfortaa mediumSize label">Email:</span>
          <span className="comfortaa mediumSize white" id="companyText">
            {email}
          </span>
        </div>
        <button id="editProfileButton" className="comfortaa">
          edit profile
        </button>
        <input
          type="file"
          id="profileSelector"
          ref="profileSelector"
          className="comfortaa"
        />
      </div>
    );
  }
}

export default CompanyProfileContainer;
