import "./FindJobPage.css";
import Header from '../../components/header/Header.jsx'
import RocketMan from '../../images/rocketMan.png'
import SearchBar from '../../components/searchBar/SearchBar.jsx'
import JobDescriptionCard from '../../components/JobDescriptionCard/JobDescriptionCard.jsx'
import FullJobDetailCard from '../../components/fullJobDetailCard/fullJobDetailCard.jsx'

function FindJobPage(){

    return(
        <div className="findjob-page-overflow">
            <Header isDisplay={true}
            />

            <div className="find-job-page-top-container">
                <p className="find-job-page-top-text">Find your dream job<br/>here</p>
                <p className="find-job-page-top-img">
                    <img src={RocketMan}></img>
                </p>
            </div>

            <div className="find-job-page-content-container">
                <div className="find-job-page-searchbar">
                    <SearchBar />
                </div>

                <div className="find-job-page-job-list-container">
                    <div className="find-job-page-list-item"><JobDescriptionCard backgroundColor="#FFFFFF"/></div>

                    


                </div>

                <div   className="find-job-page-job-deatail-container">
                    <FullJobDetailCard />
                </div>

            </div>
        </div>
    );
}

function click(){
    console.log("I am clilck")
}

export default FindJobPage;