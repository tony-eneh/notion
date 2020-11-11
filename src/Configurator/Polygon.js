export const DEFAULT_VALUES = { numberOfSides: 6, radius: 50 };

export const Polygon = (props) => (
  <>
    <label>
      Number of sides:
      {/* number input type with default value*/}
      <input
        type="number"
        name="numberOfSides"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.numberOfSides}
      />
    </label>
    <label>
      Radius:
      {/* number input type with default value*/}
      <input
        type="number"
        name="radius"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.radius}
      />
    </label>
  </>
);

function polarToCartesian(centerX, centerY, radius, angle) {
  // vertically center the starting point. For aesthetics only
  angle = angle - Math.PI / 2;
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
  };
}

export function getD(data) {
  const { cx, cy, numberOfSides, radius } = data;
  console.log("data inside polygon's getD", data);
  const increment = (2 * Math.PI) / numberOfSides;
  const d = new Array(+numberOfSides).fill("foo").map((p, i) => {
    const point = polarToCartesian(cx, cy, radius, increment * i);
    return `${point.x},${point.y}`;
  });
  return `M${d}Z`;
}

export const polygon = { Polygon, DEFAULT_VALUES, getD };

export default polygon;
