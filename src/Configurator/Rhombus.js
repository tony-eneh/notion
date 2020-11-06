export const Rhombus = (props) => (
  <>
    <label>
      Side:
      {/* number input type with default value*/}
      <input
        type="number"
        data-side
        onChange={props.onChange}
        defaultValue="50"
      />
    </label>
    <label>
      Base angle:
      {/* number input type with default value and a max and min angle values*/}
      <input
        type="number"
        data-base-angle
        onChange={props.onChange}
        defaultValue="45"
        max="179"
        min="1"
      />
    </label>
  </>
);
