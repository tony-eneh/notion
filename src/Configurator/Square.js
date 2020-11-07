export const Square = (props) => (
  <>
    <label>
      Side:
      {/* number input type with default value of 50*/}
      <input
        type="number"
        name="side"
        onChange={props.onChange}
        defaultValue="50"
      />
    </label>
  </>
);
