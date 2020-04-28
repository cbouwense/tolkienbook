import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Post } from "./Post";
import { Post as PostType } from "../model";

const useStyles = makeStyles(() => ({
  posts: {
    "diplay": "block",
    "margin-left": "50px",
    "width": "100%",
    "padding": "0"
  }
}));

export interface PostsProps {
  posts: PostType[];
}

// TODO fix the right margin thing where it isn't obeying the padding
export const Posts = () => {
  const classes = useStyles();

  return (
    <div className={classes.posts}>
      <Grid direction="column" container spacing={2}>
        <Grid item xs={12}>
          <Post
            avatarSrc="https://66.media.tumblr.com/9c0f217919b12c3b378ba878a4e370b1/tumblr_o7sgjyR0fP1s7x9qwo2_500.jpg"
            date="2020-01-01 01:01:01"
            name="Gil Galad"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </Grid>
        <Grid item xs={12}>
          <Post
            avatarSrc="https://66.media.tumblr.com/9c0f217919b12c3b378ba878a4e370b1/tumblr_o7sgjyR0fP1s7x9qwo2_500.jpg"
            date="2020-01-01 01:01:01"
            name="Gil Galad"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </Grid>
        <Grid item xs={12}>
          <Post
            avatarSrc="https://66.media.tumblr.com/9c0f217919b12c3b378ba878a4e370b1/tumblr_o7sgjyR0fP1s7x9qwo2_500.jpg"
            date="2020-01-01 01:01:01"
            name="Gil Galad"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </Grid>
        <Grid item xs={12}>
          <Post
            avatarSrc="https://66.media.tumblr.com/9c0f217919b12c3b378ba878a4e370b1/tumblr_o7sgjyR0fP1s7x9qwo2_500.jpg"
            date="2020-01-01 01:01:01"
            name="Gil Galad"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </Grid>
      </Grid>
    </div>
  )
}