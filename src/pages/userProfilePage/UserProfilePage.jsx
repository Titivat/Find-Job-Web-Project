import React, { Component } from "react";
import "./UserProfilePage.css";
import Headers from "../../components/header/Header.jsx";
import ProfileBar from "../../components/profileBar/ProfileBar.jsx";
import JobDescriptionCard from "../../components/JobDescriptionCard/JobDescriptionCard.jsx";
import UserProfileForm from "../../components/userProfileForm/UserProfileForm";

class UserProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEditProfilePopUp: false,
      userInfo: {
        username: "Titivat",
        email: "titivat@gmail.com",
        city: "Bangkok",
        seniority: "Internship",
        industries: "Software Engineer",
        skills: [],
        resume: "https://web.facebook.com/?_rdc=1&_rdr",
      },
    };
  }

  editProfile = (newUserProfile) => {
    this.setState({
      userInfo: newUserProfile,
      showEditProfilePopUp: !this.state.showEditProfilePopUp,
    });
  };

  toggleShowEditProfilePopUp = () => {
    console.log("Toggling");
    this.setState({ showEditProfilePopUp: !this.state.showEditProfilePopUp });
  };

  render() {
    return (
      <div>
        <Headers />

        <div className="user-profile-page-container">
          <div className="user-profile-left-item">
            <p className="user-profile-head-font">Profile</p>

            <div className="user-profile-content">
              <ProfileBar
                onToggleShowPopUp={this.toggleShowEditProfilePopUp}
                user={this.state.userInfo}
                userName="Titivat auetumrongsawat"
                email="titivatmo@gmial.com"
                city="Bangkok"
                seniority="intern"
                industries="software enginear"
              />
            </div>
          </div>

          <div className="user-profile-right-item">
            <p className="user-profile-head-font">Apply Job</p>

            <div className="user-profile-jobs-container">
              <div className="item">
                <JobDescriptionCard
                  haveButton={true}
                  compName="PR & Social Media / Marketing"
                  compDetail="Sharke Hand( Thailand ) Co.,Ltd."
                  compCity="Bangkok, Bangkok City, Thailand"
                  status="pending"
                  time="1 month"
                  backgroundColor="#2D4059"
                />
              </div>

              <div className="item">
                <JobDescriptionCard
                  haveButton={true}
                  compName="PR & Social Media / Marketing"
                  compCity="Bangkok, Bangkok City, Thailand"
                  compDetail="Sharke Hand( Thailand ) Co.,Ltd."
                  status="pending"
                  time="1 month"
                  backgroundColor="#2D4059"
                />
              </div>

              <div className="item">
                <div className="dummy-square"></div>
              </div>
              {this.state.showEditProfilePopUp ? (
                <UserProfileForm
                  user={this.state.userInfo}
                  onCancel={this.toggleShowEditProfilePopUp}
                  onEditProfile={this.editProfile}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
