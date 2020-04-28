import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { AppState } from "../../store";
import { User } from "../../user/model";
import { UserCard } from "../../user/components/UserCard";

const useStyles = makeStyles(() => ({
  root: {
    "display": "flex",
    "flex-direction": "column",
    "flex-grow": "1"
  }
}));

export interface AlliesProps { 
  allyIds?: string[];
}

const ConnectedAllies = (props: AlliesProps) => {
  const classes = useStyles();
  const [allies, setAllies] = useState<User[]>([]);

  useEffect(() => {
    const fetchAllies = async () => {
      let fetchedAllies = [] as User[];
      let loopRes = new Promise((resolve, reject) => {
        if (!!props.allyIds) {
          console.log("allyIds: ", props.allyIds)
          props.allyIds.forEach(async (id, index, array) => {
            try {
              const res = await axios.get(`http://localhost:3001/user/${id}`)
              fetchedAllies.push(res.data as User);
            } catch (err) {
              console.error("error fetching ally: ", err);
            }
            if (index === array.length-1) 
              resolve();
          });
        }
      });

      loopRes.then(() => {
        setAllies(fetchedAllies);
      });
    }
    fetchAllies();
  }, [props.allyIds]);

  return (
    <div className={classes.root}>
      <Typography variant="h1">Allies</Typography>
      <Grid container spacing={3}>
        {allies.map((ally: User) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={ally.name}>
              <UserCard 
                avatarSrc={ally.image}
                name={ally.name}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  allyIds: state.user.user?.allies
})

export const Allies = connect(mapStateToProps)(ConnectedAllies);