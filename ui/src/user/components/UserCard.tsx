import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  avatar: {
    "width": "100px",
    "height": "100px"
  },
  card: {
    "box-shadow": "10px 10px 20px #c9c9c9",
    "padding": "15px",
  },
  header: {
    "display": "flex",
    "align-items": "center"
  },
  link: {
    "textDecoration": "none"
  },
  name: {
    "margin-left": "15px"
  }
}));

export interface UserCardProps {
  avatarSrc: string;
  name: string;
  username: string;
}

export const UserCard = (props: UserCardProps) => {
  const classes = useStyles();
  
  return (
    <Link to={`user/${props.username}`} className={classes.link}>
      <Card className={classes.card}>
        <div className={classes.header}>
          <Avatar className={classes.avatar} src={props.avatarSrc} />
          <Typography className={classes.name} variant="h3">{props.name}</Typography>
        </div>
      </Card>
    </Link>
  );
}