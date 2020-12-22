import "./FindJobPage.css";
import Header from '../../components/header/Header.jsx'
import RocketMan from '../../images/rocketMan.png'
import SearchBar from '../../components/searchBar/SearchBar.jsx'
import JobDescriptionCard from '../../components/JobDescriptionCard/JobDescriptionCard.jsx'
import FullJobDetailCard from '../../components/fullJobDetailCard/fullJobDetailCard.jsx'
import React, { Component } from 'react';

class FindJobPage extends Component{
    state = {
        comPanyDetail: {
            compName: "PR & Social Media / Marketing",
            compCity: "Bangkok, Bangkok City, Thailand",
            compDetail: "Sharke Hand( Thailand ) Co.,Ltd.",
            time: "1 month",
            detail:''
        },
        filter: "",
        jobType: "",
        data: [
          {
            compName: "PR & Social Media / Marketing",
            compCity: "Bangkok, Bangkok City, Thailand",
            compDetail: "Sharke Hand( Thailand ) Co.,Ltd.",
            time: "1 month"
          },
          {
            compName: "Shopee",
            compCity: "Bangkok, Bangkok City, Thailand",
            compDetail: "Social Media Associate",
            time: "1 month"
          },
          {
            compName: "Win - Win (Asia) Co. Ltd.",
            compCity: "Bangkok, Bangkok City, Thailand",
            compDetail: "English data entry officer",
            time: "3 months"
          },
          {
            compName: "Roche",
            compCity: "Bangkok, Bangkok City, Thailand",
            compDetail: "Study Start Up Specialist",
            time: "5 days"
          },
          {
            compName: "United Nations",
            compCity: "Bangkok, Bangkok City, Thailand",
            compDetail: "United Nations",
            time: "5 days"
          },
          {
            compName: "Booking.com",
            compCity: "Bangkok, Bangkok City, Thailand",
            compDetail: "Customer Service Partner Team Lead",
            time: "5 days"
          }
        ]
    };
    
    handleChangeSearch = event => {
        this.setState({ filter: event.target.value });
    };

    handleChangeJobType = event => {
        this.setState({ jobType: event.target.value });
    };

    handleChangeTime = event => {
        this.setState({ filter: event.target.value });
    };

    handleChangeLocation = event => {
        this.setState({ filter: event.target.value });
    };

    displayStatus = (childData) => {
        this.setState({ comPanyDetail: childData });
    }

    getObjectList =() => {
        const { filter, data} = this.state;
        const lowercasedFilter = filter.toLowerCase();

        const filteredData = data.filter(item => {

        return Object.keys(item).some(key =>
            item[key].toLowerCase().includes(lowercasedFilter)
            );
        });

        return filteredData
    }

    render() {
        const { comPanyDetail } = this.state
        const { compName, compCity, compDetail, time, detail} = comPanyDetail

        return(
            <div className="findjob-page-overflow">
                <Header isDisplay={true} />

                <div className="find-job-page-top-container">
                    <p className="find-job-page-top-text">Find your dream job<br/>here</p>
                    <p className="find-job-page-top-img">
                        <img src={RocketMan}></img>
                    </p>
                </div>

                <div className="find-job-page-content-container">
                    <div className="find-job-page-searchbar">
                        <SearchBar 
                            seach={this.handleChangeSearch} 
                        />

                    </div>
                
                    <div className="find-job-page-job-list-container">
                        { this.getObjectList().map(item => (
                            <div className="find-job-page-list-item">
                                <JobDescriptionCard 
                                    haveButton = {false}
                                    key={item.compName}
                                    clickToDisplay={ this.displayStatus }
                                    compCity={ item.compCity}
                                    compName={item.compName}
                                    compDetail={item.compDetail}
                                    time = {item.time}
                                    backgroundColor="#FFFFFF"
                                />
                            </div>
                            ))
                        }
                    </div>

                    <div   className="find-job-page-job-deatail-container">
                        <FullJobDetailCard 
                            compName={ compName }
                            compDetail={ compDetail }
                            compCity={ compCity}
                            time = { time }
                        />
                    </div>

                </div>
            </div>
        );
    }
    
}

export default FindJobPage;