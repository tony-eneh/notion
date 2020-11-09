import { Component } from "react";

export const DEFAULT_VALUES = {
  type: "EQUILATERAL",
  sideA: 50,
  sideB: 30,
  sideC: 20,
};
export class Triangle extends Component {
  constructor(props) {
    super(props);
    this.state = { type: DEFAULT_VALUES.type };
    this.handleChange = this.props.onChange.bind(this);
    this.setType = this.setType.bind(this);

    // set initial type
    // the weird embedding is because handleChange is expecting a DOM object e.
    // from which it can read e.target.value
    this.handleChange({ target: { name: "type", value: DEFAULT_VALUES.type } });
  }

  setType(e) {
    this.setState({ type: e.target.value });
    this.handleChange(e);
  }

  render() {
    return (
      <>
        <label>
          Type:
          {/* number input type with default value*/}
          <select name="type" onChange={this.setType}>
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
            name="sideA"
            onChange={this.handleChange}
            defaultValue={DEFAULT_VALUES.sideA}
          />
        </label>
        {/* Display this input only for scalene and isosceles triangles. We dont need it for equilateral*/}
        {this.state.type !== "EQUILATERAL" && (
          <label>
            Side B:
            <input
              type="number"
              name="sideB"
              onChange={this.handleChange}
              defaultValue={DEFAULT_VALUES.sideB}
            />
          </label>
        )}
        {/* Display this input only for scalene triangle. We dont need it for equilateral and isosceles */}
        {this.state.type === "SCALENE" && (
          <label>
            Side C:
            <input
              type="number"
              name="sideC"
              onChange={this.handleChange}
              defaultValue={DEFAULT_VALUES.sideC}
            />
          </label>
        )}
      </>
    );
  }
}
