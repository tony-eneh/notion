export const DEFAULT_VALUES = { length: 50, width: 20 };

export const Rectangle = (props) => (
  <>
    <label>
      Length:
      {/* number input type with default value*/}
      <input
        type="number"
        name="length"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.length}
      />
    </label>
    <label>
      Width:
      {/* number input type with default value*/}
      <input
        type="number"
        name="width"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.width}
      />
    </label>
  </>
);
