import React, { Component } from "react";
import { useReducer } from "react";
import Applicant from "../../components/applicant/Applicant";
import Header from "../../components/header/Header.jsx";
import testingCompanyImage from "../../images/companyLogo.jpg";
import axios from "axios";

import "./DisplayUsersPage.css";

URL = "https://dull-bobcat-33.loca.lt/api/";

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

  componentDidMount() {
    this.setUp();
  }

  setUp = async () => {
    console.log(URL + "appliedjob/search/?position=" + 1);
    const usersResponse = await fetch(URL + "appliedjob/search/?position=" + 1);
    const users = await usersResponse.json();
    console.log(users);

    const usersList = [];

    users.map((user, index) => {
      const appliedUser = {
        username: user.employee.user.username,
        email: user.employee.user.email,
        resume: user.employee.document,
      };

      usersList.push(appliedUser);
    });

    this.setState({ users: usersList });

    console.log("ussers states");
    console.log(this.state.users);
  };

  acceptanceAction = async (action) => {
    axios({
      method: "post",
      url: "",
    });
  };

  render() {
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
              console.log("Testign ~");
              console.log(user);
              return (
                <Applicant
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
