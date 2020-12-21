import React, { Component } from "react";
import "./JobForm.css";
import TagInputs from "../tagInputs/TagInputs";

class JobForm extends Component {
  constructor(props) {
    super(props);
    this.oldJob = props.formInfo;
    this.editJob = props.formType === "Edit Job" ? true : false;
    const jobInfo = props.formInfo;
    this.state = {
      jobFormInfo: jobInfo,
      currentSkillId: jobInfo.neededSkills.length,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let newJobFormInfo = { ...this.state.jobFormInfo };

    newJobFormInfo[name] = value;

    this.setState({
      jobFormInfo: newJobFormInfo,
    });
  };

  handleDoubleClick = (tagInput, childRenderMethod) => {
    let input = (
      <input
        name={tagInput.id}
        autoFocus
        type="text"
        onKeyDown={(event) => {
          this.handleEnter(event, tagInput, childRenderMethod);
        }}
        className="tagInput"
        defaultValue={tagInput.skill}
        onChange={this.handleChangeSkill}
        onBlur={() => {
          this.handleBlur(tagInput, childRenderMethod, this.handleDoubleClick);
        }}
      />
    );

    childRenderMethod(input);
  };

  handleBlur = (blurredTag, childRenderMethod, handleDoubleClick) => {
    const blurredSkill = blurredTag.skill;
    console.log("BlurredSKill: " + blurredSkill);
    console.log("BlurredID", blurredTag.id);

    if (blurredSkill !== "") {
      const textElement = (
        <span
          name={blurredTag.id}
          className="skillTag white comfortaa"
          onDoubleClick={() => {
            this.handleDoubleClick(blurredTag, childRenderMethod);
          }}
        >
          {blurredSkill}
        </span>
      );
      childRenderMethod(textElement);
    } else {
      this.removeSkill(blurredTag.id);
    }

    console.log("After blurred");
    console.log(this.state.jobFormInfo);
  };

  handleEnter = (event, tagInput, childRenderMethod) => {
    console.log("Entered");
    console.log(event);
    const enteredSkill = tagInput.skill;

    if (event.key === "Enter") {
      if (enteredSkill !== "") {
        const textElement = (
          <span
            className="skillTag white comfortaa"
            onDoubleClick={() => {
              this.handleDoubleClick(tagInput, childRenderMethod);
            }}
          >
            {enteredSkill}
          </span>
        );

        childRenderMethod(textElement);
      }
    }
  };

  handleChangeSkill = (event) => {
    const target = event.target;
    const value = target.value;
    const name = parseInt(target.name);
    let newJobFormInfo = { ...this.state.jobFormInfo };
    const changedNeededSkills = newJobFormInfo.neededSkills;
    const index = changedNeededSkills.map((skill) => skill.id).indexOf(name);
    changedNeededSkills[index].skill = value;
    newJobFormInfo.neededSkills = changedNeededSkills;

    this.setState({ jobFormInfo: newJobFormInfo });
  };

  getSkill = (event) => {
    // const target = event.target;
    // const name = parseInt(target.name);
    // let newJobFormInfo = { ...this.state.jobFormInfo };
    // const neededSkills = newJobFormInfo.neededSkills;
    // const index = neededSkills.map((skill) => skill.id).indexOf(name);
    // console.log(index);
    // const skill = neededSkills[index].skill;

    const target = event.target;
    const value = target.value;
    const name = parseInt(target.name);
    console.log("getSkill");
    console.log(name);
    let newJobFormInfo = { ...this.state.jobFormInfo };
    const changedNeededSkills = newJobFormInfo.neededSkills;
    const index = changedNeededSkills.map((skill) => skill.id).indexOf(name);
    const skill = changedNeededSkills[index].skill;

    return skill;
  };

  removeSkill = (skillId) => {
    const skills = this.state.jobFormInfo.neededSkills.filter(
      (skill) => skill.id != skillId
    );
    const newJobFormInfo = { ...this.state.jobFormInfo };
    newJobFormInfo.neededSkills = skills;
    this.setState({ jobFormInfo: newJobFormInfo });
  };

  addSkill = () => {
    const skills = [...this.state.jobFormInfo.neededSkills];
    const newSkill = { id: this.state.currentSkillId, skill: "" };
    const newJobFormInfo = { ...this.state.jobFormInfo };

    skills.push(newSkill);
    newJobFormInfo.neededSkills = skills;
    this.setState((state) => ({
      jobFormInfo: newJobFormInfo,
      currentSkillId: state.currentSkillId + 1,
    }));
  };

  render() {
    let buttonText = this.props.formType.split(" ")[0];

    // console.log("ReRendering");
    // console.log(this.state.jobFormInfo.neededSkills);

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
                defaultValue={this.state.jobFormInfo.jobTitle}
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
                defaultValue={this.state.jobFormInfo.seniority}
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
                defaultValue={this.state.jobFormInfo.employmentType}
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
                defaultValue={this.state.jobFormInfo.jobFunction}
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
                defaultValue={this.state.jobFormInfo.industries}
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
                defaultValue={this.state.jobFormInfo.jobDescription}
              ></textarea>
            </div>
            <TagInputs
              onEnter={this.handleEnter}
              onDoubleClick={this.handleDoubleClick}
              onGetSkill={this.getSkill}
              onBlur={this.handleBlur}
              onChangeSkill={this.handleChangeSkill}
              skills={this.state.jobFormInfo.neededSkills}
              onAddSkill={this.addSkill}
              onRemoveSkill={this.removeSkill}
            />
            <div className="buttonContainer">
              <button
                onClick={() => {
                  if (this.editJob) {
                    this.props.onTogglePopUp(
                      this.oldJob,
                      this.state.jobFormInfo
                    );
                  } else {
                    this.props.onTogglePopUp(this.state.jobFormInfo);
                  }
                }}
                className="jobFormButton comfortaa white"
              >
                {buttonText}
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
      </React.Fragment>
    );
  }
}

export default JobForm;
