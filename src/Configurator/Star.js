export const DEFAULT_VALUES = {
  numberOfPoints: 5,
  outerRadius: 50,
  innerRadius: 20,
};

export const Star = (props) => (
  <>
    <label>
      Number of points:
      {/* number input type with default value*/}
      <input
        type="number"
        name="numberOfPoints"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.numberOfPoints}
      />
    </label>
    <label>
      Outer radius:
      {/* number input type with default value*/}
      <input
        type="number"
        name="outerRadius"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.outerRadius}
      />
    </label>
    <label>
      Inner radius:
      {/* number input type with default value*/}
      <input
        type="number"
        name="innerRadius"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.innerRadius}
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
  const { cx, cy, numberOfPoints, outerRadius, innerRadius } = data;
  console.log("data inside polygon's getD", data);
  const increment = Math.PI / numberOfPoints;
  let useOuterRadius = true;
  const d = new Array(2 * numberOfPoints).fill("foo").map((p, i) => {
    const radius = useOuterRadius ? outerRadius : innerRadius;
    const point = polarToCartesian(cx, cy, radius, increment * i);
    // toggle useOuterRadius so you can be using them outer and inner radii alternatively
    useOuterRadius = !useOuterRadius;
    return `${point.x},${point.y}`;
  });
  return `M${d}Z`;
}

export const star = { Star, DEFAULT_VALUES, getD };

export default star;
