import "./LogInPage.css";
import redCurveImage from "../../images/redCurve.png";
import personImage from "../../images/personImage.png";
import Header from "../../components/header/Header.jsx";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

function LogInPage(props) {
  const urlPath = "https://grumpy-otter-68.loca.lt";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onInputchangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onInputchangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSummit = () => {
    axios({
      method: "get",
      headers: { "Content-Type": "application/json" },
      url: `https://grumpy-otter-68.loca.lt/api/login/${email}/${password}/`,
    })
      .then((response) => {
        return response.data[0];
      })
      .then((dataRecive) => {
        console.log(dataRecive);
        localStorage.setItem("id", dataRecive.id);
        localStorage.setItem("email", dataRecive.email);
        localStorage.setItem("type", dataRecive.type);
        localStorage.setItem("isLogin", true);

        const type = dataRecive.type;

        if (type === "COMPANY") {
          props.history.push("/companyProfile");
        } else if (type === "EMPLOYEE") {
          console.log("I am a employeee");
          props.history.push({ pathname: "/userProfilePage" });
        }
      })
      .catch((error) => {
        alert("username or password is wrong");
        console.log(`error: ${error.response}`);
      });
  };

  function login() {
    return {
      type: "SIGN_IN",
      email: email,
      password: password,
    };
  }

  return (
    <React.Fragment>
      <Header isDisplay={false} />
      <div id="mainAreaBackground">
        {/* <img src={redCurveImage} id="redCurveImage"/> */}
        <div className="mainAreaContainer">
          <div className="greetingContainer">
            <h1 className="styledText" id="welcomeText">
              Welcome
            </h1>
            <img src={personImage} />
          </div>
          <div className="formContainer">
            <input
              type="text"
              placeholder="jane@example.com"
              className="textInput"
              onChange={onInputchangeEmail}
            />
            <input
              type="text"
              placeholder="password"
              className="textInput"
              onChange={onInputchangePassword}
            />

            <button
              id="loginButton"
              className="styledText"
              onClick={() => onSummit()}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LogInPage;
