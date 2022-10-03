import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

import classes from './NewsItem.module.css';

const NewsItem = () => {
  return (
    <div className={classes.main}>
      <h2>Title of Article</h2>
      <p>
        <LoremIpsum />
      </p>
    </div>
  );
};

export default NewsItem;
