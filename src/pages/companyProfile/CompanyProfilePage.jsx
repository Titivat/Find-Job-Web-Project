import React, { Component } from "react";
import CompanyProfileContainer from "../../components/companyProfileContainer/CompanyProfileContainer";
import "./CompanyProfilePage.css";
import testingCompanyImage from "../../images/companyLogo.jpg";
import CreatedJob from "../../components/createdJob/CreatedJob";
import JobForm from "../../components/jobForm/JobForm";
import CompanyProfileForm from "../../components/companyProfileForm/CompanyProfileForm";

class CompanyProfilePage extends Component {
  constructor(props) {
    super(props);
    this.companyName = "Sharke Hand( Thailand ) Co.,Ltd.";
    this.jobLocation = "Bangkok, Bangkok City, Thailand";
    this.state = {
      companyInfo: {
        companyName: "Mon",
        companyEmail: "titivat@gmail.com",
      },
      showProfilePopUp: false,
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

  componentDidMount() {
    fetch("http://localhost:8000/api/position/")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
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

  toggleShowProfilePopUp = () => {
    this.setState({
      showProfilePopUp: !this.state.showProfilePopUp,
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
    const createdJobs = [...this.state.createdJobs];
    const index = createdJobs.indexOf(oldJob);
    console.log(index);
    createdJobs[index] = { ...newJob };
    this.setState({
      createdJobs: createdJobs,
      showPopUp: !this.state.showPopUp,
    });
  };

  editProfile = (newProfile) => {
    console.log(newProfile);
    this.setState({
      companyInfo: newProfile,
      showProfilePopUp: !this.state.showProfilePopUp,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className={"mainAreaContainer"} id="companyProfileContainer">
          <div className="profileSection">
            <h1 className="comfortaa">Company Profile</h1>
            <CompanyProfileContainer
              onEditProfile={this.toggleShowProfilePopUp}
              profileImage={testingCompanyImage}
              companyName={this.state.companyInfo.companyName}
              email={this.state.companyInfo.companyEmail}
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

        {this.state.showProfilePopUp ? (
          <CompanyProfileForm
            companyInfo={this.state.companyInfo}
            onCancel={this.toggleShowProfilePopUp}
            onEditProfile={this.editProfile}
            formInfo={this.state.jobFormInfo}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default CompanyProfilePage;
