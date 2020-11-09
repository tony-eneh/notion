export const DEFAULT_VALUES = { side: 50 };

export const Square = (props) => (
  <>
    <label>
      Side:
      {/* number input type with default value of 50*/}
      <input
        type="number"
        name="side"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.side}
      />
    </label>
  </>
);
