import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { AllyCard } from "./AllyCard";

const useStyles = makeStyles(() => ({
  root: {
    "display": "flex",
    "flex-direction": "column",
    "flex-grow": "1"
  }
}));

export const Allies = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">Allies</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <AllyCard 
            avatarSrc="https://middle-earth.xenite.org/files/2016/01/elrond-armored-for-battle.jpg"
            name="Elrond"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AllyCard
            avatarSrc="https://i.pinimg.com/originals/52/94/95/52949501e3174aaf0fe013299ea1eb61.jpg"
            name="Galadriel"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AllyCard
            avatarSrc="https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/26433/1497025863-7706-9080/Gand_large.jpg"
            name="Olórin"
          />
        </Grid>
      </Grid>
    </div>
  )
}