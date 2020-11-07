import { Component } from "react";

export class Triangle extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, type: "EQUILATERAL" };
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  handleTypeChange(e) {
    this.setState({ type: e.target.value });
  }

  handleValueChange(e) {}

  render() {
    return (
      <>
        <label>
          Type:
          {/* number input type with default value*/}
          <select data-type-of-triangle onChange={this.handleTypeChange}>
            <option value="EQUILATERAL">equilateral</option>
            <option value="ISOSCELES">isosceles</option>
            <option value="SCALENE">scalene</option>
          </select>
        </label>
        <label>
          Side A:
          {/* number input type with default value*/}
          <input
            type="number"
            data-side-a
            onChange={this.handleValueChange}
            defaultValue="50"
          />
        </label>
        {/* Display this input only for scalene and isosceles triangles. We dont need it for equilateral*/}
        {this.state.type !== "EQUILATERAL" && (
          <label>
            Side B:
            <input
              type="number"
              data-side-b
              onChange={this.handleValueChange}
              value="50"
            />
          </label>
        )}
        {/* Display this input only for scalene triangle. We dont need it for equilateral and isosceles */}
        {this.state.type === "SCALENE" && (
          <label>
            Side C:
            <input
              type="number"
              data-side-c
              onChange={this.handleValueChange}
              defaultValue="50"
            />
          </label>
        )}
      </>
    );
  }
}
