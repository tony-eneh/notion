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

export class Configurator extends Component {
  // shape type is an enum which can hold one of the following values
  // Circle, Ellipse, Square, Rectangle, Triangle, Rhombus, Parallelogram, Trapezium, Polygon, Kite or Star
  // configInfo is an object which has the above shapes as properties whose
  state = {
    shape: "Circle",
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
    },
  };
  render() {
    return (
      <form className="configurator">
        <select
          type="select"
          value={this.state.shape}
          onChange={(e) => this.setState({ shape: e.target.value })}
        >
          {Object.keys(this.state.configInfo).map((shape) => (
            <option>{shape}</option>
          ))}{" "}
        </select>
        {/* render the inputs peculiar to the current shape inside the fieldset below */}
        <fieldset>
          {React.createElement(this.state.configInfo[this.state.shape])}
        </fieldset>
      </form>
    );
  }
}
