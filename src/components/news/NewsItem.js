import React from 'react';

import classes from './NewsItem.module.css';

const NewsItem = (props) => {
  return (
    <div className={classes.main}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default NewsItem;
