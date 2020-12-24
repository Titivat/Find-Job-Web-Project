import React, { Component } from "react";
import "./CompanyProfileForm.css";

class CompanyProfileForm extends Component {
  constructor(props) {
    super(props);

    const currentCompanyInfo = props.companyInfo;

    this.state = {
      companyInfo: currentCompanyInfo,
    };
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    let newProfile = { ...this.state.companyInfo };

    newProfile[name] = value;

    this.setState({
      companyInfo: newProfile,
    });
  };

  render() {
    return (
      <div className="modal">
        <div className="profileFormContainer">
          <h1 className="comfortaa white centerText">Edit Company Profile</h1>
          <div className="inputRowContainer">
            <label htmlFor="companyName" className="comfortaa inputLabel">
              Company Name
            </label>
            <input
              onChange={this.handleInputChange}
              name="companyName"
              type="text"
              id="companyName"
              className="comfortaa input"
              defaultValue={this.state.companyInfo.companyName}
            />
          </div>
          <div className="inputRowContainer">
            <label htmlFor="companyEmail" className="comfortaa inputLabel">
              Email
            </label>
            <input
              onChange={this.handleInputChange}
              name="companyEmail"
              type="text"
              id="companyEmail"
              className="comfortaa input"
              defaultValue={this.state.companyInfo.companyEmail}
            />
          </div>
          <div className="buttonContainer">
            <button
              className="jobFormButton comfortaa white"
              onClick={() => {
                this.props.onEditProfile(this.state.companyInfo);
              }}
            >
              edit
            </button>
            <button
              onClick={this.props.onCancel}
              id="cancelButton"
              className="jobFormButton comfortaa"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyProfileForm;
