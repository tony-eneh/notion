export const Polygon = (props) => (
  <>
    <label>
      Number of sides:
      {/* number input type with default value*/}
      <input
        type="number"
        data-number-of-sides
        onChange={props.onChange}
        defaultValue="5"
      />
    </label>
    <label>
      Side length:
      {/* number input type with default value*/}
      <input
        type="number"
        data-side-length
        onChange={props.onChange}
        defaultValue="50"
      />
    </label>
  </>
);
