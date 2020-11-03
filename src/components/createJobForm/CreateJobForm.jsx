import React, { Component } from "react";
import "./createJobForm.css";

class CreateJobForm extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="modal">
          <div className="createJobFormContainer">
            <h1 className="comfortaa white centerText">Create Job</h1>
            <div className="inputRowContainer">
              <label htmlFor="jobTitle" className="comfortaa inputLabel">
                Job Title
              </label>
              <input type="text" id="jobTitle" className="comfortaa input" />
            </div>
            <div className="inputRowContainer">
              <label htmlFor="seniority" className="comfortaa inputLabel">
                Seniority
              </label>
              <input type="text" id="seniority" className="comfortaa input" />
            </div>
            <div className="inputRowContainer">
              <label htmlFor="employmentType" className="comfortaa inputLabel">
                Employment Type
              </label>
              <input
                type="text"
                id="employmentType"
                className="comfortaa input"
              />
            </div>
            <div className="inputRowContainer">
              <label htmlFor="jobFunction" className="comfortaa inputLabel">
                Job Function
              </label>
              <input type="text" id="jobFunction" className="comfortaa input" />
            </div>
            <div className="inputRowContainer">
              <label htmlFor="industries" className="comfortaa inputLabel">
                Industries
              </label>
              <input type="text" id="industries" className="comfortaa input" />
            </div>
            <div className="inputRowContainer">
              <label htmlFor="jobDescription" className="comfortaa inputLabel">
                Job Description
              </label>
              <textarea
                id="jobDescription"
                className="input textarea"
              ></textarea>
            </div>
            <div className="buttonContainer">
              <button className="button comfortaa white">Create</button>
              <button id="cancelButton" className="button comfortaa white">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateJobForm;
