export const DEFAULT_VALUES = { side: 50, baseAngle: 45 };

export const Rhombus = (props) => (
  <>
    <label>
      Side:
      {/* number input type with default value*/}
      <input
        type="number"
        name="side"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.side}
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
        max="179"
        min="1"
      />
    </label>
  </>
);

function polarToCartesian(side, angleInDegrees) {
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  return {
    x: side * Math.cos(angleInRadians),
    y: side * Math.sin(angleInRadians),
  };
}

export function getD(data) {
  const { cx, cy, side, baseAngle } = data;
  // get third points down
  // used Math.abs to convert negative values to positive before using (an edge case)
  const { x, y } = polarToCartesian(side, Math.abs(baseAngle));
  const d = `M ${cx - 0.5 * side}, ${cy + 0.5 * side}
   h${side} l${x} ${-y} h-${side}z`;

  return d;
}

const rhombus = { Rhombus, DEFAULT_VALUES, getD };

export default rhombus;
