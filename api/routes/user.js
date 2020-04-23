const express = require("express");
const User = require("../models/user");

const router = express.Router();

const getUser = async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user"});
    } 
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;

  next();
}

router.get("/:id", getUser, async (req, res) => {
  res.send(res.user);
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    race: req.body.race,
    birthyear: req.body.birthyear,
    image: req.body.image
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.race != null) {
    res.user.name = req.body.race;
  }
  if (req.body.birthyear != null) {
    res.user.name = req.body.birthyear;
  }
  if (req.body.image != null) {
    res.user.name = req.body.image;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Successfully removed user"});
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;