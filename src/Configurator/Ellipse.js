export const DEFAULT_VALUES = { radiusX: 50, radiusY: 25 };

export const Ellipse = (props) => (
  <>
    <label>
      radiusX:
      {/* number input type with default value*/}
      <input
        type="number"
        name="radiusX"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.radiusX}
      />
    </label>
    <label>
      radiusY:
      {/* number input type with default value*/}
      <input
        type="number"
        name="radiusY"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.radiusY}
      />
    </label>
  </>
);

// get the equivalent d attribute to construct an element using path element
export function getD(data) {
  const { cx, cy, radiusX, radiusY } = data;
  const d = `M ${cx - radiusX}, ${cy}
a ${radiusX},${radiusY} 0 1,1 ${radiusX * 2},0
a ${radiusX},${radiusY} 0 1,1 -${radiusX * 2},0`;

  return d;
}

const ellipse = { Ellipse, DEFAULT_VALUES, getD };
export default ellipse;
