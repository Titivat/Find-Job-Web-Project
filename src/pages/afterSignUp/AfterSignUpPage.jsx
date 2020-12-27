import React, { Component } from "react";
import "./AfterSignUpPage.css";
import companyImage from "../../images/companiesImage.png";
import employeeImage from "../../images/employeeImage.png";
import axios from "axios";

class AfterSignUpPage extends Component {
  constructor(props) {
    super(props);
    this.userInformation = props.location.userInformation;
    this.state = {};
    this.urlPath = "https://grumpy-otter-68.loca.lt";
  }

  registerEmployeRequest = () => {
    this.requestionApi("employee", "userProfilePage");
    console.log("I have posted employee");
  };

  requestionApi = (type, linkPath) => {
    console.log(this.userInformation);
    const sentData = { user: this.userInformation };

    axios({
      method: "post",
      headers: { "Content-Type": "application/json" },
      url: `${this.urlPath}/api/${type}/`,
      data: sentData,
    })
      .then((response) => {
        console.log(`response: ${response}`);
        this.props.history.push({ pathname: `/${linkPath}` });
      })
      .catch((error) => {
        alert("your email or username or name is alredy taken");
        console.log(`error: ${error.response}`);
      });
  };

  registerCompanyRequest = () => {
    this.requestionApi("company", "companyProfile");
    console.log("I have posted company");
  };

  render() {
    return (
      <React.Fragment>
        <div className="textContainer">
          <h1 className="styledText">Sign up as</h1>
        </div>

        <div className="middleArea">
          <div className="halfFlexColumn">
            <div className="imageContainer">
              <img id="companiesImage" src={companyImage} />
            </div>
            <button
              onClick={this.registerCompanyRequest}
              className="mediumButton roundedShadowed"
            >
              Companies
            </button>
          </div>

          <div className="halfFlexColumn">
            <div className="imageContainer">
              <img id="employeeImage" src={employeeImage} />
            </div>
            <button
              onClick={this.registerEmployeRequest}
              className="mediumButton roundedShadowed"
            >
              Employees
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AfterSignUpPage;
