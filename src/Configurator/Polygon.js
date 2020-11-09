export const DEFAULT_VALUES = { numberOfSides: 5, sideLength: 50 };

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
      Side length:
      {/* number input type with default value*/}
      <input
        type="number"
        name="sideLength"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.sideLength}
      />
    </label>
  </>
);
