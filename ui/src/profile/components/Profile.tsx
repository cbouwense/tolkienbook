import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (props.user) {
        try {
          const posts = await axios.get(`http://localhost:3001/post/user/${props.user._id}`);
          setPosts(posts.data);
        } catch (err) {
          console.error(`Error fetching posts for user ${props.user._id}: `, err);
        }
      }
    }
    fetchPosts();
  }, [props.user]);

  return ( 
    props.user !== undefined ? (
      <div className={classes.root}>
        <ProfileCard 
          name={props.user.name}
          race={props.user.race}
          image={props.user.image}
          birthyear={props.user.birthyear}
        />
        <Posts posts={posts}/>
      </div>
    ) : null
  );
}

const mapStateToProps = (state: AppState) => ({
  user: state.user.user
});

export const Profile = connect(mapStateToProps)(ConnectedProfile);