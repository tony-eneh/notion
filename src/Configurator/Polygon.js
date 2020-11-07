export const Polygon = (props) => (
  <>
    <label>
      Number of sides:
      {/* number input type with default value*/}
      <input
        type="number"
        name="numberOfSides"
        onChange={props.onChange}
        defaultValue="5"
      />
    </label>
    <label>
      Side length:
      {/* number input type with default value*/}
      <input
        type="number"
        name="sideLength"
        onChange={props.onChange}
        defaultValue="50"
      />
    </label>
  </>
);
