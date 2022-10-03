import React from 'react';

import Faculty from './Faculty';

import classes from './Faculties.module.css';

const Faculties = () => {
  return (
    <div className={classes.main}>
      <h2>List of Faculties</h2>
      <ul>
        <Faculty />
        <Faculty />
        <Faculty />
        <Faculty />
        <Faculty />
        <Faculty />
      </ul>
    </div>
  );
};

export default Faculties;
