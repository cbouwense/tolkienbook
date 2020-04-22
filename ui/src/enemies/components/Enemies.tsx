import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { UserCard } from "../../user/components/UserCard";

const useStyles = makeStyles(() => ({
  root: {
    "display": "flex",
    "flex-direction": "column",
    "flex-grow": "1"
  }
}));

export const Enemies = () => {
  const classes = useStyles();
  console.log("in enemeis render")
  return (
    <div className={classes.root}>
      <Typography variant="h1">Enemies</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <UserCard 
            avatarSrc="https://i2.wp.com/www.tor.com/wp-content/uploads/2018/09/Morgoth.jpg?fit=400%2C+9999&crop=0%2C0%2C100%2C282px&ssl=1"
            name="Morgoth"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <UserCard
            avatarSrc="https://vignette.wikia.nocookie.net/lotr/images/9/90/Sauron-2.jpg/revision/latest/top-crop/width/360/height/450?cb=20110508182634"
            name="Sauron"
          />
        </Grid>
      </Grid>
    </div>
  )
}