export const Rectangle = (props) => (
  <>
    <label>
      Length:
      {/* number input type with default value*/}
      <input
        type="number"
        name="Length"
        onChange={props.onChange}
        defaultValue="50"
      />
    </label>
    <label>
      Width:
      {/* number input type with default value*/}
      <input
        type="number"
        name="width"
        onChange={props.onChange}
        defaultValue="20"
      />
    </label>
  </>
);
