import React from "react";

import blogLogo from "../../IMAGES/logo.png";

export default function Logo(props) {
  return (
    <div style={{ ...props.wrapperStyle, position: "absolute" }}>
      <img
        style={{ ...props.imgStyle, width: "100%" }}
        src={blogLogo}
        alt="logo"
      />
    </div>
  );
}
