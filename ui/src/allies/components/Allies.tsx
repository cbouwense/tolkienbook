import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { State } from "../../store";
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
  allyIds: string[];
}

const ConnectedAllies = (props: AlliesProps) => {
  const classes = useStyles();
  const [allies, setAllies] = useState<User[]>([]);

  useEffect(() => {
    const fetchAllies = async () => {
      let fetchedAllies = [] as User[];
      let loopRes = new Promise((resolve, reject) => {
        props.allyIds.forEach(async (id, index, array) => {
          try {
            const res = await axios.get(`http://localhost:3001/user/${id}`)
            console.log("pushing")
            fetchedAllies.push(res.data as User);
            console.log("finished pushing");
          } catch (err) {
            console.error("error fetching ally: ", err);
          }
          if (index === array.length-1) 
            resolve();
        });
      });

      loopRes.then(() => {
        console.log("fetchedAllies: ", fetchedAllies);
        console.log("fetchedAllies length: ", fetchedAllies.length);
        setAllies(fetchedAllies);
      });
    }
    fetchAllies();
  }, [props.allyIds]);

  console.log("allies: ", allies)

  return (
    <div className={classes.root}>
      <Typography variant="h1">Allies</Typography>
      <Grid container spacing={3}>
        {allies.map((ally: User) => {
          console.log("ally: ", ally)
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

const mapStateToProps = (state: State) => ({
  allyIds: state.user.allies
})

export const Allies = connect(mapStateToProps)(ConnectedAllies);