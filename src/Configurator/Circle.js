export const DEFAULT_VALUES = { radius: 50 };

export const Circle = (props) => (
  <>
    <label>
      Radius:
      {/* number input type with default value of 50*/}
      <input
        type="number"
        name="radius"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.radius}
      />
    </label>
  </>
);
