import React, { Component } from "react";
import CompanyProfileContainer from "../../components/companyProfileContainer/CompanyProfileContainer";
import "./CompanyProfilePage.css";
import testingCompanyImage from "../../images/companyLogo.jpg";
import CreatedJob from "../../components/createdJob/CreatedJob";

class CompanyProfilePage extends Component {
  state = {
    createdJobs: [
      {
        jobId: 0,
        jobPosition: "PR & Social Media / Marketing",
        companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
        jobLocation: "Bangkok, Bangkok City, Thailand",
      },
      {
        jobId: 1,
        jobPosition: "PR & Social Media / Marketing",
        companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
        jobLocation: "Bangkok, Bangkok City, Thailand",
      },
      {
        jobId: 2,
        jobPosition: "PR & Social Media / Marketing",
        companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
        jobLocation: "Bangkok, Bangkok City, Thailand",
      },
      {
        jobId: 3,
        jobPosition: "PR & Social Media / Marketing",
        companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
        jobLocation: "Bangkok, Bangkok City, Thailand",
      },
      {
        jobId: 4,
        jobPosition: "PR & Social Media / Marketing",
        companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
        jobLocation: "Bangkok, Bangkok City, Thailand",
      },
      {
        jobId: 5,
        jobPosition: "PR & Social Media / Marketing",
        companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
        jobLocation: "Bangkok, Bangkok City, Thailand",
      },
      {
        jobId: 6,
        jobPosition: "PR & Social Media / Marketing",
        companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
        jobLocation: "Bangkok, Bangkok City, Thailand",
      },
      {
        jobId: 7,
        jobPosition: "PR & Social Media / Marketing",
        companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
        jobLocation: "Bangkok, Bangkok City, Thailand",
      },
      {
        jobId: 8,
        jobPosition: "PR & Social Media / Marketing",
        companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
        jobLocation: "Bangkok, Bangkok City, Thailand",
      },
      {
        jobId: 9,
        jobPosition: "PR & Social Media / Marketing",
        companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
        jobLocation: "Bangkok, Bangkok City, Thailand",
      },
    ],
  };

  handleDelete = (jobId) => {
    console.log("Deleting jobId " + typeof jobId);
    const createdJobs = this.state.createdJobs.filter((c) => c.jobId !== jobId);
    console.log("new state");
    console.log(createdJobs);
    this.setState({ createdJobs });
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div className="mainAreaContainer">
          <div className="profileSection">
            <h1 className="comfortaa">Company Profile</h1>
            <CompanyProfileContainer
              profileImage={testingCompanyImage}
              companyName="Octopus"
              email="titivatmo@gmail.com"
            />
          </div>
          <div className="createdJobContainer">
            <h1 className="comfortaa">Created Job</h1>
            <input
              type="text"
              placeholder="New job offer?"
              id="jobOfferInputField"
              className="comfortaa"
            />
            {/* <CreatedJob jobPosition={this.state.createdJobs[0].jobPosition} companyName={this.state.createdJobs[0].companyName} jobLocation={this.state.createdJobs[0].jobLocation} /> */}
            {this.state.createdJobs.map((createdJob, index) => (
              <CreatedJob
                key={index}
                jobPosition={createdJob.jobPosition}
                companyName={createdJob.companyName}
                jobLocation={createdJob.jobLocation}
                jobId={createdJob.jobId}
                onDelete={this.handleDelete}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CompanyProfilePage;
