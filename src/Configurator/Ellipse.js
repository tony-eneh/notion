export const DEFAULT_VALUES = { radiusX: 50, radiusY: 25 };

export const Ellipse = (props) => (
  <>
    <label>
      radiusX:
      {/* number input type with default value*/}
      <input
        type="number"
        name="radiusX"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.radiusX}
      />
    </label>
    <label>
      radiusY:
      {/* number input type with default value*/}
      <input
        type="number"
        name="radiusY"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.radiusY}
      />
    </label>
  </>
);
