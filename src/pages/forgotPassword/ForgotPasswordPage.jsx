import React, { Component } from 'react';
import './ForgotPasswordPage.css';
import searchImage from '../../images/searchImage.png';

class ForgotPasswordPage extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div id="mainAreaBackground">
                    <div className="contentContainer">
                        <h1 id="errorStatusText" className="comfortaa">error status text</h1>
                        <h1 className="styledText">Find your account</h1>
                        <h2 className="comfortaa">please enter your email</h2>
                        <h3 className="comfortaa">Email *</h3>

                        <div className="formContainer">
                            <input type="text" placeholder="jane@example.com" className="textInput" />
                        </div>

                        <div className="buttonContainer">
                            <button className="button comfortaa" id="cancelButton">Cancel</button>
                            <button className="button comfortaa" id="findAccountButton">Find account</button>
                        </div>
                    </div>
                    <img src={searchImage} />
                </div>
            </React.Fragment>
        );
    }
}
 
export default ForgotPasswordPage;