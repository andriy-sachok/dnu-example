import React, { useState, useEffect } from "react";

import Loading from "../UI/Loading";
import ErrorComponent from "../UI/ErrorComponent";
import NewsItem from "./NewsItem";

import classes from "./NewsList.module.css";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://dnu-news-default-rtdb.europe-west1.firebasedatabase.app/news.json"
      );

      if (!response.ok) {
        setIsLoading(false);
        throw new Error(`Error! Can't get data from database.`);
      }

      const data = await response.json();

      setIsLoading(false);

      setNews(Object.entries(data));
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  let content = (
    <div className={classes.newsContainer}>
      {news
        .sort((a, b) => a[1].title.localeCompare(b[1].title))
        .map((el) => (
          <NewsItem key={el[1].title} title={el[1].title} text={el[1].text} />
        ))}
    </div>
  );

  return (
    <div className={classes.main}>
      <h1 className={classes.title}>News | All news</h1>
      <div>
        {error && <ErrorComponent text={error} />}
        {isLoading ? <Loading /> : content}
      </div>
    </div>
  );
};

export default NewsList;
