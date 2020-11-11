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

function getPoints(data) {
  const { cx, cy, type, sideA, sideB, sideC } = data;

  switch (type) {
    case "SCALENE":
      return {
        x1: "",
        y1: "",
        x2: "",
        y2: "",
        x3: "",
        y3: "",
      };
    case "ISOSCELES":
      return {
        x1: "",
        y1: "",
        x2: "",
        y2: "",
        x3: "",
        y3: "",
      };
    default:
      // case EQUILATERAL
      return {
        x1: cx - 0.5 * sideA,
        y1: cy + 0.5 * sideA * Math.tan(Math.PI / 6) /* 30degs */,
        x2: 0.5 * sideA,
        y2: -0.5 * sideA * Math.tan(Math.PI / 3) /* 60degs */,
        x3: 0.5 * sideA,
        y3: 0.5 * sideA * Math.tan(Math.PI / 3) /* 60degs */,
      };
  }
}

export function getD(data) {
  const { x1, y1, x2, y2, x3, y3 } = getPoints(data);
  const d = `M${x1} ${y1} l${x2} ${y2} l${x3} ${y3}z`;

  return d;
}

const triangle = { Triangle, DEFAULT_VALUES, getD };

export default triangle;
