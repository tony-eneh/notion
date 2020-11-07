export const Star = (props) => (
  <>
    <label>
      Number of points:
      {/* number input type with default value*/}
      <input
        type="number"
        name="numberOfPoints"
        onChange={props.onChange}
        defaultValue="5"
      />
    </label>
    <label>
      Outer radius:
      {/* number input type with default value*/}
      <input
        type="number"
        name="outerRadius"
        onChange={props.onChange}
        defaultValue="50"
      />
    </label>
    <label>
      Inner radius:
      {/* number input type with default value*/}
      <input
        type="number"
        name="innerRadius"
        onChange={props.onChange}
        defaultValue="20"
      />
    </label>
  </>
);
