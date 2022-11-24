import React from "react";
import "./FormWrapper.scss";

const FormWrapper = (props) => {
  return <div className="form-wrapper">{props.children}</div>;
};

export default FormWrapper;
