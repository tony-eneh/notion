export const DEFAULT_VALUES = {
  sideA: 50,
  sideB: 30,
  height: 20,
  baseAngle: 45,
};

export const Trapezium = (props) => (
  <>
    <label>
      Side A:
      {/* number input type with default value*/}
      <input
        type="number"
        name="sideA"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.sideA}
      />
    </label>
    <label>
      Side B:
      {/* number input type with default value*/}
      <input
        type="number"
        name="sideB"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.sideB}
      />
    </label>
    <label>
      Height:
      {/* number input type with default value*/}
      <input
        type="number"
        name="height"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.height}
      />
    </label>
    <label>
      Base angle:
      {/* number input type with default value and a max and min angle values*/}
      <input
        type="number"
        name="baseAngle"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.baseAngle}
        max="90"
        min="1"
      />
    </label>
  </>
);

function polarToCartesian(height, angleInDegrees) {
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  return {
    x: height / Math.tan(angleInRadians),
    y: height,
  };
}

export function getD(data) {
  const { cx, cy, sideA, sideB, height, baseAngle } = data;
  const { x, y } = polarToCartesian(height, baseAngle);
  const d = `M ${cx + 0.5 * sideA}, ${cy + 0.5 * height}
   h-${sideA} l${x} ${-y} h${sideB}z`;

  return d;
}

const trapezium = { Trapezium, DEFAULT_VALUES, getD };

export default trapezium;
