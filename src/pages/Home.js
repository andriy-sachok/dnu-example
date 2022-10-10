import React from "react";
import NewsList from "../components/news/NewsList";
import Faculties from "../components/faculties/Faculties";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.main}>
      <NewsList />
      <Faculties />
    </div>
  );
};

export default Home;
