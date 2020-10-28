import React, { Component } from 'react';
import './AfterSignUpPage.css';
import companyImage from '../../images/companiesImage.png';
import employeeImage from '../../images/employeeImage.png';

class AfterSignUpPage extends Component {
    state = {  }
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
                        <button className="mediumButton roundedShadowed">Companies</button>
                    </div>
                    
                    <div className="halfFlexColumn">
                        <div className="imageContainer">
                            <img id="employeeImage" src={employeeImage} />
                        </div>
                        <button className="mediumButton roundedShadowed">Employees</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default AfterSignUpPage;