import React, { Component } from "react";
import "./configurator.css";
import { Circle } from "./Circle";
import { Ellipse } from "./Ellipse";
import { Square } from "./Square";
import { Rectangle } from "./Rectangle";
import { Kite } from "./Kite";
import { Parallelogram } from "./Parallelogram";
import { Polygon } from "./Polygon";
import { Rhombus } from "./Rhombus";
import { Star } from "./Star";
import { Trapezium } from "./Trapezium";
import { Triangle } from "./Triangle";

export class Configurator extends Component {
  constructor(props) {
    super(props);
    this.fireConfigChange = props.onChange.bind(this);
    this.handleShapeChange = this.handleShapeChange.bind(this);
    this.handleShapeDetailsChange = this.handleShapeDetailsChange.bind(this);
  }
  // shape type is an enum which can hold one of the following values
  // Circle, Ellipse, Square, Rectangle, Triangle, Rhombus, Parallelogram, Trapezium, Polygon, Kite or Star
  // configInfo is an object which has the above shapes as properties whose
  state = {
    shape: "Circle",

    // for UI rendering
    configInfo: {
      Circle,
      Ellipse,
      Square,
      Rectangle,
      Kite,
      Parallelogram,
      Polygon,
      Rhombus,
      Star,
      Trapezium,
      Triangle,
    },

    // state objects to hold the values of the inputs
    Circle: {},
    Ellipse: {},
    Square: {},
    Rectangle: {},
    Kite: {},
    Parallelogram: {},
    Polygon: {},
    Rhombus: {},
    Star: {},
    Trapezium: {},
    Triangle: {},
  };

  handleShapeChange(e) {
    this.setState({ shape: e.target.value });
  }

  handleShapeDetailsChange(e) {
    const currentShape = this.state[this.state.shape];

    currentShape[e.target.name] = e.target.value;

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
          {Object.keys(this.state.configInfo).map((shape, id) => (
            <option key={id}>{shape}</option>
          ))}
        </select>
        {/* render the inputs peculiar to the current shape inside the fieldset below */}
        {/* pass in a change handler for any change in inputs */}
        <fieldset>
          {React.createElement(this.state.configInfo[this.state.shape], {
            onChange: this.handleShapeDetailsChange,
          })}
        </fieldset>
      </form>
    );
  }
}
