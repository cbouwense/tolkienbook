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
        return fetchedUser.data;
      } catch (err) {
        console.error("Error fetching user: ", err);
      }
    }
    const fetchPosts = async (fetchedUser: User) => {
      try {
        console.log("sending post GET")
        const fetchedPosts = await axios.get(`http://localhost:3001/post/user/${fetchedUser._id}`);
        console.log("fetchedPosts: ", fetchedPosts)
        setPosts(fetchedPosts.data);
      } catch (err) {
        console.error(`Error fetching posts for user ${fetchedUser._id}: `, err);
      }
    }
    (async () => {
      if (user === undefined || props.url !== url) {
        console.log("fetching user")
        fetchUser().then(async (fetchedUser) => {
          console.log("fetching posts")
          fetchPosts(fetchedUser);          
        });
      }
    })();
    setUrl(props.url);
  }, [user, url, props.url]);

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