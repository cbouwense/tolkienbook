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
export const Posts = (props: PostsProps) => {
  const classes = useStyles();

  return (
    <div className={classes.posts}>
      <Grid direction="column" container spacing={2}>
        {props.posts.map(post => (
            <Grid key={post.createdAt.toString()} item xs={12}>
              <Post
                avatarSrc={post.image}
                date={post.createdAt.toString()}
                name={post.name}
                text={post.text}
              />
            </Grid>
        ))} 
      </Grid>
    </div>
  )
}