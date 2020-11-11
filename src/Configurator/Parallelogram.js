export const DEFAULT_VALUES = { sideA: 50, sideB: 20, baseAngle: 45 };

export const Parallelogram = (props) => (
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
  const { cx, cy, sideA, sideB, baseAngle } = data;
  // get third points down
  // used Math.abs to convert negative values to positive before using (an edge case)
  const { x, y } = polarToCartesian(sideB, Math.abs(baseAngle));
  const d = `M ${cx - 0.5 * sideA}, ${cy + 0.5 * sideB}
   h${sideA} l${x} ${-y} h-${sideA}z`;

  return d;
}

const parallelogram = { Parallelogram, DEFAULT_VALUES, getD };

export default parallelogram;
