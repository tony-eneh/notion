export const circle = (props) => (
  <>
    <label>
      Radius:
      {/* number input type with default value of 50*/}
      <input
        type="number"
        data-radius
        onChange={props.onChange}
        defaultValue="50"
      />
    </label>
  </>
);
