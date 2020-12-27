import React, { Component } from "react";
import "./UserProfilePage.css";
import Headers from "../../components/header/Header.jsx";
import ProfileBar from "../../components/profileBar/ProfileBar.jsx";
import JobDescriptionCard from "../../components/JobDescriptionCard/JobDescriptionCard.jsx";
import UserProfileForm from "../../components/userProfileForm/UserProfileForm";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import testingImage from "../../images/logo.png";

const URL = "https://clever-parrot-62.loca.lt/api/";

class UserProfilePage extends Component {
  constructor(props) {
    super(props);

    this.fileUploader = React.createRef();

    this.state = {
      showEditProfilePopUp: false,
      userInfo: {
        username: "Titivat",
        email: "titivat@gmail.com",
        city: "Bangkok",
        seniority: "Internship",
        industries: "Software Engineer",
        skills: [],
        resume: "",
      },
      applJobList: [
        {
          compName: "PR & Social Media / Marketing",
          compDetail: "Sharke Hand( Thailand ) Co.,Ltd.",
          compCity: "Bangkok, Bangkok City, Thailand",
          status: "pending",
          time: "1 month",
          image: { testingImage },
        },
        {
          compName: "Win - Win (Asia) Co. Ltd.",
          compCity: "Bangkok, Bangkok City, Thailand",
          compDetail: "English data entry officer",
          status: "pending",
          time: "1 month",
          image: { testingImage },
        },
      ],
    };
  }

  componentDidMount() {
    // this.setUp();
  }

  setUp = async () => {
    console.log(URL + "/employee/15");
    const userResponse = await fetch(URL + "employee/15");
    const appliedJobResponse = await fetch(URL + "appliedjob/employee/15");

    const user = await userResponse.json();
    const appliedJobs = await appliedJobResponse.json();

    const userInfo = {
      username: user.user.username,
      email: user.user.email,
      city: user.user.city,
      seniority: user.senority,
      industries: user.industry,
      skills: [],
      resume: "",
    };

    const appliedJobsList = [];

    appliedJobs.map((appliedJob, index) => {
      const job = {
        compName: appliedJob.position.title,
        compDetail: appliedJob.position.desc,
        compCity: appliedJob.position.company.user.city,
        status: appliedJob.is_accepted,
        time: appliedJob.created_at,
        image: appliedJob.employee.document,
      };

      appliedJobsList.push(job);
    });

    let skillsList = [];

    if (user.skills) {
      for (let i = 0; i < user.skills.length; i++) {
        skillsList.push({ id: i, skill: user.skills[i] });
      }
    }

    userInfo.skills = skillsList;

    this.setState({ userInfo, applJobList: appliedJobsList });
  };

  editProfile = (newUserProfile) => {
    this.setState({
      userInfo: newUserProfile,
      showEditProfilePopUp: !this.state.showEditProfilePopUp,
    });
  };

  handleFileUpload = (e) => {
    var file = e.target.files[0];
    const newUserProfile = { ...this.state.userInfo };
    newUserProfile.resume = file;
    this.setState({
      userInfo: newUserProfile,
    });

    // let reader = new FileReader()
    // reader.readAsDataURL(file)
    // const newUserProfile = { ...this.state.userInfo}

    // reader.onload = () => {
    //   newUserProfile.resume = reader.result;
    //   this.setState({
    //     userInfo: newUserProfile
    //   })
    // };
    // reader.onerror = function (error) {
    //   console.log('Error: ', error);
    // }
  };

  toggleShowEditProfilePopUp = () => {
    this.setState({ showEditProfilePopUp: !this.state.showEditProfilePopUp });
  };

  handleDeleate = (companyDetail) => {
    const newApplyJobList = this.state.applJobList.filter((item) => {
      if (item.compName === companyDetail.compName) {
        return false;
      }

      return item;
    });

    this.setState({ applJobList: newApplyJobList });
  };

  clickToDisplay = (compDetail) => {};

  render() {
    return (
      <div>
        <input
          type="file"
          accept=""
          onChange={this.handleFileUpload}
          ref={this.fileUploader}
          style={{
            display: "none",
          }}
        />
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
                fileInputRef={this.fileUploader}
              />
            </div>
          </div>

          <div className="user-profile-right-item">
            <p className="user-profile-head-font">Apply Job</p>

            <div className="user-profile-jobs-container">
              {this.state.applJobList.map((item) => {
                console.log(item);
                return (
                  <div className="item">
                    <JobDescriptionCard
                      key={item.compName}
                      haveButton={true}
                      clickToDisplay={this.clickToDisplay}
                      handleDeleate={this.handleDeleate}
                      compName={item.compName}
                      compDetail={item.compDetail}
                      compCity={item.compCity}
                      status={item.status}
                      time={item.time}
                      image={item.image}
                      backgroundColor="#2D4059"
                    />
                  </div>
                );
              })}

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
