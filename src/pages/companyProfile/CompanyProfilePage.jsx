import React, { Component } from 'react';
import CompanyProfileContainer from '../../components/companyProfileContainer/CompanyProfileContainer'
import './CompanyProfilePage.css';
import testingCompanyImage from '../../images/companyLogo.jpg'

class CompanyProfilePage extends Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
                <div className="mainAreaContainer">
                    <div className="profileSection">
                        <h1 className="comfortaa">Company Profile</h1>
                        <CompanyProfileContainer profileImage = {testingCompanyImage} companyName="Octopus" email="titivatmo@gmail.com" />
                    </div>
                    <div className="createdJobContainer">
                        <h1 className="comfortaa">Created Job</h1>
                        <input type="text" placeholder="New job offer?" id="jobOfferInputField" className="comfortaa" />
                    </div>
                </div>
                
                
            </React.Fragment>
        );
    }
}
 
export default CompanyProfilePage;