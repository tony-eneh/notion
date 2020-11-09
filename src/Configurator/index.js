import React, { Component } from "react";
import "./configurator.css";
import { configFields, defaultValues } from "./Shapes";

// put all shapes in an for easier rendering of the UI dynamicall

export class Configurator extends Component {
  constructor(props) {
    super(props);
    this.fireConfigChange = props.onChange.bind(this);
    this.handleShapeChange = this.handleShapeChange.bind(this);
    this.handleShapeDetailsChange = this.handleShapeDetailsChange.bind(this);
  }

  state = {
    shape: "Circle",
    // state objects to hold the values of the inputs
    ...defaultValues,
  };

  handleShapeChange(e) {
    this.setState({ shape: e.target.value });
  }

  handleShapeDetailsChange(e) {
    const currentShape = this.state[this.state.shape];

    // ensured type consistency by casting value to number before assigning
    currentShape[e.target.name] = +e.target.value;

    this.setState({ [currentShape]: currentShape });
    console.log("you changed a value");
    console.log("target element name", e.target.name);
  }

  componentDidUpdate() {
    this.fireConfigChange(this.state);
  }

  render() {
    return (
      <form className="configurator">
        <select
          type="select"
          value={this.state.shape}
          onChange={this.handleShapeChange}
        >
          {Object.keys(configFields).map((shape, id) => (
            <option key={id}>{shape}</option>
          ))}
        </select>
        {/* render the inputs peculiar to the current shape inside the fieldset below */}
        {/* pass in a change handler for any change in inputs */}
        <fieldset>
          {React.createElement(configFields[this.state.shape], {
            onChange: this.handleShapeDetailsChange,
          })}
        </fieldset>
      </form>
    );
  }
}
