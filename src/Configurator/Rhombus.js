export const DEFAULT_VALUES = { side: 50, baseAngle: 45 };

export const Rhombus = (props) => (
  <>
    <label>
      Side:
      {/* number input type with default value*/}
      <input
        type="number"
        name="side"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.side}
      />
    </label>
    <label>
      Base angle:
      {/* number input type with default value and a max and min angle values*/}
      <input
        type="number"
        name="baseAngle"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.baseAngle}
        max="179"
        min="1"
      />
    </label>
  </>
);
