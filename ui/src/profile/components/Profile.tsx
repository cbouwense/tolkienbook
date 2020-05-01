import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Post } from ".././model";
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
  url: string;
} 

// TODO: Fix the right margin for the posts
export const Profile = (props: ProfileProps) => {
  const classes = useStyles();
  const [posts, setPosts] = useState<Post[] | undefined>(undefined);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const urlTokens = props.url.split("/");
        const username = urlTokens[urlTokens.length-1];
        const fetchedUser = await axios.get(`http://localhost:3001/user?username=${username}`);
        setUser(fetchedUser.data);
      } catch (err) {
        console.error("Error fetching user: ", err);
      }
    }
    const fetchPosts = async () => {
      if (user !== undefined) {
        try {
          const fetchedPosts = await axios.get(`http://localhost:3001/post/user/${user._id}`);
          console.log("fetchedPosts: ", fetchedPosts)
          setPosts(fetchedPosts.data);
        } catch (err) {
          console.error(`Error fetching posts for user ${user._id}: `, err);
        }
      }
    }
    (async () => {
      if (user === undefined || props.url !== url) {
        console.log("fetching user")
        await fetchUser();
      }
      if (posts === undefined || props.url !== url) {
        console.log("fetching posts")
        await fetchPosts();
      }
    })();
    setUrl(props.url);
  }, [user, props.url]);

  return ( 
    <div className={classes.root}>
      {!!user ? (  
        <ProfileCard 
          name={user.name}
          race={user.race}
          image={user.image}
          birthyear={user.birthyear}
        />
      ) : null}
      {!!posts ? (
        <Posts posts={posts}/>
      ) : null}
    </div>
  );
}