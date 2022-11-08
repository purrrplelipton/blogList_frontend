import React from "react";
import "./Notification.css";

export default function Notification(props) {
  const { success, message } = props.errorMessage;
  const errStyle = {
    animationName: "slide-down",
    animationTimingFunction: "ease",
    animationDuration: "7s",
  };

  if (success && message) {
    return (
      <p
        className={"slide-down-message"}
        style={{
          ...errStyle,
          backgroundColor: "rgba(20,83,45,.25)",
          color: "green",
        }}
      >
        {message}
        <span
          onClick={props.slideUp}
          style={{
            position: "absolute",
            right: "8px",
            cursor: "pointer",
          }}
        >
          x
        </span>
      </p>
    );
  } else if (!success && message) {
    return (
      <p
        className={"slide-down-message"}
        style={{
          ...errStyle,
          backgroundColor: "rgba(127,29,29,.25)",
          color: "red",
        }}
      >
        {message}
      </p>
    );
  } else return null;
}
