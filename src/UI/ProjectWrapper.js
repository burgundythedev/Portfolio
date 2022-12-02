import React from "react";
import "./ProjectWrapper.scss";

const ProjectWrapper = (props) => {
  return <div className="project-wrapper">{props.children}</div>;
};

export default ProjectWrapper;
