import React, { useState, useEffect } from "react";

import NewsItem from "./NewsItem";

import classes from "./NewsList.module.css";

const NewsList = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const response = await fetch(
      "https://dnu-news-default-rtdb.europe-west1.firebasedatabase.app/news.json"
    );
    const data = await response.json();

    setNews(Object.entries(data));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className={classes.main}>
      <h1 className={classes.title}>News | All news</h1>
      <div>
        <div className={classes.newsContainer}>
          {news.map((el) => (
            <NewsItem key={el[1].title} title={el[1].title} text={el[1].text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
