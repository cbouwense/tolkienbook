import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(() => ({
  avatar: {
    "width": "100px",
    "height": "100px"
  },
  post: {
    "box-shadow": "10px 10px 20px #c9c9c9",
    "padding": "15px",
    "width": "100%"
  }
}));

interface PostProps {
  avatarSrc: string;
  // TODO make a moment?
  date: string;
  name: string;
  text: string;
}

export const Post = (props: PostProps) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.post}>
      <Avatar className={classes.avatar} src={props.avatarSrc} />
      <p>{props.name}</p>
      <p>{props.date}</p>
      <p>{props.text}</p>
    </Card>
  );
}