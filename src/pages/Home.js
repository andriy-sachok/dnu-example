import React from "react";

import NewsList from "../components/news/NewsList";
import Faculties from "../components/faculties/Faculties";
import AnnouncementsList from "../components/announcements/AnnouncementsList";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.main}>
      <div className={classes.infoHolder}>
        <NewsList />
        <AnnouncementsList />
      </div>
      <Faculties />
    </div>
  );
};

export default Home;
