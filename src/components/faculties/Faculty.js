import React from 'react';

import classes from './Faculty.module.css';

const Faculty = (props) => {
  return <li className={classes.faculty}>{props.title}</li>;
};

export default Faculty;
