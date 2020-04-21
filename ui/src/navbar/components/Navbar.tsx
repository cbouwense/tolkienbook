import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const Navbar = () => {
  return ( 
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={12} sm={6} md={2}>
            <Button color="inherit">
              <Typography variant="h6">
                Profile
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Button color="inherit">
              <Typography variant="h6">
                Allies
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Button color="inherit">
              <Typography variant="h6">
                Enemies
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={false} md={5}></Grid>
          <Grid item xs={12} sm={6} md={1}>
            <Button color="inherit">
              <Typography variant="h6">
                Login
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}