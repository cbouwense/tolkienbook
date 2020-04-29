import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  avatar: {
    "width": "100px",
    "height": "100px"
  },
  root: {
    "box-shadow": "10px 10px 20px #c9c9c9",
    "padding": "15px",
    "width": "100%"
  },
  postHeader: {
    "display": "flex"
  },
  postHeaderDetails: {
    "display": "flex",
    "flex-direction": "column",
    "align-items": "flex-start",
    "margin-left": "15px"
  },
  postText: {
    "margin-top": "15px",
    "font-size": "2rem"
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
    <Card className={classes.root}>
      <div className={classes.postHeader}>
        <Avatar className={classes.avatar} src={props.avatarSrc} />
        <div className={classes.postHeaderDetails}>
          <Typography variant="h4">{props.name}</Typography>
          <Typography variant="h6">{props.date}</Typography>
        </div>
      </div>
      <Typography className={classes.postText} variant="body1">{props.text}</Typography>
    </Card>
  );
}