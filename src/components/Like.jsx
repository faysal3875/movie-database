import React, { Component } from "react";
const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.Liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
