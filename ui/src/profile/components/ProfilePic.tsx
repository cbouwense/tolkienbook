import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
  card: {
    height: "400px",
    width: "400px",
    "box-shadow": "10px 10px 20px #999999"
  },
  media: {
    height: "100%"
  }
}));

export const ProfilePic = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia 
        className={classes.media}
        image="https://66.media.tumblr.com/9c0f217919b12c3b378ba878a4e370b1/tumblr_o7sgjyR0fP1s7x9qwo2_500.jpg" 
      />
    </Card>
  );
}