import { faStumbleuponCircle } from "@fortawesome/free-brands-svg-icons";
import React, { Component } from "react";
import "./CompanyProfileContainer.css";

class CompanyProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.uploadedProfileImage = React.createRef();
    this.profileImageUploader = React.createRef();

    this.state = {};
  }
  handleImageUpload = (e) => {
    // this.refs.profileSelector.click();
    console.log("called");
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = this.uploadedProfileImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  render() {
    const { profileImage, companyName, email, onEditProfile } = this.props;
    return (
      <div className="companyProfileContainer">
        <input
          type="file"
          accept="image/*"
          onChange={this.handleImageUpload}
          ref={this.profileImageUploader}
          id="profileSelector"
        />
        <div className="rowContainer">
          <span className="comfortaa mediumSize label">Profile:</span>
          <img
            ref={this.uploadedProfileImage}
            src={profileImage}
            id="profileImage"
            onClick={() => {
              this.profileImageUploader.current.click();
            }}
          />
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
        <button
          id="editProfileButton"
          className="comfortaa"
          onClick={onEditProfile}
        >
          edit profile
        </button>
        {/* <input
          type="file"
          accept="image/*"
          id="profileSelector"
          className="comfortaa"
          onChange={this.handleImageUpload}
          ref={this.profileImageUploader}
        /> */}
      </div>
    );
  }
}

export default CompanyProfileContainer;
