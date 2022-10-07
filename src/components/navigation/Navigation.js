import React from "react";

import { Button } from "@mui/material";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.navbar}>
      <img src="img/gerb_small.png" alt="logo" />
      <Button
        sx={{ color: "#2C5F2D", marginLeft: "1rem", textTransform: "none" }}
      >
        Past and present
      </Button>
      <Button
        sx={{ color: "#2C5F2D", marginLeft: "1rem", textTransform: "none" }}
      >
        Education
      </Button>
      <Button
        sx={{ color: "#2C5F2D", marginLeft: "1rem", textTransform: "none" }}
      >
        Structure
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
