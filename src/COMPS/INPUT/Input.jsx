import React from "react";

export default function Input(props) {
  return (
    <label style={props.labelStyle} htmlFor={props.name}>
      <input
        style={props.inputStyle}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={true}
      />
      <span className="floating-placeholder" style={props.placeholderStyle}>
        {props.name}
      </span>
    </label>
  );
}
