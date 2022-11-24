import React from "react";
import "./TimelineWrapper.scss";

const TimelineWrapper = (props) => {
  return <div className="timeline-wrapper">{props.children}</div>;
};

export default TimelineWrapper;
