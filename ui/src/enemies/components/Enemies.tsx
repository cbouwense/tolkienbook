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

export interface EnemiesProps {
  enemyIds?: string[];
}

const ConnectedEnemies = (props: EnemiesProps) => {
  const classes = useStyles();
  const [enemies, setEnemies] = useState<User[]>([]);

  useEffect(() => {
    const fetchEnemies = async () => {
      let fetchedEnemies = [] as User[];
      let loopRes = new Promise((resolve, reject) => {
        if (!!props.enemyIds) {
          props.enemyIds.forEach(async (id, index, array) => {
            try {
              const res = await axios.get(`http://localhost:3001/user/${id}`)
              fetchedEnemies.push(res.data as User);
            } catch (err) {
              console.error("error fetching enemy: ", err);
            }
            if (index === array.length-1) 
              resolve();
          });
        }
      });

      loopRes.then(() => {
        setEnemies(fetchedEnemies);
      });
    }
    fetchEnemies();
  }, [props.enemyIds]);

  return (
    <div className={classes.root}>
      <Typography variant="h1">Enemies</Typography>
      <Grid container spacing={3}>
        {enemies.map((enemy: User) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={enemy.name}>
              <UserCard 
                avatarSrc={enemy.image}
                name={enemy.name}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  enemyIds: state.user.user?.enemies
})

export const Enemies = connect(mapStateToProps)(ConnectedEnemies);