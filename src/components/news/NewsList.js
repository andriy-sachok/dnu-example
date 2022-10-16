import React from "react";
import LoremIpsum from "react-lorem-ipsum";

import NewsItem from "./NewsItem";

import classes from "./NewsList.module.css";

const DUMMY_NEWS = [
  {
    title: "Article 1",
    text: <LoremIpsum />,
  },
  {
    title: "Article 2",
    text: <LoremIpsum />,
  },
  {
    title: "Article 3",
    text: <LoremIpsum />,
  },
  {
    title: "Article 4",
    text: <LoremIpsum />,
  },
  {
    title: "Article 5",
    text: <LoremIpsum />,
  },
  {
    title: "Article 6",
    text: <LoremIpsum />,
  },
];

const NewsList = () => {
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>News | All news</h1>
      <div>
        <div className={classes.newsContainer}>
          {DUMMY_NEWS.map((el) => (
            <NewsItem key={el.title} title={el.title} text={el.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
