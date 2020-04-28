const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("posts", postSchema);