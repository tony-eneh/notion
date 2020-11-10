import React, { Component } from "react";
import "./configurator.css";
import { configFields } from "./Shapes";

// put all shapes in an for easier rendering of the UI dynamicall

export const Configurator = (props) => {
  return (
    <form className="configurator">
      <select
        type="select"
        value={props.data.shape}
        onChange={(e) => props.setShape(e.target.value)}
      >
        {Object.keys(configFields).map((shape, id) => (
          <option key={id}>{shape}</option>
        ))}
      </select>
      {/* render the inputs peculiar to the current shape inside the fieldset below */}
      {/* pass in a change handler for any change in inputs */}
      <fieldset>
        {React.createElement(configFields[props.data.shape], {
          onChange: (e) => {
            // create a detail object which identifies what changed and the new value
            // use the callback from parent to register the change
            const detail = { [e.target.name]: +e.target.value };
            props.setDetails(detail);
          },
        })}
      </fieldset>
    </form>
  );
};
