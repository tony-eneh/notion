export const DEFAULT_VALUES = { length: 50, width: 20 };

export const Rectangle = (props) => (
  <>
    <label>
      Length:
      {/* number input type with default value*/}
      <input
        type="number"
        name="length"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.length}
      />
    </label>
    <label>
      Width:
      {/* number input type with default value*/}
      <input
        type="number"
        name="width"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.width}
      />
    </label>
  </>
);

export function getD(data) {
  const { cx, cy, length, width } = data;
  const d = `M ${cx - 0.5 * length}, ${cy - 0.5 * width}
   h${length} v${width} h-${length}z`;

  return d;
}

const rectangle = { Rectangle, DEFAULT_VALUES, getD };

export default rectangle;
