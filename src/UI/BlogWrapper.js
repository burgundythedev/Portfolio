import React from "react";
import "./BlogWrapper.scss";

const BlogWrapper = (props) => {
  return <div className="form-wrapper">{props.children}</div>;
};

export default BlogWrapper;
