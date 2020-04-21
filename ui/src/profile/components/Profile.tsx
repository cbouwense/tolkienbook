import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { ProfileDetails } from "./ProfileDetails";

const useStyles = makeStyles(() => ({
  card: {
    "width": "400px",
    "box-shadow": "10px 10px 20px #c9c9c9"
  },
  media: {
    "height": "400px",
    "width": "100%"
  }
}));

export const Profile = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia 
        className={classes.media}
        image="https://66.media.tumblr.com/9c0f217919b12c3b378ba878a4e370b1/tumblr_o7sgjyR0fP1s7x9qwo2_500.jpg" 
      />
      <CardContent>
        <ProfileDetails 
          name="Gil Galad"
          age={3581}
          race="elf"
          birthyear="FA 450"
        />
      </CardContent>
    </Card>
  );
}