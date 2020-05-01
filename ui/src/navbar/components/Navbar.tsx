import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { AppState } from "../../store";
import { User } from "../../user/model";

const useStyles = makeStyles(() => ({
  link: {
    "color": "white"
  }
}))

export interface NavbarProps {
  user?: User;
}

const ConnectedNavbar = (props: NavbarProps) => {
  const classes = useStyles();

  return ( 
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={12} sm={6} md={2}>
            <Link className={classes.link} to={`/user/${props.user?.username}`}>
              <Button color="inherit">
                <Typography variant="h6">
                  Profile
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Link className={classes.link} to="/allies">
              <Button color="inherit">
                <Typography variant="h6">
                  Allies
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Link className={classes.link} to="/enemies">
              <Button color="inherit">
                <Typography variant="h6">
                  Enemies
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={false} md={6}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state: AppState) => ({
  user: state.user.user
});

export const Navbar = connect(mapStateToProps)(ConnectedNavbar);