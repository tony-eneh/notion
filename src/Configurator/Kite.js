export const DEFAULT_VALUES = {
  frontSideLength: 20,
  backSideLength: 50,
  tipAngle: 90,
};

export const Kite = (props) => (
  <>
    <label>
      Front side length:
      {/* number input type with default value*/}
      <input
        type="number"
        name="frontSideLength"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.frontSideLength}
      />
    </label>
    <label>
      Back side length:
      {/* number input type with default value*/}
      <input
        type="number"
        name="backSideLength"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.backSideLength}
      />
    </label>
    <label>
      Tip angle:
      {/* number input type with default value and a max and min angle values*/}
      <input
        type="number"
        name="tipAngle"
        onChange={props.onChange}
        defaultValue={DEFAULT_VALUES.tipAngle}
        max="179"
        min="1"
      />
    </label>
  </>
);
