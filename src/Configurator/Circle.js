export const DEFAULT_VALUES = { radius: 50 };

export const Circle = (props) => (
  <>
    <label>
      Radius:
      {/* number input type with default value of 50*/}
      <input
        type="number"
        name="radius"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.radius}
      />
    </label>
  </>
);

// get the equivalent d attribute to construct a circle using path element
export function getD(data) {
  const { cx, cy, radius } = data;
  const d = `M ${cx - radius}, ${cy}
a ${radius},${radius} 0 1,1 ${radius * 2},0
a ${radius},${radius} 0 1,1 -${radius * 2},0`;

  return d;
}

const circle = { Circle, DEFAULT_VALUES, getD };

export default circle;
