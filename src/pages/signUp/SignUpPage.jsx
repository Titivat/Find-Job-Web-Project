import React, { Component } from 'react';
import './SignUpPage.css';
import signUpImage from '../../images/signUpImage.jpg'

class SignUpPage extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className="mainArea">
                    <div className="leftHalf">
                        <h1 className="quote">Start chasing your dream job today at JobSpot</h1>
                        <img id="signUpImage" src={signUpImage} />
                    </div>
                    
                    <div className="form">
                        <h1 id="createAccountText">Create Your Account</h1>
                        <input type="text" className="signUpTextInput roundedShadowed" placeholder="Username" />
                        <input type="text" className="signUpTextInput roundedShadowed" placeholder="Password" />
                        <button id="createButton" className="roundedShadowed">Create</button>
                        <span className="formText">Already Have An Account? <a href="#">Sign in</a></span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default SignUpPage;