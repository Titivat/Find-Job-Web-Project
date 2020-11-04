import React, { Component } from "react";
import CompanyProfileContainer from "../../components/companyProfileContainer/CompanyProfileContainer";
import "./CompanyProfilePage.css";
import testingCompanyImage from "../../images/companyLogo.jpg";
import CreatedJob from "../../components/createdJob/CreatedJob";
import JobForm from "../../components/jobForm/JobForm";

class CompanyProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdJobs: [
        {
          jobId: 0,
          neededSkills: [
            "testing1",
            "testing1",
            "testing1",
            "testing1",
            "testing1",
          ],
          jobPosition: "PR & Social Media / Marketing",
          companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
          jobLocation: "Bangkok, Bangkok City, Thailand",
        },
        {
          jobId: 1,
          neededSkills: [
            "testing1",
            "testing1",
            "testing1",
            "testing1",
            "testing1",
          ],
          jobPosition: "PR & Social Media / Marketing",
          companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
          jobLocation: "Bangkok, Bangkok City, Thailand",
        },
        {
          jobId: 2,
          neededSkills: [
            "testing1",
            "testing1",
            "testing1",
            "testing1",
            "testing1",
          ],
          jobPosition: "PR & Social Media / Marketing",
          companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
          jobLocation: "Bangkok, Bangkok City, Thailand",
        },
        {
          jobId: 3,
          neededSkills: [
            "testing1",
            "testing1",
            "testing1",
            "testing1",
            "testing1",
          ],
          jobPosition: "PR & Social Media / Marketing",
          companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
          jobLocation: "Bangkok, Bangkok City, Thailand",
        },
        {
          jobId: 4,
          neededSkills: [
            "testing1",
            "testing1",
            "testing1",
            "testing1",
            "testing1",
          ],
          jobPosition: "PR & Social Media / Marketing",
          companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
          jobLocation: "Bangkok, Bangkok City, Thailand",
        },
        {
          jobId: 5,
          neededSkills: [
            "testing1",
            "testing1",
            "testing1",
            "testing1",
            "testing1",
          ],
          jobPosition: "PR & Social Media / Marketing",
          companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
          jobLocation: "Bangkok, Bangkok City, Thailand",
        },
        {
          jobId: 6,
          neededSkills: [
            "testing1",
            "testing1",
            "testing1",
            "testing1",
            "testing1",
          ],
          jobPosition: "PR & Social Media / Marketing",
          companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
          jobLocation: "Bangkok, Bangkok City, Thailand",
        },
        {
          jobId: 7,
          neededSkills: [
            "testing1",
            "testing1",
            "testing1",
            "testing1",
            "testing1",
          ],
          jobPosition: "PR & Social Media / Marketing",
          companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
          jobLocation: "Bangkok, Bangkok City, Thailand",
        },
        {
          jobId: 8,
          neededSkills: [
            "testing1",
            "testing1",
            "testing1",
            "testing1",
            "testing1",
          ],
          jobPosition: "PR & Social Media / Marketing",
          companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
          jobLocation: "Bangkok, Bangkok City, Thailand",
        },
        {
          jobId: 9,
          neededSkills: [
            "testing1",
            "testing1",
            "testing1",
            "testing1",
            "testing1",
          ],
          jobPosition: "PR & Social Media / Marketing",
          companyName: "Sharke Hand( Thailand ) Co.,Ltd.",
          jobLocation: "Bangkok, Bangkok City, Thailand",
        },
      ],
      showPopUp: false,
      jobFormInfo: {},
      formType: null,
    };
  }

  handleDelete = (jobId) => {
    console.log("Deleting jobId " + typeof jobId);
    const createdJobs = this.state.createdJobs.filter((c) => c.jobId !== jobId);
    console.log("new state");
    console.log(createdJobs);
    this.setState({ createdJobs });
  };

  toggleShowPopUp = () => {
    this.setState({
      showPopUp: !this.state.showPopUp,
    });
  };

  createNewJob = () => {
    this.setState({
      showPopUp: !this.state.showPopUp,
      formType: "Create Job",
    });
  };

  editJob = () => {
    this.setState({
      showPopUp: !this.state.showPopUp,
      formType: "Edit Job",
    });
  };

  render() {
    console.log(this.state.formType);
    console.log(this.state.showPopUp);
    return (
      <React.Fragment>
        <div className={"mainAreaContainer"}>
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
            <button
              onClick={this.createNewJob}
              type="text"
              placeholder="New job offer?"
              id="jobOfferButton"
              className="comfortaa"
            >
              New Job Offer?
            </button>
            {/* <CreatedJob jobPosition={this.state.createdJobs[0].jobPosition} companyName={this.state.createdJobs[0].companyName} jobLocation={this.state.createdJobs[0].jobLocation} /> */}
            {this.state.createdJobs.map((createdJob, index) => (
              <CreatedJob
                key={index}
                job={createdJob}
                jobPosition={createdJob.jobPosition}
                companyName={createdJob.companyName}
                jobLocation={createdJob.jobLocation}
                jobId={createdJob.jobId}
                onDelete={this.handleDelete}
                onTogglePopUp={this.editJob}
              />
            ))}
          </div>
        </div>
        {this.state.showPopUp ? (
          <JobForm
            formType={this.state.formType}
            onTogglePopUp={this.toggleShowPopUp}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default CompanyProfilePage;
