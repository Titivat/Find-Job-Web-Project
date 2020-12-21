import React, { Component } from "react";
import CompanyProfileContainer from "../../components/companyProfileContainer/CompanyProfileContainer";
import "./CompanyProfilePage.css";
import testingCompanyImage from "../../images/companyLogo.jpg";
import CreatedJob from "../../components/createdJob/CreatedJob";
import JobForm from "../../components/jobForm/JobForm";

class CompanyProfilePage extends Component {
  constructor(props) {
    super(props);
    this.companyName = "Sharke Hand( Thailand ) Co.,Ltd.";
    this.jobLocation = "Bangkok, Bangkok City, Thailand";
    this.state = {
      createdJobs: [],
      showPopUp: false,
      jobFormInfo: {
        jobTitle: "",
        seniority: "",
        employmentType: "",
        jobFunction: "",
        industries: "",
        jobDescription: "",
        neededSkills: [],
      },
      formType: null,
    };
  }

  handleDelete = (job) => {
    console.log("Deleting job");
    console.log(job);
    const createdJobs = this.state.createdJobs.filter(
      (createdJob) => createdJob !== job
    );
    console.log("new state");
    console.log(createdJobs);
    this.setState({ createdJobs });
  };

  toggleShowPopUp = () => {
    this.setState({
      showPopUp: !this.state.showPopUp,
    });
  };

  createNewJobPopUp = () => {
    this.setState({
      showPopUp: !this.state.showPopUp,
      formType: "Create Job",
      jobFormInfo: {
        jobTitle: "",
        seniority: "",
        employmentType: "",
        jobFunction: "",
        industries: "",
        jobDescription: "",
        neededSkills: [],
      },
    });
  };

  createNewJob = (newJob) => {
    console.log("Creatign new job");
    console.log(newJob);
    const createdJobs = [...this.state.createdJobs];
    createdJobs.push(newJob);
    this.setState({ createdJobs });
    this.toggleShowPopUp();
  };

  editJobPopUp = (jobInfo) => {
    this.setState({
      showPopUp: !this.state.showPopUp,
      formType: "Edit Job",
      jobFormInfo: jobInfo,
    });
  };

  editJob = (oldJob, newJob) => {
    console.log("old job vs new job");
    console.log(oldJob);
    console.log(newJob);
    const createdJobs = [...this.state.createdJobs];
    const index = createdJobs.indexOf(oldJob);
    console.log(index);
    createdJobs[index] = { ...newJob };
    this.setState({
      createdJobs: createdJobs,
      showPopUp: !this.state.showPopUp,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className={"mainAreaContainer"} id="companyProfileContainer">
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
              onClick={this.createNewJobPopUp}
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
                jobPosition={createdJob.jobFunction}
                companyName={this.companyName}
                jobLocation={this.jobLocation}
                jobId={index}
                onDelete={this.handleDelete}
                onTogglePopUp={this.editJobPopUp}
              />
            ))}
          </div>
        </div>
        {this.state.showPopUp ? (
          <JobForm
            formType={this.state.formType}
            onTogglePopUp={
              this.state.formType === "Edit Job"
                ? this.editJob
                : this.createNewJob
            }
            onCancel={this.toggleShowPopUp}
            formInfo={this.state.jobFormInfo}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default CompanyProfilePage;
