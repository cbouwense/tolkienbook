import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import { Allies } from "./allies/components/Allies";
import { AppState } from "./store";
import { Enemies } from "./enemies/components/Enemies";
import { LandingPage } from "./landing_page/components/LandingPage";
import { Navbar } from "./navbar/components/Navbar";
import { Profile } from "./profile/components/Profile";
import { User } from "./user/model";

const useStyles = makeStyles(() => ({
  "root": {
    "padding": "50px"
  } 
}));

export interface AppProps {
  user?: User;
}

export const ConnectedApp = (props: AppProps) => {
  const classes = useStyles();

  return (
    <Router>
      <Navbar />
      <div className={classes.root}>
        <Switch>
          {!!props.user
            ? (
              <>
                <Route path="/" exact component={Profile} />
                <Route path="/allies" exact component={Allies} />
                <Route path="/enemies" exact component={Enemies} />
              </>
            )
            : (
              <Route path="/" exact component={LandingPage} />
            )
          }
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state: AppState) => {
  console.log("state: ", state);
  
  return {
    user: state.user.user
  }
};

export default connect(mapStateToProps)(ConnectedApp);
