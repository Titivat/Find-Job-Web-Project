import React, { Component } from 'react';
import './LogInPage.css';
import redCurveImage from '../../images/redCurve.png';
import personImage from '../../images/personImage.png';

class LogInPage extends Component {
    state = {  }
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
                            <input type="text" placeholder="jane@example.com" className="textInput" />
                            <input type="text" placeholder="password" className="textInput" />
                            <button id="loginButton">Log in</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default LogInPage;