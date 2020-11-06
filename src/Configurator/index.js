import React, { Component } from "react";
import "./configurator.css";
import { circle } from "./circle";
import { ellipse } from "./ellipse";

export class Configurator extends Component {
  // shape type is an enum which can hold one of the following values
  // circle, ellipse, square, rectangle, triangle, rhombus, parallelogram, trapezium, polygon, kite or star
  // configInfo is an object which has the above shapes as properties whose
  state = { shape: "circle", configInfo: { circle, ellipse } };
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
