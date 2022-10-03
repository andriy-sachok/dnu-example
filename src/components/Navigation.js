import React from 'react';

import { Button } from '@mui/material';

import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={classes.navbar}>
      <Button sx={{ color: 'white' }}>Історія і сьогодення</Button>
      <Button sx={{ color: 'white' }}>Освітня діяльність</Button>
      <Button sx={{ color: 'white' }}>Наука і дослідження</Button>
      <Button sx={{ color: 'white' }}>Міжнародна діяльність</Button>
      <Button sx={{ color: 'white' }}>Студенту</Button>
      <Button sx={{ color: 'white' }}>Вступникові</Button>
      <Button sx={{ color: 'white' }}>Новини/Медіа</Button>
    </div>
  );
};

export default Navigation;
