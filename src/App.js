import React from 'react';

import Navigation from './components/Navigation';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <Navigation />
    </div>
  );
}

export default App;
