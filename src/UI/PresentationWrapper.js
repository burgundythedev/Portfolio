import React from "react";
import "./PresentationWrapper.scss";

const PresentationWrapper = (props) => {
  return <div className="p-wrapper">{props.children}</div>;
};

export default PresentationWrapper;
