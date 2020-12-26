import React, { Component } from 'react';
import './AfterSignUpPage.css';
import companyImage from '../../images/companiesImage.png';
import employeeImage from '../../images/employeeImage.png';
import axios from 'axios';

class AfterSignUpPage extends Component {
    
    
    constructor( props){
        super( props )
        this.userInformation = props.location.userInformation
        this.state = {}
        this.urlPath = "https://pretty-donkey-100.loca.lt"
    }

    registerEmployeRequest = () => {
        this.requestionApi('employee')
        console.log("I have posted employee")
    }

    requestionApi = ( type ) => {
        console.log( this.userInformation )
        const sentData = {"user":this.userInformation}
        axios({
            method: 'post',
            url: `${this.urlPath}/api/${type}/`,
            data: sentData
        });
    }

    registerCompanyRequest = () => {
        this.requestionApi('company')
        console.log("I have posted company")
    }

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
                        onClick={ this.registerCompanyRequest}
                        className="mediumButton roundedShadowed">Companies</button>
                    </div>
                    
                    <div className="halfFlexColumn">
                        <div className="imageContainer">
                            <img id="employeeImage" src={employeeImage} />
                        </div>
                        <button 
                        onClick={ this.registerEmployeRequest}
                        className="mediumButton roundedShadowed">
                            Employees
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default AfterSignUpPage;