import React from "react";

import classes from "./Error.module.css";

const ErrorComponent = (props) => {
  return <h2 className={classes.error}>{props.text}</h2>;
};

export default ErrorComponent;
