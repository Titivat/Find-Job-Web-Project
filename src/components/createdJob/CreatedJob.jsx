import React, { Component } from 'react';
import './CreatedJob.css';

class CreatedJob extends Component {
    state = {  }
    render() { 
        const { jobPosition, companyName, jobLocation } = this.props;

        return (
            <div className="createdJobsContainer">
                <h2 className="comfortaa whiteLight">{jobPosition}</h2>
                <h2 className="comfortaa whiteLight">{companyName}</h2>
                <h2 className="comfortaa greyLight">{jobLocation}</h2>
                <button className="comfortaa" id="editJobButton">Edit Job</button>
            </div>
        );
    }
}
 
export default CreatedJob;