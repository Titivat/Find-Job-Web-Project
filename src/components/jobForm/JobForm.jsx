import React, { Component } from "react";
import "./JobForm.css";
import TagInputs from "../tagInputs/TagInputs";

class JobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: null,
      seniority: null,
      employmentType: null,
      jobFUnction: null,
      industries: null,
      jobDescription: null,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    console.log(this.state[name]);
  };

  render() {
    let buttonText = this.props.formType.split(" ")[0];

    return (
      <React.Fragment>
        <div className="modal">
          <div className="JobFormContainer">
            <h1 className="comfortaa white centerText">
              {this.props.formType}
            </h1>
            <div className="inputRowContainer">
              <label htmlFor="jobTitle" className="comfortaa inputLabel">
                Job Title
              </label>
              <input
                onChange={this.handleInputChange}
                name="jobTitle"
                type="text"
                id="jobTitle"
                className="comfortaa input"
              />
            </div>
            <div className="inputRowContainer">
              <label htmlFor="seniority" className="comfortaa inputLabel">
                Seniority
              </label>
              <input
                onChange={this.handleInputChange}
                name="seniority"
                type="text"
                id="seniority"
                className="comfortaa input"
              />
            </div>
            <div className="inputRowContainer">
              <label htmlFor="employmentType" className="comfortaa inputLabel">
                Employment Type
              </label>
              <input
                onChange={this.handleInputChange}
                name="employmentType"
                type="text"
                id="employmentType"
                className="comfortaa input"
              />
            </div>
            <div className="inputRowContainer">
              <label htmlFor="jobFunction" className="comfortaa inputLabel">
                Job Function
              </label>
              <input
                onChange={this.handleInputChange}
                name="jobFunction"
                type="text"
                id="jobFunction"
                className="comfortaa input"
              />
            </div>
            <div className="inputRowContainer">
              <label htmlFor="industries" className="comfortaa inputLabel">
                Industries
              </label>
              <input
                onChange={this.handleInputChange}
                name="industries"
                type="text"
                id="industries"
                className="comfortaa input"
              />
            </div>
            <div className="inputRowContainer">
              <label htmlFor="jobDescription" className="comfortaa inputLabel">
                Job Description
              </label>
              <textarea
                onChange={this.handleInputChange}
                name="jobDescription"
                id="jobDescription"
                className="input textarea"
              ></textarea>
            </div>
            <TagInputs />
            <div className="buttonContainer">
              <button
                onClick={this.props.onTogglePopUp}
                className="button comfortaa white"
              >
                {buttonText}
              </button>
              <button
                onClick={this.props.onTogglePopUp}
                id="cancelButton"
                className="button comfortaa white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default JobForm;
