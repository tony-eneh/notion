export const Parallelogram = (props) => (
  <>
    <label>
      Side A:
      {/* number input type with default value*/}
      <input
        type="number"
        name="sideA"
        onChange={props.onChange}
        defaultValue="50"
      />
    </label>
    <label>
      Side B:
      {/* number input type with default value*/}
      <input
        type="number"
        name="sideB"
        onChange={props.onChange}
        defaultValue="20"
      />
    </label>
    <label>
      Base angle:
      {/* number input type with default value and a max and min angle values*/}
      <input
        type="number"
        name="baseAngle"
        onChange={props.onChange}
        defaultValue="45"
        max="179"
        min="1"
      />
    </label>
  </>
);
