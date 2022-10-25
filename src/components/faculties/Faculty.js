import React from "react";
import { Button } from "@mui/material";

import classes from "./Faculty.module.css";

const Faculty = (props) => {
  return (
    <li className={classes.faculty}>
      <Button
        onClick={() => alert(`Redirect to "${props.title}" page.`)}
        sx={{
          color: "#2C5F2D",
          textAlign: "start",
          margin: "0",
          padding: "0",
          paddingLeft: "1rem",
          textTransform: "none",
        }}
      >
        {props.title}
      </Button>
    </li>
  );
};

export default Faculty;
