import React from 'react';

import NewsItem from './NewsItem';

import classes from './NewsList.module.css';

const NewsList = () => {
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>News</h1>
      <div className={classes.news}>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </div>
  );
};

export default NewsList;
