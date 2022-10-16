import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const AnnouncementsItem = (props) => {
  const announcementClickHandler = () => {
    alert("Redirected to announcement page!");
  };
  return (
    <Card sx={{ width: "100%", margin: "1rem", marginLeft: "0" }}>
      <CardActionArea onClick={announcementClickHandler}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            // component="span"
            color="text.secondary"
            sx={{
              whiteSpace: "nowrap",
              width: "35%",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AnnouncementsItem;
