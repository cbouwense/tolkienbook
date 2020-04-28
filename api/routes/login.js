const crypto = require("crypto");
const express = require("express");

const User = require("../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
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

module.exports = router;