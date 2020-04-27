import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import { AppState } from "../../store";
import { Posts } from "./Posts";
import { ProfileCard } from "./ProfileCard";
import { User } from "../../user/model";

const useStyles = makeStyles(() => ({
  root: {
    "display": "flex",
    "align-items": "flex-start"
  }
}));

export interface ProfileProps {
  user?: User;
}

// TODO: Fix the right margin for the posts
export const ConnectedProfile = (props: ProfileProps) => {
  const classes = useStyles();

  return ( 
    props.user !== undefined ? (
      <div className={classes.root}>
        <ProfileCard 
          name={props.user.name}
          race={props.user.race}
          birthyear={props.user.birthyear}
        />
        <Posts />
      </div>
    ) : null
  );
}

const mapStateToProps = (state: AppState) => ({
  user: state.user.user
});

export const Profile = connect(mapStateToProps)(ConnectedProfile);