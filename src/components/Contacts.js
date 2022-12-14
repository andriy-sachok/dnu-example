import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

// import classes from "./Contacts.module.css";

const buttonStyles = { fontSize: "60px" };

const Contacts = () => {
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      spacing={4}
      alignItems="center"
      justifyContent="center"
      margin="2rem"
      marginTop="0"
      // backgroundColor="#fff"
    >
      <Tooltip title="Facebook">
        <IconButton aria-label="facebook" onClick={() => navigate("facebook")}>
          <FacebookIcon sx={buttonStyles} />
        </IconButton>
      </Tooltip>

      <Tooltip title="YouTube">
        <IconButton aria-label="youtube" onClick={() => navigate("youtube")}>
          <YouTubeIcon sx={buttonStyles} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Instagram">
        <IconButton
          aria-label="instagram"
          onClick={() => navigate("instagram")}
        >
          <InstagramIcon sx={buttonStyles} />
        </IconButton>
      </Tooltip>

      <Tooltip title="GitHub">
        <IconButton aria-label="github" onClick={() => navigate("github")}>
          <GitHubIcon sx={buttonStyles} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default Contacts;
