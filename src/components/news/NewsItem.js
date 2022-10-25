import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

// import classes from "./NewsItem.module.css";

const NewsItem = (props) => {
  const navigate = useNavigate();
  const cardClickHandler = () => {
    navigate("expanded-article-page");
  };

  return (
    <Card
      sx={{
        width: "350px",
        display: "flex",
        flexDirection: "column",
        marginTop: "2rem",
      }}
    >
      <CardActionArea onClick={cardClickHandler}>
        <CardMedia
          component="img"
          sx={{
            // 16:9
            width: "100%",
            height: "250px",
          }}
          image="https://source.unsplash.com/random"
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsItem;
