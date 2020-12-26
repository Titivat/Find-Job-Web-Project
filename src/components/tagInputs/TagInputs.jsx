import React, { Component } from "react";
import "./TagInputs.css";
import TagInput from "../tagInput/TagInput";

class TagInputs extends Component {
  constructor(props) {
    super(props);
    const addButton = (
      <button
        onClick={this.props.onAddSkill}
        className="addTagButton mediumFont"
      >
        +
      </button>
    );

    this.state = {
      skills: props.skills,
    };
  }

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
          <button
            onClick={this.props.onAddSkill}
            className="addTagButton mediumFont"
          >
            +
          </button>
          {this.props.skills.map((skill) => (
            <TagInput
              onEnter={this.props.onEnter}
              onDoubleClick={this.props.handleDoubleClick}
              onGetSkill={this.props.onGetSkill}
              onBlur={this.props.onBlur}
              onChangeSkill={this.props.onChangeSkill}
              inputName={skill.id}
              tagInput={skill}
              value={skill.skill}
              key={skill.id}
              onRemove={this.props.onRemoveSkill}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TagInputs;
