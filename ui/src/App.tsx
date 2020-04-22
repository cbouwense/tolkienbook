import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import { Allies } from "./allies/components/Allies";
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
    <Router>
      <Navbar />
      <div className={classes.root}>
        <Switch>
          <Route path="/" exact component={Profile} />
          <Route path="/allies" exact component={Allies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
