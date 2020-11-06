export const Kite = (props) => (
  <>
    <label>
      Front side length:
      {/* number input type with default value*/}
      <input
        type="number"
        data-front-side-length
        onChange={props.onChange}
        defaultValue="20"
      />
    </label>
    <label>
      Back side length:
      {/* number input type with default value*/}
      <input
        type="number"
        data-back-side-length
        onChange={props.onChange}
        defaultValue="50"
      />
    </label>
    <label>
      Tip angle:
      {/* number input type with default value and a max and min angle values*/}
      <input
        type="number"
        data-tip-angle
        onChange={props.onChange}
        defaultValue="90"
        max="179"
        min="1"
      />
    </label>
  </>
);
