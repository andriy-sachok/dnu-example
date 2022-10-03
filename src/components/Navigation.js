import React from 'react';

import { Button } from '@mui/material';

import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={classes.navbar}>
      <Button sx={{ color: '#2C5F2D', marginLeft: '1rem' }}>
        Past and present
      </Button>
      <Button sx={{ color: '#2C5F2D', marginLeft: '1rem' }}>Education</Button>
      <Button sx={{ color: '#2C5F2D', marginLeft: '1rem' }}>Structure</Button>
      <Button sx={{ color: '#2C5F2D', marginLeft: '1rem' }}>Science</Button>
      <Button sx={{ color: '#2C5F2D', marginLeft: '1rem' }}>
        International cooperation
      </Button>
      <Button sx={{ color: '#2C5F2D', marginLeft: '1rem' }}>
        ROAD MAP for foreign students
      </Button>
      <Button sx={{ color: '#2C5F2D', marginLeft: '1rem' }}>
        DNU's 100th Anniversary
      </Button>
    </div>
  );
};

export default Navigation;
