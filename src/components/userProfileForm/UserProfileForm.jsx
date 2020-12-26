import React, { Component } from "react";
import "./UserProfileForm.css";
import TagInputs from "../tagInputs/TagInputs";

class UserProfileForm extends Component {
  constructor(props) {
    super(props);

    const currentUser = props.user;

    this.state = {
      user: currentUser,
      currentSkillId: currentUser.skills.length,
    };
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    let newProfile = { ...this.state.user };

    newProfile[name] = value;

    this.setState({
      user: newProfile,
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
    if (event.key === "Enter") {
      console.log("Entered");
      console.log(event);
      const enteredSkill = tagInput.skill;
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
    let newUser = { ...this.state.user };
    const changedSkill = newUser.skills;
    const index = changedSkill.map((skill) => skill.id).indexOf(name);
    console.log(index);
    changedSkill[index].skill = value;
    newUser.skills = changedSkill;

    this.setState({ user: newUser });
  };

  getSkill = (event) => {
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
    const skills = this.state.user.skills.filter(
      (skill) => skill.id != skillId
    );
    const newUser = { ...this.state.user };
    newUser.skills = skills;
    this.setState({ user: newUser });
  };

  addSkill = () => {
    console.log("New skill added");
    const skills = [...this.state.user.skills];
    const newSkill = { id: this.state.currentSkillId, skill: "" };
    const newUser = { ...this.state.user };

    skills.push(newSkill);
    newUser.skills = skills;
    this.setState((state) => ({
      user: newUser,
      currentSkillId: state.currentSkillId + 1,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div className="modal">
          <div className="JobFormContainer">
            <h1 className="comfortaa white centerText">Edit Profile</h1>
            <div className="inputRowContainer">
              <label htmlFor="username" className="comfortaa inputLabel">
                username
              </label>
              <input
                onChange={this.handleInputChange}
                name="username"
                type="text"
                id="username"
                className="comfortaa input"
                defaultValue={this.state.user.username}
              />
            </div>
            <div className="inputRowContainer">
              <label htmlFor="email" className="comfortaa inputLabel">
                email
              </label>
              <input
                onChange={this.handleInputChange}
                name="email"
                type="text"
                id="email"
                className="comfortaa input"
                defaultValue={this.state.user.email}
              />
            </div>
            <div className="inputRowContainer">
              <label htmlFor="city" className="comfortaa inputLabel">
                city
              </label>
              <input
                onChange={this.handleInputChange}
                name="city"
                type="text"
                id="city"
                className="comfortaa input"
                defaultValue={this.state.user.city}
              />
            </div>
            <div className="inputRowContainer">
              <label htmlFor="seniority" className="comfortaa inputLabel">
                seniority
              </label>
              <input
                onChange={this.handleInputChange}
                name="seniority"
                type="text"
                id="seniority"
                className="comfortaa input"
                defaultValue={this.state.user.seniority}
              />
            </div>
            <div className="inputRowContainer">
              <label htmlFor="industries" className="comfortaa inputLabel">
                industries
              </label>
              <input
                onChange={this.handleInputChange}
                name="industries"
                type="text"
                id="industries"
                className="comfortaa input"
                defaultValue={this.state.user.industries}
              />
            </div>
            <TagInputs
              onEnter={this.handleEnter}
              onDoubleClick={this.handleDoubleClick}
              onGetSkill={this.getSkill}
              onBlur={this.handleBlur}
              onChangeSkill={this.handleChangeSkill}
              skills={this.state.user.skills}
              onAddSkill={this.addSkill}
              onRemoveSkill={this.removeSkill}
            />
            <div className="buttonContainer">
              <button
                className="jobFormButton comfortaa white"
                onClick={() => {
                  this.props.onEditProfile(this.state.user);
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
      </React.Fragment>
    );
  }
}

export default UserProfileForm;
