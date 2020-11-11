import { Component } from "react";

export const DEFAULT_VALUES = {
  type: "EQUILATERAL",
  sideA: 80,
  sideB: 60,
  sideC: 40,
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

// this function is necessary for isosceles and scalene triangles only
function getAngles({ sideA, sideB, sideC, type }) {
  if (type === "ISOSCELES") {
    sideC = sideB;
  }
  // given sides a,b,c of a triangle you can find the corresponding angles A,B,C in radians thus:
  // using cosine rule
  const angleC = Math.acos(
    (Math.pow(sideA, 2) + Math.pow(sideB, 2) - Math.pow(sideC, 2)) /
      (2 * sideA * sideB)
  );

  // using sine rule
  const angleB = Math.asin((sideB * Math.sin(angleC)) / sideC);
  // using sum of angles in a triangle
  const angleA = 180 - angleB - angleC;
  return { angleA, angleB, angleC };
}

function getPoints(data) {
  const { cx, cy, type, sideA, sideB, sideC } = data;
  const { angleA, angleB, angleC } = getAngles(data);

  switch (type) {
    case "SCALENE":
      return {
        x1: cx - 0.5 * sideA,
        y1: cy + 0.5 * sideA * Math.tan(Math.PI / 6),
        x2: sideB * Math.cos(angleC),
        y2: -(sideB * Math.sin(angleC)),
        x3: sideC * Math.cos(angleB),
        y3: sideC * Math.sin(angleB),
      };
    case "ISOSCELES":
      return {
        x1: cx - 0.5 * sideA,
        y1: cy + 0.5 * sideA * Math.tan(Math.PI / 6),
        x2: sideB * Math.cos(angleC),
        y2: -(sideB * Math.sin(angleC)),
        x3: sideB * Math.cos(angleC),
        y3: sideB * Math.sin(angleC),
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
