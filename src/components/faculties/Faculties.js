import React from 'react';

import Faculty from './Faculty';

import classes from './Faculties.module.css';

const DUMMY_FACULTIES = [
  {
    title: 'Faculty of Ukrainian and Foreign Philology and Study of Arts',
  },
  {
    title: 'Faculty of Social Sciences and International Relations',
  },
  {
    title: 'Faculty of History',
  },
  {
    title: 'Faculty of Psychology and Special Education',
  },
  {
    title: 'Faculty of Applied Mathematics',
  },
  {
    title: 'Law Department',
  },
  {
    title: 'Faculty of Physics, Electronics and Computer Systems',
  },
  {
    title: 'Faculty of Economics',
  },
  {
    title: 'Faculty of Systems and Means of Mass Communication',
  },
  {
    title: 'Physical and Technical Faculty',
  },
  {
    title: 'Faculty of Mechanics and Mathematics',
  },
  {
    title: 'Faculty of Chemistry',
  },
  {
    title: 'Faculty of Biology and Ecology',
  },
  {
    title: 'Faculty of Medical Technologies of Diagnostics and Rehabilitation',
  },
];

const Faculties = () => {
  return (
    <div className={classes.main}>
      <h2 className={classes.faculties}>Faculties</h2>
      <ul className={classes.faculty}>
        {DUMMY_FACULTIES.map((fac) => (
          <Faculty key={fac.title} title={fac.title} />
        ))}
      </ul>
    </div>
  );
};

export default Faculties;
