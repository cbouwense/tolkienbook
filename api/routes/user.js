const crypto = require("crypto");
const express = require("express");

const User = require("../models/user");

const router = express.Router();

const getUserById = async (req, res, next) => {
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

router.get("/:id", getUserById, async (req, res) => {
  res.send(res.user);
});

router.post("/", async (req, res) => {
  const user = new User({
    username: req.body.username,
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

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const hashedPassword = crypto.createHash("sha256").update(req.body.password).digest("hex");

    if (hashedPassword === user.password) {
      res.status(200).json(user)
    } else {
      res.status(404).json({
        message: "Username or password incorrect"
      })
    }
  } catch (err) {
    res.status(404).json({ 
      message: err.message 
    });
  }
});

router.post("/:id/add_ally", getUserById, async (req, res) => {
  try {
    res.user.allies.push(req.body.ally) 
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/:id/add_enemy", getUserById, async (req, res) => {
  try {
    res.user.enemies.push(req.body.enemy) 
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", getUserById, async (req, res) => {
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

router.delete("/:id", getUserById, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Successfully removed user"});
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;