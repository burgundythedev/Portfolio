import React from "react";
import "./WrapperBack.scss";

const WrapperBack = (props) => {
  return <div className="back-wrapper">{props.children}</div>;
};

export default WrapperBack;
