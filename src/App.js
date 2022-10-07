import React, { Fragment } from "react";

import Navigation from "./components/navigation/Navigation";
import NewsList from "./components/news/NewsList";
import Faculties from "./components/faculties/Faculties";

import classes from "./App.module.css";

function App() {
  return (
    <Fragment>
      <Navigation />
      <div className={classes.main}>
        <NewsList />
        <Faculties />
      </div>
    </Fragment>
  );
}

export default App;
