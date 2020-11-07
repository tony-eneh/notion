export const Circle = (props) => (
  <>
    <label>
      Radius:
      {/* number input type with default value of 50*/}
      <input
        type="number"
        name="radius"
        onChange={props.onChange}
        defaultValue="50"
      />
    </label>
  </>
);
