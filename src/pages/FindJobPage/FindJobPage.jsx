import "./FindJobPage.css";

function FindJobPage(){

    return(
        <div>
            <div className="find-job-page-top-container">
                <p className="find-job-page-top-text">Find your dream job<br/>here</p>
                <p className="find-job-page-top-img">image</p>
            </div>

            <div className="find-job-page-content-container">
                <div className="find-job-page-searchbar">
                    search bar
                </div>

                <div className="find-job-page-jobs">
                    List of jobs
                </div>

                <div className="find-job-page-job-content">
                    job content
                </div>
            </div>
        </div>
    );
}

export default FindJobPage;