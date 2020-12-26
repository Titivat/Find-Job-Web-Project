import React, { Component } from "react";
import "./SignUpPage.css";
import signUpImage from "../../images/signUpImage.jpg";
import { Redirect } from 'react-router'


class SignUpPage extends Component {
  constructor(props) {
    super( props )
    this.state = {
      userName: "",
      name:"",
      email:"",
      password: ""
    };
  }

  onInputchangeUserName = (event) =>{
    this.setState({userName: event.target.value});
  }

  onInputchangeName = (event) => {
    this.setState({name: event.target.value});
  }

  onInputchangeEmail =(event) =>{
    this.setState({email: event.target.value});
  }

  onInputchangePassword = (event) => {
    this.setState({password: event.target.value
    });
  }

  onSummit = () => {
    const {userName, name, email, password} = this.state
    const isNotEmpty = this.checkEmpty( userName, name, email, password )
    const isValidEmail = this.checkEmail( email )

    if( isNotEmpty && isValidEmail){
      this.changePage( userName, name, email, password)
    }
  }

  changePage = ( userName, name, email, password) => {
    const userInformation = {
      username: userName,
      password: password,
      name: name,
      email: email,

    }
    this.props.history.push({ pathname:"/afterSignUp", userInformation: userInformation});
  }

  checkEmpty = ( userName, name, email, password ) => {
    if( userName && name && email && password){
      return true
    }else{
      alert("your input contain empty");
      return false 
    }
  }

  checkEmail = ( emailAdress ) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true; 
    } else {
      alert("your email is not correct input again");
      return false 
    }
  }

  render() {
    return (
      <div>
        <div className="mainArea">
          <div className="leftHalf">
            <h1 className="quote">
              Start chasing your dream job today at JobSpot
            </h1>
            <img id="signUpImage" src={signUpImage} />
          </div>

          <div className="form">
            <h1 id="createAccountText">Create Your Account</h1>

            <div className="signup-text-container">
              <input
                type="text"
                className="signUpTextInput roundedShadowed"
                placeholder="Username"
                onChange={ this.onInputchangeUserName }
              />
              <input
                type="text"
                className="signUpTextInput roundedShadowed"
                placeholder="Name"
                onChange={ this.onInputchangeName }
              />
              <input
                type="text"
                className="signUpTextInput roundedShadowed"
                placeholder="Email"
                onChange={ this.onInputchangeEmail }
              />
              <input
                type="password"
                className="signUpTextInput roundedShadowed"
                placeholder="password"
                onChange={ this.onInputchangePassword }
              />
            </div>

            <button 
              id="createButton" 
              className="roundedShadowed"
              onClick={ this.onSummit }
            >
              Create
            </button>
            <span className="formText">
              Already Have An Account? <a href="#">Sign in</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
