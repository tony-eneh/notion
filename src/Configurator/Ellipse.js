export const Ellipse = (props) => (
  <>
    <label>
      radiusX:
      {/* number input type with default value*/}
      <input
        type="number"
        name="radiusX"
        onChange={props.onChange}
        defaultValue="50"
      />
    </label>
    <label>
      radiusY:
      {/* number input type with default value*/}
      <input
        type="number"
        name="radiusY"
        onChange={props.onChange}
        defaultValue="25"
      />
    </label>
  </>
);
