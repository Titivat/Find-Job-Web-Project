import React, { Component } from 'react';
import './LogInPage.css';
import redCurveImage from '../../images/redCurve.png';
import personImage from '../../images/personImage.png';

class LogInPage extends Component {

    constructor(props) {
        super( props )
        this.urlPath = ""
        this.state = {
          email: "",
          password: "",
        };
    }

    onInputchangeEmail = (event) =>{
        this.setState({email: event.target.value});
    }

    onInputchangePassword = (event) => {
        this.setState({password: event.target.value});
    }

    onSummit = () => {
        axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json'},
            url: `${this.urlPath}/api/login/${this.state.email}/${this.state.password}/`,
            data: sentData
        }).then(response => { 
            const type = response.type
            
            if( type === "COMPANY"){
                this.props.history.push({ pathname:"/companyProfile"});
            }else if( type === "EMPLOYEE"){
                this.props.history.push({ pathname:"/userProfilePage"});
            }
        })
        .catch(error => {
            alert("your email or username or name is alredy taken");
            console.log(`error: ${error.response}`)
        });    
    }

    render() { 
        return (
            <React.Fragment>
                <div id="mainAreaBackground">
                    {/* <img src={redCurveImage} id="redCurveImage"/> */}
                    <div className="mainAreaContainer">
                        <div className="greetingContainer">
                            <h1 className="styledText" id="welcomeText">Welcome</h1>
                            <img src={personImage} />
                        </div>
                        <div className="formContainer">
                            <input 
                                type="text" 
                                placeholder="jane@example.com" className="textInput" 
                                onChange={ this.onInputchangeEmail }
                            />
                            <input 
                                type="text" 
                                placeholder="password" className="textInput" 
                                onChange={ this.onInputchangePassword }
                            />

                            <button 
                                id="loginButton" 
                                className="styledText"
                                onClick={ this.onSummit }
                            >
                                Log in
                            </button>
                        </div>
                        <h1 id="forgotPasswordText">
                            <a href="#">forgot password</a>
                        </h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default LogInPage;