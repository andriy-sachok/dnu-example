import React from "react";
import { NavLink } from "react-router-dom";

import { Button } from "@mui/material";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.navbar}>
      <img src="img/gerb_small.png" alt="logo" />
      <Button
        sx={{ color: "#2C5F2D", marginLeft: "1rem", textTransform: "none" }}
      >
        <NavLink to="/past-and-present">Past and present</NavLink>
      </Button>
      <Button
        sx={{ color: "#2C5F2D", marginLeft: "1rem", textTransform: "none" }}
      >
        <NavLink to="/education">Education</NavLink>
      </Button>
      <Button
        sx={{ color: "#2C5F2D", marginLeft: "1rem", textTransform: "none" }}
      >
        <NavLink to="/structure">Structure</NavLink>
      </Button>
      <Button
        sx={{ color: "#2C5F2D", marginLeft: "1rem", textTransform: "none" }}
      >
        Science
      </Button>
      <Button
        sx={{ color: "#2C5F2D", marginLeft: "1rem", textTransform: "none" }}
      >
        International cooperation
      </Button>
      <Button
        sx={{ color: "#2C5F2D", marginLeft: "1rem", textTransform: "none" }}
      >
        ROAD MAP for foreign students
      </Button>
      <Button
        sx={{ color: "#2C5F2D", marginLeft: "1rem", textTransform: "none" }}
      >
        DNU's 100th Anniversary
      </Button>
    </div>
  );
};

export default Navigation;
