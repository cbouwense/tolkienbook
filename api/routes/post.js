const express = require("express");
const mongoose = require("mongoose");

const Post = require("../models/post");
const User = require("../models/user");

const router = express.Router();
const ObjectId = mongoose.Types.ObjectId;

const getPostById = async (req, res, next) => {
  let post;
  try {
    post = await Post.findById(req.params.id);
    if (post == null) {
      return res.status(404).json({ message: "Cannot find post"});
    } 
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.post = post;

  next();
}

const getUserById = async (id) => {
  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(`Error fetching user ${id}: `, err);
  }
  return user;
}

router.get("/:id", getPostById, async (req, res) => {
  const user = await getUserById(res.post.userId);
  res.json({
    name: user.name,
    image: user.image,
    createdAt: res.post.createdAt,
    text: res.post.text
  });
});

router.get("/user/:id", async (req, res) => {
  let posts;
  try {
    posts = await Post.find({ userId: new ObjectId(req.params.id) })
    if (posts == null) {
      return res.status(404).json({ 
        message: `Cannot find posts by user ${req.params.id}`
      });
    }
    const augmentedPosts = await Promise.all(posts.map(async (post) => {
      const user = await getUserById(post.userId);
      return {
        name: user.name,
        image: user.image,
        createdAt: post.createdAt,
        text: post.text
      }
    }));
    res.status(200).json(augmentedPosts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    userId: new ObjectId(req.body.userId),
    createdAt: new Date().toISOString(),
    text: req.body.text,
    likes: 0
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/like/:id", async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $inc: { likes: 1 } },
      { 
        new: true,
        useFindAndModify: false 
      }
    );
    if (post == null) {
      res.status(404).json({ message: `Post ${req.params.id} could not be found` });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/dislike/:id", async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $inc: { likes: -1 } },
      { 
        new: true,
        useFindAndModify: false 
      }
    );
    if (post == null) {
      res.status(404).json({ message: `Post ${req.params.id} could not be found` });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/:id", getPostById, async (req, res) => {
  if (req.body.text != null) {
    res.post.text = req.body.text;
  }
  try {
    const updatedPost = await res.post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getPostById, async (req, res) => {
  try {
    await res.post.remove();
    res.json({ message: "Successfully removed post"});
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;