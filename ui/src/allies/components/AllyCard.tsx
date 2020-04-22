import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

export interface AllyCardProps {
  avatarSrc: string;
  name: string;
}

const useStyles = makeStyles(() => ({
  avatar: {
    "width": "100px",
    "height": "100px"
  },
  allyCard: {
    "box-shadow": "10px 10px 20px #c9c9c9",
    "padding": "15px",
  },
  allyHeader: {
    "display": "flex",
    "align-items": "center"
  },
  link: {
    "textDecoration": "none"
  }
}));

export const AllyCard = (props: AllyCardProps) => {
  const classes = useStyles();
  
  return (
    <Link to="user/elrond" className={classes.link}>
      <Card className={classes.allyCard}>
        <div className={classes.allyHeader}>
          <Avatar className={classes.avatar} src={props.avatarSrc} />
          <Typography variant="h3">{props.name}</Typography>
        </div>
      </Card>
    </Link>
  );
}