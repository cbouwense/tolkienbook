import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Posts } from "./Posts";
import { ProfileCard } from "./ProfileCard";

const useStyles = makeStyles(() => ({
  root: {
    "display": "flex",
    "align-items": "flex-start"
  }
}));

// TODO: Fix the right margin for the posts
export const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProfileCard />
      <Posts />
    </div>
  );
}