import React from "react";

export default function Footer() {
  const footerStyle = {
    position: "absolute",
    right: "8px",
    bottom: "4px",
    fontSize: "1rem",
    opacity: ".125",
    vidibility: "visible",
    margin: "0",
  };

  return (
    <p className="footer" style={footerStyle}>
      Blog List Application @ImmanuelToby
    </p>
  );
}
