export const DEFAULT_VALUES = {
  xDiagonal: 100,
  yDiagonal: 50,
  tipAngle: 90,
};

export const Kite = (props) => (
  <>
    <label>
      X Axis Diagonal:
      {/* number input type with default value*/}
      <input
        type="number"
        name="xDiagonal"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.xDiagonal}
      />
    </label>
    <label>
      Y Axis Diagonal:
      {/* number input type with default value*/}
      <input
        type="number"
        name="yDiagonal"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.yDiagonal}
      />
    </label>
    <label>
      Tip angle:
      {/* number input type with default value and a max and min angle values*/}
      <input
        type="number"
        name="tipAngle"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.tipAngle}
        max="179"
        min="1"
      />
    </label>
  </>
);

function getPoints(data) {
  const { cx, cy, xDiagonal, yDiagonal, tipAngle } = data;
  const angleInRadians = (tipAngle * Math.PI) / 180;
  const alpha = angleInRadians / 2;
  return {
    x1: cx - 0.5 * xDiagonal,
    y1: cy,
    x2: (0.5 * yDiagonal) / Math.tan(alpha),
    y2: -0.5 * yDiagonal,
    x3: xDiagonal - yDiagonal / Math.tan(alpha),
    y3: 0.5 * yDiagonal,
    x4: -(xDiagonal - yDiagonal / Math.tan(alpha)),
    y4: 0.5 * yDiagonal,
  };
}

export function getD(data) {
  const { x1, y1, x2, y2, x3, y3, x4, y4 } = getPoints(data);
  const d = `M${x1} ${y1} l${x2} ${y2} l${x3} ${y3} l${x4} ${y4}z`;

  return d;
}

const kite = { Kite, DEFAULT_VALUES, getD };

export default kite;
