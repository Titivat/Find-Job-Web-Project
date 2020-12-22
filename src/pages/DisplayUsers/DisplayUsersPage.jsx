import React, { Component } from "react";
import { useReducer } from "react";
import Applicant from "../../components/applicant/Applicant";
import Header from "../../components/header/Header.jsx";
import testingCompanyImage from "../../images/companyLogo.jpg";

import "./DisplayUsersPage.css";

class DisplayUsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          userImage: testingCompanyImage,
          username: "TestingUsername",
          email: "titivat@testing.com",
          resume: "https://www.gundamkitscollection.com/",
        },
        {
          userImage: testingCompanyImage,
          username: "TestingUsername",
          email: "titivat@testing.com",
          resume: "https://www.gundamkitscollection.com/",
        },
        {
          userImage: testingCompanyImage,
          username: "TestingUsername",
          email: "titivat@testing.com",
          resume: "https://www.gundamkitscollection.com/",
        },
        {
          userImage: testingCompanyImage,
          username: "TestingUsername",
          email: "titivat@testing.com",
          resume: "https://www.gundamkitscollection.com/",
        },
        {
          userImage: testingCompanyImage,
          username: "TestingUsername",
          email: "titivat@testing.com",
          resume: "https://www.gundamkitscollection.com/",
        },
        {
          userImage: testingCompanyImage,
          username: "TestingUsername",
          email: "titivat@testing.com",
          resume: "https://www.gundamkitscollection.com/",
        },
        {
          userImage: testingCompanyImage,
          username: "TestingUsername",
          email: "titivat@testing.com",
          resume: "https://www.gundamkitscollection.com/",
        },
        {
          userImage: testingCompanyImage,
          username: "TestingUsername",
          email: "titivat@testing.com",
          resume: "https://www.gundamkitscollection.com/",
        },
        {
          userImage: testingCompanyImage,
          username: "TestingUsername",
          email: "titivat@testing.com",
          resume: "https://www.gundamkitscollection.com/",
        },
        {
          userImage: testingCompanyImage,
          username: "TestingUsername",
          email: "titivat@testing.com",
          resume: "https://www.gundamkitscollection.com/",
        },
        {
          userImage: testingCompanyImage,
          username: "TestingUsername",
          email: "titivat@testing.com",
          resume: "https://www.gundamkitscollection.com/",
        },
      ],
    };
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div id="displayUsersPage">
          <Header isDisplay={true} />

          <div className="usersInfoContainer">
            {/* <Applicant
            userImage={this.state.users[0].userImage}
            username={this.state.users[0].username}
            email={this.state.users[0].email}
            resume={this.state.users[0].resume}
          /> */}
            {this.state.users.map((user, index) => {
              return (
                <Applicant
                  key={user.username}
                  userImage={user.userImage}
                  username={user.username}
                  email={user.email}
                  resume={user.resume}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DisplayUsersPage;
