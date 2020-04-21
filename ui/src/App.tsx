import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

import { Navbar } from "./navbar/components/Navbar";
import { Profile } from "./profile/components/Profile";

const useStyles = makeStyles(() => ({
  "root": {
    "padding": "50px"
  } 
}));

export const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <Profile />
      </div>
    </div>
  );
}

export default App;
