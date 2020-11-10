export const DEFAULT_VALUES = { side: 50 };

export const Square = (props) => (
  <>
    <label>
      Side:
      {/* number input type with default value of 50*/}
      <input
        type="number"
        name="side"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.side}
      />
    </label>
  </>
);

export function getD(data) {
  const { cx, cy, side } = data;
  const d = `M ${cx - 0.5 * side}, ${cy - 0.5 * side}
   h${side} v${side} h-${side}z`;

  return d;
}

const square = { Square, DEFAULT_VALUES, getD };

export default square;
