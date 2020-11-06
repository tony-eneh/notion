export const Ellipse = (props) => (
  <>
    <label>
      radiusX:
      {/* number input type with default value*/}
      <input
        type="number"
        data-radius-x
        onChange={props.onChange}
        defaultValue="50"
      />
    </label>
    <label>
      radiusY:
      {/* number input type with default value*/}
      <input
        type="number"
        data-radius-y
        onChange={props.onChange}
        defaultValue="25"
      />
    </label>
  </>
);
