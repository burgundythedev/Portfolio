import React from "react";
import "./AboutWrapper.scss";

export const AboutWrapper = (props) => {
  return <div className="about-wrapper">{props.children}</div>;
};

export default AboutWrapper;
