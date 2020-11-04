import React, { Component } from "react";
import "./TagInputs.css";
import TagInput from "../tagInput/TagInput";

class TagInputs extends Component {
  constructor(props) {
    super(props);
    const addButton = (
      <button onClick={this.addSkill} className="addTagButton mediumFont">
        +
      </button>
    );

    this.state = {
      jobInfo: null,
      skills: [],
      currentId: 0,
    };
  }

  removeSkill = (skillId) => {
    const skills = this.state.skills.filter((skill) => skill.id != skillId);
    this.setState({ skills });
  };

  addSkill = () => {
    const skills = [...this.state.skills];
    const newSkill = { id: this.state.currentId, skill: "" };
    skills.push(newSkill);
    this.setState((state) => ({
      skills,
      currentId: state.currentId + 1,
    }));
  };

  render() {
    return (
      <div className="tagInputsContainer">
        <label
          htmlFor="neededSkills"
          className="tagInputsLabel comfortaa mediumFont white"
        >
          Needed Skills
        </label>
        <div className="skillsContainer">
          <button onClick={this.addSkill} className="addTagButton mediumFont">
            +
          </button>
          {this.state.skills.map((skill) => (
            <TagInput
              tagInput={skill}
              value={skill.skill}
              key={skill.id}
              onRemove={this.removeSkill}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TagInputs;
