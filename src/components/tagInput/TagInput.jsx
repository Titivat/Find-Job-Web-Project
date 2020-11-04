import React, { Component } from "react";
import "./TagInput.css";

class TagInput extends Component {
  constructor(props) {
    super(props);
    console.log(props.tagInput.id);

    this.state = {
      renderElement: null,
      value: props.value,
    };

    let input = (
      <input
        autoFocus
        type="text"
        onKeyDown={this.handleEnter}
        className="tagInput"
        defaultValue={this.state.value}
        onChange={this.handleInputChange}
        onBlur={this.handleBlur}
      />
    );

    this.state.renderElement = input;
  }

  handleInputChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleBlur = (event) => {
    if (this.state.value !== "") {
      const textElement = (
        <span
          className="skillTag white comfortaa"
          onDoubleClick={this.handleDoubleClick}
        >
          {this.state.value}
        </span>
      );
      this.setState({ renderElement: textElement });
    } else {
      this.props.onRemove(this.props.tagInput.id);
    }
  };

  handleDoubleClick = (event) => {
    const inputElement = (
      <input
        autoFocus
        type="text"
        onKeyDown={this.handleEnter}
        onChange={this.handleInputChange}
        className="tagInput"
        defaultValue={this.state.value}
        onBlur={this.handleBlur}
      />
    );
    this.setState({ renderElement: inputElement });
  };

  handleEnter = (event) => {
    if (event.key === "Enter") {
      if (this.state.value !== "") {
        const textElement = (
          <span
            className="skillTag white comfortaa"
            onDoubleClick={this.handleDoubleClick}
          >
            {this.state.value}
          </span>
        );
        this.setState({ renderElement: textElement });
      }
    }
  };

  render() {
    console.log(this.state.value);
    return (
      // <input
      //   type="text"
      //   onKeyDown={this.handleEnter}
      //   className="tagInput"
      //   value={this.state.value}
      //   onChange={this.handleInputChange}
      // />

      this.state.renderElement
    );
  }
}

export default TagInput;
