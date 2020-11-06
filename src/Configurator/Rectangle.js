export const Rectangle = (props) => (
  <>
    <label>
      Length:
      {/* number input type with default value*/}
      <input
        type="number"
        data-length
        onChange={props.onChange}
        defaultValue="50"
      />
    </label>
    <label>
      Width:
      {/* number input type with default value*/}
      <input
        type="number"
        data-width
        onChange={props.onChange}
        defaultValue="20"
      />
    </label>
  </>
);
