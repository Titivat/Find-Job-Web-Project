import React, { Component } from "react";
import "./TagInput.css";

class TagInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderElement: null,
      value: props.value,
    };

    let input = (
      <input
        name={props.inputName}
        autoFocus
        type="text"
        onKeyDown={(event) => {
          props.onEnter(event, props.tagInput, this.renderElement);
        }}
        className="tagInput"
        defaultValue={this.state.value}
        onChange={props.onChangeSkill}
        onBlur={() => {
          this.props.onBlur(
            props.tagInput,
            this.renderElement,
            this.handleDoubleClick
          );
        }}
      />
    );

    this.state.renderElement = input;
  }

  handleInputChange = (event) => {
    this.setState({ value: event.target.value });
  };

  renderElement = (element) => {
    this.setState({ renderElement: element });
  };

  handleDoubleClick = (event) => {
    this.props.onDoubleClick();
  };

  // handleBlur = (event) => {
  //   if (this.state.value !== "") {
  //     const textElement = (
  //       <span
  //         className="skillTag white comfortaa"
  //         onDoubleClick={this.handleDoubleClick}
  //       >
  //         {this.state.value}
  //       </span>
  //     );
  //     this.setState({ renderElement: textElement });
  //   } else {
  //     this.props.onRemove(this.props.tagInput.id);
  //   }
  // };

  // handleDoubleClick = (event) => {
  //   // const inputElement = (
  //   //   <input
  //   //     autoFocus
  //   //     type="text"
  //   //     onKeyDown={this.handleEnter}
  //   //     onChange={this.props.onChangeSkill}
  //   //     className="tagInput"
  //   //     defaultValue={this.state.value}
  //   //     onBlur={this.handleBlur}
  //   //   />
  //   // );
  //   const skillValue = this.props.onGetSkill(event);

  //   const inputElement = (
  //     <input
  //       name={this.props.inputName}
  //       autoFocus
  //       type="text"
  //       onKeyDown={this.handleEnter}
  //       className="tagInput"
  //       defaultValue={skillValue}
  //       onChange={this.props.onChangeSkill}
  //       onBlur={() => {
  //         this.props.onBlur(
  //           this.props.tagInput,
  //           this.renderElement,
  //           this.handleDoubleClick
  //         );
  //       }}
  //     />
  //   );
  //   this.setState({ renderElement: inputElement });
  // };

  // handleEnter = (event) => {
  //   if (event.key === "Enter") {
  //     if (this.state.value !== "") {
  //       const textElement = (
  //         <span
  //           className="skillTag white comfortaa"
  //           onDoubleClick={this.handleDoubleClick}
  //         >
  //           {this.state.value}
  //         </span>
  //       );
  //       this.setState({ renderElement: textElement });
  //     }
  //   }
  // };

  render() {
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
