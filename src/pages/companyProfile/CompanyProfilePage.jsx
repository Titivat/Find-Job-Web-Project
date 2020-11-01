import React, { Component } from 'react';
import CompanyProfileContainer from '../../components/companyProfileContainer/CompanyProfileContainer'
import './CompanyProfilePage.css';
import testingCompanyImage from '../../images/companyLogo.jpg'
import CreatedJob from '../../components/createdJob/CreatedJob';

class CompanyProfilePage extends Component {
    state = {
        createdJobs: [
            {
                jobPosition: "PR & Social Media / Marketing",
                companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
                jobLocation: "Bangkok, Bangkok City, Thailand",
            },{
                jobPosition: "PR & Social Media / Marketing",
                companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
                jobLocation: "Bangkok, Bangkok City, Thailand",
            },{
                jobPosition: "PR & Social Media / Marketing",
                companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
                jobLocation: "Bangkok, Bangkok City, Thailand",
            },{
                jobPosition: "PR & Social Media / Marketing",
                companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
                jobLocation: "Bangkok, Bangkok City, Thailand",
            },{
                jobPosition: "PR & Social Media / Marketing",
                companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
                jobLocation: "Bangkok, Bangkok City, Thailand",
            },{
                jobPosition: "PR & Social Media / Marketing",
                companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
                jobLocation: "Bangkok, Bangkok City, Thailand",
            },{
                jobPosition: "PR & Social Media / Marketing",
                companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
                jobLocation: "Bangkok, Bangkok City, Thailand",
            },{
                jobPosition: "PR & Social Media / Marketing",
                companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
                jobLocation: "Bangkok, Bangkok City, Thailand",
            },{
                jobPosition: "PR & Social Media / Marketing",
                companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
                jobLocation: "Bangkok, Bangkok City, Thailand",
            },{
                jobPosition: "PR & Social Media / Marketing",
                companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
                jobLocation: "Bangkok, Bangkok City, Thailand",
            },
        ]
    }
    render() {
        console.log(this.state);
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
                        {/* <CreatedJob jobPosition={this.state.createdJobs[0].jobPosition} companyName={this.state.createdJobs[0].companyName} jobLocation={this.state.createdJobs[0].jobLocation} /> */}
                        {this.state.createdJobs.map(createdJob => <CreatedJob jobPosition={createdJob.jobPosition} companyName={createdJob.companyName} jobLocation={createdJob.jobLocation} />)}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default CompanyProfilePage;