import "./FindJobPage.css";
import Header from "../../components/header/Header.jsx";
import RocketMan from "../../images/rocketMan.png";
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import JobDescriptionCard from "../../components/JobDescriptionCard/JobDescriptionCard.jsx";
import FullJobDetailCard from "../../components/fullJobDetailCard/fullJobDetailCard.jsx";
import React, { Component } from "react";
import { faWizardsOfTheCoast } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const URL = "https://dull-bobcat-33.loca.lt//api/";

class FindJobPage extends Component {
  constructor(props) {
    super(props);
    this.count = 0;

    this.state = {
      employeeId: 3,
      comPanyDetail: {
        compName: "",
        compCity: "",
        compDetail: "",
        time: "",
        seniority: "",
        employementType: "",
        positionId: "",
      },
      filter: "",
      jobType: "",
      data: [
        {
          compName: "PR & Social Media / Marketing",
          compCity: "Bangkok, Bangkok City, Thailand",
          compDetail: "Sharke Hand( Thailand ) Co.,Ltd.",
          time: "1 month",
        },
        {
          compName: "Shopee",
          compCity: "Bangkok, Bangkok City, Thailand",
          compDetail: "Social Media Associate",
          time: "1 month",
        },
        {
          compName: "Win - Win (Asia) Co. Ltd.",
          compCity: "Bangkok, Bangkok City, Thailand",
          compDetail: "English data entry officer",
          time: "3 months",
        },
        {
          compName: "Roche",
          compCity: "Bangkok, Bangkok City, Thailand",
          compDetail: "Study Start Up Specialist",
          time: "5 days",
        },
        {
          compName: "United Nations",
          compCity: "Bangkok, Bangkok City, Thailand",
          compDetail: "United Nations",
          time: "5 days",
        },
        {
          compName: "Booking.com",
          compCity: "Bangkok, Bangkok City, Thailand",
          compDetail: "Customer Service Partner Team Lead",
          time: "5 days",
        },
      ],
    };
  }

  componentDidMount() {
    this.setUp();
  }

  setUp = async () => {
    // console.log(URL + "employee/search/?user__id=" + 1);
    const dataResponse = await fetch(URL + "position/fullDetail");
    const dataResults = await dataResponse.json();
    // localStorage.getItem('id')
    const employeeResponse = await fetch(
      URL + "employee/search/?user__id=" + 3
    );
    const employee = await employeeResponse.json();
    console.log("EMPLOYEE");
    console.log(employee);

    const dataList = [];

    dataResults.map((data, index) => {
      console.log(data);
      const newData = {
        compName: data.company.user.name,
        compCity: data.company.user.city,
        compDetail: data.company.desc,
        time: data.created_at,
        seniority: data.senriotiy,
        employementType: data.employementType,
        positionId: data.id,
      };

      dataList.push(newData);
    });

    this.setState({ data: dataList, employeeId: employee.id });
  };

  applyJob = async () => {
    // const response = await fetch(URL + "/position", {
    //     method: "POST",
    //     body: {
    //       title: newJob.jobTitle,
    //       desc: newJob.jobDescription,
    //       senority: newJob.seniority,
    //       jobtype: newJob.jobTitle,
    //       neededSkills: newJob.neededSkills,
    //       industry: newJob.industries,
    //       company: this.state.companyInfo.id,
    //     },
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    // console.log(URL + "appliedjob");
    // const applyJobResponse = await fetch(URL + "appliedjob", {
    //   method: "POST",
    //   body: {
    //     position: this.state.comPanyDetail.positionId,
    //     employee: this.state.employeeId,
    //     is_accepted: false,
    //     is_rejected: false,
    //   },
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const appliedJobs = await applyJobResponse.json();
    const postItem = {
      position: this.state.comPanyDetail.positionId,
      employee: this.state.employeeId,
      is_accepted: false,
      is_rejected: false,
    };

    axios({
      method: "post",
      url: URL + "appliedjob",
      data: postItem,
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  handleChangeSearch = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleChangeJobType = (event) => {
    this.setState({ jobType: event.target.value });
  };

  handleChangeTime = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleChangeLocation = (event) => {
    this.setState({ filter: event.target.value });
  };

  displayStatus = (childData) => {
    this.setState({ comPanyDetail: childData });
  };

  getObjectList = () => {
    console.log("FILTER");
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    console.log(data);

    const filteredData = data.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    console.log(filteredData);

    return filteredData;
  };

  render() {
    const { comPanyDetail } = this.state;
    const { compName, compCity, compDetail, time, detail } = comPanyDetail;

    return (
      <div className="findjob-page-overflow">
        <Header isDisplay={true} />

        <div className="find-job-page-top-container">
          <p className="find-job-page-top-text">
            Find your dream job
            <br />
            here
          </p>
          <p className="find-job-page-top-img">
            <img src={RocketMan}></img>
          </p>
        </div>

        <div className="find-job-page-content-container">
          <div className="find-job-page-searchbar">
            <SearchBar
              search={this.handleChangeSearch}
              onChangeJobType={this.handleChangeJobType}
              onChangeLocation={this.handleChangeLocation}
            />
          </div>

          <div className="find-job-page-job-list-container">
            {this.getObjectList().map((item, index) => (
              <div className="find-job-page-list-item">
                <JobDescriptionCard
                  fullCompanyDetail={item}
                  haveButton={false}
                  key={item.compName}
                  clickToDisplay={this.displayStatus}
                  compCity={item.compCity}
                  compName={item.compName}
                  compDetail={item.compDetail}
                  time={item.time}
                  backgroundColor={"white"}
                />
              </div>
            ))}
          </div>

          <div className="find-job-page-job-deatail-container">
            <FullJobDetailCard
              fullCompanyDetail={this.state.comPanyDetail}
              compName={compName}
              compDetail={compDetail}
              compCity={compCity}
              time={time}
              onApplyJob={this.applyJob}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FindJobPage;
