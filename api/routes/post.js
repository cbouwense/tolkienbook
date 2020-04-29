const express = require("express");
const mongoose = require("mongoose");

const Post = require("../models/post");

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

router.get("/:id", getPostById, async (req, res) => {
  res.send(res.post);
});

router.get("/user/:id", async (req, res) => {
  let posts;
  try {
    posts = await Post.find({ userId: new ObjectId(req.params.id) })
    console.log("posts: ", posts);
    if (posts == null) {
      return res.status(404).json({ 
        message: `Cannot find posts by user ${req.params.id}`
      });
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    userId: req.body.userId,
    createdAt: new Date().toISOString(),
    text: req.body.text
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