import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export interface ProfileDetailsProps {
  name: string;
  // TODO: make a race type
  race: string;
  birthyear: string;
}

const useStyles = makeStyles(() => ({
  root: {
    "flex-grow": "1",
    "margin-top": "25px"
  }
}))

export const ProfileDetails = (props: ProfileDetailsProps) => {
  const classes = useStyles();
  
  return (
    <Grid className={classes.root} container direction="column">
      <Grid item xs={12}>
        <Typography variant="h2">
          {props.name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">
          Race: {props.race}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">
          Birthyear: {props.birthyear}
        </Typography>
      </Grid>
    </Grid>
  );
}