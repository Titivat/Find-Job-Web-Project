import React, { Component } from "react";
import CompanyProfileContainer from "../../components/companyProfileContainer/CompanyProfileContainer";
import "./CompanyProfilePage.css";
import testingCompanyImage from "../../images/companyLogo.jpg";
import CreatedJob from "../../components/createdJob/CreatedJob";
import JobForm from "../../components/jobForm/JobForm";
import CompanyProfileForm from "../../components/companyProfileForm/CompanyProfileForm";
import Api from "../../Api";
import axios from "axios";

const URL = "https://shy-cougar-50.loca.lt/api/";

class CompanyProfilePage extends Component {
  constructor(props) {
    super(props);
    this.companyName = "Sharke Hand( Thailand ) Co.,Ltd.";
    this.jobLocation = "Bangkok, Bangkok City, Thailand";
    this.state = {
      companyInfo: {
        id: 1,
        user: {
          id: 7,
          username: "scute",
          password: "",
          name: "scute studio",
          email: "scute@example.com",
          city: "Bangkok",
          type: "COMPANY",
        },
        desc: "good productions",
        address_line: "sth",
        logo: null,
      },
      showProfilePopUp: false,
      createdJobs: [],
      showPopUp: false,
      jobFormInfo: {
        jobId: "",
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
    // fetch("https://thin-eagle-67.loca.lt/api/position")
    //   .then((res) => res.json())
    //   .catch((error) => {
    //     console.log("Error", error.stack);
    //     console.log(error);
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   });

    this.setUp();
  }

  setUp = async () => {
    const companyResponse = await fetch(
      URL + "company/" + this.state.companyInfo.id
    );
    const jobsResponse = await fetch(
      URL + "position/company/" + this.state.companyInfo.id
    );
    const jobs = await jobsResponse.json();
    const companyInfo = await companyResponse.json();

    const createdJobs = [];

    jobs.map((job, index) => {
      const createdJob = {
        jobId: job.id,
        jobTitle: job.title,
        seniority: job.senority,
        employmentType: job.jobtype,
        jobFunction: job.title,
        industries: job.industry,
        jobDescription: job.desc,
        neededSkills: null,
      };

      const skillsList = [];

      for (let i = 0; i < job.neededSkills.length; i++) {
        skillsList.push({ id: i, skill: job.neededSkills[i] });
      }

      createdJob.neededSkills = skillsList;

      createdJobs.push(createdJob);
    });

    this.setState({ createdJobs, companyInfo });
  };

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

  createNewJob = async (newJob) => {
    console.log("Creating new job");
    console.log(newJob);
    const createdJobs = [...this.state.createdJobs];
    createdJobs.push(newJob);
    this.setState({ createdJobs });
    this.toggleShowPopUp();

    const response = await fetch(URL + "/position", {
      method: "POST",
      body: JSON.stringify({
        title: newJob.jobTitle,
        desc: newJob.jobDescription,
        senority: newJob.seniority,
        jobtype: newJob.jobTitle,
        neededSkills: newJob.neededSkills,
        industry: newJob.industries,
        company: this.state.companyInfo.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  };

  editJobPopUp = (jobInfo) => {
    this.setState({
      showPopUp: !this.state.showPopUp,
      formType: "Edit Job",
      jobFormInfo: jobInfo,
    });
  };

  editJob = async (oldJob, newJob) => {
    const createdJobs = [...this.state.createdJobs];
    const index = createdJobs.indexOf(oldJob);
    console.log(index);
    createdJobs[index] = { ...newJob };

    this.setState({
      createdJobs: createdJobs,
      showPopUp: !this.state.showPopUp,
    });

    const response = await fetch(URL + "position/" + newJob.jobId, {
      method: "PATCH",
      body: {
        title: newJob.jobTitle,
        desc: newJob.jobDescription,
        senority: newJob.seniority,
        jobtype: newJob.jobTitle,
        neededSkills: newJob.neededSkills,
        industry: newJob.industries,
        company: this.state.companyInfo.id,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  };

  editProfile = (newProfile) => {
    console.log(newProfile);
    this.setState({
      companyInfo: newProfile,
      showProfilePopUp: !this.state.showProfilePopUp,
    });
  };

  render() {
    console.log(this.state.companyInfo);
    return (
      <React.Fragment>
        <div className={"mainAreaContainer"} id="companyProfileContainer">
          <div className="profileSection">
            <h1 className="comfortaa">Company Profile</h1>
            <CompanyProfileContainer
              onEditProfile={this.toggleShowProfilePopUp}
              profileImage={this.state.companyInfo.logo}
              companyName={this.state.companyInfo.user.name}
              email={this.state.companyInfo.user.email}
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
