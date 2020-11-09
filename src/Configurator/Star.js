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
